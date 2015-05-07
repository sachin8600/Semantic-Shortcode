<?php 
/**
 * Divider shortcode file
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_flag_func( $atts ) {
	$atts = shortcode_atts( array(
		'class' => '',
		'country'	=> ''
	), $atts, 'ss_flag' );
	extract($atts);
	$ss_flag = '<i class="'.$class.' '.$country.'"></i>';
	return $ss_flag;
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_flag', 'ss_flag_func' );
 ?>