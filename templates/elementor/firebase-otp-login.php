<section class="otp-container -card">
    <h2><?php echo esc_html( $settings['gsp_ui_kit_firebase_otp_login_from_title_text'] ?? '' ) ?></h2>
    <div id="recaptcha-container"></div>
    <label for="otp-input" id="otp-message"><?php echo esc_html( $settings['gsp_ui_kit_firebase_otp_login_message_text'] ?? '' ) ?></label>
    <input type="text" id="phone-number" class="-input" placeholder="<?php echo esc_html( $settings['gsp_ui_kit_firebase_otp_login_number_placeholder'] ?? '' ) ?>">
    <button id="send-otp" class="-mt-1"><?php echo esc_html( $settings['gsp_ui_kit_firebase_otp_login_send_otp_text'] ?? '' ) ?></button>

    <input type="text" id="otp-input" placeholder="<?php echo esc_html( $settings['gsp_ui_kit_firebase_otp_login_otp_code_placeholder_text'] ?? '' ) ?>" style="display:none;">
    <button id="verify-otp" class="-mt-1 -input" style="display:none;"><?php echo esc_html( $settings['gsp_ui_kit_firebase_otp_login_verify_otp_text'] ?? '' ) ?></button>
    <input type="text" id="redirect-url" hidden value="<?php echo esc_url( $settings['gsp_ui_kit_firebase_otp_login_redirected_url'] ?? '' ) ?>">
</section>