<?php

namespace GSP_UI_Kit\Elementor\Widgets\Tutor_LMS_Courses;

use \Elementor\Widget_Base;

defined('ABSPATH') || exit;

class Widget extends Widget_Base
{
    function get_name(): string
    {
        return 'gsp-ui-kit-tutor-lms-courses';
    }

    function get_title(): string
    {
        return esc_html__('Tutor LMS Courses', 'gsp-ui-kit');
    }

    function get_icon()
    {
        return 'eicon-bullet-list';
    }

    public function get_style_depends(): array
    {
        return ['gsp-ui-kit-post-card'];
    }

    public function get_categories(): array
    {
        return ['general'];
    }

    public function get_keywords(): array
    {
        return ['slider', 'gsp', 'courses', 'tutor lms'];
    }

    protected function is_dynamic_content(): bool
    {
        return false;
    }

    protected function register_controls()
    {
        Register_Controls::controls($this);
    }

    protected function render(): void
    {
        $settings = $this->get_settings_for_display();

        $args = [
            'post_type'      => 'courses',
            'posts_per_page' => 6,
            'orderby'        => 'date',
            'order'          => 'DESC',
        ];

        $courses_query = new \WP_Query($args);

        // Include the template using the constant
        include_once GSP_UI_KIT_ROOT_PATH . 'templates/elementor/tutor-lms-courses.php';
    }
}
