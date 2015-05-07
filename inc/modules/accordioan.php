<?php 
/**
 * Accordioan shortcode file
 *
 * @since 1.0.0
 * @version	1.0.0
 */
/**
 * ss_accordioan_func use for accordioan div
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_accordioan_func( $atts, $content = null ) {
	$atts = shortcode_atts( array(
		'class' 		=> '',
		'variations'	=> '',
	), $atts, 'ss_accordioan' );
	extract($atts);

	switch ($variations) {
		case 'menu':
			$ss_accordioan = '<div class="ui vertical accordion menu '.$class.' ">';
			break;
		case 'fluid':
			$ss_accordioan = '<div class="ui styled fluid accordion'.$class.' ">';
			break;
		case 'styled':
			$ss_accordioan = '<div class="ui styled accordion '.$class.' ">';
			break;
		default:
			$ss_accordioan = '<div class="ui accordion '.$class.' ">';
			break;
	}
	return $ss_accordioan.do_shortcode($content).'</div><script type="text/javascript">jQuery(".ui.accordion").accordion();</script>';
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_accordioan', 'ss_accordioan_func' );


/**
 * ss_item_func use for accordioan item
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_item_func( $atts, $content = null ){
	$atts = shortcode_atts( array(
		'title' 	=> '',
		'href' 		=> '',
		'active'	=> '',
		'variations'=> '',
	), $atts, 'ss_item' );
	extract($atts);
	$active = ($active == "yes")?"active":"";
	$href =(empty($href))?"#":$href;
	switch ($variations) {
		case 'menu':
			$ss_item = '<div class="item"><a class="'.$active.' title" href="'.$href.'"><i class="dropdown icon"></i>'.$title.'</a><div class="content '.$active.'">'.do_shortcode($content).'</div></div>';
			break;
		case 'fluid':
			$ss_item = '<div class="'.$active.' title"> <i class="dropdown icon"></i>'.$title.'</div><div class="content '.$active.'">'.do_shortcode($content).'</div>';
			break;
		case 'styled':
			$ss_item = '<div class="'.$active.' title"> <i class="dropdown icon"></i>'.$title.'</div><div class="content '.$active.'">'.do_shortcode($content).'</div>';
			break;
		default:
			$ss_item = '<div class="'.$active.' title"> <i class="dropdown icon"></i>'.$title.'</div><div class="content '.$active.'">'.do_shortcode($content).'</div>';
			break;
	}
	return $ss_item;
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_item', 'ss_item_func' );
?>