<?php

namespace GSP_UI_Kit\Elementor;

if (!defined('ABSPATH')) exit;

class Register_Assets {

    public static function css() {

        // 
        wp_register_style(
            'gsp-ui-kit-post-card',
            GSP_UI_KIT_ROOT_URL . '/inc/Elementor/assets/tutor-lms-courses/style.css',
            [],
            microtime(),
            'all'
        );

    }

    public static function js() {

        wp_register_script(
            'gsp-ui-kit-firebase-otp-login',
            GSP_UI_KIT_ROOT_URL . '/inc/Elementor/assets/firebase-otp-login/script.js',
            [],
            microtime(),
            false
        );
    }
}