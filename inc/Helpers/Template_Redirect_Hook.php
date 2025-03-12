<?php


namespace GSP_UI_Kit\Helpers;

defined( 'ABSPATH' ) || exit;


class Template_Redirect_Hook {

    public function run() {


        if (untrailingslashit(home_url('/login')) === untrailingslashit(get_permalink())) {
            if ( is_user_logged_in() ) {

               wp_redirect( home_url() ); // redirect to home

               exit;
            }
        }
        
    }
}