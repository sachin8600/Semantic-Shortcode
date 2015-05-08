<?php 
/**
 * Plugin Name: Semantic Shortcode
 * Plugin URI: 
 * Description: An beautifully apply css effect by shortcode.
 * Version: 1.0.0
 * Author: Sachin Jadhav
 * Author URI: http://sachin8600.wordpress.com/
 * Requires at least: 4.0
 * Tested up to: 4.1
 *
 * Text Domain: ss
 * Domain Path: /languages/
 *
 * @package ss
 * @author 
 */ 
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! class_exists( 'SemanticShortcode' ) ) :
/**
 * Main SemanticShortcode Class
 *
 * @class SemanticShortcode
 * @version	1.0.0
 */
final class SemanticShortcode {
	/**
	 * @var string
	 */
	public $version = '1.0.0';

	/**
	 * @var SemanticShortcode The single instance of the class
	 * @since 1.0
	 */
	protected static $_instance = null;

	/**
	 * Main SemanticShortcode Instance
	 *
	 * Ensures only one instance of SemanticShortcode is loaded or can be loaded.
	 *
	 * @since 1.0
	 * @static
	 * @see ss()
	 * @return SemanticShortcode - Main instance
	 */
	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}
		return self::$_instance;
	}
	/**
	 * Cloning is forbidden.
	 * @since 1.0
	 */
	public function __clone() {
		_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?', 'ss' ), '1.0' );
	}

	/**
	 * Unserializing instances of this class is forbidden.
	 * @since 1.0
	 */
	public function __wakeup() {
		_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?', 'ss' ), '1.0' );
	}


	/**
	 * SemanticShortcode Constructor.
	 */
	public function __construct() {
		$this->define_constants();
		$this->includes();
		$this->init_hooks();
	}

	/**
	 * Hook into actions and filters
	 * @since  1.0
	 */
	private function init_hooks() {
		// enque js css to front end
		add_action('wp_enqueue_scripts', array($this,'ss_style_script') );
		//enque js css to backend end
		add_action('admin_enqueue_scripts', array($this,'ss_admin_style_script') );
		//add tiny editor button
		add_action('admin_head', array($this,'ss_add_tiny_editor_button') );
		//add menu page
		add_action( 'admin_menu', array($this,'register_semantic_shortcode_menu_page') );
	}
	/**
	 * Add menu page in admin menu
	 */
	function register_semantic_shortcode_menu_page(){
		add_menu_page( 'Semantic Shortcode', 'Semantic Shortcode', 'manage_options', 'semantic-shortcode', 'fn_semantic_shortcode', SS_IMG_URL.'icon.png', 6 ); 
	}
	/**
	 * Define ss Constants
	 */
	private function define_constants() {
		$upload_dir = wp_upload_dir();
		$this->define( 'SS_DIR', plugin_dir_path( __FILE__ ) );
		$this->define( 'SS_URL',plugin_dir_url( __FILE__ ) );
		$this->define( 'SS_CSS_URL',SS_URL."css/" );
		$this->define( 'SS_JS_URL',SS_URL."js/" );
		$this->define( 'SS_IMG_URL',SS_URL."images/" );
		$this->define( 'SS_VERSION', $this->version );
	}

	/**
	 * Define constant if not already set
	 * @param  string $name
	 * @param  string|bool $value
	 */
	private function define( $name, $value ) {
		if ( ! defined( $name ) ) {
			define( $name, $value );
		}
	}

	/**
	 * Include required core files used in admin and on the frontend.
	 */
	public function includes() {
		include_once("inc/shortcode.php");
		include_once("inc/semantic-menu.php");
	}

	/**
	 * Used to add css and js file on the frontend.
	 */
	function ss_style_script(){
		wp_enqueue_style('semantic',SS_CSS_URL."semantic.min.css");
		wp_enqueue_script('jquery-address',SS_JS_URL."jquery.address.min.js",array("jquery"));
		wp_enqueue_script('semantic',SS_JS_URL."semantic.min.js",array("jquery","jquery-address"));
	}
	/**
	 * Used to add css and js file on the admin side / back end.
	 */
	function ss_admin_style_script(){
		if($_REQUEST['page'] == 'semantic-shortcode'):
			wp_enqueue_style('semantic',SS_CSS_URL."semantic.min.css");
			wp_enqueue_script('jquery-address',SS_JS_URL."jquery.address.min.js",array("jquery"));
			wp_enqueue_script('semantic',SS_JS_URL."semantic.min.js",array("jquery","jquery-address"));
		endif;
		wp_enqueue_style('ss-admin',SS_CSS_URL.'ss-admin.css');
	}

	function ss_add_tiny_editor_button() {
	    global $typenow;
	    // check user permissions
	    if ( !current_user_can('edit_posts') && !current_user_can('edit_pages') ) {
	    return;
	    }
	    // check if WYSIWYG is enabled
	    if ( get_user_option('rich_editing') == 'true') {
	        add_filter("mce_external_plugins", array($this,"ss_add_tinymce_plugin") );
        	add_filter('mce_buttons', array($this,'ss_register_my_tc_button') );
    	}
    }
    function ss_add_tinymce_plugin($plugin_array) {
        $plugin_array['ss_tc_button'] = SS_JS_URL."tiny-shortcode.js"; // CHANGE THE BUTTON SCRIPT HERE
        return $plugin_array;
    }
    function ss_register_my_tc_button($buttons) {
       array_push($buttons, "ss_tc_button");
       return $buttons;
    }

}
endif;
/**
 * Returns the main instance of ss to prevent the need to use globals.
 *
 * @since  1.0
 * @return SemanticShortcode
 */
function ss() {
	return SemanticShortcode::instance();
}

// Global for backwards compatibility.
$GLOBALS['ss'] = ss();
?>