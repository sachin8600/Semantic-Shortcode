<?php 
/**
 * Transition shortcode file
 *
 * @since 1.0.0
 * @version	1.0.0
 */
/**
 * ss_transition_func use for transition div
 *
 * @since 1.0.0
 * @version	1.0.0
 */
function ss_transition_func( $atts, $content = null ) {
	$atts = shortcode_atts( array(
		'class' 		=> '',
		'animation' 	=> 'bounce',
		'direction' 	=> '',
		'action' 		=> '',
		'duration' 		=> '1s',
	), $atts, 'ss_transition' );
	extract($atts);
	$duration = (empty($duration))? "1s" : $duration;
	$animation = (empty($animation))? "bounce" : $animation;
	$tclass= "tran_".rand(1,99).rand(100,999).rand(1000,9999);
	$ss_transition = '<div class=" '.$class.' '.$tclass.' ">';
	return $ss_transition.do_shortcode($content)."</div>
	<script type='text/javascript'>jQuery(document).ready(function(){
    jQuery('.".$tclass."').transition({
        animation : '".$animation." ".$direction." ".$action."',
        duration  : '".$duration."'
      });
  	});
</script>";
}
//Adds a hook for a shortcode tag. 
add_shortcode( 'ss_transition', 'ss_transition_func' );
?>