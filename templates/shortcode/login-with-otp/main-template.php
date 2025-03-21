<?php

$redirect_after_login = 'https://proximaedutech.com/free-courses/';
$redirect_after_signup = 'http://localhost/writteninfo/';

$hide_login = isset( $_GET['forget-password'] ) || isset( $_GET['create-account'] ) ? '-d-none' : '';

$signup_active = $show_signup = isset( $_GET['create-account'] ) ? '-acitve-tab' : '';
$login_active = $show_signup = isset( $_GET['create-account'] ) ? '' : '-acitve-tab';

$form_title = 'Welcome to login';

if (isset( $_GET['forget-password'] )) {
    $form_title = 'Do you want to recover your password?';
}

if (isset( $_GET['create-account'] )) {
    $form_title = 'Welcome to create account';
}

?>

<?php        

        if ( !  isset( $_GET['phone-number'] ) && ! isset( $_GET['otp']) ) {     
?>
<div id="gsp-login-with-otp-section" class="-card">
    <div>
        <h2 class="form-title">
            <?php echo $form_title; ?>
        </h2>
    </div>
    <div class="login-signup-section">
        <div class="form-tab">
            <p class="login-form-tab <?php  echo $login_active;?> -mr-1">
                আপনার একাউন্ট লগইন করুন
            </p>

            <p class="signup-form-tab <?php  echo $signup_active;?>">একাউন্ট তৈরি করতে ক্লিক/টাচ করুন </p>
        </div>
        <!-- login-form -->
        <?php 
        include_once __DIR__ . '/login-form.php';
        ?>
        <!-- signup-form -->
        <?php include_once __DIR__ . '/signup-form.php'; ?>
    </div>
    <?php 
        include_once __DIR__ . '/password-forget-form.php'; 
     ?>
    
</div><!-- #gsp-login-section -->
<?php  } ?>

<?php 

    if ( isset( $_GET['phone-number'] ) && isset( $_GET['otp'] ) ) {
        include_once __DIR__ . '/update-profile.php';
    }
    
?>