<?php 
/**
 * Button shortcode file
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_button_func( $atts ) {
	$atts = shortcode_atts( array(
		'title' => 'Submit',
		'title2' => '',
		'style' => 'ui button',
		'class' => '',
		'size'	=> '',
		'color' => '',
		'link'	=>''
	), $atts, 'ss_button' );
	extract($atts);
	$findme   = 'animated';
	$prel = (empty($link))?'':'<a href="'.$link.'">';
	$nextl = (empty($link))?'':'</a>';
	$pos = strpos($style, $findme);
	if ($pos === false) {
	    $ss_button = $prel.'<div class="'.$style.' '.$class.' '.$size.' '.$color.'">'.$title.'</div>'.$nextl;
	} else {
	    $ss_button = $prel.'<div class="'.$style.' '.$class.' '.$size.' '.$color.'"><div class="visible content">'.$title.'</div><div class="hidden content">'.$title2.'</div></div>'.$nextl;
	}
	return $ss_button;
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_button', 'ss_button_func' );
 ?>