<?php

namespace GSP_UI_Kit\Elementor\Widgets\Tutor_LMS_Courses;

use \Elementor\Controls_Manager;

if (!defined('ABSPATH')) exit;

class Register_Controls
{

    public static function controls(Widget $instance)
    {

        self::content_section($instance);
        self::styles($instance);
    }

    public static function content_section(Widget $instance)
    {

        $instance->start_controls_section(
            'gsp_ui_kit_tutor_lms_courses_content_section',
            [
                'label' => __('Tutor LMS Courses Settings', 'gsp-ui-kit'),
                'tab'   => Controls_Manager::TAB_CONTENT,
            ]
        );

        $instance->add_control(
            'gsp_ui_kit_tutor_lms_courses_enroll_button_text',
            [
                'label'   => __('Enroll Button Text', 'gsp-ui-kit'),
                'type'    => Controls_Manager::TEXT,
                'default' => __('Enroll Now', 'gsp-ui-kit'),
            ]
        );

        $instance->add_control(
            'gsp_ui_kit_tutor_lms_courses_details_button_text',
            [
                'label'   => __('Details Button Text', 'gsp-ui-kit'),
                'type'    => Controls_Manager::TEXT,
                'default' => __('See Details', 'gsp-ui-kit'),
            ]
        );

        $instance->end_controls_section();
    }


    private static function styles(Widget $instance)
    {

        // 🔹 Start Style Section
        $instance->start_controls_section(
            'gsp_ui_kit_tutor_lms_courses_style_section',
            [
                'label' => esc_html__('Colors', 'gsp-ui-kit'),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        // 🔹 Background Color
        $instance->add_control(
            'gsp_ui_kit_tutor_lms_courses_background_color',
            [
                'label'     => esc_html__('Background Color', 'gsp-ui-kit'),
                'type'      => Controls_Manager::COLOR,
                'default'   => '#fff',
                'selectors' => [
                    '{{WRAPPER}} .gsp-ui-kit-tutor-lms-card-bg_c' => 'background-color: {{VALUE}};',
                ],
            ]
        );

        // 🔹 Enroll Text Color
        $instance->add_control(
            'gsp_ui_kit_tutor_lms_courses_title_text_color',
            [
                'label'     => esc_html__('Title Text Color', 'gsp-ui-kit'),
                'type'      => Controls_Manager::COLOR,
                'default'   => '#111',
                'selectors' => [
                    '{{WRAPPER}} .gsp-ui-kit-tutor-lms-title-text_c' => 'color: {{VALUE}};',
                ],
            ]
        );


        $instance->end_controls_section(); // End Style Section
    }
}