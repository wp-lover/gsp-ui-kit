<?php


namespace GSP_UI_Kit\Elementor\Widgets\Firebase_OTP_Login;

use \Elementor\Controls_Manager;

class Register_Controls
{

    public static function controls(Widget $instance)
    {

        self::content_section($instance);
        // self::styles($instance);
    }

    public static function content_section(Widget $instance)
    {

        $instance->start_controls_section(
            'gsp_ui_kit_firebase_otp_login_content_section',
            [
                'label' => __('Firebase OTP Login Settings', 'gsp-ui-kit'),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );
        $instance->add_control(
            'gsp_ui_kit_firebase_otp_login_from_title_text',
            [
                'label'   => __('Title', 'gsp-ui-kit'),
                'type'    => Controls_Manager::TEXT,
                'default' => __('Register Your Account', 'gsp-ui-kit'),
            ]
        );
        $instance->add_control(
            'gsp_ui_kit_firebase_otp_login_message_text',
            [
                'label'   => __('Before Input Text', 'gsp-ui-kit'),
                'type'    => Controls_Manager::TEXT,
                'default' => __('আপনার ফোন নাম্বারটি লিখুন', 'gsp-ui-kit'),
            ]
        );
        $instance->add_control(
            'gsp_ui_kit_firebase_otp_login_number_placeholder',
            [
                'label'   => __('Phone Number Placeholder', 'gsp-ui-kit'),
                'type'    => Controls_Manager::TEXT,
                'default' => __('Type your phone number (017...)', 'gsp-ui-kit'),
            ]
        );
        $instance->add_control(
            'gsp_ui_kit_firebase_otp_login_otp_code_placeholder_text',
            [
                'label'   => __('OTP Code Placeholder', 'gsp-ui-kit'),
                'type'    => Controls_Manager::TEXT,
                'default' => __('Enter OTP', 'gsp-ui-kit'),
            ]
        );
        $instance->add_control(
            'gsp_ui_kit_firebase_otp_login_send_otp_text',
            [
                'label'   => __('Send OTP Text', 'gsp-ui-kit'),
                'type'    => Controls_Manager::TEXT,
                'default' => __('Send OTP', 'gsp-ui-kit'),
            ]
        );
        $instance->add_control(
            'gsp_ui_kit_firebase_otp_login_verify_otp_text',
            [
                'label'   => __('Verify OTP Text', 'gsp-ui-kit'),
                'type'    => Controls_Manager::TEXT,
                'default' => __('Verify OTP', 'gsp-ui-kit'),
            ]
        );

        $instance->add_control(
            'gsp_ui_kit_firebase_otp_login_redirected_url',
            [
                'label' => esc_html__('Redirected URL', 'gsp-ui-kit'),
                'type' => Controls_Manager::TEXT,
                'default' => __('Verify OTP', 'gsp-ui-kit'),
            ]
        );

        $instance->end_controls_section();
    }

    public static function styles(Widget $instance) {}
}
