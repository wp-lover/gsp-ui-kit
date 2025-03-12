<?php 

namespace GSP_UI_Kit\Helpers;

use GSP_UI_Kit\Post_Types\Show_Shortcode_On_UI_Post_Columns;

defined( 'ABSPATH' ) || exit;

class Admin_Init_Hook {

    public function run () {

       ( new Show_Shortcode_On_UI_Post_Columns() )->fire_on_admin_init_hook();
        
    }
}