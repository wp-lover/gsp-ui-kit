<?php
if (!defined('ABSPATH')) exit;

if ($courses_query->have_posts()) :
?>
    <section class="-grid-col-3">
        <?php while ($courses_query->have_posts()) : $courses_query->the_post();
            $course_id = get_the_ID();
            $price_type = get_post_meta($course_id, '_tutor_course_price_type', true);
            $product_id = get_post_meta($course_id, '_tutor_course_product_id', true);
            $product = $product_id ? wc_get_product($product_id) : null;
            $price_html = ($price_type === 'paid' && $product) ? $product->get_price_html() : __('Free', 'gsp-ui-kit');
            // 🔹 Get Course Categories
            $terms = get_the_terms($course_id, 'course-category');
        ?>
            <div class="-card-view-blog -bo-border gsp-ui-kit-tutor-lms-card-bg_c">
                <?php the_post_thumbnail('medium', ['loading' => 'lazy', 'class' => '-thumbnail']); ?>
                <h2 class="-blog-title">
                    <a href="<?php echo esc_url(get_the_permalink()); ?>" class="gsp-ui-kit-tutor-lms-title-text_c"><?php the_title(); ?></a>
                </h2>
                <hr />
                <div class="-d-flex -flex-between -px-2 mt-2">
                    <p class="gsp-ui-course-price"><?php echo $price_html; ?></p>
                    <?php
                    // 🔹 Display Category Name & Permalink
                    if (!empty($terms) && !is_wp_error($terms)) {
                        echo '<div class="gsp-ui-tutor-lms-category">';
                        foreach ($terms as $term) {
                            $term_link = get_term_link($term);
                            echo '<a href="' . esc_url($term_link) . '" class="gsp-ui-kit-tutor-lms-title-text_c">' . esc_html($term->name) . '</a> ';
                        }
                        echo '</div>';
                    }

                    ?>
                </div>
                <button class="gsp-ui-kit-tutor-lms-details-button-bg_c -m-2">
                    <a href="<?php echo esc_url(get_the_permalink()); ?>" class="gsp-ui-kit-tutor-lms-button-text_c">
                        <?php echo esc_html($settings['gsp_ui_kit_tutor_lms_courses_details_button_text'] ?? ''); ?>
                    </a>
                </button>
                <?php
                if ($product) {
                    $checkout_url = wc_get_checkout_url();
                    $add_to_cart_url = esc_url(wc_get_cart_url() . "?add-to-cart=$product_id&redirect=true&product-id=$product_id");
                
                ?>
                    <button class="gsp-ui-kit-tutor-lms-enroll-button-bg_c -m-2">
                        <a href="<?php echo $add_to_cart_url; ?>" class="gsp-ui-kit-tutor-lms-enroll-text_c">
                            <?php echo esc_html($settings['gsp_ui_kit_tutor_lms_courses_enroll_button_text'] ?? ''); ?>
                        </a>
                    </button>
                <?php
                }
                ?>
            </div> <!-- .-card-view-blog -->
        <?php endwhile; ?>
    </section>
<?php
else :
    echo '<p>' . __('No courses found.', 'gsp-ui-kit') . '</p>';
endif;

wp_reset_postdata();
?>