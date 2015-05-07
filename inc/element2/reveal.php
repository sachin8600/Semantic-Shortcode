<?php 
/**
 * List shortcode file
 *
 * @since 1.0.0
 * @version	1.0.0
 */
/**
 * ss_reveal_func use for reveal div
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_reveal_func( $atts, $content = null ) {
	$atts = shortcode_atts( array(
		'class' 		=> '',
		'type'			=> '',
		'variations'	=> '',
	), $atts, 'ss_reveal' );
	extract($atts);
	$ss_reveal = '<div class="ui reveal '.$class.' '.$type.' '.$variations.'">';
	return $ss_reveal.do_shortcode($content)."</div>";
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_reveal', 'ss_reveal_func' );


/**
 * ss_reveal_show_func use for reveal show div
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_reveal_show_func( $atts, $content = null ){
	return '<div class="visible content">'.do_shortcode($content).'</div>';
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_reveal_show', 'ss_reveal_show_func' );


/**
 * ss_reveal_hide_func use for reveal hide div
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_reveal_hide_func( $atts, $content = null ){
	return '<div class="hidden content">'.do_shortcode($content).'</div>';
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_reveal_hide', 'ss_reveal_hide_func' );
?>