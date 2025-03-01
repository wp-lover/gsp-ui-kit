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

    public function get_style_depends(): array
    {
        // return ['gsp-ui-kit-post-card'];
        return [];
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


        // Define custom query arguments
        $args = array(
            'post_type'      => 'courses', // Tutor LMS course post type
            'posts_per_page' => 6,        // Number of courses to display
            'orderby'        => 'date',    // Order by date
            'order'          => 'DESC',    // Sort in descending order
        );

        // Create a new WP_Query instance
        $courses_query = new \WP_Query($args);

        // Check if there are any courses
        if ($courses_query->have_posts()) {
            echo '<section class="-grid-col-3">';
            // Loop through the courses
            while ($courses_query->have_posts()) {
                $courses_query->the_post();

                $course_id = get_the_ID();

                // Display course title and link
                echo        '<div class="-col -card-view-blog">';

                
                $thumbnail_attributes = $thumbnail_attributes = array(
                    'loading' => 'lazy', // Add lazy loading attribute,
                    'class'   => '-post-thumbnail -thumbnail', // Add your custom classes here
                );
    
                the_post_thumbnail('medium', $thumbnail_attributes);
     

                echo        '<h2 class="-blog-title"><a href="' . esc_url(get_the_permalink()) . '">' . esc_html(get_the_title()) . '</a></h2>';
                echo '<hr />';

                $course_id = get_the_ID();
                $price_type = get_post_meta($course_id, '_tutor_course_price_type', true);

                echo '<div class="-d-flex">';
                echo    '<div class="-px-1">';

                if ($price_type == 'paid') {
                    $product_id = get_post_meta($course_id, '_tutor_course_product_id', true);

                    if ($product_id) {
                        $product = wc_get_product($product_id);

                        // echo var_dump($product);

                        if ($product) {
                            echo $product->get_price_html();
                        } else {
                            echo 'product not found';
                        }
                    } else {
                        echo 'product id not found';
                    }
                } else {
                    echo 'Free';
                }
                echo    '</div>';
                echo    '<div class="-pr-1">';
                echo    '<button class="-w-100 mb-1"><a href="' . esc_url(get_the_permalink()) . '" style="color:#fff">Details</a></button>';
                echo    '<button class="-w-100">Enroll Now</button>';
                echo    '</div>';

                echo '</div>';
                echo    '</div>'; // -post-card
            }
            echo '</section>';
        } else {
            // No courses found
            echo '<p>No courses found.</p>';
        }

        // Reset post data
        wp_reset_postdata();
    }

  
}
