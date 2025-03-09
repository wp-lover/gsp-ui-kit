<?php

namespace GSP_UI_Kit\Shortcodes;

class Login_With_OTP
{

    public function fire_on_init_hook()
    {

        // add shortcode for UI_Post retriving which is a custom post type
        add_shortcode('gsp_ui_login_with_otp', [$this, 'render_ui']);
    }


    public function render_ui($attr)
    {
        $attr = shortcode_atts([
            'redirect_url' => get_bloginfo( 'url' ) // Default video ID
        ], $attr, 'custom_youtube_player');

        ob_start();
        
        require_once GSP_UI_KIT_ROOT_PATH . '/templates/shortcode/login-with-otp.php';

        $content = ob_get_clean();

        return $content;
    }
}
