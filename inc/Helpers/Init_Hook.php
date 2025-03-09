<?php 

namespace GSP_UI_Kit\Helpers;

use GSP_UI_Kit\Post_Types\Register_UI_Post;
use GSP_UI_Kit\Shortcodes\Retrive_UI_Post;
use GSP_UI_Kit\Shortcodes\Youtube_Player;
use GSP_UI_Kit\Shortcodes\Tutor_LMS_Free_Courses;
use GSP_UI_Kit\Shortcodes\Tutor_LMS_Paid_Courses;
use GSP_UI_Kit\Shortcodes\Firebase_OTP_Login;


class Init_Hook {

    public function run() {

        // create custom post type to extend UI design
       ( new Register_UI_Post() )->fire_on_init_hook();

        ( new Retrive_UI_Post() )->fire_on_init_hook();

        ( new Youtube_Player() )->fire_on_init_hook();

        ( new Tutor_LMS_Free_Courses() )->fire_on_init_hook();
        ( new Tutor_LMS_Paid_Courses() )->fire_on_init_hook();

        ( new Firebase_OTP_Login() )->fire_on_init_hook();
    }
}