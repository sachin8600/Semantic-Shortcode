<?php 
/**
 * Grid shortcode file
 *
 * @since 1.0.0
 * @version	1.0.0
 */
/**
 * ss_grid_func use for grid div
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_grid_func( $atts, $content = null ) {
	$atts = shortcode_atts( array(
		'class' 		=> '',
	), $atts, 'ss_grid' );
	extract($atts);
	$ss_grid = '<div class="ui grid '.$class.'"><div class="row">';
	return $ss_grid.do_shortcode($content)."</div></div>";
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_grid', 'ss_grid_func' );


/**
 * ss_col_func use for column div
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_col_func( $atts, $content = null ){
	$atts = shortcode_atts( array(
		'row' 		=> '',
	), $atts, 'ss_grid' );
	extract($atts);
	switch ($row) {
			case '1':
				$ss_class = 'one wide column';
				break;
			case '2':
				$ss_class = 'two wide column';
				break;
			case '3':
				$ss_class = 'three wide column';
				break;
			case '4':
				$ss_class = 'four wide column';
				break;
			case '5':
				$ss_class = 'five wide column';
				break;
			case '6':
				$ss_class = 'six wide column';
				break;
			case '7':
				$ss_class = 'seven wide column';
				break;
			case '8':
				$ss_class = 'eight wide column';
				break;
			case '9':
				$ss_class = 'nine wide column';
				break;
			case '10':
				$ss_class = 'ten wide column';
				break;
			case '11':
				$ss_class = 'eleven wide column';
				break;
			case '12':
				$ss_class = 'twelve wide column';
				break;
			case '13':
				$ss_class = 'thirteen wide column';
				break;
			case '14':
				$ss_class = 'fourteen wide column';
				break;
			case '15':
				$ss_class = 'fifteen wide column';
				break;
			default:
				$ss_class = 'wide column';
				break;
		}
	return '<div class="'.$ss_class.'">'.do_shortcode($content).'</div>';
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_col', 'ss_col_func' );
?>