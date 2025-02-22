<?php

namespace GSP_UI_Kit\Post_Types;

if (!defined('ABSPATH')) exit; // Exit if accessed directly

class Register_UI_Post {

    public function fire_on_init_hook() {
        $labels = [
            'name'               => __('GSP UI', 'gsp-ui-kit'),
            'singular_name'      => __('GSP UI', 'gsp-ui-kit'),
            'add_new'            => __('Add New UI', 'gsp-ui-kit'),
            'add_new_item'       => __('Add New GSP UI', 'gsp-ui-kit'),
            'edit_item'          => __('Edit GSP UI', 'gsp-ui-kit'),
            'new_item'           => __('New GSP UI', 'gsp-ui-kit'),
            'view_item'          => __('View GSP UI', 'gsp-ui-kit'),
            'search_items'       => __('Search GSP UI', 'gsp-ui-kit'),
            'not_found'          => __('No GSP UI found', 'gsp-ui-kit'),
            'not_found_in_trash' => __('No GSP UI found in Trash', 'gsp-ui-kit'),
            'menu_name'          => __('GSP UI', 'gsp-ui-kit'),
        ];

        $args = [
            'label'               => __('GSP UI', 'gsp-ui-kit'),
            'labels'              => $labels,
            'public'              => false,   // Not publicly queryable
            'show_ui'             => true,    // Show in admin
            'show_in_menu'        => true,    // Visible in admin menu
            'menu_position'       => 25,      // Position in menu
            'menu_icon'           => 'dashicons-admin-customizer',
            'supports'            => ['title', 'editor', 'thumbnail', 'custom-fields'],
            'show_in_rest'        => true,    // Enable Gutenberg
            'has_archive'         => false,   // No archive
            'exclude_from_search' => true,    // Not searchable
            'publicly_queryable'  => false,   // Not queryable via front-end
            'rewrite'             => false,   // No permalink rewrite
        ];

        register_post_type('gsp_ui', $args);
    }
}

