<?php 

namespace GSP_UI_Kit\Helpers;

use GSP_UI_Kit\Post_Types\Register_UI_Post;
use GSP_UI_Kit\Shortcodes\Retrive_UI_Post;
use GSP_UI_Kit\Shortcodes\Youtube_Player;


class Init_Hook {

    public function run() {

        // create custom post type to extend UI design
       ( new Register_UI_Post() )->fire_on_init_hook();

        ( new Retrive_UI_Post() )->fire_on_init_hook();

        ( new Youtube_Player() )->fire_on_init_hook();
    }
}