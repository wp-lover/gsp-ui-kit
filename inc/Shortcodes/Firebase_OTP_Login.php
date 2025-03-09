<?php

namespace GSP_UI_Kit\Shortcodes;

class Firebase_OTP_Login
{

    public function fire_on_init_hook()
    {

        // add shortcode for UI_Post retriving which is a custom post type
        add_shortcode('gsp_ui_firebase_opt_login', [$this, 'render_ui']);
    }


    public function render_ui()
    {

    }
}
