<?php

namespace GSP_UI_Kit\Elementor\Widgets\Tutor_LMS_Courses;

use \Elementor\Widget_Base;
use \Elementor\Controls_Manager;

defined('ABSPATH') || exit;

class Widget extends Widget_Base
{

    function get_name(): string
    {
        return 'gsp-tutor-lms-courses';
    }

    function get_title(): string
    {
        return esc_html__('Tutor LMS Courses', 'gsp-ui-kit');
    }

    function get_icon()
    {
        return 'eicon-bullet-list';
    }

    public function get_style_depends() : array
    {
        return ['gsp-ui-kit-post-card'];
    }

    public function get_categories(): array
    {
      return ['general'];
    }

    public function get_keywords(): array
    {
      return ['slider', 'gsp', 'full with slider'];
    }

    protected function is_dynamic_content(): bool
    {
      return false;
    }

    /**
   * Render list widget output on the frontend.
   *
   * Written in PHP and used to generate the final HTML.
   *
   * @since 1.0.0
   * @access protected
   */
    protected function render(): void
    {
      $settings = $this->get_settings_for_display();
  
  ?>
  <section class="">
        <div class="-grid-col-3">
            <div class="-col">
                <div class="-post-card">
                    This is courses 1
                </div>
            </div>
            <div class="-col">
            <div class="-post-card">
                    This is courses 2 
                </div>
            </div>
            <div class="-col">
            <div class="-post-card">
                    This is courses 3
                </div>
            </div>
        </div>
  </section>
  <?php
    }
}
