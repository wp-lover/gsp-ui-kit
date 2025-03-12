<?php

namespace GSP_UI_Kit\WooCommerce;

defined( 'ABSPATH' ) || exit;

class Add_Demo_PDF_Post_Meta_Field
{

    public static function add_pdf_url_meta_box()
    {
        add_meta_box(
            'pdf_url_meta_box',            // ID of the meta box
            'Demo PDF URL',                     // Title of the meta box
            [__CLASS__, 'render_pdf_url_meta_box'],     // Callback function to render the meta box
            'product',                     // Post type where the meta box will appear
            'normal',                      // Context (normal, side, advanced)
            'high'                         // Priority (default, low, high)
        );
    }

    // Render the Meta Box HTML
    public static function render_pdf_url_meta_box($post)
    {
        // Retrieve the current value of the custom field
        $pdf_url = get_post_meta($post->ID, 'gsp_ui_kit_demo_pdf_url', true);

        // Render the input field for PDF URL
?>
        <label for="pdf_url">Enter Demo PDF URL:</label>
        <input type="text" id="pdf_url" name="pdf_url" value="<?php echo esc_url($pdf_url); ?>" style="width:100%;" />
        <p class="description">Enter the URL to the PDF file.</p>
<?php
    }

    // Save the Meta Box Data
    public static function save_pdf_url_meta_box_data($post_id)
    {
        // Check if our nonce is set and if the request is valid
        if (isset($_POST['pdf_url'])) {
            $pdf_url = sanitize_text_field($_POST['pdf_url']);

            // Save the PDF URL as a custom field
            update_post_meta($post_id, 'gsp_ui_kit_demo_pdf_url', $pdf_url);
        }
    }

     // Display the PDF link above the Add to Cart button
     public static function display_pdf_link_above_add_to_cart_on_single_product()
     {
 
 
         // Get the PDF URL from the custom field
         $pdf_url = get_post_meta( get_the_ID(), 'gsp_ui_kit_demo_pdf_url', true);
 
         // Check if the PDF URL exists
         if ($pdf_url) {
             // Output the "View PDF" link
             echo '<p class="gsp-ui-kit-demo-pdf"><a href="' . esc_url($pdf_url) . '" target="_blank" class="button alt -btn">View Demo PDF</a></p>';
         }
     }
 
     // Display the PDF link above the Add to Cart button
     public function display_pdf_link_above_add_to_cart_on_shop_page()
     {
 
         global $product;
         $product_id = $product->get_id();
 
         // Get the PDF URL from the custom field
         $pdf_url = get_post_meta( $product_id , 'gsp_ui_kit_demo_pdf_url', true);
 
         // Check if the PDF URL exists
         if ($pdf_url) {
             // Output the "View PDF" link
             echo '<p class="gsp-ui-kit-demo-pdf"><a href="' . esc_url($pdf_url) . '" target="_blank" class="button alt -btn">View Demo PDF</a></p>';
         }
     }
}
