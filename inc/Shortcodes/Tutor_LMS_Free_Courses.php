<?php

namespace GSP_UI_Kit\Shortcodes;

defined( 'ABSPATH' ) || exit;

if (!defined('ABSPATH')) exit;

class Tutor_LMS_Free_Courses
{

    public function fire_on_init_hook()
    {

        // add shortcode for UI_Post retriving which is a custom post type
        add_shortcode('gsp_ui_tutor_lms_free_courses', [$this, 'render_ui']);
    }

    public function render_ui($atts)
    {

        $args = array(
            'post_type'      => 'courses',
            'posts_per_page' => -1,
            'meta_query'     => array(
                array(
                    'key'     => '_tutor_course_price_type',
                    'value'   => 'free',
                    'compare' => '='
                )
            )
        );

        $courses_query = new \WP_Query($args);

        // Include the template using the constant
        include_once GSP_UI_KIT_ROOT_PATH . 'templates/tutor-lms-courses.php';
    }
}
