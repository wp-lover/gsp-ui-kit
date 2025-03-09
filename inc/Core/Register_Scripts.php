<?php 


namespace GSP_UI_Kit\Core;



class Register_Scripts {

    private static $instance;

    public $js_object = [ 'youtube_video_id' => '' ];

    private function __construct() {
        add_action('wp_enqueue_scripts', [$this, 'register_assets']);

        add_action('wp_enqueue_scripts', function () {

            wp_enqueue_style(
                'gsp-ui-kit-common',
                GSP_UI_KIT_ROOT_URL . 'assets/dest/css/common.min.css',
                [],
                microtime()
            );

        }, 1000);
    }

    public function register_assets()
    {

       

        wp_enqueue_style(
            'gsp-ui-kit-style',
            GSP_UI_KIT_ROOT_URL . 'assets/dest/css/bundle.css',
            [],
            microtime()
        );

        wp_enqueue_script(
            'gsp-ui-kit-common',
            GSP_UI_KIT_ROOT_URL . 'assets/dest/js/bundle.js',
            [],
            microtime(),
            true
        );

        $this->youtube_player_scripts();
    }

    private function youtube_player_scripts() {
        
        // wp_enqueue_script(
        //     'gsp-ui-kit-youtube-player',
        //     GSP_UI_KIT_ROOT_URL . 'assets/dest/js/bundle.js',
        //     [],
        //     microtime(),
        //     true
        // );

        wp_localize_script( 'gsp-ui-kit-common', 'gsp_ui_kit_youtube', [
            'video_id' => $this->js_object['youtube_video_id']
        ] );
    }


    public static function get_instance() : Register_Scripts {
        
        if (self::$instance == null) {
            self::$instance = new Register_Scripts();
        }

        return self::$instance;
    }
}