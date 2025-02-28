<?php

namespace GSP_UI_Kit\Elementor\Widgets;

use \Elementor\Widget_Base;
use \Elementor\Controls_Manager;

defined('ABSPATH') || exit;

class Full_Width_Slider extends Widget_Base
{

  /**
   * Get widget name.
   *
   * Retrieve list widget name.
   *
   * @since 1.0.0
   * @access public
   * @return string Widget name.
   */
  public function get_name(): string
  {
    return 'GSP-Slider';
  }

  /**
   * Get widget title.
   *
   * Retrieve list widget title.
   *
   * @since 1.0.0
   * @access public
   * @return string Widget title.
   */
  public function get_title(): string
  {
    return esc_html__('Slider', 'gsp-ui-kit');
  }

  /**
   * Get widget icon.
   *
   * Retrieve list widget icon.
   *
   * @since 1.0.0
   * @access public
   * @return string Widget icon.
   */
  public function get_icon(): string
  {
    return 'eicon-bullet-list';
  }


  public function get_script_depends(): array
  {
    return ['gsp-ui-kit-slider'];
  }

  /**
   * Get widget categories.
   *
   * Retrieve the list of categories the list widget belongs to.
   *
   * @since 1.0.0
   * @access public
   * @return array Widget categories.
   */
  public function get_categories(): array
  {
    return ['general'];
  }

  /**
   * Get widget keywords.
   *
   * Retrieve the list of keywords the list widget belongs to.
   *
   * @since 1.0.0
   * @access public
   * @return array Widget keywords.
   */
  public function get_keywords(): array
  {
    return ['slider', 'gsp', 'full with slider'];
  }

  /**
   * Whether the element returns dynamic content.
   *
   * Determine whether to cache the element output or not.
   *
   * @since 1.0.0
   * @access protected
   * @return bool Whether to cache the element output.
   */
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
    <div class="slider-container">
      <div class="gsp-ui-kit-slider-1" id="slider">
        <?php

        foreach ($settings['gsp_ui_kit_slides'] as $setting) {

          echo '<div class="slide">';
          echo wp_get_attachment_image(
            $setting['image']['id'],
            'full',
            false,
            [
              'class' => 'slide-image',
              'alt' => esc_attr($setting['title']),
              'loading' => 'lazy'
            ]
          );
          echo '</div>';
        }
        ?>
      </div>
    </div>

<?php
  }
}
