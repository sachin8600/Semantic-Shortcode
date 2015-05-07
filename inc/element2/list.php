<?php 
/**
 * List shortcode file
 *
 * @since 1.0.0
 * @version	1.0.0
 */
/**
 * ss_list_func use for list div
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_list_func( $atts, $content = null ) {
	$atts = shortcode_atts( array(
		'class' 		=> '',
		'size'			=> '',
		'type'			=> '',
		'variations'	=> '',
	), $atts, 'ss_list' );
	extract($atts);

	switch ($type) {
		case 'list':
			$ss_list = '<div class="ui list '.$class.' '.$variations.' '.$size.'">';
			break;
		case 'bulleted':
			$ss_list = '<div class="ui bulleted list '.$class.' '.$variations.' '.$size.'">';
			break;
		case 'ordered':
			$ss_list = '<div class="ui ordered list '.$class.' '.$variations.' '.$size.'">';
			break;
		case 'link':
			$ss_list = '<div class="ui link list '.$class.' '.$variations.' '.$size.'">';
			break;
		default:
			$ss_list = '<div class="ui list '.$class.' '.$variations.' '.$size.'">';
			break;
	}
	return $ss_list.do_shortcode($content)."</div>";
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_list', 'ss_list_func' );


/**
 * ss_list_item_func use for list item
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_list_item_func( $atts, $content = null ){
	return '<div class="item">'.do_shortcode($content).'</div>';
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_list_item', 'ss_list_item_func' );
?>