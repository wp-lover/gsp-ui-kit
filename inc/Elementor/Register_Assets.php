<?php

namespace GSP_UI_Kit\Elementor;


class Register_Assets {

    public static function css() {

        // 
        wp_register_style(
            'gsp-ui-kit-post-card',
            gsp_ui_kit_root_url . '/inc/Elementor/assets/tutor-lms-courses/style.css',
            [],
            microtime(),
            'all'
        );

    }

    public static function js() {

        
    }
}