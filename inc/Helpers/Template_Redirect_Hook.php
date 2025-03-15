<?php


namespace GSP_UI_Kit\Helpers;

defined( 'ABSPATH' ) || exit;


class Template_Redirect_Hook {

    public function run() {

       $this->identify_removal_scripts();

        if (untrailingslashit(home_url('/login')) === untrailingslashit(get_permalink())) {
            if ( is_user_logged_in() ) {

               wp_redirect( home_url() ); // redirect to home

               exit;
            }
        }
        
    }

    private function identify_removal_scripts() {
        $remove_sripts = \GSP_UI_Kit\Core\Register_Scripts::get_instance();

        // home page
        if (is_home()) {
            // tutor-icon-css
            // tutor-css
            // tutor-frontend-css

            // tutor-script-js
            // tutor-social-share-js
            // tutor-frontend-js

            // woocommerce
            // jquery-blockui-js
            // wc-add-to-cart-js
            // js-cookie-js
            // woocommerce-js
            // sourcebuster-js-js
            // wc-cart-fragments-js
            // jquery-blockui-js

            // wc-blocks-style-css
            // wp_unenque
        }

    }
}