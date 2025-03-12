<?php

namespace GSP_UI_Kit\Ajax\Callbacks\Login;

if (!defined('ABSPATH')) exit;

class Request {

    public static function handle() {
        // Verify nonce (recommended)
        // check_ajax_referer( 'gsp_ui_kit_nonce', 'nonce' ); //Very important.

        $username = sanitize_text_field($_POST['username']);
        $password = $_POST['password']; // No sanitization needed for password
    
    
        $creds = array(
            'user_login'    => $username,
            'user_password' => $password,
            'remember'      => false, // Set to true if you want "remember me" functionality
        );
    
        $user = wp_signon($creds, false); // false prevents redirect
    
        if (is_wp_error($user)) {
           return wp_send_json_error(array('message' => $user->get_error_message()));
        } else {
            return wp_send_json_success(array('message' => 'Login successful'));
        }

        
        wp_die();
    }
}