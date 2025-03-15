export default class Login_With_OTP {
  constructor() {
    this.section = document.getElementById("gsp-login-with-otp-section");

    if (this.section) {
      this.login_signup_section = document.querySelector(
        ".login-signup-section"
      );
      this.login_form = document.querySelector(".login-form");
      this.signup_form = document.querySelector(".signup-form");
      this.forget_password_form = document.querySelector(
        ".forget-password-form"
      );

      this.login_form_tab = document.querySelector(".login-form-tab");
      this.signup_form_tab = document.querySelector(".signup-form-tab");
      this.signup_form_tab2 = document.querySelector(".signup-form-tab-2");

      this.form_title = document.querySelector(".form-title");

      this.login_phone_number = document.querySelector(".-login-phone-number");
      this.login_password = document.querySelector(".-login-password");
      this.login_message = document.getElementById("-login-message");

      this.redirect_after_login = document.getElementById(
        "-redirect-after-login"
      );
      this.redirect_after_signup = document.getElementById(
        "-redirect-after-signup"
      );

      this.signup_name = document.querySelector(".signup-name");
      this.signup_phone_number = document.querySelector(".signup-phone-number");
      this.signup_otp_code = document.querySelector(".signup-otp-code");
      this.signup_message = document.querySelector(".signup-message");

      this.forgotten_phone_number =
        document.querySelector(".-forgotten-number");
      this.forgotten_otp = document.querySelector(".-forgotten-otp");
      this.password = document.querySelector('.-forgotten-password');
      this.confirm_password = document.querySelector('.-forgotten-confirm-password');
      this.forgotten_message = document.querySelector(
        ".-forgotten-password-message"
      );

      // otp box , it will be used to hide/show
      this.form_input__name = document.querySelector(".-from-input__name");
      // otp box , it will be used to hide/show
      this.form_input__phone = document.querySelector(".-from-input__phone");
      // otp box , it will be used to hide/show
      this.form_input__otp = document.querySelector(".-form-input__otp");

      // forgotten number box used to hide/show
      this.forgotton_number_box = document.querySelector(
        ".-input-form__forgotten-number"
      );
      // otp box , for forget password used to hide/show
      this.forgotton_number_otp_box = document.querySelector(
        ".-input-form__forgotten-number-otp"
      );

      this.login_btn = document.querySelector(".-login-btn");
      this.signup_btn = document.querySelector(".-signup-btn");
      this.verify_otp_btn = document.querySelector(".-verify-otp-btn");
      // to show forget form
      this.forget_password_btn = document.querySelector(
        ".-forget-password-btn"
      );
      this.request_new_password_btn = document.querySelector(
        ".-request-new-password-btn"
      );
      this.update_password_btn = document.querySelector(".-update-password-btn");

      this.back_to_login_btn = document.querySelector(".-back-to-login-btn");

      const password = localStorage.getItem("rememberPassword");
      if (password) {
        this.login_password.value = password;
      }

      const phoneNumber = localStorage.getItem("rememberPhoneNumber");
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

    this.signup_btn.addEventListener("click", () => {
      this.send_signup_request();
    });

    this.verify_otp_btn.addEventListener("click", () =>
      this.send_signup_otp_verification_request()
    );

    this.signup_phone_number.addEventListener("keydown", () => {
      this.signup_message.innerHTML = "";
    });

    this.forget_password_btn.addEventListener("click", () => {
      this.show_forgotten_form(true);

      // form title
      this.form_title.innerHTML = "Do you want to recover your password?";
    });

    this.back_to_login_btn.addEventListener("click", () => {
      this.show_forgotten_form(false);
      this.form_title.innerHTML = "Welcome to login";
    });

    this.request_new_password_btn.addEventListener("click", () => {
      this.send_forget_password_request();
    });

    this.update_password_btn.addEventListener("click", () => {
      this.send_password_update_request();
    });

    this.forgotten_phone_number.addEventListener( 'keydown' , () => {
      this.forgotten_message.innerHTML = '';
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

      this.form_title.innerHTML = "Welcome to login";
    } else {
      // show the signup form
      this.login_form_tab.classList.remove("-acitve-tab");
      this.login_form.classList.add("-d-none");

      this.signup_form.classList.remove("-d-none");
      this.signup_form_tab.classList.add("-acitve-tab");

      this.form_title.innerHTML = "Welcome to create account";
    }
  }

  show_forgotten_form(is_visible) {
    if (is_visible) {
      // hide login & signup form
      this.login_signup_section.classList.add("-d-none");

      // show forgotten form
      this.forget_password_form.classList.remove("-d-none");

      this.forgotton_number_box.classList.remove("-d-none");
      this.forgotton_number_otp_box.classList.add("-d-none");

      // button hide/show
      this.request_new_password_btn.classList.remove("-d-none");
      this.update_password_btn.classList.add("-d-none");
    } else {
      // hide the forgotton form
      this.forget_password_form.classList.add("-d-none");
      this.forgotton_number_box.classList.remove("-d-none");
      this.forgotton_number_otp_box.classList.add("-d-none");

      // show login & signup form
      this.login_signup_section.classList.remove("-d-none");

      // button hide/show
      this.request_new_password_btn.classList.remove("-d-none");
      this.update_password_btn.classList.add("-d-none");
    }
  }

  send_login_request() {
    this.login_btn.innerHTML = '<div class="loading-spinner"></div>';

    let login_remembar = document.getElementById("remember-password");

    this.login_message.innerHTML = "";

    if (login_remembar.checked) {
      localStorage.setItem("rememberPassword", this.login_password.value); // Store 'true' as a string
      localStorage.setItem(
        "rememberPhoneNumber",
        this.login_phone_number.value
      ); // Store 'true' as a string
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
          this.login_btn.innerHTML = "লগইন করুন";
          this.login_message.innerHTML = "লগইন সফল হয়েছে!";
          this.login_message.style.color = "green";
          location.replace(this.redirect_after_login.value);
        } else {
          this.login_message.innerHTML = "লগইন সম্পূর্ন হয়নি!"; 
          this.login_message.style.color = "red";
        }
        this.login_btn.innerHTML = "লগইন করুন";
        console.log(data);
      })
      .catch((error) => {
        console.error("AJAX error:", error);
        this.login_message.innerHTML =
          "Something went worng, please try again later.";
        this.login_message.style.color = "red";
        this.login_btn.innerHTML = "লগইন করুন";
      });
  }

  send_signup_request() {
    const phone_number = this.signup_phone_number.value.replace(/[^0-9]/g, "");
    this.signup_phone_number.value = phone_number;

    if (phone_number.length != 11) {
      this.signup_message.innerHTML = "Invalid phone number";
      this.signup_message.style.color = "red";
      return;
    }

    if (this.signup_name.value == "") {
      this.signup_message.innerHTML = "Name can not be empty!";
      this.signup_message.style.color = "red";
      return;
    }

    this.signup_btn.innerHTML = '<div class="loading-spinner"></div>';

    fetch(gsp_ui_kit_common.ajax_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Important for WordPress AJAX
      },
      body: new URLSearchParams({
        action: "gsp_ui_kit_signup_with_otp",
        phone_number: phone_number,
        name: this.signup_name.value,
        nonce: gsp_ui_kit_common.nonce,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          // successed response

          // hide name box
          this.form_input__name.classList.add("-d-none");
          // hide phone box
          this.form_input__phone.classList.add("-d-none");

          // show otp box
          this.form_input__otp.classList.remove("-d-none");

          // hide signup button
          this.signup_btn.classList.add("-d-none");
          // show otp verify button
          this.verify_otp_btn.classList.remove("-d-none");

          this.signup_message.innerHTML = data.data.message ?? "";
          this.signup_message.style.color = "black";
        } else {
          // false response

          this.signup_message.innerHTML = data.data.error ?? "";
          this.signup_message.style.color = "red";
        }

        console.log( data );

        this.signup_btn.innerHTML = "একাউন্ট তৈরি করুন";
      })
      .catch((error) => {
        console.error( error);
        this.signup_btn.innerHTML = "একাউন্ট তৈরি করুন";
        this.signup_message.innerHTML =
          '"' +
          phone_number +
          '"' +
          " This number might be already registed, Try with a new number,";
      });
  }

  send_signup_otp_verification_request() {
    this.verify_otp_btn.innerHTML = '<div class="loading-spinner"></div>';

    fetch(gsp_ui_kit_common.ajax_url, {
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
    })
      .then((response) => response.json())
      .then((data) => {
       

        if (data.success) {
          this.verify_otp_btn.innerHTML = "ওটিপি কোড ভেরিফাই করুন";
          this.signup_message.innerHTML = data.data.message ?? "";
          this.signup_message.style.color = "black";
          localStorage.setItem('gsp_otp_code' , this.signup_otp_code.value);
          localStorage.setItem('gsp_phone_number' , this.signup_phone_number.value);

          location.replace( window.location.href + "?phone-number=" + this.signup_phone_number.value + "&otp=" + this.signup_otp_code.value );
        }else{
          this.signup_message.innerHTML = data.data.error ?? "";
        }
        
      })
      .catch((error) => {
        console.error("otp verification error" + error);
        this.verify_otp_btn.innerHTML = "Thank you, your phone number successfully registerd";
      });
  }

  send_forget_password_request() {
    //

    if (this.forgotten_phone_number.value.length != 11) {
      this.forgotten_message.innerHTML = "Invalid Phone Number";
      return;
    }

    this.forgotten_message.innerHTML = "";

    this.request_new_password_btn.innerHTML =
      '<div class="loading-spinner"></div>';

    fetch(gsp_ui_kit_common.ajax_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Important for WordPress AJAX
      },
      body: new URLSearchParams({
        action: "gsp_ui_kit_forget_password",
        phone_number: this.forgotten_phone_number.value,
        nonce: gsp_ui_kit_common.nonce,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // hide phone number
          this.forgotton_number_box.classList.add("-d-none");
          // show otp
          this.forgotton_number_otp_box.classList.remove("-d-none");
          // hide request new password button
          this.request_new_password_btn.classList.add("-d-none");
          // show update password button
          this.update_password_btn.classList.remove('-d-none');


        }else{
          this.forgotten_message.innerHTML = data.data.error ?? '';
        }

        console.log(data);
        this.request_new_password_btn.innerHTML = "Request New Password";
      })
      .catch((error) => {
        console.error(error);
        this.request_new_password_btn.innerHTML = "Request New Password";
      });
  }

  send_password_update_request() {

    if (this.forgotten_otp.value == '') {
      this.forgotten_message.innerHTML = 'Please enter OTP code';
      return;
    }

    if (this.password.value == '' ) {
      this.forgotten_message.innerHTML = 'Please enter a new password';
      return;
    }

    if (this.password.value !== this.confirm_password.value ) {
      this.forgotten_message.innerHTML = 'Password did not match';
      return;
    }

    this.update_password_btn.innerHTML = '<div class="loading-spinner"></div>';

    fetch( gsp_ui_kit_common.ajax_url , {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Important for WordPress AJAX
      },
      body: new URLSearchParams({
        action: "gsp_ui_kit_update_password_by_phone_otp",
        phone_number: this.forgotten_phone_number.value,
        otp_code: this.forgotten_otp.value,
        password : this.password.value,
        nonce: gsp_ui_kit_common.nonce,
      }),
    } ).then( ( response ) => response.json() ).then( (data) => {

      if (data.success) {
        this.forgotten_message.innerHTML = data.data.message ?? 'No response';
      }else{
        this.forgotten_message.innerHTML = data.data.error ?? 'Something went wrong';
      }

      console.log(data);
      this.update_password_btn.innerHTML = 'Update Password';
    }).catch( (error) => {
      console.error(error);
      this.update_password_btn.innerHTML = 'Update Password';
    });
  }
}
