<?php 
/**
 * Input shortcode file
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_input_func( $atts ) {
	$atts = shortcode_atts( array(
		'placeholder'	=> '',
		'label' 		=> '',
		'style'			=> 'ui input',
		'class' 		=> '',
		'size'			=> '',
		'variation'		=> '',
		'type'			=> '',
		'name' 			=> '',
		'id' 			=> '',
	), $atts, 'ss_input' );
	extract($atts);
	$findme   = 'icon';
	$pos = strpos($label, $findme);
	if ($pos != false) {
		$label ='<i class="'.$label.'"></i>';
	}
	switch ($style) {
		case 'loading':
			$ss_input = '<div class="ui icon input '.$style.' '.$class.' '.$size.' '.$variation.'"><input placeholder="'.$placeholder.'" type="'.$type.'" name="'.$name.'" id="'.$id.'"><i class="search icon"></i></div>';
			break;
		case 'left loading':
			$ss_input = '<div class="ui icon input '.$style.' '.$class.' '.$size.' '.$variation.'"><input placeholder="'.$placeholder.'" type="'.$type.'" name="'.$name.'" id="'.$id.'"><i class="search icon"></i></div>';
			break;
		case 'icon':
			$ss_input = '<div class="ui input '.$style.' '.$class.' '.$size.' '.$variation.'"><input placeholder="'.$placeholder.'" type="'.$type.'" name="'.$name.'" id="'.$id.'">'.$label.'</div>';
			break;
		case 'left icon':
			$ss_input = '<div class="ui input '.$style.' '.$class.' '.$size.' '.$variation.'"><input placeholder="'.$placeholder.'" type="'.$type.'" name="'.$name.'" id="'.$id.'">'.$label.'</div>';
			break;
		case 'labeled':
			$ss_input = '<div class="ui input '.$style.' '.$class.' '.$size.' '.$variation.'"><div class="ui label">'.$label.'</div><input placeholder="'.$placeholder.'" type="'.$type.'" name="'.$name.'" id="'.$id.'"></div>';
			break;
		case 'corner labeled':
			$ss_input = '<div class="ui input '.$style.' '.$class.' '.$size.' '.$variation.'"><input placeholder="'.$placeholder.'" type="'.$type.'" name="'.$name.'" id="'.$id.'"><div class="ui corner label">'.$label.'</div></div>';
			break;
		case 'right labeled':
			$ss_input = '<div class="ui input '.$style.' '.$class.' '.$size.' '.$variation.'"><input placeholder="'.$placeholder.'" type="'.$type.'" name="'.$name.'" id="'.$id.'"><div class="ui label">'.$label.'</div></div>';
			break;
		case 'action':
			$ss_input = '<div class="ui input '.$style.' '.$class.' '.$size.' '.$variation.'"><input placeholder="'.$placeholder.'" type="'.$type.'" name="'.$name.'" id="'.$id.'"><button class="ui button">'.$label.'</button></div>';
			break;
		default:
			$ss_input = '<div class="'.$style.' '.$class.' '.$size.'">';
			if(!empty($label)){
				$ss_input .='<label>'.$label.'</label>';
			}
			$ss_input .='<input placeholder="'.$placeholder.'" type="'.$type.'" name="'.$name.'" id="'.$id.'"></div>';
			break;
	}
	return $ss_input;
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_input', 'ss_input_func' );
 ?>