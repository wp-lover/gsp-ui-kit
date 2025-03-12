<?php

namespace GSP_UI_Kit\Ajax\Callbacks\Forget_Password;


if (!defined('ABSPATH')) exit;

class Update_Password
{

    public static function handle()
    {
        // Verify nonce (recommended)
        // check_ajax_referer( 'gsp_ui_kit_nonce', 'nonce' );

        if (!isset($_POST['phone_number']) || empty($_POST['phone_number'])) {
            wp_send_json_error(['error' => 'phone number is required']);
            wp_die();
        }

        if (!isset($_POST['otp_code']) || empty($_POST['otp_code'])) {
            wp_send_json_error(['error' => 'OTP-Code is required']);
            wp_die();
        }

        if (!isset($_POST['password']) || empty($_POST['password'])) {
            wp_send_json_error(['error' => 'Password is required']);
            wp_die();
        }


        $phone_number = sanitize_text_field($_POST['phone_number']);
        $otp_code = sanitize_text_field($_POST['otp_code']);
        $password = sanitize_text_field($_POST['password']);

        if (is_numeric($phone_number) && is_numeric($otp_code)) {

            global $wpdb;
            $table_name = $wpdb->prefix . \GSP_UI_Kit\Core\Table_Creation::get_instance()->get_table_name_signup_with_phone_otp();


            if (! username_exists($phone_number)) {
                return wp_send_json_error(['error' => 'Account not found for "' . $phone_number . '"']);
                wp_die();
            }

            $query = $wpdb->prepare(
                "SELECT * FROM $table_name WHERE phone_number = %s AND one_time_otp = %s",
                $phone_number,
                $otp_code
            );

            $is_otp_matched = $wpdb->get_row($query);

            if ($is_otp_matched) {

                $user = get_user_by('login', $phone_number);

                if ($user) {
                    wp_set_password( $password , $user->ID);

                    \GSP_UI_Kit\Core\Phone_OTP::clear_otp_on_db($phone_number);

                    return wp_send_json_success(['message' => 'Password has been updated!']);

                } else {
                    return wp_send_json_error(['error' => 'User not found']);
                }
            }else{
                return wp_send_json_error(['error' => 'OTP did not match']);
            }
        }

        return wp_send_json_error(['error' => 'Invalid user input']);


        wp_die();
    }
}
