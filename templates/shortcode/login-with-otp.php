<?php 

$redirect_after_login = 'https://proximaedutech.com/free-courses/';
$redirect_after_signup = 'http://localhost/writteninfo/';
?>

<div id="gsp-login-with-otp-section" class="-card">
      <div>
        <h2 class="form-title">
          Welcome to login
        </h2>
      </div>
      <div class="form-tab">
        <p class="login-form-tab -acitve-tab -mr-1">
          Login your account
        </p>
        <p class="signup-form-tab">Create an account</p>
      </div>
      <section class="login-form">
        <div class="-from-input">
        <div class="text-left">
        <label for="-login-phone-number">Registered Phone Number</label>
        </div>
          <input
            type="text"
            id="-login-phone-number"
            class="-input -w-100 -login-phone-number"
            placeholder="Enter your phone number"
          />
        </div>
        <div class="-from-input">
        <div class="text-left">
        <label for="-login-password">Password</label>
        </div>
          <input
            type="text"
            id="-login-password"
            class="-input -w-100 -login-password"
            placeholder="Type password"
          />
        </div>
        <div class="-form-input">
          <label id="-login-message" ></label>
        </div>
        <div class="-form-input -mt-3">
          <input type="checkbox" id="remember-password" />
          <label for="remember-password"
            >Remember password</label
          >
        </div>
        <div class="-from-input -mt-3">
          <input type="text" id="-redirect-after-login" hidden value="<?php echo esc_url( $redirect_after_login );?>">
          <button class="-login-btn -btn -w-100">
            Login
          </button>
        </div>
        <div class="-from-input -mt-2">
            <span>If you don't have an account, then </span>
            <a href="#" class="signup-form-tab-2">Create an account</a>
        </div>
      </section>
      <section class="signup-form -d-none">
        <div class="-from-input">
        <div class="text-left">
        <label for="signup-phone-number">Phone Number</label>
        </div>
          <input
            type="text"
            id="signup-phone-number"
            class="signup-phone-number -input -w-100 -phone-number"
            placeholder="01712345678"
          />
        </div>
        <div class="-form-input">
          <input
            type="text"
            
            class="signup-otp-code -input -w-100 -phone-number -d-none"
            placeholder="Type your phone number"
          />
        </div>
        <input type="text" id="-redirect-after-signup" hidden value="<?php echo esc_url( $redirect_after_signup );?>">
        <div class="-from-input -mt-3">
          <button class="-signup-btn -btn -w-100">
            Create Account
          </button>
        </div>
      </section>
    </div><!-- #gsp-login-section -->
    