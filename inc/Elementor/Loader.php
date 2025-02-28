<?php

namespace GSP_UI_Kit\Elementor;

use GSP_UI_Kit\Elementor\Widgets\Full_Width_Slider;

class Loader
{

	public $assets_version = '1.0';

	public function register()
	{

		$this->assets_version = microtime();

		add_action('elementor/widgets/register', [$this, 'register_widgets']);

		add_action('wp_enqueue_scripts', [$this, 'register_scripts']);

		add_action( 'elementor/editor/after_enqueue_scripts', [ $this , 'editor_scripts' ] );
	}

	public function register_scripts()
	{
		// css
		Register_Assets::css();

		// css
		Register_Assets::js();
		
	}

	public function editor_scripts() {
		wp_enqueue_script( 'gsp-ui-kit-slider' );
	}

	function register_widgets($widgets_manager)
	{

		$widgets_manager->register(new Widgets\Tutor_LMS_Courses\Widget() );
	}
}
