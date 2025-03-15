<?php


namespace GSP_UI_Kit\Core;


class Remove_Scripts
{

    private static $instance;

    private $page_list = [];

    private function __construct()
    {
        add_action('wp_enqueue_scripts', [$this, 'unregister_assets']);
    }

    public function unregister_assets() {}


    public function get_instance()
    {

        if (self::$instance == null) {
            self::$instance = new Remove_Scripts();
        }

        return self::$instance;
    }
}
