<?php


?>
<section class="forget-password-form -d-none">
    <div class="-input-form__forgotten-number">
        <label>Registered Phone Number</label>
        <input type="number" class="-forgotten-number" placeholder="01712345678">
    </div>

    <div class="-input-form__forgotten-number-otp -d-none">
        <label>OTP code</label>
        <input type="number" class="-forgotten-otp" placeholder="1234">
        <div class="">
            <label>Password</label>
            <input type="text" class="-forgotten-password" placeholder="Type a password">
        </div>
        <div class="">
            <label>Confirm Password</label>
            <input type="text" class="-forgotten-confirm-password" placeholder="Type the confirm password">
        </div>
    </div>
    <p class="-forgotten-password-message"></p>
    <button class="-request-new-password-btn -w-100 mt-2">Request New Password</button>
    <button class="-update-password-btn -w-100 mt-2 -d-none">Update Password</button>

    <p class="text-center mt-2">Go back to <span class="-back-to-login-btn -link-text">login</span></p>
</section>