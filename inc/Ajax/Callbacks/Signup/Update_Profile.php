<?php

namespace GSP_UI_Kit\Ajax\Callbacks\Signup;

if (!defined('ABSPATH')) exit;

class Update_Profile
{

    public static function handle()
    {

        if (!isset($_POST['otp_code']) || empty($_POST['otp_code'])) {
            wp_send_json_error(['error' => 'OTP Code is required']);
        }

        if (!isset($_POST['phone_number']) || empty($_POST['phone_number'])) {
            wp_send_json_error(['error' => 'Phone number is required']);
        }

        if (!isset($_POST['class']) || empty($_POST['class'])) {
            wp_send_json_error(['error' => 'Class is required']);
        }

        if (!isset($_POST['gender']) || empty($_POST['gender'])) {
            wp_send_json_error(['error' => 'Gender is required']);
        }

        if (!isset($_POST['religion']) || empty($_POST['religion'])) {
            wp_send_json_error(['error' => 'Religion is required']);
        }

        if (!isset($_POST['home_district']) || empty($_POST['home_district'])) {
            wp_send_json_error(['error' => 'Home District is required']);
        }

        if (!isset($_POST['date_of_birth']) || empty($_POST['date_of_birth'])) {
            wp_send_json_error(['error' => 'Date of Birth is required']);
        }

        if (!isset($_POST['password']) || empty($_POST['password'])) {
            wp_send_json_error(['error' => 'Password is required']);
        }

        $otp = sanitize_text_field($_POST['otp_code']);
        $phone_number = sanitize_text_field($_POST['phone_number']);
        $class = sanitize_text_field($_POST['class']);
        $gender = sanitize_text_field($_POST['gender']);
        $religion = sanitize_text_field($_POST['religion']);
        $home_district = sanitize_text_field($_POST['home_district']);
        $date_of_birth = sanitize_text_field($_POST['date_of_birth']);
        
        $password = $_POST['password'];

       

        global $wpdb;
        $table_name = $wpdb->prefix . \GSP_UI_Kit\Core\Table_Creation::get_instance()->get_table_name_signup_with_phone_otp();

        // Secure Query
        $sql = $wpdb->prepare(
            "SELECT * FROM $table_name WHERE phone_number = %s AND one_time_otp = %s",
            $phone_number,
            $otp
        );
        $is_otp_matched = $wpdb->get_row($sql);

        if (!$is_otp_matched) {
            wp_send_json_error(['error' => 'Unauthorized access']);
        }

        // Get user
        $user = get_user_by('login', $is_otp_matched->user_name);
        if (!$user) {
            return wp_send_json_error(['error' => 'User not found for']);
        }

        $user_signon= null;

        // Authenticate user after password update
        $credentials = [
            'user_login'    => $is_otp_matched->user_name,
            'user_password' => $password,
            'remember'      => true,  // Set to false if you don't want "Remember me" functionality
        ];

        $user_signon = wp_signon($credentials, false);
        

        if (is_wp_error($user_signon)) {
            return wp_send_json_error(['error' => 'Login failed']);
        }

        // Ensure authentication
        wp_clear_auth_cookie();
        wp_set_current_user($user->ID);
        wp_set_auth_cookie($user->ID);

        // Update user details
        // array('%s', '%s', '%s', '%s', '%s'),
        // array('%s')
        $wpdb->update(
            $table_name,
            array(
                'class' => $class,
                'gender' => $gender,
                'religion' => $religion, // Fixed typo
                'home_district' => $home_district,
                'date_of_birth' => $date_of_birth
            ),
            array('phone_number' => $phone_number , 'one_time_otp' => $otp),
            [ '%s', '%s', '%s', '%s', '%s', ],
            [ '%s', '%s', ]

        );

        // Clear OTP
        \GSP_UI_Kit\Core\Phone_OTP::clear_otp_on_db($phone_number , $otp);

        // Success response
       // Return success response
       return wp_send_json_success(['message' => 'Your profile has been updated and you are now logged in.']);

    }
}
