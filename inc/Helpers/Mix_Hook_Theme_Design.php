<?php


// gsp_translate_my_account_text
add_filter( 'gettext', function ( $translated_text, $text, $domain ) {
    if ( $domain === 'woocommerce' ) {
        switch ( $translated_text ) {
            case 'My account':
                $translated_text = __( 'মাই একাউন্ট', 'woocommerce' );
                break;
        }
    }
    return $translated_text;
}, 20, 3 );

// gsp_translate_my_account_text
add_filter( 'gettext', function ( $translated_text, $text, $domain ) {
    if ( $domain === 'woocommerce' ) {
        switch ( $translated_text ) {
            case 'Addresses':
                $translated_text = __( 'এড্রেস', 'woocommerce' );
                break;
        }
    }
    return $translated_text;
}, 20, 3 );

// gsp_translate_my_account_text
add_filter( 'gettext', function ( $translated_text, $text, $domain ) {
    if ( $domain === 'woocommerce' ) {
        switch ( $translated_text ) {
            case 'Account details':
                $translated_text = __( 'একাউন্ট ডিটেইলস', 'woocommerce' );
                break;
        }
    }
    return $translated_text;
}, 20, 3 );

// gsp_translate_my_account_text
add_filter( 'gettext', function ( $translated_text, $text, $domain ) {
    if ( $domain === 'woocommerce' ) {
        switch ( $translated_text ) {
            case 'Logout':
                $translated_text = __( 'লগ-আউট', 'woocommerce' );
                break;
        }
    }
    return $translated_text;
}, 20, 3 );

// gsp_translate_my_account_text
add_filter( 'gettext', function ( $translated_text, $text, $domain ) {
    if ( $domain === 'woocommerce' ) {
        switch ( $translated_text ) {
            case 'Downloads':
                $translated_text = __( 'ডাউনলোড', 'woocommerce' );
                break;
        }
    }
    return $translated_text;
}, 20, 3 );

// gsp_translate_my_account_text
add_filter( 'gettext', function ( $translated_text, $text, $domain ) {
    if ( $domain === 'woocommerce' ) {
        switch ( $translated_text ) {
            case 'Orders':
                $translated_text = __( 'অর্ডারসমূহ', 'woocommerce' );
                break;
        }
    }
    return $translated_text;
}, 20, 3 );


// gsp_translate_login_text
add_filter( 'gettext', function ( $translated_text, $text, $domain ) {
    if ( $domain === 'woocommerce' ) {
        switch ( $translated_text ) {
            case 'Login':
                $translated_text = __( 'লগইন', 'flatsome' );
                break;
        }
    }
    return $translated_text;
}, 20, 3 );


// hide_card_on_specific_pages
add_action('wp_head', function () {
    if (is_page(array(591, 21))) {  // Replace 12, 34 with your page IDs
        echo '<style>.cart-item.has-icon.has-dropdown { display: none !important; }</style>';
    }
    });

// replace login form text
add_filter( 'gettext', function( $translated_text, $text, $domain ) {
if ( $text === 'Username or email address' && $domain === 'woocommerce' ) {
    return 'Registered Phone Number'; // Change this text
}
return $translated_text;
}, 10, 3 );


add_filter( 'gettext', function ( $translated_text, $text, $domain ) {
if ( 'tutor' === $domain && 'Enroll Course' === $text ) {
    $translated_text = __( 'এনরোল করুন', 'tutor' ); // Replace "Your New Text"
}
return $translated_text;
}, 20, 3 ); 

add_filter( 'gettext', function ( $translated_text, $text, $domain ) {
if ( 'tutor' === $domain && 'Start Learning' === $text ) {
    $translated_text = __( 'শেখা শুরু করো', 'tutor' ); // Replace "Your New Text"
} 
return $translated_text;
} , 20, 3 );

add_filter( 'gettext', function ( $translated_text, $text, $domain ) {
if ( 'tutor' === $domain && 'Continue Learning' === $text ) {
    $translated_text = __( 'শেখা চালিয়ে যাও', 'tutor' ); // Replace "Your New Text"
}
return $translated_text;
} , 20, 3 );

add_action( 'tutor_course/loop/after_content', function () {
$course_id = get_the_ID();
$product_id = get_post_meta($course_id, '_tutor_course_product_id', true);
$product = $product_id ? wc_get_product($product_id) : null;
$price_type = get_post_meta($course_id, '_tutor_course_price_type', true);

$course_id = get_the_ID();
$user_id = get_current_user_id();

if ( $course_id) { // Ensure user is logged in, and course ID exists.
    if ( ! tutor_utils()->is_enrolled($course_id, $user_id)) {
           if ($product) {
                $checkout_url = wc_get_checkout_url();
                $add_to_cart_url = esc_url(wc_get_cart_url() . "?add-to-cart=$product_id&redirect=true&product-id=$product_id");
        
            ?>
<a href="<?php echo esc_url(get_the_permalink()); ?>" style="<?php echo $price_type === 'paid' ? '' : 'margin-top:55px;'; ?>" class="-btn text-center -course-enroll-btn text-center -my-2 -mx-4">
                    বিস্তারিত দেখুন
                </a>
<a href="<?php echo $add_to_cart_url; ?>" class="-btn -course-enroll-btn text-center -my-2 -mx-4">এনরোল করুন</a>
                
            <?php
            }
    } 
}


} );


add_filter( 'lostpassword_url', function ( $lostpassword_url, $redirect ) {
$custom_url = '/login?forget-password=1'; // Replace with your desired URL
return $custom_url;
}, 10, 2 );

add_action('woocommerce_login_form_end', 
function () {
echo '<a href="/login?create-account=1" style="color:#0AADEA;">Create an account</a>'; // Replace with your link and text
});


function custom_remove_flatsome_footer() {
    remove_action('flatsome_footer', 'flatsome_footer_default', 10);
}
add_action('wp', 'custom_remove_flatsome_footer');

function custom_flatsome_footer () {
	include_once GSP_UI_KIT_ROOT_PATH . '/templates/footer/footer.php';
}
add_action('flatsome_footer', 'custom_flatsome_footer', 10);