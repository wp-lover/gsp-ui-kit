<?php

$redirect_after_login = 'https://proximaedutech.com/free-courses/';
$redirect_after_signup = 'http://localhost/writteninfo/';
?>

<?php        

        if ( !  isset( $_GET['phone-number'] ) && ! isset( $_GET['otp']) ) {     
?>
<div id="gsp-login-with-otp-section" class="-card">
    <div>
        <h2 class="form-title">
            Welcome to login
        </h2>
    </div>
    <div class="login-signup-section">
        <div class="form-tab">
            <p class="login-form-tab -acitve-tab -mr-1">
                Login your account
            </p>

            <p class="signup-form-tab">Create an account</p>
        </div>
        <!-- login-form -->
        <?php include_once __DIR__ . '/login-form.php'; ?>
        <!-- signup-form -->
        <?php include_once __DIR__ . '/signup-form.php'; ?>
    </div>
    <?php include_once __DIR__ . '/password-forget-form.php'; ?>
</div><!-- #gsp-login-section -->
<?php  } ?>

<?php 

    if ( isset( $_GET['phone-number'] ) && isset( $_GET['otp'] ) ) {
        include_once __DIR__ . '/update-profile.php';
    }
    
?>