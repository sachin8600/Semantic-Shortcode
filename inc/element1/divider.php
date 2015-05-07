<?php 
/**
 * Divider shortcode file
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_divider_func( $atts ) {
	$atts = shortcode_atts( array(
		'title' => '',
		'style' => 'ui divider',
		'class' => ''
	), $atts, 'ss_divider' );
	extract($atts);
	$findme   = 'horizontal';
	$findme2  = 'vertical';
	$pos = strpos($style, $findme);
	$pos2 = strpos($style, $findme2);
	if ($pos === false && $pos2 === false) {
	    $ss_divider = '<div class="'.$style.' '.$class.' "></div>';
	} else {
	    $ss_divider = '<div class="'.$style.' '.$class.' ">'.$title.'</div>';
	}
	return $ss_divider;
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_divider', 'ss_divider_func' );
 ?>