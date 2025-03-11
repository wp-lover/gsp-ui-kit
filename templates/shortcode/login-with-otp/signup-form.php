<section class="signup-form -d-none">
    <div class="-from-input__name">
        <label>Your name</label>
        <input type="text"
            class="signup-name -input -w-100"
            placeholder="Sakib Islam" />
    </div>
    <div class="-from-input__phone">
        <label>Phone Number</label>
        <input type="text"
            class="signup-phone-number -input -w-100 -phone-number"
            placeholder="01712345678" />
    </div>
    <div class="-form-input__otp -d-none">
        <label>OTP Code</label>
        <input
            type="number"
            class="signup-otp-code -input -w-100"
            placeholder="Type OTP" />
    </div>
    <input type="text" id="-redirect-after-signup" hidden value="<?php echo esc_url($redirect_after_signup); ?>">
    <p class="signup-message"></p>
    <div class="-from-input -mt-3">
        <button class="-signup-btn -btn -w-100">
            Create Account
        </button>
        <button class="-verify-otp-btn -btn -w-100 -d-none">
            Verify OTP
        </button>
    </div>
</section>