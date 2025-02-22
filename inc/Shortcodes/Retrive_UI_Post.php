<?php

namespace GSP_UI_Kit\Shortcodes;

if (!defined('ABSPATH')) exit; // Exit if accessed directly



class Retrive_UI_Post {


    public function fire_on_init_hook() {

        // add shortcode for UI_Post retriving which is a custom post type
        add_shortcode('gsp_ui', [ $this , 'render_ui']);
    }

    public function render_ui($atts) {
        $atts = shortcode_atts(['id' => 0], $atts, 'gsp_ui');

        $post_id = intval($atts['id']);
        if (!$post_id) {
            return '<p style="color: red;">Invalid GSP UI ID</p>';
        }

        $post = get_post($post_id);
        if (!$post || $post->post_type !== 'gsp_ui') {
            return '<p style="color: red;">GSP UI Not Found</p>';
        }

        return do_shortcode($post->post_content);
        
    }

   
}

