<?php 
/**
 * Tab shortcode file
 *
 * @since 1.0.0
 * @version	1.0.0
 */
/**
 * ss_tab_func use for tab div
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_tab_func( $atts, $content = null ) {
	$atts = shortcode_atts( array(
		'class' 		=> '',
	), $atts, 'ss_tab' );
	extract($atts);
	$ss_tab = '<div class="tab '.$class.' ">';
	return $ss_tab.do_shortcode($content)."</div>
	<script type='text/javascript'>jQuery(document).ready(function(){
    jQuery('.tab .menu .item').tab({
        history: true,
        context: jQuery('.tab')
      });
  	});
</script>";
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_tab', 'ss_tab_func' );


/**
 * ss_tab_title_func use for tab item
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_tab_title_func( $atts, $content = null ){
	$atts = shortcode_atts( array(
		'variations'=> '',
		'activeno'	=>''
	), $atts, 'ss_tab_title' );
	extract($atts);
	$title  = "";
	$active = ($active == "yes")?"active":"";
	$atitle = explode(",", $content);
	$i =1;
	foreach ($atitle as $akey => $avalue) {
		$active = ($activeno == $i)?"active":"";
		$title .= '<a class="item '.$active.'" data-tab="'.$variations.createslug($avalue).'">'.$avalue.'</a>';
		$i++;
	}
	switch ($variations) {
		case 'secondary':
			$ss_tab_title = '<div class="ui secondary menu">'.$title.'</div>';
			break;
		case 'tabular':
			$ss_tab_title = '<div class="ui top attached tabular menu">'.$title.'</div>';
			break;
		default:
			$ss_tab_title = '<div class="ui top attached tabular menu">'.$title.'</div>';
			break;
	}
	return $ss_tab_title;
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_tab_title', 'ss_tab_title_func' );

/**
 * ss_tab_content_func use for tab item content
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_tab_content_func( $atts, $content = null ){
	$atts = shortcode_atts( array(
		'variations'=> '',
		'active'	=>'',
		'title'		=>''
	), $atts, 'ss_tab_title' );
	extract($atts);
	$active = ($active == "yes")?"active":"";
	switch ($variations) {
		case 'secondary':
			$tab_class = 'ui tab segment';
			break;
		case 'tabular':
			$tab_class = 'ui bottom attached tab segment';
			break;
		default:
			$tab_class = 'ui bottom attached tab segment';
			break;
	}
	$ss_tab_content = '<div class="'.$tab_class.' '.$active.'" data-tab="'.$variations.createslug($title).'">';
	return $ss_tab_content.do_shortcode($content).'</div>';
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_tab_content', 'ss_tab_content_func' );

function createslug($str){
	$ostr = $str;

	if ( '' == $str )
		return $str;
	$str = preg_replace('|[^a-z0-9-~+_.?#=!&;,/:%@$\|*\'()\\x80-\\xff]|i', '', $str);
	$strip = array('%0d', '%0a', '%0D', '%0A');
	$str = _deep_replace($strip, $str);
	$str = str_replace(';//', '://', $str);
	if ( 'display' == $_context ) {
		$str = wp_kses_normalize_entities( $str );
		$str = str_replace( '&amp;', '&#038;', $str );
		$str = str_replace( "'", '&#039;', $str );
	}
	return $str;
}
?>