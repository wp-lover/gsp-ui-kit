<?php

namespace GSP_UI_Kit\Ajax;


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
        
        
    }
}