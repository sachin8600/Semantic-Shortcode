<?php 
/**
 * Divider shortcode file
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_icon_func( $atts ) {
	$atts = shortcode_atts( array(
		'class' => '',
		'icon'	=> '',
		'color' => ''
	), $atts, 'ss_icon' );
	extract($atts);
	$ss_icon = '<i class="'.$class.' '.$icon.' '.$color.'"></i>';
	return $ss_icon;
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_icon', 'ss_icon_func' );
 ?>