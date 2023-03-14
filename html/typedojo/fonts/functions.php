<?php
/*
 * Functions file for Kapee child
 */

/*
 * Enqueue script and styles
 */
function kapee_child_enqueue_styles() {
	$theme   = wp_get_theme( 'Kapee' );
	$version = $theme->get( 'Version' );
	wp_enqueue_style( 'kapee-child-style', get_stylesheet_directory_uri().'/style.css',array( 'kapee-style', 'kapee-basic' ), $version );
}
add_action( 'wp_enqueue_scripts', 'kapee_child_enqueue_styles', 10010 );


/*********************************************************************
                        Cutom Code
**********************************************************************/

add_filter('the_content', function($content) {
	return str_replace(array("<iframe", "</iframe>"), array('<div class="iframe-container"><iframe', "</iframe></div>"), $content);
});

add_filter('embed_oembed_html', function ($html, $url, $attr, $post_id) {
	if(strpos($html, 'youtube.com') !== false || strpos($html, 'youtu.be') !== false){
  		return '<div class="embed-responsive  embed-responsive-16by9">' . $html . '</div>';
	} else {
	 return $html;
	}
}, 10, 4);


add_filter('embed_oembed_html', function($code) {
  return str_replace('<iframe', '<iframe class="embed-responsive-item"  ', $code);
});

add_filter('single_template', 'check_for_category_single_template');
function check_for_category_single_template( $t )
{
  foreach( (array) get_the_category() as $cat )
  {
    if ( file_exists(get_stylesheet_directory() . "/single-category-{$cat->slug}.php") ) return get_stylesheet_directory() . "/single-category-{$cat->slug}.php";
    if($cat->parent)
    {
      $cat = get_the_category_by_ID( $cat->parent );
      if ( file_exists(get_stylesheet_directory() . "/single-category-{$cat->slug}.php") ) return get_stylesheet_directory() . "/single-category-{$cat->slug}.php";
    }
  }
  return $t;
}

add_filter( 'discourse_email_verification', 'custom_discourse_email_verification' );
function custom_discourse_email_verification( $require_activation ) {
    return false;
}

/**
 * @snippet       Add Custom Field to Product Variations - WooCommerce
 * @compatible    WooCommerce 4.6
 */

// -----------------------------------------
// 1. Add custom field input @ Product Data > Variations > Single Variation

add_action( 'woocommerce_variation_options_pricing', 'bbloomer_add_custom_field_to_variations', 10, 3 );

function bbloomer_add_custom_field_to_variations( $loop, $variation_data, $variation ) {
   woocommerce_wp_text_input( array(
'id' => 'purchase_price' . $loop . ']',
'class' => 'short',
'label' => __( 'Prix achat', 'woocommerce' ),
'value' => get_post_meta( $variation->ID, 'purchase_price', true )
   ) );
}

// -----------------------------------------
// 2. Save custom field on product variation save

add_action( 'woocommerce_save_product_variation', 'bbloomer_save_custom_field_variations', 10, 2 );

function bbloomer_save_custom_field_variations( $variation_id, $i ) {
   $custom_field = $_POST['purchase_price'][$i];
   if ( isset( $custom_field ) ) update_post_meta( $variation_id, 'purchase_price', esc_attr( $custom_field ) );
}

// -----------------------------------------
// 3. Store custom field value into variation data

add_filter( 'woocommerce_available_variation', 'bbloomer_add_custom_field_variation_data' );

function bbloomer_add_custom_field_variation_data( $variations ) {
   $variations['purchase_price'] = '<div class="woocommerce_custom_field">Custom Field: <span>' . get_post_meta( $variations[ 'variation_id' ], 'purchase_price', true ) . '</span></div>';
   return $variations;
}

add_filter('acf/settings/remove_wp_meta_box', '__return_false');

function extractUTubeVidId($url){
    /*
    * type1: http://www.youtube.com/watch?v=9Jr6OtgiOIw
    * type2: http://www.youtube.com/watch?v=9Jr6OtgiOIw&feature=related
    * type3: http://youtu.be/9Jr6OtgiOIw
    */
    $vid_id = "";
    $flag = false;
    if(isset($url) && !empty($url)){
        /*case1 and 2*/
        $parts = explode("?", $url);
        if(isset($parts) && !empty($parts) && is_array($parts) && count($parts)>1){
            $params = explode("&", $parts[1]);
            if(isset($params) && !empty($params) && is_array($params)){
                foreach($params as $param){
                    $kv = explode("=", $param);
                    if(isset($kv) && !empty($kv) && is_array($kv) && count($kv)>1){
                        if($kv[0]=='v'){
                            $vid_id = $kv[1];
                            $flag = true;
                            break;
                        }
                    }
                }
            }
        }

        /*case 3*/
        if(!$flag){
            $needle = "youtu.be/";
            $pos = null;
            $pos = strpos($url, $needle);
            if ($pos !== false) {
                $start = $pos + strlen($needle);
                $vid_id = substr($url, $start, 11);
                $flag = true;
            }
        }
    }
    return $vid_id;
}

function custom_post_type_matos() {
    $labels = array(
        // Les labels de votre custom post type
    );

    $args = array(
        // Les arguments de votre custom post type
        'rewrite' => array(
            'slug' => 'matos/%cat_matos%/%marque%',
            'with_front' => false
        )
    );

    register_post_type('matos', $args);
}
add_action('init', 'custom_post_type_matos');

function matos_permalink($permalink, $post) {
    if ($post->post_type == 'matos' && strpos($permalink, '%cat_matos%') !== false) {
        $terms = get_the_terms($post->ID, 'cat_matos');
        if ($terms) {
            $cat_matos_term = array_pop($terms);
            $permalink = str_replace('%cat_matos%', $cat_matos_term->slug, $permalink);
        }
    }
    if ($post->post_type == 'matos' && strpos($permalink, '%marque%') !== false) {
        $terms = get_the_terms($post->ID, 'marque');
        if ($terms) {
            $marque_term = array_pop($terms);
            $permalink = str_replace('%marque%', $marque_term->slug, $permalink);
        }
    }
    return $permalink;
}
add_filter('post_type_link', 'matos_permalink', 10, 2);
