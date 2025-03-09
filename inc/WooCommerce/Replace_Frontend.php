<?php

namespace GSP_UI_Kit\WooCommerce;

class Replace_Frontend
{

    function __construct()
    {

        $this->woocommerce_default_login_form();
        $this->replace_login_form();
    }

    function woocommerce_default_login_form()
    {
        remove_action('woocommerce_before_customer_login_form', 'woocommerce_output_all_notices', 10);
        remove_action('woocommerce_login_form_start', 'woocommerce_output_all_notices', 10);
        remove_action('woocommerce_login_form', 'woocommerce_login_form', 10);
    }
    function replace_login_form()
    {

        add_action('template_redirect', function () {
            if (is_account_page() && !is_user_logged_in()) {
                wp_redirect(site_url('/login/')); // Change to your login page URL
                exit;
            }
        });
    }
}
