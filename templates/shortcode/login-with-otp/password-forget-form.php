<?php 

$show_forget_password = isset( $_GET['forget-password'] ) ? '' : '-d-none';

?>
<section class="forget-password-form <?php echo $show_forget_password; ?>">
    <div class="-input-form__forgotten-number">
        <label>মোবাইল নাম্বার</label>
        <input type="number" class="-forgotten-number" placeholder="মোবাইল নাম্বার">
    </div>

    <div class="-input-form__forgotten-number-otp -d-none"> 
        <label>ওটিপি কোড</label>
        <input type="number" class="-forgotten-otp" placeholder="1234">
        <div class="">
            <label>পাসওয়ার্ড</label>
            <input type="text" class="-forgotten-password" placeholder="Type a password">
        </div>
        <div class="">
            <label>কনফার্ম পাসওয়ার্ড</label>
            <input type="text" class="-forgotten-confirm-password" placeholder="Type the confirm password">
        </div>
    </div>
    <p class="-forgotten-password-message"></p>
    <button class="-request-new-password-btn -w-100 mt-2">ওটিপি পেতে ক্লিক/টাচ করুন</button>
    <button class="-update-password-btn -w-100 mt-2 -d-none">পাসওয়ার্ড আপডেট করুন</button>

    <p class="text-center mt-2">লগইন করতে  <span class="-back-to-login-btn -link-text">ক্লিক করুন</span></p>
</section>