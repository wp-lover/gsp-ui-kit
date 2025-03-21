<?php

namespace GSP_UI_Kit\Ajax\Callbacks\Signup;

use GSP_UI_Kit\Core\Send_SMS; // Ensure this class exists and is correctly defined in the specified namespace


if (!defined('ABSPATH')) exit;

class Request
{
    private static $prevent_duplication = false;

    public static function handle()
    {
         // Verify nonce
    if (isset($_POST['security']) && !wp_verify_nonce($_POST['security'], 'gsp_ui_kit_nonce')) {
        wp_send_json_error(['error' => 'Nonce verification failed']);
    }

        if (!isset($_POST['phone_number']) || empty($_POST['phone_number'])) {
            wp_send_json_error(['error' => 'phone number is required']);
            wp_die();
        }

        if (!isset($_POST['name']) || empty($_POST['name'])) {
            wp_send_json_error(['error' => 'Name is required']);
            wp_die();
        }

        $phone_number = sanitize_text_field($_POST['phone_number']);
        $name = sanitize_text_field($_POST['name']);

        if (self::$prevent_duplication) {
            return;
        }

        self::$prevent_duplication = true;

        if ( is_numeric($phone_number) ) {
            global $wpdb;
            $table_name = $wpdb->prefix . \GSP_UI_Kit\Core\Table_Creation::get_instance()->get_table_name_signup_with_phone_otp();

            $code = rand(1000, 9999);

            $data = array(
                'phone_number' => $phone_number,
                'full_name' => $name,
                'one_time_otp' => $code
            );

            $is_number_exists = $wpdb->get_results( "SELECT * FROM $table_name WHERE phone_number = '{$phone_number}' " );


            // prevent to send duplicatlve OTP
            if (count( $is_number_exists ) > 4) {
                return wp_send_json_error([ 'error' => 'You already have ' . count( $is_number_exists ) . ' accounts under ' . $phone_number . ' number. please contact with us.' ]);
                wp_die();
            }

        
            try {

                $otp_message = ' Proxima Edu Tech OTP is ' . $code;

                // make API request for send SMS to user's phone number
                $response = Send_SMS::send_sms($phone_number, $otp_message);

                if (is_wp_error($response)) {

                    return wp_send_json_error(['error' => 'Unable to send otp, please try again later. thank you.']);
                } else {

                    // Get response code
                    $status_code = wp_remote_retrieve_response_code($response);

                    // Get response body
                    $body = json_decode( wp_remote_retrieve_body( $response ) );

                    // if SMS submitted
                    if ($body->response_code == 202 || $body->response_code == 200) {

                       if ($wpdb->insert($table_name, $data)) {
                       return wp_send_json_success([
                        'message' => 'OTP has been sent to ' . $phone_number
                    ]);
                       }else{
                        return wp_send_json_error(['error' => 'data not submitted , please try again']);
                       }
                        
                    }

                    if ($status_code == 1001) {
                       return wp_send_json_error(['error' => 'Invalid phone number']);
                    }

                }

                return wp_send_json_success(['message' => 'OTP has been sent to ' . $phone_number  ]);

            } catch (\Throwable $th) {
                wp_send_json_error(['error' => 'Exception caught: ' . $th->getMessage()]);
            }
        } else {
           return wp_send_json_error(['error' => 'User input invalid']);
        }
         

        wp_die();
    }

 
}
