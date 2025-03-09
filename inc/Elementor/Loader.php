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

		add_action('elementor/editor/after_enqueue_scripts', [$this, 'editor_scripts']);

		add_action('wp_head', function () {

?>
			<style>
				.-flex {
					display: flex;
				}
				.-flex-between {
					display: flex;
					justify-content: space-between;
				}
				.-flex-around {
					display: flex;
					justify-content: space-around;
				}
				.-w-100{
					width: 100%;
				}
				.-w-90{
					width: 90%;
				}
				.-w-80{
					width: 80%;
				}
				.-w-70{
					width: 70%;
				}
				.-w-60{
					width: 60%;
				}
				.-w-50{
					width: 50%;
				}
			</style>
<?php

		});
	}

	public function register_scripts()
	{
		// css
		Register_Assets::css();

		// css
		Register_Assets::js();
	}

	public function editor_scripts()
	{
		wp_enqueue_script('gsp-ui-kit-slider');
	}

	function register_widgets($widgets_manager)
	{

		$widgets_manager->register(new Widgets\Tutor_LMS_Courses\Widget());

		$widgets_manager->register(new Widgets\Firebase_OTP_Login\Widget());
	}
}
