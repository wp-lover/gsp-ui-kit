<?php

namespace GSP_UI_Kit\Ajax\Callbacks\Signup;


class Request
{

    public static function handle()
    {
        // Verify nonce (recommended)
        // check_ajax_referer( 'gsp_ui_kit_nonce', 'nonce' );
    
        if (!isset($_POST['username']) || empty($_POST['username'])) {
            wp_send_json_error(['error' => 'Username is required']);
            wp_die();
        }
    
        $username = sanitize_text_field($_POST['username']);
    
        if (is_numeric($username)) {
            global $wpdb;
            $table_name = $wpdb->prefix . \GSP_UI_Kit\Core\Table_Creation::get_instance()->get_table_name_signup_with_phone_otp();
    
            $code = rand(1000, 9999);
            $data = array(
                'phone_number' => $username,
                'one_time_otp' => $code
            );
    
            try {
                $result = $wpdb->insert($table_name, $data);
                
                if ($result === false) {
                    // Get the last MySQL error
                    $db_error = $wpdb->last_error;
                    
                    // If it's a duplicate entry error
                    if (strpos($db_error, 'Duplicate entry') !== false) {
                        wp_send_json_error(['error' => 'This phone number is already registered']);
                    } else {
                        wp_send_json_error(['error' => 'Database error: ' . $db_error]);
                    }
                    
                    wp_die();
                }
    
                wp_send_json_success(['message' => 'OTP sent', 'otp' => $code]);
            } catch (\Throwable $th) {
                wp_send_json_error(['error' => 'Exception caught: ' . $th->getMessage()]);
            }
        } else {
            wp_send_json_error(['error' => 'Invalid phone number']);
        }
    
        wp_die();
    }
    
    
}
