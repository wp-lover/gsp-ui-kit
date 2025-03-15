<?php

$show_signup = isset( $_GET['create-account'] ) ? '' : '-d-none';

?>
<section class="signup-form <?php echo $show_signup; ?>">
    <div class="-from-input__name">
        <label>আপনার নাম লিখুন</label>
        <input type="text"
            class="signup-name -input -w-100"
            placeholder="আপনার নাম" />
    </div>
    <div class="-from-input__phone">
        <label>আপনার মোবাইল নাম্বার লিখুন</label>
        <input type="text"
            class="signup-phone-number -input -w-100 -phone-number"
            placeholder="মোবাইল নাম্বার" /> 
    </div>
    <div class="-form-input__otp -d-none">
        <label>ওটিপি কোড দিন</label>
        <input
            type="number"
            class="signup-otp-code -input -w-100"
            placeholder="Type OTP" />
    </div>
    <input type="text" id="-redirect-after-signup" hidden value="<?php echo esc_url($redirect_after_signup); ?>">
    <p class="signup-message"></p>
    <div class="-from-input -mt-3">
        <button class="-signup-btn -btn -w-100">
            একাউন্ট তৈরি করুন
        </button>
        <button class="-verify-otp-btn -btn -w-100 -d-none">
            ওটিপি কোড ভেরিফাই করুন
        </button>
    </div>
</section>