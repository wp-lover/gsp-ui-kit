<?php

namespace GSP_UI_Kit\WooCommerce;

defined( 'ABSPATH' ) || exit;

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

        add_action('save_post', function($post_id) {
            if (isset($_POST['is_offline_course'])) {
                update_post_meta($post_id, 'is_offline_course', sanitize_text_field($_POST['is_offline_course']));
            }
        });

        add_action('tutor_course_metabox_after_price', function() {
            $custom_field_value = get_post_meta(get_the_ID(), 'is_offline_course', true);
            ?>
            <div class="tutor-option-field">
                <label for="is_offline_course"><?php _e('Is Offline Course', 'gsp_ui_kit'); ?></label>
                <input type="checkbox" name="is_offline_course" id="is_offline_course" value="<?php echo esc_attr($custom_field_value); ?>">
            </div>
            <?php
        });

        apply_filters( 'use_block_editor_for_post_type', true, 'courses' );
        
        
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
