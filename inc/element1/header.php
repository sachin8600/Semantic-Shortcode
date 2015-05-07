<?php 
/**
 * Header shortcode file
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_header_func( $atts ) {
	$atts = shortcode_atts( array(
		'title' => '',
		'title2' => '',
		'style' => 'ui header',
		'class' => '',
		'size'	=> '',
		'color'	=> '',
		'level'	=> '1'
	), $atts, 'ss_header' );
	extract($atts);

	$ss_header = '<h'.$level.' class="ui header '.$style.' '.$class.' '.$size.' '.$color.'">'.$title;
	if(!empty($title))
		$ss_header .= '<div class="sub header">'.$title2.'</div>';
	$ss_header .='</h'.$level.'>';
	return $ss_header;
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_header', 'ss_header_func' );
 ?>