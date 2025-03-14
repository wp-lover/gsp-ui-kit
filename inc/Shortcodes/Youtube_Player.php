<?php

namespace GSP_UI_Kit\Shortcodes;

use \GSP_UI_Kit\Core\Register_Scripts;

defined('ABSPATH') or exit;

class Youtube_Player {

    public function fire_on_init_hook() {

        // add shortcode for UI_Post retriving which is a custom post type
        add_shortcode('gsp_ui_youtube', [ $this , 'render_ui']);
    }

    public function render_ui ( $atts ) {

        $atts = shortcode_atts([
            'video_id' => 'dQw4w9WgXcQ' // Default video ID
        ], $atts, 'custom_youtube_player');
    
        ob_start(); ?>
        <div class="video-container" data-video-id="<?php echo esc_attr($atts['video_id']); ?>">
            <div class="video-overlay" onclick="playVideo()">
                <button class="play-btn">▶ Play</button>
            </div>
            <div class="video-wrapper">
                <div id="player"></div>
                <div class="click-blocker"></div>
            </div>
            <div class="custom-controls">
                <span onclick="playPause()">⏯ Play/Pause</span>
                <span onclick="seekBackward()">⏪ -10s</span>
                <span onclick="seekForward()">⏩ +10s</span>
                <span onclick="toggleFullScreen()">⛶ Fullscreen</span>
            </div>
        </div>
        <?php return ob_get_clean();
    }
}