<?php

namespace GSP_UI_Kit\Ajax\Callbacks\Signup;

class OTP_Verification {

    public static function handle() {

        if (!isset($_POST['otp_code']) || empty($_POST['otp_code'])) {
            wp_send_json_error(['error' => 'OTP Code is required']);
            wp_die();
        }

        if (!isset($_POST['phone_number']) || empty($_POST['phone_number'])) {
            wp_send_json_error(['error' => 'phone_number is required']);
            wp_die();
        }

        $otpcode = sanitize_text_field($_POST['otp_code']);
        $phone_number = sanitize_text_field($_POST['phone_number']);

        if ( is_numeric( $otpcode ) && is_numeric( $phone_number )) {
            
            global $wpdb; 

            $table_name = $wpdb->prefix . \GSP_UI_Kit\Core\Table_Creation::get_instance()->get_table_name_signup_with_phone_otp();

            $data = $wpdb->get_row( "SELECT * FROM $table_name WHERE phone_number = '{$phone_number}' AND one_time_otp = '{$otpcode}'" );


            if ($data) {
                return wp_send_json_success( $data );
            }else{

                return wp_send_json_error( 'Invalid OTP, please try again with correct OTP number' );
            }
        }

        return wp_send_json_error('Invalid user input');
    }
}