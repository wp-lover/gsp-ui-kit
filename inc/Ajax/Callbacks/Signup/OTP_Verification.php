<?php

namespace GSP_UI_Kit\Ajax\Callbacks\Signup;

use \GSP_UI_Kit\Core\Send_SMS;

if (!defined('ABSPATH')) exit;

class OTP_Verification
{

    private static $prevent_duplication = false;

    public static function handle()
    {

        if (!isset($_POST['otp_code']) || empty($_POST['otp_code'])) {
            wp_send_json_error(['error' => 'OTP Code is required']);
            wp_die();
        }

        if (!isset($_POST['phone_number']) || empty($_POST['phone_number'])) {
            wp_send_json_error(['error' => 'phone_number is required']);
            wp_die();
        }


        if (self::$prevent_duplication) {
            return;
        }

        self::$prevent_duplication = true;

        $otpcode = sanitize_text_field($_POST['otp_code']);
        $phone_number = sanitize_text_field($_POST['phone_number']);

        $password = self::generatePassword(6);
        
        $userName = self::generate_unique_username();

        if (is_numeric($otpcode) && is_numeric($phone_number)) {

            global $wpdb;

            $table_name = $wpdb->prefix . \GSP_UI_Kit\Core\Table_Creation::get_instance()->get_table_name_signup_with_phone_otp();

            $data = $wpdb->get_row("SELECT * FROM $table_name WHERE phone_number = '{$phone_number}' AND one_time_otp = '{$otpcode}'");

            // verify the OTP code
            if ($data) {

                $user_id = wp_insert_user([
                    'user_login' => $userName,
                    'user_pass'  =>  $password,
                    'display_name' => $data->full_name,
                    'role' => 'subscriber',
                ] , false );

                if ( is_wp_error( $user_id ) ) {
                    return wp_send_json_error(['error' => 'Something went wrong , please try again or countact us ']);
                }

                if ($user_id) {

                    $wpdb->update( $table_name , [ 'user_name' => $userName ] , [ 'phone_number' => $phone_number , 'one_time_otp' => $otpcode ] , [ '%s'] , [ '%s', '%s'] );

                    $welcome_message = "Thank you for registering with us.\nYour registration number is \n" . $userName . "\nYour password is \n" . $password;
                    Send_SMS::send_sms($phone_number, $welcome_message);

                    return wp_send_json_success([
                        'message' => "Thank you for registering with us.\nYour registration number is " . $userName . ".\nAnd your password is " . $password,
                        'password' => $password
                 ]);
                    
                } else {
                    return wp_send_json_error(['error' => 'Unable to create account , please try again or contact us']);
                }

                return wp_send_json_success(['message' => 'OTP has been verified.']);
            } else {

                return wp_send_json_error(['error' => 'Invalid OTP, please try again with correct OTP number']);
            }
        }

        return wp_send_json_error(['errors' => 'Invalid user input']);
    }

    static function generatePassword($length = 6 ) {
        return substr(str_shuffle('abcdefghijklmnopqrstuvwxyz0123456789'), 0, $length);
    }


    static function generate_unique_username( $length = 6 ) {
        do {
            $userName = str_pad(rand(0, 99999999), $length, '0', STR_PAD_LEFT);
        } while (username_exists($userName));
    
        return $userName;
    }
}
