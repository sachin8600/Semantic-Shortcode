<?php 
/**
 * Image shortcode file
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_image_func( $atts ) {
	$atts = shortcode_atts( array(
		'img' => '',
		'link' => '',
		'style' => 'ui images',
		'class' => '',
		'size'	=> '',
		'color'	=> '',
		'align'	=> ''
	), $atts, 'ss_image' );
	extract($atts);

	$ss_image = '<img class="ui image responsive-img '.$class.' '.$style.' '.$size.' '.$align.' '.$color.'" src="'.$img.'">';
	if(!empty($link))
		$ss_image = '<a href="'.$link.'" class="ui image responsive-img '.$class.' '.$style.' '.$size.' '.$align.' '.$color.'" >
  					<img src="'.$img.'">
					</a>';
	$ss_image .= '<style type="text/css">.responsive-img{width:100%;display:block}</style>';
	return $ss_image;
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_image', 'ss_image_func' );
 ?>