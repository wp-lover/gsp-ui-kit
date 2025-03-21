<?php

namespace GSP_UI_Kit\Core;

if (!defined('ABSPATH')) exit;

class Phone_OTP {

    public static function set_otp_on_db( $phone_number , $otp ) {
        global $wpdb;

        $table_name = $wpdb->prefix . \GSP_UI_Kit\Core\Table_Creation::get_instance()->get_table_name_signup_with_phone_otp();

        $wpdb->update( $table_name , [ 'one_time_otp' => $otp ] , [ 'phone_number' => $phone_number ] );

    }

    public static function clear_otp_on_db( $phone_number , $previous_otp ) {
        global $wpdb;

        $table_name = $wpdb->prefix . \GSP_UI_Kit\Core\Table_Creation::get_instance()->get_table_name_signup_with_phone_otp();

        $otp = rand( 1000 , 9999 );

        $wpdb->update( $table_name , [ 'one_time_otp' => $otp ] , [ 'phone_number' => $phone_number , 'one_time_otp' => $previous_otp ] );

    }
}