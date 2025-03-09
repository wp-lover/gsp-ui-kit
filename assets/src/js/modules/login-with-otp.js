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
      this.signup_otp_code = document.querySelector(".signup-otp-code");

      this.login_btn = document.querySelector(".-login-btn");
      this.signup_btn = document.querySelector(".-signup-btn");

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
  }

  form_visiability(is_login_visiable) {
    if (is_login_visiable) {
      // show the login form
      this.signup_form.classList.add("-d-none");
      this.signup_form_tab.classList.remove("-acitve-tab");

      // login form
      this.login_form_tab.classList.add("-acitve-tab");
      this.login_form.classList.remove("-d-none");
    } else {
      // show the signup form
      this.login_form_tab.classList.remove("-acitve-tab");
      this.login_form.classList.add("-d-none");

      this.signup_form.classList.remove("-d-none");
      this.signup_form_tab.classList.add("-acitve-tab");
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
}
