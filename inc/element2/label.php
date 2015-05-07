<?php 
/**
 * Label shortcode file
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_label_func( $atts ) {
	$atts = shortcode_atts( array(
		'icon'			=> '',
		'label' 		=> '',
		'style'			=> 'ui label',
		'class' 		=> '',
		'size'			=> '',
		'img'			=> '',
		'sequence'		=> '',
		'attached' 		=> '',
		'color' 		=> '',
		'link' 		=> '',
	), $atts, 'ss_label' );
	extract($atts);
	$c = (empty($link))? "div" : "a";
	$a = (empty($link))? "" : "href='".$link."'";
	if(!empty($icon)){
		$icon = '<i class="'.$icon.'"></i>';
	}
	if(!empty($img)){
		$img = "<img src='".$img."' />";
	}
	switch ($sequence) {
		case 's1':
			$ss_label = '<'.$c.' class="ui image label '.$style.' '.$class.' '.$size.' '.$attached.' '.$color.'" '.$a.'>'.$label.$icon.$img.'</'.$c.'>';
			break;
		case 's2':
			$ss_label = '<'.$c.' class="ui image label '.$style.' '.$class.' '.$size.' '.$attached.' '.$color.'" '.$a.'>'.$icon.$img.$label.'</'.$c.'>';
			break;
		case 's3':
			$ss_label = '<'.$c.' class="ui image label '.$style.' '.$class.' '.$size.' '.$attached.' '.$color.'" '.$a.'>'.$img.$label.$icon.'</'.$c.'>';
			break;
		case 's4':
			$ss_label = '<'.$c.' class="ui image label '.$style.' '.$class.' '.$size.' '.$attached.' '.$color.'" '.$a.'>'.$label.$img.$icon.'</'.$c.'>';
			break;
		case 's5':
			$ss_label = '<'.$c.' class="ui image label '.$style.' '.$class.' '.$size.' '.$attached.' '.$color.'" '.$a.'>'.$img.$icon.$label.'</'.$c.'>';
			break;
		case 's6':
			$ss_label = '<'.$c.' class="ui image label '.$style.' '.$class.' '.$size.' '.$attached.' '.$color.'" '.$a.'>'.$icon.$label.$img.'</'.$c.'>';
			break;
		case 's7':
			$ss_label = '<'.$c.' class="ui label '.$style.' '.$class.' '.$size.' '.$attached.' '.$color.'" '.$a.'>'.$icon.$label.'</'.$c.'>';
			break;
		case 's8':
			$ss_label = '<'.$c.' class="ui label '.$style.' '.$class.' '.$size.' '.$attached.' '.$color.'" '.$a.'>'.$label.$icon.'</'.$c.'>';
			break;
		default:
			$ss_label = '<'.$c.' class="ui image label '.$style.' '.$class.' '.$size.' '.$attached.' '.$color.'" '.$a.'>'.$label.$icon.$img.'</'.$c.'>';
			break;
	}
	return $ss_label;
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_label', 'ss_label_func' );
 ?>