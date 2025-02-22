<?php
/**
 * Plugin Name: GSP UI Kit
 * Description: A WordPress UI Kit Plugin with OOP structure.
 * Version: 1.0.0
 * Author: Joshim
 * Text Domain: gsp-ui-kit
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

define( 'gsp_ui_kit_root_url' , plugin_dir_url(__FILE__) );
define( 'gsp_ui_kit_root_path' , plugin_dir_path(__DIR__) );

// Include the Composer autoloader
require_once __DIR__ . '/vendor/autoload.php';

// Initialize the plugin
if (class_exists('GSP_UI_Kit\\Plugin')) {

    new \GSP_UI_Kit\Plugin();
    
}
