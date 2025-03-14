<?php

namespace GSP_UI_Kit\Shortcodes;

if (!defined('ABSPATH')) exit;

class Tutor_LMS_All_Courses
{

    public function fire_on_init_hook()
    {

        // add shortcode for UI_Post retriving which is a custom post type
        add_shortcode('gsp_ui_tutor_lms_all_courses', [$this, 'render_ui']);
    }

    public function render_ui($atts)
    {

        $args = array(
            'post_type'      => 'courses',
            'posts_per_page' => 10
            
        );

        $courses_query = new \WP_Query($args);

        // Include the template using the constant
        include_once GSP_UI_KIT_ROOT_PATH . 'templates/tutor-lms-courses.php';
    }
}
