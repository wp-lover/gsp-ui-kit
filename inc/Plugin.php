<?php

namespace GSP_UI_Kit;

class Plugin {

    public function __construct()
    {
        $this->plugin_activation();

        $this->elementor_addons();

        $this->run_contained_action_hooks();

        $this->run_contained_filter_hooks();
    }

    private function run_contained_action_hooks() {

        $admin_init_hooked = new Helpers\Admin_Init_Hook();
        add_action('admin_init', [ $admin_init_hooked , 'run']);

        $init_hooked = new Helpers\Init_Hook();
        add_action('init', [ $init_hooked , 'run']);

        add_action('wp_enqueue_scripts', [ $this , 'register_assets']);
    }

    private function run_contained_filter_hooks() {
    
        
    }

    public function register_assets() {

        wp_enqueue_style(
            'gsp-ui-kit-common',
            gsp_ui_kit_root_url . 'assets/dest/css/common.min.css',
            [],
            microtime()
        );

        wp_enqueue_style(
            'gsp-ui-kit-style',
            gsp_ui_kit_root_url . 'assets/dest/css/bundle.css',
            [],
            microtime()
        );

        wp_enqueue_script(
			'gsp-ui-kit-slider',
			gsp_ui_kit_root_url . 'assets/dest/js/typescript-bundle.js',
			[],
			microtime(),
			true
		);
    }

    public function elementor_addons() {
        
        $elementor = new \GSP_UI_Kit\Elementor\Loader();
        $elementor->register();
    }

    public function plugin_activation() {

        // perform any task for example creating table 
        // when user will active the plugin
        register_activation_hook( __FILE__, function () {

            // define task login
        } );
    }
}
