<?php

namespace GSP_UI_Kit\Shortcodes;

class Sliders {
    public function fire_on_init_hook()
    {

        // teachers testimonials
        add_shortcode('gsp_ui_teacher_testimonial', [$this, 'teacher_testimonial']);

        // teachers testimonials
        add_shortcode('gsp_ui_student_gallery', [$this, 'student_gallery']);
    }

    public function teacher_testimonial () {
        ob_start();
       include_once GSP_UI_KIT_ROOT_PATH . './templates/shortcode/sliders/teacher-testimonial.php';

      return ob_get_clean();
    }

    function student_gallery () {
        ob_start();
       include_once GSP_UI_KIT_ROOT_PATH . './templates/shortcode/sliders/student-gallery.php';

      return ob_get_clean();
    }
}