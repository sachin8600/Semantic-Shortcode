<?php 
/**
 * Message shortcode file
 *
 * @since 1.0.0
 * @version	1.0.0
 */
/**
 * ss_message_func use for message div
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_message_func( $atts, $content = null ) {
	$atts = shortcode_atts( array(
		'class' 		=> '',
		'type'			=> '',
		'attached'	=> '',
	), $atts, 'ss_message' );
	extract($atts);
	$ss_message = '<div class="ui message icon '.$class.' '.$type.' '.$attached.'">';
	return $ss_message.do_shortcode($content)."</div>";
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_message', 'ss_message_func' );


?>