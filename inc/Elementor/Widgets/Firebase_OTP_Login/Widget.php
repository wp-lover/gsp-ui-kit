<?php

namespace GSP_UI_Kit\Elementor\Widgets\Firebase_OTP_Login;

use \Elementor\Widget_Base;

class Widget extends Widget_Base {

    public function get_name() : string {
        return 'gsp-ui-kit-firebase-otp-login';
    }

    public function get_title() : string {
        return esc_html__( 'Firebase OTP Login' , 'gsp-ui-kit' );
    }

    public function get_icon() {
        return 'eicon-bullet-list';
    }

    public function get_script_depends() {
        return [
            'gsp-ui-kit-firebase-otp-login'
        ];
    }

    public function get_categories(): array
    {
        return ['general'];
    }
    
    public function get_keywords(): array
    {
        return ['login', 'gsp', 'otp login', 'firebase login'];
    }

    protected function is_dynamic_content(): bool
    {
        return false;
    }

    protected function register_controls()
    {
        Register_Controls::controls($this);
    }

    protected function render(): void
    {
        $settings = $this->get_settings_for_display();

        // Include the template using the constant
        include_once GSP_UI_KIT_ROOT_PATH . 'templates/elementor/firebase-otp-login.php';
    }

}