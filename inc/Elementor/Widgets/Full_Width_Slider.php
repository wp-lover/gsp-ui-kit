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

  protected function _register_controls()
  {
    $this->start_controls_section(
      'gsp_ui_kit_full_width_slider',
      [
        'label' => __('Content', 'gsp-ui-kit'),
        'tab' => Controls_Manager::TAB_CONTENT,
      ]
    );

    $this->add_control(
      'gsp_ui_kit_slides',
      [
        'label' => __('Slides', 'gsp-ui-kit'),
        'type' => Controls_Manager::REPEATER,
        'fields' => [
          [
            'name' => 'image',
            'label' => __('Image', 'gsp-ui-kit'),
            'type' => Controls_Manager::MEDIA,
            'default' => [
              'url' => \Elementor\Utils::get_placeholder_image_src(),
            ],
          ],
          [
            'name' => 'title',
            'label' => __('Title', 'gsp-ui-kit'),
            'type' => Controls_Manager::TEXT,
            'default' => __('Title', 'gsp-ui-kit'),
          ],
          [
            'name' => 'description',
            'label' => __('Description', 'gsp-ui-kit'),
            'type' => Controls_Manager::TEXTAREA,
            'default' => __('Slide Description', 'gsp-ui-kit'),
          ],
          [
            'name' => 'link_text',
            'label' => __('Link Text', 'gsp-ui-kit'),
            'type' => Controls_Manager::TEXT,
            'default' => __('Click Me', 'gsp-ui-kit'),
          ],
          [
            'name' => 'link',
            'label' => __('Link', 'gsp-ui-kit'),
            'type' => Controls_Manager::TEXT,
            'default' => __('', 'gsp-ui-kit'),
          ]
        ],
        'title_field' => '{{{ title }}}',
      ]
    );

    $this->end_controls_section();

    // Style section 
    // $this->start_controls_section(
    //   'gsp_ui_kit_full_width_slider_style',
    //   [
    //     'label' => __('Style', 'gsp-ui-kit'),
    //     'tab' => \Elementor\Controls_Manager::TAB_STYLE,
    //   ]
    // );

    // $this->add_control(
    //   'gsp_ui_kit_slider_title_color',
    //   [
    //     'label' => __('Title Color', 'gsp-ui-kit'),
    //     'type' => \Elementor\Controls_Manager::COLOR,
    //     'selectors' => [
    //       '{{WRAPPER}} .your-text-class' => 'color: {{VALUE}};',
    //     ],
    //   ]
    // );

    // $this->end_controls_section();
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
      <div class="slider" id="slider">
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
      <div class="slider-nav">
        <svg
          id="prevBtn"
          width="40px"
          height="40px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
          <title>arrow-left-circle</title>
          <desc>Created with Sketch Beta.</desc>
          <defs></defs>
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            sketch:type="MSPage">
            <g
              id="Icon-Set"
              sketch:type="MSLayerGroup"
              transform="translate(-256.000000, -1087.000000)"
              fill="#000000">
              <path
                d="M279,1102 L268.414,1102 L272.536,1097.88 C272.926,1097.49 272.926,1096.86 272.536,1096.46 C272.145,1096.07 271.512,1096.07 271.121,1096.46 L265.464,1102.12 C265.225,1102.36 265.15,1102.69 265.205,1103 C265.15,1103.31 265.225,1103.64 265.464,1103.88 L271.121,1109.54 C271.512,1109.93 272.145,1109.93 272.536,1109.54 C272.926,1109.15 272.926,1108.51 272.536,1108.12 L268.414,1104 L279,1104 C279.552,1104 280,1103.55 280,1103 C280,1102.45 279.552,1102 279,1102 L279,1102 Z M272,1117 C264.268,1117 258,1110.73 258,1103 C258,1095.27 264.268,1089 272,1089 C279.732,1089 286,1095.27 286,1103 C286,1110.73 279.732,1117 272,1117 L272,1117 Z M272,1087 C263.164,1087 256,1094.16 256,1103 C256,1111.84 263.164,1119 272,1119 C280.836,1119 288,1111.84 288,1103 C288,1094.16 280.836,1087 272,1087 L272,1087 Z"
                id="arrow-left-circle"
                sketch:type="MSShapeGroup"></path>
            </g>
          </g>
        </svg>
        <svg
          id="nextBtn"
          width="35px"
          height="35px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
          <title>arrow-right-circle</title>
          <desc>Created with Sketch Beta.</desc>
          <defs></defs>
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            sketch:type="MSPage">
            <g
              id="Icon-Set"
              sketch:type="MSLayerGroup"
              transform="translate(-308.000000, -1087.000000)"
              fill="#000000">
              <path
                d="M324,1117 C316.268,1117 310,1110.73 310,1103 C310,1095.27 316.268,1089 324,1089 C331.732,1089 338,1095.27 338,1103 C338,1110.73 331.732,1117 324,1117 L324,1117 Z M324,1087 C315.163,1087 308,1094.16 308,1103 C308,1111.84 315.163,1119 324,1119 C332.837,1119 340,1111.84 340,1103 C340,1094.16 332.837,1087 324,1087 L324,1087 Z M330.535,1102.12 L324.879,1096.46 C324.488,1096.07 323.855,1096.07 323.465,1096.46 C323.074,1096.86 323.074,1097.49 323.465,1097.88 L327.586,1102 L317,1102 C316.447,1102 316,1102.45 316,1103 C316,1103.55 316.447,1104 317,1104 L327.586,1104 L323.465,1108.12 C323.074,1108.51 323.074,1109.15 323.465,1109.54 C323.855,1109.93 324.488,1109.93 324.879,1109.54 L330.535,1103.88 C330.775,1103.64 330.85,1103.31 330.795,1103 C330.85,1102.69 330.775,1102.36 330.535,1102.12 L330.535,1102.12 Z"
                id="arrow-right-circle"
                sketch:type="MSShapeGroup"></path>
            </g>
          </g>
        </svg>
      </div>
      <div class="slider-dots" id="sliderDots"></div>
    </div>
<?php
  }
}
