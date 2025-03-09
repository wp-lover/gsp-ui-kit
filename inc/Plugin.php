<?php

namespace GSP_UI_Kit;

defined('ABSPATH') or exit;

class Plugin
{

    public function __construct()
    {
        $this->plugin_activation();

        Core\Register_Scripts::get_instance();

        $this->elementor_addons();

        $this->run_contained_action_hooks();

        $this->run_contained_filter_hooks();
    }

    private function run_contained_action_hooks()
    {

        $admin_init_hooked = new Helpers\Admin_Init_Hook();
        add_action('admin_init', [$admin_init_hooked, 'run']);

        $init_hooked = new Helpers\Init_Hook();
        add_action('init', [$init_hooked, 'run']);

        

         // add a demo pdf meta field on product
        add_action('add_meta_boxes', ['\GSP_UI_Kit\WooCommerce\Add_Demo_PDF_Post_Meta_Field', 'add_pdf_url_meta_box']);
        // save the demo pdf meta field value for product
        add_action('save_post',  ['\GSP_UI_Kit\WooCommerce\Add_Demo_PDF_Post_Meta_Field', 'save_pdf_url_meta_box_data']);

        // Hook into the single product page to display the PDF link before Add to Cart button
        add_action('woocommerce_after_add_to_cart_button', function () {
            ( new \GSP_UI_Kit\WooCommerce\Add_Demo_PDF_Post_Meta_Field() )->display_pdf_link_above_add_to_cart_on_single_product(); 
        } , 15 );
        
        add_action( 'woocommerce_after_shop_loop_item_title', function () {
           ( new \GSP_UI_Kit\WooCommerce\Add_Demo_PDF_Post_Meta_Field() )->display_pdf_link_above_add_to_cart_on_shop_page();
        } , 15);

                
    }


    private function run_contained_filter_hooks()
    {

        add_filter('woocommerce_add_to_cart_redirect', function ($url) {
            $product_id = absint($_GET['product-id'] ?? 0);
            $course_length = 0;

            $product = wc_get_product($product_id);

            // Check if the product is a Tutor LMS course (Optional)
            if ($product && $product_id) {

                $cart = WC()->cart;

                // Check if product is already in the cart
                foreach ($cart->get_cart() as $cart_item_key => $cart_item) {
                    if ($cart_item['product_id'] == $product_id) {
                        $cart->remove_cart_item($cart_item_key); // Remove duplicate item
                        break; // Stop after first match
                    }
                }

                // Add the product again (ensuring only 1 quantity)
                $cart->add_to_cart($product_id, 1);

                return wc_get_checkout_url(); // Redirect to checkout after adding
            }

            return  $url; // Default behavior for other products
        });
    }

   

    public function elementor_addons()
    {

        $elementor = new \GSP_UI_Kit\Elementor\Loader();
        $elementor->register();
    }

    public function plugin_activation()
    {

        // perform any task for example creating table 
        // when user will active the plugin
        register_activation_hook(__FILE__, function () {

            // define task login
        });
    }
}
