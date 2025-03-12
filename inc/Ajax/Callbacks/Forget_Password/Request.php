<?php

namespace GSP_UI_Kit\Ajax\Callbacks\Forget_Password;

if (!defined('ABSPATH')) exit;


class Request
{

    public static function handle()
    {
        // Verify nonce (recommended)
        // check_ajax_referer( 'gsp_ui_kit_nonce', 'nonce' );

        if (!isset($_POST['phone_number']) || empty($_POST['phone_number'])) {
            wp_send_json_error(['error' => 'phone number is required']);
            wp_die();
        }


        $phone_number = sanitize_text_field($_POST['phone_number']);

        if (is_numeric($phone_number)) {

            global $wpdb;
            $table_name = $wpdb->prefix . \GSP_UI_Kit\Core\Table_Creation::get_instance()->get_table_name_signup_with_phone_otp();

            $otp_code = rand(1000, 9999);

            if (! username_exists($phone_number)) {
                return wp_send_json_error(['error' => 'Account not found for "' . $phone_number . '"']);
                wp_die();
            }

            try {

                $otp_message = ' Proxima Edu Tech OTP is ' . $otp_code;

                // make API request for send SMS to user's phone number
                $response = wp_remote_post('http://bulksmsbd.net/api/smsapi', [
                    'body' => [
                        'api_key' => 'gonNyAuvBUDQjX9c8dJN',
                        'type'   => 'text',
                        'number' => $phone_number,
                        'senderid'   => '8809617624832',
                        'message' => $otp_message
                    ]
                ]);



                if (is_wp_error($response)) {

                    return wp_send_json_error(['error' => 'Unable to send otp, please try again later. thank you.']);
                } else {

                    // Get response code
                    $status_code = wp_remote_retrieve_response_code($response);

                    // Get response body
                    $body = json_decode(wp_remote_retrieve_body($response));

                    // if SMS submitted
                    if ($body->response_code == 202 || $body->response_code == 200) {

                        $data = [
                            'one_time_otp' => $otp_code
                        ];

                        $where = [
                            'phone_number' => $phone_number
                        ];

                        $wpdb->update($table_name, $data,  $where);

                        return wp_send_json_success(['message' => 'OTP has been sent to your number', 'api_response' => $body]);
                    }

                    if ($status_code == 1001) {
                        return wp_send_json_error(['message' => 'Invalid phone number']);
                    }
                }

                return wp_send_json_success(['message' => 'OTP has been sent to ' . $phone_number]);

            } catch (\Throwable $th) {
                wp_send_json_error(['error' => 'Exception caught: ' . $th->getMessage()]);
            }
        } else {
            return wp_send_json_error(['error' => 'User input invalid']);
        }


        wp_die();
    }
}
