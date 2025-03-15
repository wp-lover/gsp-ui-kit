<section class="login-form <?php echo $hide_login; ?>">
    <div class="-from-input">
        <div class="text-left">
            <label for="-login-phone-number">মোবাইল নাম্বার</label>
        </div>
        <input
            type="text"
            id="-login-phone-number"
            class="-input -w-100 -login-phone-number"
            placeholder="মোবাইল নাম্বার" />
    </div>
    <div class="-from-input">
        <div class="text-left">
            <label for="-login-password">পাসওয়ার্ড</label>
        </div>
        <input
            type="text"
            id="-login-password"
            class="-input -w-100 -login-password"
            placeholder="Type password" />
    </div>
    <div class="-form-input">
        <label id="-login-message"></label>
    </div>
    <div class="-form-input -mt-3">
        <input type="checkbox" id="remember-password" />
        <label for="remember-password">পাসওয়ার্ড সেভ করুন</label>
    </div> 
    <div class="-from-input -mt-3">
        <input type="text" id="-redirect-after-login" hidden value="<?php echo esc_url($redirect_after_login); ?>">
        <button class="-login-btn -btn -w-100">
            লগইন করুন
        </button>
    </div>
    <div class="-from-input -mt-2">
        <span class="-forget-password-btn -link-text">পাসওয়ার্ড ভুলে গেছেন?</span>
    </div>
    <div class="-from-input -mt-2"> 
        <span> একাউন্ট না থাকলে এখনি একটি একাউন্ট তৈরি করতে</span>
        <span class="signup-form-tab-2 -link-text">ক্লিক/টাচ করুন</span>
    </div>
</section>