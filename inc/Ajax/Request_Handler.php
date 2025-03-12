<?php

namespace GSP_UI_Kit\Ajax;

if (!defined('ABSPATH')) exit;

class Request_Handler {

    public function __construct()
    {
        $this->non_logged_in();
    }

    public function non_logged_in() {

        // login user
        add_action( 'wp_ajax_nopriv_gsp_ui_kit_login' , [ '\GSP_UI_Kit\Ajax\Callbacks\Login\Request' , 'handle' ] );

        // signup user
        add_action( 'wp_ajax_nopriv_gsp_ui_kit_signup_with_otp' , [ '\GSP_UI_Kit\Ajax\Callbacks\Signup\Request' , 'handle' ] );

        // signup otp verification
        add_action( 'wp_ajax_nopriv_gsp_ui_kit_signup_otp_verification' , [ '\GSP_UI_Kit\Ajax\Callbacks\Signup\OTP_Verification' , 'handle' ] );

        // forget password request
        add_action( 'wp_ajax_nopriv_gsp_ui_kit_forget_password' , [ '\GSP_UI_Kit\Ajax\Callbacks\Forget_Password\Request' , 'handle' ] );

        // update password after verifing otp
        add_action( 'wp_ajax_nopriv_gsp_ui_kit_update_password_by_phone_otp' , [ '\GSP_UI_Kit\Ajax\Callbacks\Forget_Password\Update_Password' , 'handle' ] );

         // update profile
         add_action( 'wp_ajax_nopriv_gsp_ui_kit_update_profile_by_phone_otp' , [ '\GSP_UI_Kit\Ajax\Callbacks\Signup\Update_Profile' , 'handle' ] );
        
        
    }
}