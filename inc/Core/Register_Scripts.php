<?php


namespace GSP_UI_Kit\Core;

if (!defined('ABSPATH')) exit;

class Register_Scripts
{

    private static $instance;

    public $js_object = ['youtube_video_id' => ''];

    private function __construct()
    {
        add_action('wp_enqueue_scripts', [$this, 'register_assets']);

        add_action('wp_footer', [$this, 'footer_scripts']);

        add_action('wp_enqueue_scripts', function () {

            wp_enqueue_style(
                'gsp-ui-kit-common',
                GSP_UI_KIT_ROOT_URL . 'assets/dest/css/common.min.css',
                [],
                microtime()
            );

            wp_enqueue_style(
                'gsp-ui-kit-primary',
                GSP_UI_KIT_ROOT_URL . 'assets/dest/css/tailwind.css',
                [],
                microtime()
            );
        }, 1000);
    }

    public function register_assets()
    {

        $this->login_js();

        $this->home_page_scripts();

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

    public function footer_scripts() {

        // if (is_home()) {
            // $this->display_swiper_script();
        // }
    }

    private function home_page_scripts() {

        // if (is_home()) {

            $this->slider_scripts();
            
        // }
    }

    private function slider_scripts() {
        // css
        wp_enqueue_style(
            'gsp-ui-kit-swiper',
            'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
            [],
            '11.2.5',
            'all'
        );

        // js
        wp_enqueue_script(
            'gsp-ui-kit-swiper',
            'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
            [],
            '11.2.5',
            true
        );

        wp_enqueue_script(
            'gsp-ui-kit-swiper-object',
            GSP_UI_KIT_ROOT_URL . 'assets/dest/js/swiper-object.js',
            ['gsp-ui-kit-swiper'],
            '1.0.0',
            true
        );
    }

    private function login_js(){
        
        // is user on the login page
        if ( untrailingslashit( home_url( '/login' ) ) == untrailingslashit( get_permalink() ) ) {
            wp_enqueue_script(
                'gsp-ui-kit-login',
                GSP_UI_KIT_ROOT_URL . 'assets/dest/js/login.js',
                [],
                '1.0.0',
                true
            );
        }
    }

    private function youtube_player_scripts()
    {

        // wp_enqueue_script(
        //     'gsp-ui-kit-youtube-player',
        //     GSP_UI_KIT_ROOT_URL . 'assets/dest/js/bundle.js',
        //     [],
        //     microtime(),
        //     true
        // );

        wp_localize_script('gsp-ui-kit-common', 'gsp_ui_kit_youtube', [
            'video_id' => $this->js_object['youtube_video_id']
        ]);

        wp_localize_script('gsp-ui-kit-common', 'gsp_ui_kit_common', [
            'ajax_url' => admin_url('admin-ajax.php'),
            'site_url' => esc_url( get_bloginfo('url') ),
            'nonce' => wp_create_nonce('gsp_ui_kit_nonce'),
        ]);
    }

    private function display_swiper_script() {
        ?>
        <script>
            
        </script>
        <?php
    }
    public static function get_instance(): Register_Scripts
    {

        if (self::$instance == null) {
            self::$instance = new Register_Scripts();
        }

        return self::$instance;
    }
}
