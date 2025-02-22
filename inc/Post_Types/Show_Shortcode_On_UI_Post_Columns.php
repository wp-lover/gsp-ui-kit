<?php

namespace GSP_UI_Kit\Post_Types;

if (!defined('ABSPATH')) exit; // Exit if accessed directly


class Show_Shortcode_On_UI_Post_Columns {

    public function fire_on_admin_init_hook() {

        add_filter('manage_gsp_ui_posts_columns', [ $this , 'add_shortcode_column']);
        add_action('manage_gsp_ui_posts_custom_column', [ $this, 'display_shortcode_column'], 10, 2);
    }

      // Add custom column
      public function add_shortcode_column($columns) {
        $columns['gsp_ui_shortcode'] = __('Shortcode', 'gsp-ui-kit');
        return $columns;
    }

    // Display shortcode in column
    public function display_shortcode_column($column, $post_id) {
        if ($column === 'gsp_ui_shortcode') {
            echo '<code>[gsp_ui id="' . esc_attr($post_id) . '"]</code>';
        }
    }

}