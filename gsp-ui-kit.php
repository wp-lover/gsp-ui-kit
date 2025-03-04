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

define( 'GSP_UI_KIT_ROOT_URL' , plugin_dir_url(__FILE__) );
define( 'GSP_UI_KIT_ROOT_PATH' , plugin_dir_path(__FILE__) );

// Include the Composer autoloader
require_once __DIR__ . '/vendor/autoload.php';

// Initialize the plugin
if (class_exists('GSP_UI_Kit\\Plugin')) {

    new \GSP_UI_Kit\Plugin();
    
}
