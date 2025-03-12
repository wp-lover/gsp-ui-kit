<section class="login-form">
    <div class="-from-input">
        <div class="text-left">
            <label for="-login-phone-number">Registered Phone Number</label>
        </div>
        <input
            type="text"
            id="-login-phone-number"
            class="-input -w-100 -login-phone-number"
            placeholder="Enter your phone number" />
    </div>
    <div class="-from-input">
        <div class="text-left">
            <label for="-login-password">Password</label>
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
        <label for="remember-password">Remember password</label>
    </div>
    <div class="-from-input -mt-3">
        <input type="text" id="-redirect-after-login" hidden value="<?php echo esc_url($redirect_after_login); ?>">
        <button class="-login-btn -btn -w-100">
            Login
        </button>
    </div>
    <div class="-from-input -mt-2">
        <span class="-forget-password-btn -link-text">Forget Password?</span>
    </div>
    <div class="-from-input -mt-2">
        <span>If you don't have an account, then </span>
        <span class="signup-form-tab-2 -link-text">Create an account</span>
    </div>
</section>