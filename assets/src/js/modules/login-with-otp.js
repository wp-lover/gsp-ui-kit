export default class Login_With_OTP {
  constructor() {
    this.section = document.getElementById("gsp-login-with-otp-section");

    if (this.section) {
      this.login_form = document.querySelector(".login-form");
      this.signup_form = document.querySelector(".signup-form");

      this.login_form_tab = document.querySelector(".login-form-tab");
      this.signup_form_tab = document.querySelector(".signup-form-tab");
      this.signup_form_tab2 = document.querySelector(".signup-form-tab-2");

      this.form_title = document.querySelector(".form-title");

      this.login_phone_number = document.querySelector('.-login-phone-number');
      this.login_password = document.querySelector('.-login-password');
      this.login_message = document.getElementById('-login-message');

      this.redirect_after_login = document.getElementById('-redirect-after-login');
      this.redirect_after_signup = document.getElementById('-redirect-after-signup');
      

      this.signup_phone_number = document.querySelector(".signup-phone-number");
      this.signup_phone_number_label = document.getElementById('-signup-phone-number-label');
      this.signup_otp_code = document.querySelector(".signup-otp-code");
      this.signup_message = document.querySelector('.signup-message');

      this.login_btn = document.querySelector(".-login-btn");
      this.signup_btn = document.querySelector(".-signup-btn");
      this.verify_otp_btn = document.querySelector('.-verify-otp-btn');

      const password = localStorage.getItem('rememberPassword');
      if (password) {
        this.login_password.value = password;
      }

      const phoneNumber = localStorage.getItem('rememberPhoneNumber');
      if (phoneNumber) {
        this.login_phone_number.value = phoneNumber;
      }
      
      this.events();
    }
  }

  events() {
    this.login_form_tab.addEventListener("click", () =>
      this.form_visiability(true)
    );

    this.signup_form_tab.addEventListener("click", () =>
      this.form_visiability(false)
    );

    this.signup_form_tab2.addEventListener("click", () =>
      this.form_visiability(false)
    );

    this.login_btn.addEventListener("click", () => this.send_login_request());

    this.signup_btn.addEventListener( 'click' , () => {
      this.send_signup_request();
    } );

    this.verify_otp_btn.addEventListener( 'click' , () => this.send_signup_otp_verification_request() );

    this.signup_phone_number.addEventListener( 'keydown' , () => {
      this.signup_message.innerHTML = '';
    } );
  } // envents ending

  form_visiability(is_login_visiable) {
    if (is_login_visiable) {
      // show the login form
      this.signup_form.classList.add("-d-none");
      this.signup_form_tab.classList.remove("-acitve-tab");

      // login form
      this.login_form_tab.classList.add("-acitve-tab");
      this.login_form.classList.remove("-d-none");

      this.form_title.innerHTML = 'Welcome to login';
    } else {
      // show the signup form
      this.login_form_tab.classList.remove("-acitve-tab");
      this.login_form.classList.add("-d-none");

      this.signup_form.classList.remove("-d-none");
      this.signup_form_tab.classList.add("-acitve-tab");

      this.form_title.innerHTML = 'Welcome to create account';
    }
  }

  send_login_request() {
    
    this.login_btn.innerHTML = '<div class="loading-spinner"></div>';

    let login_remembar = document.getElementById('remember-password');

    this.login_message.innerHTML = '';

    if (login_remembar.checked) {
      localStorage.setItem('rememberPassword', this.login_password.value); // Store 'true' as a string
      localStorage.setItem('rememberPhoneNumber', this.login_phone_number.value); // Store 'true' as a string
    }

    console.log(this.login_phone_number.value);
    console.log(this.login_password.value);


    fetch(gsp_ui_kit_common.ajax_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Important for WordPress AJAX
      },
      body: new URLSearchParams({
        action: "gsp_ui_kit_login",
        username: this.login_phone_number.value,
        password: this.login_password.value,
        nonce: gsp_ui_kit_common.nonce,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response
        if (data.success) {
          console.log(data.data);
          this.login_btn.innerHTML = 'Login';
          this.login_message.innerHTML = 'Login successfull!';
          this.login_message.style.color = 'green';
          location.replace(this.redirect_after_login.value);
        }else{
          this.login_message.innerHTML = 'Log-In Faild!';
          this.login_message.style.color = 'red';
        }
        this.login_btn.innerHTML = 'Login';
        console.log(data);
      })
      .catch((error) => {
        console.error("AJAX error:", error);
        this.login_message.innerHTML = 'Something went worng, please try again later.';
        this.login_message.style.color = 'red';
        this.login_btn.innerHTML = 'Login';
      });
  }

  send_signup_request() {

    const phone_number = this.signup_phone_number.value.replace(/[^0-9]/g, '');
    this.signup_phone_number.value = phone_number;

    if (phone_number.length != 11) {
      this.signup_message.innerHTML = 'Invalid phone number';
      this.signup_message.style.color = 'red';
      return;
    }

    this.signup_btn.innerHTML = '<div class="loading-spinner"></div>';

    fetch( gsp_ui_kit_common.ajax_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Important for WordPress AJAX
      },
      body: new URLSearchParams({
        action: "gsp_ui_kit_signup_with_otp",
        username: phone_number,
        nonce: gsp_ui_kit_common.nonce,
      }),
    } ).then ( (response ) => response.json() ).then( ( data ) => {

      if (data.success) {
        // successed response
        this.signup_phone_number.setAttribute( 'hidden' , 1);
        this.signup_btn.classList.add('-d-none');

        this.signup_otp_code.classList.remove('-d-none');
        this.verify_otp_btn.classList.remove('-d-none');
        this.signup_phone_number_label.innerHTML = 'OTP CODE';
      }else{
        // false response 
        this.signup_message.innerHTML = 'Something went wrong, Try again later.';
        this.signup_message.style.color = 'red';
      }

      console.log( data );

      // this.signup_btn.innerHTML = '<div class="loading-spinner">Create Account</div>';
      this.signup_btn.innerHTML = 'Create Account';
    } ).catch ( ( error ) => {
      console.error("AJAX error:", error);
      this.signup_btn.innerHTML = 'Create Account';
      this.signup_message.innerHTML = '"' +phone_number + '"' + ' This number might be already registed, Try with a new number,';
    });

  }

  send_signup_otp_verification_request() {

    this.verify_otp_btn.innerHTML = '<div class="loading-spinner"></div>';

    fetch( gsp_ui_kit_common.ajax_url , {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Important for WordPress AJAX
      },
      body: new URLSearchParams({
        action: "gsp_ui_kit_signup_otp_verification",
        otp_code: this.signup_otp_code.value,
        phone_number: this.signup_phone_number.value,
        nonce: gsp_ui_kit_common.nonce,
      }),
    } ).then( (response) => response.json() ).then( (data) => {
      this.verify_otp_btn.innerHTML = 'OTP Verify';
      console.log(data);
    }).catch( ( error ) => {
      console.error('otp verification error' + error);
      this.verify_otp_btn.innerHTML = 'OTP Verify';
    });
  }
}
