/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/modules/login-with-otp.js":
/*!*************************************************!*\
  !*** ./assets/src/js/modules/login-with-otp.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login_With_OTP)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Login_With_OTP = /*#__PURE__*/function () {
  function Login_With_OTP() {
    _classCallCheck(this, Login_With_OTP);
    this.section = document.getElementById("gsp-login-with-otp-section");
    if (this.section) {
      this.login_signup_section = document.querySelector(".login-signup-section");
      this.login_form = document.querySelector(".login-form");
      this.signup_form = document.querySelector(".signup-form");
      this.forget_password_form = document.querySelector(".forget-password-form");
      this.login_form_tab = document.querySelector(".login-form-tab");
      this.signup_form_tab = document.querySelector(".signup-form-tab");
      this.signup_form_tab2 = document.querySelector(".signup-form-tab-2");
      this.form_title = document.querySelector(".form-title");
      this.login_phone_number = document.querySelector(".-login-phone-number");
      this.login_password = document.querySelector(".-login-password");
      this.login_message = document.getElementById("-login-message");
      this.redirect_after_login = document.getElementById("-redirect-after-login");
      this.redirect_after_signup = document.getElementById("-redirect-after-signup");
      this.signup_name = document.querySelector(".signup-name");
      this.signup_phone_number = document.querySelector(".signup-phone-number");
      this.signup_otp_code = document.querySelector(".signup-otp-code");
      this.signup_message = document.querySelector(".signup-message");
      this.forgotten_phone_number = document.querySelector(".-forgotten-number");
      this.forgotten_otp = document.querySelector(".-forgotten-otp");
      this.password = document.querySelector('.-forgotten-password');
      this.confirm_password = document.querySelector('.-forgotten-confirm-password');
      this.forgotten_message = document.querySelector(".-forgotten-password-message");

      // otp box , it will be used to hide/show
      this.form_input__name = document.querySelector(".-from-input__name");
      // otp box , it will be used to hide/show
      this.form_input__phone = document.querySelector(".-from-input__phone");
      // otp box , it will be used to hide/show
      this.form_input__otp = document.querySelector(".-form-input__otp");

      // forgotten number box used to hide/show
      this.forgotton_number_box = document.querySelector(".-input-form__forgotten-number");
      // otp box , for forget password used to hide/show
      this.forgotton_number_otp_box = document.querySelector(".-input-form__forgotten-number-otp");
      this.login_btn = document.querySelector(".-login-btn");
      this.signup_btn = document.querySelector(".-signup-btn");
      this.verify_otp_btn = document.querySelector(".-verify-otp-btn");
      // to show forget form
      this.forget_password_btn = document.querySelector(".-forget-password-btn");
      this.request_new_password_btn = document.querySelector(".-request-new-password-btn");
      this.update_password_btn = document.querySelector(".-update-password-btn");
      this.back_to_login_btn = document.querySelector(".-back-to-login-btn");
      var password = localStorage.getItem("rememberPassword");
      if (password) {
        this.login_password.value = password;
      }
      var phoneNumber = localStorage.getItem("rememberPhoneNumber");
      if (phoneNumber) {
        this.login_phone_number.value = phoneNumber;
      }
      this.events();
    }
  }
  return _createClass(Login_With_OTP, [{
    key: "events",
    value: function events() {
      var _this = this;
      this.login_form_tab.addEventListener("click", function () {
        return _this.form_visiability(true);
      });
      this.signup_form_tab.addEventListener("click", function () {
        return _this.form_visiability(false);
      });
      this.signup_form_tab2.addEventListener("click", function () {
        return _this.form_visiability(false);
      });
      this.login_btn.addEventListener("click", function () {
        return _this.send_login_request();
      });
      this.signup_btn.addEventListener("click", function () {
        _this.send_signup_request();
      });
      this.verify_otp_btn.addEventListener("click", function () {
        return _this.send_signup_otp_verification_request();
      });
      this.signup_phone_number.addEventListener("keydown", function () {
        _this.signup_message.innerHTML = "";
      });
      this.forget_password_btn.addEventListener("click", function () {
        _this.show_forgotten_form(true);

        // form title
        _this.form_title.innerHTML = "Do you want to recover your password?";
      });
      this.back_to_login_btn.addEventListener("click", function () {
        _this.show_forgotten_form(false);
        _this.form_title.innerHTML = "Welcome to login";
      });
      this.request_new_password_btn.addEventListener("click", function () {
        _this.send_forget_password_request();
      });
      this.update_password_btn.addEventListener("click", function () {
        _this.send_password_update_request();
      });
      this.forgotten_phone_number.addEventListener('keydown', function () {
        _this.forgotten_message.innerHTML = '';
      });
    } // envents ending
  }, {
    key: "form_visiability",
    value: function form_visiability(is_login_visiable) {
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
  }, {
    key: "show_forgotten_form",
    value: function show_forgotten_form(is_visible) {
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
  }, {
    key: "send_login_request",
    value: function send_login_request() {
      var _this2 = this;
      this.login_btn.innerHTML = '<div class="loading-spinner"></div>';
      var login_remembar = document.getElementById("remember-password");
      this.login_message.innerHTML = "";
      if (login_remembar.checked) {
        localStorage.setItem("rememberPassword", this.login_password.value); // Store 'true' as a string
        localStorage.setItem("rememberPhoneNumber", this.login_phone_number.value); // Store 'true' as a string
      }
      console.log(this.login_phone_number.value);
      console.log(this.login_password.value);
      fetch(gsp_ui_kit_common.ajax_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded" // Important for WordPress AJAX
        },
        body: new URLSearchParams({
          action: "gsp_ui_kit_login",
          username: this.login_phone_number.value,
          password: this.login_password.value,
          nonce: gsp_ui_kit_common.nonce
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        // Handle the response
        if (data.success) {
          console.log(data.data);
          _this2.login_btn.innerHTML = "Login";
          _this2.login_message.innerHTML = "Login successfull!";
          _this2.login_message.style.color = "green";
          location.replace(_this2.redirect_after_login.value);
        } else {
          _this2.login_message.innerHTML = "Log-In Faild!";
          _this2.login_message.style.color = "red";
        }
        _this2.login_btn.innerHTML = "Login";
        console.log(data);
      })["catch"](function (error) {
        console.error("AJAX error:", error);
        _this2.login_message.innerHTML = "Something went worng, please try again later.";
        _this2.login_message.style.color = "red";
        _this2.login_btn.innerHTML = "Login";
      });
    }
  }, {
    key: "send_signup_request",
    value: function send_signup_request() {
      var _this3 = this;
      var phone_number = this.signup_phone_number.value.replace(/[^0-9]/g, "");
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
          "Content-Type": "application/x-www-form-urlencoded" // Important for WordPress AJAX
        },
        body: new URLSearchParams({
          action: "gsp_ui_kit_signup_with_otp",
          phone_number: phone_number,
          name: this.signup_name.value,
          nonce: gsp_ui_kit_common.nonce
        })
      }).then(function (response) {
        console.log(response);
        return response.json();
      }).then(function (data) {
        if (data.success) {
          var _data$data$message;
          // successed response

          // hide name box
          _this3.form_input__name.classList.add("-d-none");
          // hide phone box
          _this3.form_input__phone.classList.add("-d-none");

          // show otp box
          _this3.form_input__otp.classList.remove("-d-none");

          // hide signup button
          _this3.signup_btn.classList.add("-d-none");
          // show otp verify button
          _this3.verify_otp_btn.classList.remove("-d-none");
          _this3.signup_message.innerHTML = (_data$data$message = data.data.message) !== null && _data$data$message !== void 0 ? _data$data$message : "";
          _this3.signup_message.style.color = "black";
        } else {
          var _data$data$error;
          // false response

          _this3.signup_message.innerHTML = (_data$data$error = data.data.error) !== null && _data$data$error !== void 0 ? _data$data$error : "";
          _this3.signup_message.style.color = "red";
        }
        console.log(data);
        _this3.signup_btn.innerHTML = "Create Account";
      })["catch"](function (error) {
        console.error(error);
        _this3.signup_btn.innerHTML = "Create Account";
        _this3.signup_message.innerHTML = '"' + phone_number + '"' + " This number might be already registed, Try with a new number,";
      });
    }
  }, {
    key: "send_signup_otp_verification_request",
    value: function send_signup_otp_verification_request() {
      var _this4 = this;
      this.verify_otp_btn.innerHTML = '<div class="loading-spinner"></div>';
      fetch(gsp_ui_kit_common.ajax_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded" // Important for WordPress AJAX
        },
        body: new URLSearchParams({
          action: "gsp_ui_kit_signup_otp_verification",
          otp_code: this.signup_otp_code.value,
          phone_number: this.signup_phone_number.value,
          nonce: gsp_ui_kit_common.nonce
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.success) {
          var _data$data$message2;
          _this4.verify_otp_btn.innerHTML = "OTP Verify";
          _this4.signup_message.innerHTML = (_data$data$message2 = data.data.message) !== null && _data$data$message2 !== void 0 ? _data$data$message2 : "";
          _this4.signup_message.style.color = "black";
          localStorage.setItem('gsp_otp_code', _this4.signup_otp_code.value);
          localStorage.setItem('gsp_phone_number', _this4.signup_phone_number.value);
          location.replace(window.location.href + "?phone-number=" + _this4.signup_phone_number.value + "&otp=" + _this4.signup_otp_code.value);
        } else {
          var _data$data$error2;
          _this4.signup_message.innerHTML = (_data$data$error2 = data.data.error) !== null && _data$data$error2 !== void 0 ? _data$data$error2 : "";
        }
      })["catch"](function (error) {
        console.error("otp verification error" + error);
        _this4.verify_otp_btn.innerHTML = "Thank you, your phone number successfully registerd";
      });
    }
  }, {
    key: "send_forget_password_request",
    value: function send_forget_password_request() {
      var _this5 = this;
      //

      if (this.forgotten_phone_number.value.length != 11) {
        this.forgotten_message.innerHTML = "Invalid Phone Number";
        return;
      }
      this.forgotten_message.innerHTML = "";
      this.request_new_password_btn.innerHTML = '<div class="loading-spinner"></div>';
      fetch(gsp_ui_kit_common.ajax_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded" // Important for WordPress AJAX
        },
        body: new URLSearchParams({
          action: "gsp_ui_kit_forget_password",
          phone_number: this.forgotten_phone_number.value,
          nonce: gsp_ui_kit_common.nonce
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.success) {
          // hide phone number
          _this5.forgotton_number_box.classList.add("-d-none");
          // show otp
          _this5.forgotton_number_otp_box.classList.remove("-d-none");
          // hide request new password button
          _this5.request_new_password_btn.classList.add("-d-none");
          // show update password button
          _this5.update_password_btn.classList.remove('-d-none');
        } else {
          var _data$data$error3;
          _this5.forgotten_message.innerHTML = (_data$data$error3 = data.data.error) !== null && _data$data$error3 !== void 0 ? _data$data$error3 : '';
        }
        console.log(data);
        _this5.request_new_password_btn.innerHTML = "Request New Password";
      })["catch"](function (error) {
        console.error(error);
        _this5.request_new_password_btn.innerHTML = "Request New Password";
      });
    }
  }, {
    key: "send_password_update_request",
    value: function send_password_update_request() {
      var _this6 = this;
      if (this.forgotten_otp.value == '') {
        this.forgotten_message.innerHTML = 'Please enter OTP code';
        return;
      }
      if (this.password.value == '') {
        this.forgotten_message.innerHTML = 'Please enter a new password';
        return;
      }
      if (this.password.value !== this.confirm_password.value) {
        this.forgotten_message.innerHTML = 'Password did not match';
        return;
      }
      this.update_password_btn.innerHTML = '<div class="loading-spinner"></div>';
      fetch(gsp_ui_kit_common.ajax_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded" // Important for WordPress AJAX
        },
        body: new URLSearchParams({
          action: "gsp_ui_kit_update_password_by_phone_otp",
          phone_number: this.forgotten_phone_number.value,
          otp_code: this.forgotten_otp.value,
          password: this.password.value,
          nonce: gsp_ui_kit_common.nonce
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.success) {
          var _data$data$message3;
          _this6.forgotten_message.innerHTML = (_data$data$message3 = data.data.message) !== null && _data$data$message3 !== void 0 ? _data$data$message3 : 'No response';
        } else {
          var _data$data$error4;
          _this6.forgotten_message.innerHTML = (_data$data$error4 = data.data.error) !== null && _data$data$error4 !== void 0 ? _data$data$error4 : 'Something went wrong';
        }
        console.log(data);
        _this6.update_password_btn.innerHTML = 'Update Password';
      })["catch"](function (error) {
        console.error(error);
        _this6.update_password_btn.innerHTML = 'Update Password';
      });
    }
  }]);
}();


/***/ }),

/***/ "./assets/src/js/modules/set-thumbnail-height.js":
/*!*******************************************************!*\
  !*** ./assets/src/js/modules/set-thumbnail-height.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GSP_Set_Thumbnail_Height)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var GSP_Set_Thumbnail_Height = /*#__PURE__*/function () {
  function GSP_Set_Thumbnail_Height() {
    _classCallCheck(this, GSP_Set_Thumbnail_Height);
    this.thumbnails = document.querySelectorAll(".-thumbnail");
    this.window_width = screen.width;
    if (this.thumbnails) {
      this.events();
      this.set_thumbnail_height();
    }
  }
  return _createClass(GSP_Set_Thumbnail_Height, [{
    key: "events",
    value: function events() {
      var _this = this;
      window.addEventListener("resize", function () {
        _this.window_width = screen.width;
        _this.set_thumbnail_height();
      });
    }
  }, {
    key: "set_thumbnail_height",
    value: function set_thumbnail_height() {
      var card_view_blog = document.querySelector(".-card-view-blog");
      for (var i = 0; i < this.thumbnails.length; i++) {
        if (this.window_width > 600) {
          this.thumbnails[i].style.height = Math.round(card_view_blog.offsetHeight / 16 * 7) + "px";
        }
        if (this.window_width > 768) {
          this.thumbnails[i].style.height = Math.round(card_view_blog.offsetHeight / 16 * 8) + "px";
        }
        if (this.window_width > 992) {
          this.thumbnails[i].style.height = Math.round(card_view_blog.offsetHeight / 16 * 7) + "px";
        }
      }
    }
  }]);
}();


/***/ }),

/***/ "./assets/src/js/modules/update-profile-after-signup-with-otp.js":
/*!***********************************************************************!*\
  !*** ./assets/src/js/modules/update-profile-after-signup-with-otp.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Update_Profile_After_Signup_With_OTP)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Update_Profile_After_Signup_With_OTP = /*#__PURE__*/function () {
  function Update_Profile_After_Signup_With_OTP() {
    _classCallCheck(this, Update_Profile_After_Signup_With_OTP);
    this["class"] = document.getElementById('profile-update__class');
    this.gender = document.getElementById('profile-update__gender');
    this.religion = document.getElementById('profile-update__relegion');
    this.home_district = document.getElementById('profile-update__home-district');
    this.date_of_birth = document.getElementById('profile-update__date-of-birth');
    this.password = document.getElementById('profile-update__password');
    this.confirm_password = document.getElementById('profile-update__confirm-password');
    this.message = document.getElementById('update-profile-message');
    this.update_profile_btn = document.getElementById('update-profile-btn');
    if (this["class"]) {
      this.events();
    }
  }
  return _createClass(Update_Profile_After_Signup_With_OTP, [{
    key: "events",
    value: function events() {
      var _this = this;
      this.date_of_birth.addEventListener('click', function () {
        this.showPicker();
      });
      this.update_profile_btn.addEventListener('click', function () {
        _this.check_inputs_has_data();
      });
      this["class"].addEventListener('change', function () {
        _this["class"].style.border = '2px solid green';
      });
      this["class"].addEventListener('change', function () {
        _this["class"].style.border = '2px solid green';
      });
      this.gender.addEventListener('change', function () {
        _this.gender.style.border = '2px solid green';
      });
      this.religion.addEventListener('change', function () {
        _this.religion.style.border = '2px solid green';
      });
      this.home_district.addEventListener('change', function () {
        _this.home_district.style.border = '2px solid green';
      });
      this.date_of_birth.addEventListener('change', function () {
        _this.date_of_birth.style.border = '2px solid green';
      });
      this.password.addEventListener('keydown', function () {
        if (_this.password.value.length >= 6) {
          _this.password.style.border = '2px solid green';
        }
      });
      this.confirm_password.addEventListener('keydown', function () {
        if (_this.confirm_password.value != '' && _this.password.value == _this.confirm_password.value) {
          _this.confirm_password.style.border = '2px solid green';
        }
      });
    }
  }, {
    key: "check_inputs_has_data",
    value: function check_inputs_has_data() {
      var is_valid = true;
      if (this["class"].value == '0') {
        this["class"].style.border = '1px solid red';
        is_valid = false;
      }
      if (this.gender.value == '0') {
        this.gender.style.border = '1px solid red';
        is_valid = false;
      }
      if (this.religion.value == '0') {
        this.religion.style.border = '1px solid red';
        is_valid = false;
      }
      if (this.home_district.value == '0') {
        this.home_district.style.border = '1px solid red';
        is_valid = false;
      }
      if (this.date_of_birth.value === '') {
        this.date_of_birth.style.border = '1px solid red';
        is_valid = false;
      }
      if (this.password.value.length < 5) {
        this.password.style.border = '1px solid red';
        is_valid = false;
      }
      if (this.confirm_password.value == '') {
        this.confirm_password.style.border = '1px solid red';
        is_valid = false;
      }
      if (this.password.value != this.confirm_password.value) {
        this.confirm_password.style.border = '1px solid red';
        is_valid = false;
      }
      if (is_valid) {
        this.send_update_profile_request();
      }
    }
  }, {
    key: "send_update_profile_request",
    value: function send_update_profile_request() {
      var _this2 = this;
      this.update_profile_btn.innerHTML = '<div class="loading-spinner"></div>';
      var otp = localStorage.getItem('gsp_otp_code');
      var phone_number = localStorage.getItem('gsp_phone_number');
      console.log(otp + ' ' + phone_number);
      fetch(gsp_ui_kit_common.ajax_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded" // Important for WordPress AJAX
        },
        body: new URLSearchParams({
          action: "gsp_ui_kit_update_profile_by_phone_otp",
          otp_code: otp,
          phone_number: phone_number,
          "class": this["class"].value,
          gender: this.gender.value,
          religion: this.religion.value,
          home_district: this.home_district.value,
          date_of_birth: this.date_of_birth.value,
          password: this.password.value,
          nonce: gsp_ui_kit_common.nonce
        })
      }).then(function (response) {
        console.log(response);
        return response.json();
      }).then(function (data) {
        if (data.success) {
          var _data$data$message;
          _this2.message.innerHTML = (_data$data$message = data.data.message) !== null && _data$data$message !== void 0 ? _data$data$message : '';
          _this2.message.style.color = 'green';
          location.replace(gsp_ui_kit_common.site_url);
          _this2.update_profile_btn.classList.add('-d-none');
          return;
        } else {
          var _data$data$error;
          _this2.message.innerHTML = (_data$data$error = data.data.error) !== null && _data$data$error !== void 0 ? _data$data$error : '';
        }
        _this2.update_profile_btn.innerHTML = 'Update Profile';
        console.log(data);
      })["catch"](function (error) {
        console.log(error);
        _this2.update_profile_btn.innerHTML = 'Update Profile';
      });
    }
  }]);
}();


/***/ }),

/***/ "./assets/src/js/modules/youtube-player.js":
/*!*************************************************!*\
  !*** ./assets/src/js/modules/youtube-player.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GSP_UI_Kit_Youtube_Player)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var GSP_UI_Kit_Youtube_Player = /*#__PURE__*/function () {
  function GSP_UI_Kit_Youtube_Player() {
    _classCallCheck(this, GSP_UI_Kit_Youtube_Player);
    this.player;
    var videoContainer = document.querySelector(".video-container");
    if (videoContainer) {
      this.videoId = videoContainer.getAttribute("data-video-id");
      this.loadYouTubeAPI();
      this.events();
    } else {
      console.log("No video container found.");
      return;
    }
  }
  return _createClass(GSP_UI_Kit_Youtube_Player, [{
    key: "events",
    value: function events() {
      var _this = this;
      window.onYouTubeIframeAPIReady = function () {
        return _this.onYouTubeIframeAPIReady();
      };

      // Play video and hide overlay
      window.playVideo = function () {
        _this.player.playVideo();
        document.querySelector(".video-overlay").style.display = "none";
        document.querySelector(".click-blocker").style.pointerEvents = "all";
      };

      // Play or Pause
      window.playPause = function () {
        if (_this.player.getPlayerState() === 1) {
          _this.player.pauseVideo();
        } else {
          _this.player.playVideo();
        }
      };

      // Seek forward 10 seconds
      window.seekForward = function () {
        _this.player.seekTo(_this.player.getCurrentTime() + 10, true);
      };

      // Seek backward 10 seconds
      window.seekBackward = function () {
        _this.player.seekTo(_this.player.getCurrentTime() - 10, true);
      };

      // Fullscreen toggle
      window.toggleFullScreen = function () {
        var videoContainer = document.querySelector(".video-container");
        if (!document.fullscreenElement) {
          if (videoContainer.requestFullscreen) {
            videoContainer.requestFullscreen();
          } else if (videoContainer.mozRequestFullScreen) {
            videoContainer.mozRequestFullScreen();
          } else if (videoContainer.webkitRequestFullscreen) {
            videoContainer.webkitRequestFullscreen();
          } else if (videoContainer.msRequestFullscreen) {
            videoContainer.msRequestFullscreen();
          }
          videoContainer.classList.add("fullscreen");
        } else {
          document.exitFullscreen();
          videoContainer.classList.remove("fullscreen");
        }
      };
      // Listen for fullscreen changes
      document.addEventListener("fullscreenchange", function () {
        var videoContainer = document.querySelector(".video-container");
        if (document.fullscreenElement) {
          videoContainer.classList.add("fullscreen");
        } else {
          videoContainer.classList.remove("fullscreen");
        }
      });
    } // envents ending
  }, {
    key: "loadYouTubeAPI",
    value: function loadYouTubeAPI() {
      var tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }, {
    key: "onYouTubeIframeAPIReady",
    value: function onYouTubeIframeAPIReady() {
      var _this2 = this;
      this.player = new YT.Player("player", {
        videoId: this.videoId,
        // Replace with actual YouTube video ID
        playerVars: {
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          fs: 0,
          disablekb: 1
        },
        events: {
          onReady: function onReady(event) {
            return _this2.onPlayerReady(event);
          } // Use arrow function to retain `this` co
        }
      });
    }
  }, {
    key: "onPlayerReady",
    value: function onPlayerReady(event) {
      document.querySelector(".video-overlay").style.display = "flex";
      this.loadQualityOptions(); // Load available video quality options
    }

    // Load available video qualities
  }, {
    key: "loadQualityOptions",
    value: function loadQualityOptions() {
      setTimeout(function () {
        var qualityLevels = player.getAvailableQualityLevels();
        var qualitySelector = document.getElementById("quality-selector");
        qualitySelector.innerHTML = "<option value=''>Quality</option>"; // Reset

        qualityLevels.forEach(function (level) {
          var option = document.createElement("option");
          option.value = level;
          option.textContent = level.toUpperCase();
          qualitySelector.appendChild(option);
        });
      }, 1000); // Delay for API to return quality levels
    }

    // Change video quality
  }, {
    key: "changeQuality",
    value: function changeQuality(quality) {
      if (quality) {
        this.player.setPlaybackQuality(quality);
      }
    }
  }]);
}();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./assets/src/js/bundle.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_set_thumbnail_height__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/set-thumbnail-height */ "./assets/src/js/modules/set-thumbnail-height.js");
/* harmony import */ var _modules_youtube_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/youtube-player */ "./assets/src/js/modules/youtube-player.js");
/* harmony import */ var _modules_login_with_otp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/login-with-otp */ "./assets/src/js/modules/login-with-otp.js");
/* harmony import */ var _modules_update_profile_after_signup_with_otp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/update-profile-after-signup-with-otp */ "./assets/src/js/modules/update-profile-after-signup-with-otp.js");




document.addEventListener("DOMContentLoaded", function () {
  new _modules_set_thumbnail_height__WEBPACK_IMPORTED_MODULE_0__["default"]();
  new _modules_youtube_player__WEBPACK_IMPORTED_MODULE_1__["default"]();
  new _modules_login_with_otp__WEBPACK_IMPORTED_MODULE_2__["default"]();
  new _modules_update_profile_after_signup_with_otp__WEBPACK_IMPORTED_MODULE_3__["default"]();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7QUFFNUMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nc3AtdWkta2l0Ly4vYXNzZXRzL3NyYy9qcy9tb2R1bGVzL2xvZ2luLXdpdGgtb3RwLmpzIiwid2VicGFjazovL2dzcC11aS1raXQvLi9hc3NldHMvc3JjL2pzL21vZHVsZXMvc2V0LXRodW1ibmFpbC1oZWlnaHQuanMiLCJ3ZWJwYWNrOi8vZ3NwLXVpLWtpdC8uL2Fzc2V0cy9zcmMvanMvbW9kdWxlcy91cGRhdGUtcHJvZmlsZS1hZnRlci1zaWdudXAtd2l0aC1vdHAuanMiLCJ3ZWJwYWNrOi8vZ3NwLXVpLWtpdC8uL2Fzc2V0cy9zcmMvanMvbW9kdWxlcy95b3V0dWJlLXBsYXllci5qcyIsIndlYnBhY2s6Ly9nc3AtdWkta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dzcC11aS1raXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dzcC11aS1raXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nc3AtdWkta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ3NwLXVpLWtpdC8uL2Fzc2V0cy9zcmMvanMvYnVuZGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luX1dpdGhfT1RQIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3NwLWxvZ2luLXdpdGgtb3RwLXNlY3Rpb25cIik7XHJcblxyXG4gICAgaWYgKHRoaXMuc2VjdGlvbikge1xyXG4gICAgICB0aGlzLmxvZ2luX3NpZ251cF9zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi5sb2dpbi1zaWdudXAtc2VjdGlvblwiXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMubG9naW5fZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4tZm9ybVwiKTtcclxuICAgICAgdGhpcy5zaWdudXBfZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbnVwLWZvcm1cIik7XHJcbiAgICAgIHRoaXMuZm9yZ2V0X3Bhc3N3b3JkX2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLmZvcmdldC1wYXNzd29yZC1mb3JtXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMubG9naW5fZm9ybV90YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luLWZvcm0tdGFiXCIpO1xyXG4gICAgICB0aGlzLnNpZ251cF9mb3JtX3RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbnVwLWZvcm0tdGFiXCIpO1xyXG4gICAgICB0aGlzLnNpZ251cF9mb3JtX3RhYjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC1mb3JtLXRhYi0yXCIpO1xyXG5cclxuICAgICAgdGhpcy5mb3JtX3RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXRpdGxlXCIpO1xyXG5cclxuICAgICAgdGhpcy5sb2dpbl9waG9uZV9udW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLi1sb2dpbi1waG9uZS1udW1iZXJcIik7XHJcbiAgICAgIHRoaXMubG9naW5fcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLi1sb2dpbi1wYXNzd29yZFwiKTtcclxuICAgICAgdGhpcy5sb2dpbl9tZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCItbG9naW4tbWVzc2FnZVwiKTtcclxuXHJcbiAgICAgIHRoaXMucmVkaXJlY3RfYWZ0ZXJfbG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICBcIi1yZWRpcmVjdC1hZnRlci1sb2dpblwiXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucmVkaXJlY3RfYWZ0ZXJfc2lnbnVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgXCItcmVkaXJlY3QtYWZ0ZXItc2lnbnVwXCJcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuc2lnbnVwX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC1uYW1lXCIpO1xyXG4gICAgICB0aGlzLnNpZ251cF9waG9uZV9udW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC1waG9uZS1udW1iZXJcIik7XHJcbiAgICAgIHRoaXMuc2lnbnVwX290cF9jb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWdudXAtb3RwLWNvZGVcIik7XHJcbiAgICAgIHRoaXMuc2lnbnVwX21lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC1tZXNzYWdlXCIpO1xyXG5cclxuICAgICAgdGhpcy5mb3Jnb3R0ZW5fcGhvbmVfbnVtYmVyID1cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLi1mb3Jnb3R0ZW4tbnVtYmVyXCIpO1xyXG4gICAgICB0aGlzLmZvcmdvdHRlbl9vdHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLi1mb3Jnb3R0ZW4tb3RwXCIpO1xyXG4gICAgICB0aGlzLnBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi1mb3Jnb3R0ZW4tcGFzc3dvcmQnKTtcclxuICAgICAgdGhpcy5jb25maXJtX3Bhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi1mb3Jnb3R0ZW4tY29uZmlybS1wYXNzd29yZCcpO1xyXG4gICAgICB0aGlzLmZvcmdvdHRlbl9tZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBcIi4tZm9yZ290dGVuLXBhc3N3b3JkLW1lc3NhZ2VcIlxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gb3RwIGJveCAsIGl0IHdpbGwgYmUgdXNlZCB0byBoaWRlL3Nob3dcclxuICAgICAgdGhpcy5mb3JtX2lucHV0X19uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi4tZnJvbS1pbnB1dF9fbmFtZVwiKTtcclxuICAgICAgLy8gb3RwIGJveCAsIGl0IHdpbGwgYmUgdXNlZCB0byBoaWRlL3Nob3dcclxuICAgICAgdGhpcy5mb3JtX2lucHV0X19waG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuLWZyb20taW5wdXRfX3Bob25lXCIpO1xyXG4gICAgICAvLyBvdHAgYm94ICwgaXQgd2lsbCBiZSB1c2VkIHRvIGhpZGUvc2hvd1xyXG4gICAgICB0aGlzLmZvcm1faW5wdXRfX290cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuLWZvcm0taW5wdXRfX290cFwiKTtcclxuXHJcbiAgICAgIC8vIGZvcmdvdHRlbiBudW1iZXIgYm94IHVzZWQgdG8gaGlkZS9zaG93XHJcbiAgICAgIHRoaXMuZm9yZ290dG9uX251bWJlcl9ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLi1pbnB1dC1mb3JtX19mb3Jnb3R0ZW4tbnVtYmVyXCJcclxuICAgICAgKTtcclxuICAgICAgLy8gb3RwIGJveCAsIGZvciBmb3JnZXQgcGFzc3dvcmQgdXNlZCB0byBoaWRlL3Nob3dcclxuICAgICAgdGhpcy5mb3Jnb3R0b25fbnVtYmVyX290cF9ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIFwiLi1pbnB1dC1mb3JtX19mb3Jnb3R0ZW4tbnVtYmVyLW90cFwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmxvZ2luX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuLWxvZ2luLWJ0blwiKTtcclxuICAgICAgdGhpcy5zaWdudXBfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi4tc2lnbnVwLWJ0blwiKTtcclxuICAgICAgdGhpcy52ZXJpZnlfb3RwX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuLXZlcmlmeS1vdHAtYnRuXCIpO1xyXG4gICAgICAvLyB0byBzaG93IGZvcmdldCBmb3JtXHJcbiAgICAgIHRoaXMuZm9yZ2V0X3Bhc3N3b3JkX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuLWZvcmdldC1wYXNzd29yZC1idG5cIlxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnJlcXVlc3RfbmV3X3Bhc3N3b3JkX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgXCIuLXJlcXVlc3QtbmV3LXBhc3N3b3JkLWJ0blwiXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudXBkYXRlX3Bhc3N3b3JkX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuLXVwZGF0ZS1wYXNzd29yZC1idG5cIik7XHJcblxyXG4gICAgICB0aGlzLmJhY2tfdG9fbG9naW5fYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi4tYmFjay10by1sb2dpbi1idG5cIik7XHJcblxyXG4gICAgICBjb25zdCBwYXNzd29yZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVtZW1iZXJQYXNzd29yZFwiKTtcclxuICAgICAgaWYgKHBhc3N3b3JkKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbl9wYXNzd29yZC52YWx1ZSA9IHBhc3N3b3JkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBwaG9uZU51bWJlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVtZW1iZXJQaG9uZU51bWJlclwiKTtcclxuICAgICAgaWYgKHBob25lTnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbl9waG9uZV9udW1iZXIudmFsdWUgPSBwaG9uZU51bWJlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV2ZW50cygpIHtcclxuICAgIHRoaXMubG9naW5fZm9ybV90YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XHJcbiAgICAgIHRoaXMuZm9ybV92aXNpYWJpbGl0eSh0cnVlKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnNpZ251cF9mb3JtX3RhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICAgICAgdGhpcy5mb3JtX3Zpc2lhYmlsaXR5KGZhbHNlKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnNpZ251cF9mb3JtX3RhYjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XHJcbiAgICAgIHRoaXMuZm9ybV92aXNpYWJpbGl0eShmYWxzZSlcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5sb2dpbl9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc2VuZF9sb2dpbl9yZXF1ZXN0KCkpO1xyXG5cclxuICAgIHRoaXMuc2lnbnVwX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNlbmRfc2lnbnVwX3JlcXVlc3QoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudmVyaWZ5X290cF9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XHJcbiAgICAgIHRoaXMuc2VuZF9zaWdudXBfb3RwX3ZlcmlmaWNhdGlvbl9yZXF1ZXN0KClcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5zaWdudXBfcGhvbmVfbnVtYmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5zaWdudXBfbWVzc2FnZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5mb3JnZXRfcGFzc3dvcmRfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hvd19mb3Jnb3R0ZW5fZm9ybSh0cnVlKTtcclxuXHJcbiAgICAgIC8vIGZvcm0gdGl0bGVcclxuICAgICAgdGhpcy5mb3JtX3RpdGxlLmlubmVySFRNTCA9IFwiRG8geW91IHdhbnQgdG8gcmVjb3ZlciB5b3VyIHBhc3N3b3JkP1wiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5iYWNrX3RvX2xvZ2luX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNob3dfZm9yZ290dGVuX2Zvcm0oZmFsc2UpO1xyXG4gICAgICB0aGlzLmZvcm1fdGl0bGUuaW5uZXJIVE1MID0gXCJXZWxjb21lIHRvIGxvZ2luXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJlcXVlc3RfbmV3X3Bhc3N3b3JkX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNlbmRfZm9yZ2V0X3Bhc3N3b3JkX3JlcXVlc3QoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudXBkYXRlX3Bhc3N3b3JkX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNlbmRfcGFzc3dvcmRfdXBkYXRlX3JlcXVlc3QoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZm9yZ290dGVuX3Bob25lX251bWJlci5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicgLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZm9yZ290dGVuX21lc3NhZ2UuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9ICk7XHJcbiAgfSAvLyBlbnZlbnRzIGVuZGluZ1xyXG5cclxuICBmb3JtX3Zpc2lhYmlsaXR5KGlzX2xvZ2luX3Zpc2lhYmxlKSB7XHJcbiAgICBpZiAoaXNfbG9naW5fdmlzaWFibGUpIHtcclxuICAgICAgLy8gc2hvdyB0aGUgbG9naW4gZm9ybVxyXG4gICAgICB0aGlzLnNpZ251cF9mb3JtLmNsYXNzTGlzdC5hZGQoXCItZC1ub25lXCIpO1xyXG4gICAgICB0aGlzLnNpZ251cF9mb3JtX3RhYi5jbGFzc0xpc3QucmVtb3ZlKFwiLWFjaXR2ZS10YWJcIik7XHJcblxyXG4gICAgICAvLyBsb2dpbiBmb3JtXHJcbiAgICAgIHRoaXMubG9naW5fZm9ybV90YWIuY2xhc3NMaXN0LmFkZChcIi1hY2l0dmUtdGFiXCIpO1xyXG4gICAgICB0aGlzLmxvZ2luX2Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcIi1kLW5vbmVcIik7XHJcblxyXG4gICAgICB0aGlzLmZvcm1fdGl0bGUuaW5uZXJIVE1MID0gXCJXZWxjb21lIHRvIGxvZ2luXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBzaG93IHRoZSBzaWdudXAgZm9ybVxyXG4gICAgICB0aGlzLmxvZ2luX2Zvcm1fdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCItYWNpdHZlLXRhYlwiKTtcclxuICAgICAgdGhpcy5sb2dpbl9mb3JtLmNsYXNzTGlzdC5hZGQoXCItZC1ub25lXCIpO1xyXG5cclxuICAgICAgdGhpcy5zaWdudXBfZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiLWQtbm9uZVwiKTtcclxuICAgICAgdGhpcy5zaWdudXBfZm9ybV90YWIuY2xhc3NMaXN0LmFkZChcIi1hY2l0dmUtdGFiXCIpO1xyXG5cclxuICAgICAgdGhpcy5mb3JtX3RpdGxlLmlubmVySFRNTCA9IFwiV2VsY29tZSB0byBjcmVhdGUgYWNjb3VudFwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd19mb3Jnb3R0ZW5fZm9ybShpc192aXNpYmxlKSB7XHJcbiAgICBpZiAoaXNfdmlzaWJsZSkge1xyXG4gICAgICAvLyBoaWRlIGxvZ2luICYgc2lnbnVwIGZvcm1cclxuICAgICAgdGhpcy5sb2dpbl9zaWdudXBfc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiLWQtbm9uZVwiKTtcclxuXHJcbiAgICAgIC8vIHNob3cgZm9yZ290dGVuIGZvcm1cclxuICAgICAgdGhpcy5mb3JnZXRfcGFzc3dvcmRfZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiLWQtbm9uZVwiKTtcclxuXHJcbiAgICAgIHRoaXMuZm9yZ290dG9uX251bWJlcl9ib3guY2xhc3NMaXN0LnJlbW92ZShcIi1kLW5vbmVcIik7XHJcbiAgICAgIHRoaXMuZm9yZ290dG9uX251bWJlcl9vdHBfYm94LmNsYXNzTGlzdC5hZGQoXCItZC1ub25lXCIpO1xyXG5cclxuICAgICAgLy8gYnV0dG9uIGhpZGUvc2hvd1xyXG4gICAgICB0aGlzLnJlcXVlc3RfbmV3X3Bhc3N3b3JkX2J0bi5jbGFzc0xpc3QucmVtb3ZlKFwiLWQtbm9uZVwiKTtcclxuICAgICAgdGhpcy51cGRhdGVfcGFzc3dvcmRfYnRuLmNsYXNzTGlzdC5hZGQoXCItZC1ub25lXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gaGlkZSB0aGUgZm9yZ290dG9uIGZvcm1cclxuICAgICAgdGhpcy5mb3JnZXRfcGFzc3dvcmRfZm9ybS5jbGFzc0xpc3QuYWRkKFwiLWQtbm9uZVwiKTtcclxuICAgICAgdGhpcy5mb3Jnb3R0b25fbnVtYmVyX2JveC5jbGFzc0xpc3QucmVtb3ZlKFwiLWQtbm9uZVwiKTtcclxuICAgICAgdGhpcy5mb3Jnb3R0b25fbnVtYmVyX290cF9ib3guY2xhc3NMaXN0LmFkZChcIi1kLW5vbmVcIik7XHJcblxyXG4gICAgICAvLyBzaG93IGxvZ2luICYgc2lnbnVwIGZvcm1cclxuICAgICAgdGhpcy5sb2dpbl9zaWdudXBfc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiLWQtbm9uZVwiKTtcclxuXHJcbiAgICAgIC8vIGJ1dHRvbiBoaWRlL3Nob3dcclxuICAgICAgdGhpcy5yZXF1ZXN0X25ld19wYXNzd29yZF9idG4uY2xhc3NMaXN0LnJlbW92ZShcIi1kLW5vbmVcIik7XHJcbiAgICAgIHRoaXMudXBkYXRlX3Bhc3N3b3JkX2J0bi5jbGFzc0xpc3QuYWRkKFwiLWQtbm9uZVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbmRfbG9naW5fcmVxdWVzdCgpIHtcclxuICAgIHRoaXMubG9naW5fYnRuLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwibG9hZGluZy1zcGlubmVyXCI+PC9kaXY+JztcclxuXHJcbiAgICBsZXQgbG9naW5fcmVtZW1iYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbWVtYmVyLXBhc3N3b3JkXCIpO1xyXG5cclxuICAgIHRoaXMubG9naW5fbWVzc2FnZS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGlmIChsb2dpbl9yZW1lbWJhci5jaGVja2VkKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmVtZW1iZXJQYXNzd29yZFwiLCB0aGlzLmxvZ2luX3Bhc3N3b3JkLnZhbHVlKTsgLy8gU3RvcmUgJ3RydWUnIGFzIGEgc3RyaW5nXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgIFwicmVtZW1iZXJQaG9uZU51bWJlclwiLFxyXG4gICAgICAgIHRoaXMubG9naW5fcGhvbmVfbnVtYmVyLnZhbHVlXHJcbiAgICAgICk7IC8vIFN0b3JlICd0cnVlJyBhcyBhIHN0cmluZ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMubG9naW5fcGhvbmVfbnVtYmVyLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMubG9naW5fcGFzc3dvcmQudmFsdWUpO1xyXG5cclxuICAgIGZldGNoKGdzcF91aV9raXRfY29tbW9uLmFqYXhfdXJsLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLCAvLyBJbXBvcnRhbnQgZm9yIFdvcmRQcmVzcyBBSkFYXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xyXG4gICAgICAgIGFjdGlvbjogXCJnc3BfdWlfa2l0X2xvZ2luXCIsXHJcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMubG9naW5fcGhvbmVfbnVtYmVyLnZhbHVlLFxyXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLmxvZ2luX3Bhc3N3b3JkLnZhbHVlLFxyXG4gICAgICAgIG5vbmNlOiBnc3BfdWlfa2l0X2NvbW1vbi5ub25jZSxcclxuICAgICAgfSksXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAvLyBIYW5kbGUgdGhlIHJlc3BvbnNlXHJcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgICAgICAgIHRoaXMubG9naW5fYnRuLmlubmVySFRNTCA9IFwiTG9naW5cIjtcclxuICAgICAgICAgIHRoaXMubG9naW5fbWVzc2FnZS5pbm5lckhUTUwgPSBcIkxvZ2luIHN1Y2Nlc3NmdWxsIVwiO1xyXG4gICAgICAgICAgdGhpcy5sb2dpbl9tZXNzYWdlLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xyXG4gICAgICAgICAgbG9jYXRpb24ucmVwbGFjZSh0aGlzLnJlZGlyZWN0X2FmdGVyX2xvZ2luLnZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5sb2dpbl9tZXNzYWdlLmlubmVySFRNTCA9IFwiTG9nLUluIEZhaWxkIVwiO1xyXG4gICAgICAgICAgdGhpcy5sb2dpbl9tZXNzYWdlLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2dpbl9idG4uaW5uZXJIVE1MID0gXCJMb2dpblwiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkFKQVggZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgICB0aGlzLmxvZ2luX21lc3NhZ2UuaW5uZXJIVE1MID1cclxuICAgICAgICAgIFwiU29tZXRoaW5nIHdlbnQgd29ybmcsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCI7XHJcbiAgICAgICAgdGhpcy5sb2dpbl9tZXNzYWdlLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICB0aGlzLmxvZ2luX2J0bi5pbm5lckhUTUwgPSBcIkxvZ2luXCI7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VuZF9zaWdudXBfcmVxdWVzdCgpIHtcclxuICAgIGNvbnN0IHBob25lX251bWJlciA9IHRoaXMuc2lnbnVwX3Bob25lX251bWJlci52YWx1ZS5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIik7XHJcbiAgICB0aGlzLnNpZ251cF9waG9uZV9udW1iZXIudmFsdWUgPSBwaG9uZV9udW1iZXI7XHJcblxyXG4gICAgaWYgKHBob25lX251bWJlci5sZW5ndGggIT0gMTEpIHtcclxuICAgICAgdGhpcy5zaWdudXBfbWVzc2FnZS5pbm5lckhUTUwgPSBcIkludmFsaWQgcGhvbmUgbnVtYmVyXCI7XHJcbiAgICAgIHRoaXMuc2lnbnVwX21lc3NhZ2Uuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2lnbnVwX25hbWUudmFsdWUgPT0gXCJcIikge1xyXG4gICAgICB0aGlzLnNpZ251cF9tZXNzYWdlLmlubmVySFRNTCA9IFwiTmFtZSBjYW4gbm90IGJlIGVtcHR5IVwiO1xyXG4gICAgICB0aGlzLnNpZ251cF9tZXNzYWdlLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2lnbnVwX2J0bi5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImxvYWRpbmctc3Bpbm5lclwiPjwvZGl2Pic7XHJcblxyXG4gICAgZmV0Y2goZ3NwX3VpX2tpdF9jb21tb24uYWpheF91cmwsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsIC8vIEltcG9ydGFudCBmb3IgV29yZFByZXNzIEFKQVhcclxuICAgICAgfSxcclxuICAgICAgYm9keTogbmV3IFVSTFNlYXJjaFBhcmFtcyh7XHJcbiAgICAgICAgYWN0aW9uOiBcImdzcF91aV9raXRfc2lnbnVwX3dpdGhfb3RwXCIsXHJcbiAgICAgICAgcGhvbmVfbnVtYmVyOiBwaG9uZV9udW1iZXIsXHJcbiAgICAgICAgbmFtZTogdGhpcy5zaWdudXBfbmFtZS52YWx1ZSxcclxuICAgICAgICBub25jZTogZ3NwX3VpX2tpdF9jb21tb24ubm9uY2UsXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgLy8gc3VjY2Vzc2VkIHJlc3BvbnNlXHJcblxyXG4gICAgICAgICAgLy8gaGlkZSBuYW1lIGJveFxyXG4gICAgICAgICAgdGhpcy5mb3JtX2lucHV0X19uYW1lLmNsYXNzTGlzdC5hZGQoXCItZC1ub25lXCIpO1xyXG4gICAgICAgICAgLy8gaGlkZSBwaG9uZSBib3hcclxuICAgICAgICAgIHRoaXMuZm9ybV9pbnB1dF9fcGhvbmUuY2xhc3NMaXN0LmFkZChcIi1kLW5vbmVcIik7XHJcblxyXG4gICAgICAgICAgLy8gc2hvdyBvdHAgYm94XHJcbiAgICAgICAgICB0aGlzLmZvcm1faW5wdXRfX290cC5jbGFzc0xpc3QucmVtb3ZlKFwiLWQtbm9uZVwiKTtcclxuXHJcbiAgICAgICAgICAvLyBoaWRlIHNpZ251cCBidXR0b25cclxuICAgICAgICAgIHRoaXMuc2lnbnVwX2J0bi5jbGFzc0xpc3QuYWRkKFwiLWQtbm9uZVwiKTtcclxuICAgICAgICAgIC8vIHNob3cgb3RwIHZlcmlmeSBidXR0b25cclxuICAgICAgICAgIHRoaXMudmVyaWZ5X290cF9idG4uY2xhc3NMaXN0LnJlbW92ZShcIi1kLW5vbmVcIik7XHJcblxyXG4gICAgICAgICAgdGhpcy5zaWdudXBfbWVzc2FnZS5pbm5lckhUTUwgPSBkYXRhLmRhdGEubWVzc2FnZSA/PyBcIlwiO1xyXG4gICAgICAgICAgdGhpcy5zaWdudXBfbWVzc2FnZS5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gZmFsc2UgcmVzcG9uc2VcclxuXHJcbiAgICAgICAgICB0aGlzLnNpZ251cF9tZXNzYWdlLmlubmVySFRNTCA9IGRhdGEuZGF0YS5lcnJvciA/PyBcIlwiO1xyXG4gICAgICAgICAgdGhpcy5zaWdudXBfbWVzc2FnZS5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyggZGF0YSApO1xyXG5cclxuICAgICAgICB0aGlzLnNpZ251cF9idG4uaW5uZXJIVE1MID0gXCJDcmVhdGUgQWNjb3VudFwiO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvciggZXJyb3IpO1xyXG4gICAgICAgIHRoaXMuc2lnbnVwX2J0bi5pbm5lckhUTUwgPSBcIkNyZWF0ZSBBY2NvdW50XCI7XHJcbiAgICAgICAgdGhpcy5zaWdudXBfbWVzc2FnZS5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgJ1wiJyArXHJcbiAgICAgICAgICBwaG9uZV9udW1iZXIgK1xyXG4gICAgICAgICAgJ1wiJyArXHJcbiAgICAgICAgICBcIiBUaGlzIG51bWJlciBtaWdodCBiZSBhbHJlYWR5IHJlZ2lzdGVkLCBUcnkgd2l0aCBhIG5ldyBudW1iZXIsXCI7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VuZF9zaWdudXBfb3RwX3ZlcmlmaWNhdGlvbl9yZXF1ZXN0KCkge1xyXG4gICAgdGhpcy52ZXJpZnlfb3RwX2J0bi5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImxvYWRpbmctc3Bpbm5lclwiPjwvZGl2Pic7XHJcblxyXG4gICAgZmV0Y2goZ3NwX3VpX2tpdF9jb21tb24uYWpheF91cmwsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsIC8vIEltcG9ydGFudCBmb3IgV29yZFByZXNzIEFKQVhcclxuICAgICAgfSxcclxuICAgICAgYm9keTogbmV3IFVSTFNlYXJjaFBhcmFtcyh7XHJcbiAgICAgICAgYWN0aW9uOiBcImdzcF91aV9raXRfc2lnbnVwX290cF92ZXJpZmljYXRpb25cIixcclxuICAgICAgICBvdHBfY29kZTogdGhpcy5zaWdudXBfb3RwX2NvZGUudmFsdWUsXHJcbiAgICAgICAgcGhvbmVfbnVtYmVyOiB0aGlzLnNpZ251cF9waG9uZV9udW1iZXIudmFsdWUsXHJcbiAgICAgICAgbm9uY2U6IGdzcF91aV9raXRfY29tbW9uLm5vbmNlLFxyXG4gICAgICB9KSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgXHJcblxyXG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHRoaXMudmVyaWZ5X290cF9idG4uaW5uZXJIVE1MID0gXCJPVFAgVmVyaWZ5XCI7XHJcbiAgICAgICAgICB0aGlzLnNpZ251cF9tZXNzYWdlLmlubmVySFRNTCA9IGRhdGEuZGF0YS5tZXNzYWdlID8/IFwiXCI7XHJcbiAgICAgICAgICB0aGlzLnNpZ251cF9tZXNzYWdlLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dzcF9vdHBfY29kZScgLCB0aGlzLnNpZ251cF9vdHBfY29kZS52YWx1ZSk7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ3NwX3Bob25lX251bWJlcicgLCB0aGlzLnNpZ251cF9waG9uZV9udW1iZXIudmFsdWUpO1xyXG5cclxuICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoIHdpbmRvdy5sb2NhdGlvbi5ocmVmICsgXCI/cGhvbmUtbnVtYmVyPVwiICsgdGhpcy5zaWdudXBfcGhvbmVfbnVtYmVyLnZhbHVlICsgXCImb3RwPVwiICsgdGhpcy5zaWdudXBfb3RwX2NvZGUudmFsdWUgKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuc2lnbnVwX21lc3NhZ2UuaW5uZXJIVE1MID0gZGF0YS5kYXRhLmVycm9yID8/IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIm90cCB2ZXJpZmljYXRpb24gZXJyb3JcIiArIGVycm9yKTtcclxuICAgICAgICB0aGlzLnZlcmlmeV9vdHBfYnRuLmlubmVySFRNTCA9IFwiVGhhbmsgeW91LCB5b3VyIHBob25lIG51bWJlciBzdWNjZXNzZnVsbHkgcmVnaXN0ZXJkXCI7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VuZF9mb3JnZXRfcGFzc3dvcmRfcmVxdWVzdCgpIHtcclxuICAgIC8vXHJcblxyXG4gICAgaWYgKHRoaXMuZm9yZ290dGVuX3Bob25lX251bWJlci52YWx1ZS5sZW5ndGggIT0gMTEpIHtcclxuICAgICAgdGhpcy5mb3Jnb3R0ZW5fbWVzc2FnZS5pbm5lckhUTUwgPSBcIkludmFsaWQgUGhvbmUgTnVtYmVyXCI7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZvcmdvdHRlbl9tZXNzYWdlLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgdGhpcy5yZXF1ZXN0X25ld19wYXNzd29yZF9idG4uaW5uZXJIVE1MID1cclxuICAgICAgJzxkaXYgY2xhc3M9XCJsb2FkaW5nLXNwaW5uZXJcIj48L2Rpdj4nO1xyXG5cclxuICAgIGZldGNoKGdzcF91aV9raXRfY29tbW9uLmFqYXhfdXJsLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLCAvLyBJbXBvcnRhbnQgZm9yIFdvcmRQcmVzcyBBSkFYXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xyXG4gICAgICAgIGFjdGlvbjogXCJnc3BfdWlfa2l0X2ZvcmdldF9wYXNzd29yZFwiLFxyXG4gICAgICAgIHBob25lX251bWJlcjogdGhpcy5mb3Jnb3R0ZW5fcGhvbmVfbnVtYmVyLnZhbHVlLFxyXG4gICAgICAgIG5vbmNlOiBnc3BfdWlfa2l0X2NvbW1vbi5ub25jZSxcclxuICAgICAgfSksXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAvLyBoaWRlIHBob25lIG51bWJlclxyXG4gICAgICAgICAgdGhpcy5mb3Jnb3R0b25fbnVtYmVyX2JveC5jbGFzc0xpc3QuYWRkKFwiLWQtbm9uZVwiKTtcclxuICAgICAgICAgIC8vIHNob3cgb3RwXHJcbiAgICAgICAgICB0aGlzLmZvcmdvdHRvbl9udW1iZXJfb3RwX2JveC5jbGFzc0xpc3QucmVtb3ZlKFwiLWQtbm9uZVwiKTtcclxuICAgICAgICAgIC8vIGhpZGUgcmVxdWVzdCBuZXcgcGFzc3dvcmQgYnV0dG9uXHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3RfbmV3X3Bhc3N3b3JkX2J0bi5jbGFzc0xpc3QuYWRkKFwiLWQtbm9uZVwiKTtcclxuICAgICAgICAgIC8vIHNob3cgdXBkYXRlIHBhc3N3b3JkIGJ1dHRvblxyXG4gICAgICAgICAgdGhpcy51cGRhdGVfcGFzc3dvcmRfYnRuLmNsYXNzTGlzdC5yZW1vdmUoJy1kLW5vbmUnKTtcclxuXHJcblxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5mb3Jnb3R0ZW5fbWVzc2FnZS5pbm5lckhUTUwgPSBkYXRhLmRhdGEuZXJyb3IgPz8gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB0aGlzLnJlcXVlc3RfbmV3X3Bhc3N3b3JkX2J0bi5pbm5lckhUTUwgPSBcIlJlcXVlc3QgTmV3IFBhc3N3b3JkXCI7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB0aGlzLnJlcXVlc3RfbmV3X3Bhc3N3b3JkX2J0bi5pbm5lckhUTUwgPSBcIlJlcXVlc3QgTmV3IFBhc3N3b3JkXCI7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VuZF9wYXNzd29yZF91cGRhdGVfcmVxdWVzdCgpIHtcclxuXHJcbiAgICBpZiAodGhpcy5mb3Jnb3R0ZW5fb3RwLnZhbHVlID09ICcnKSB7XHJcbiAgICAgIHRoaXMuZm9yZ290dGVuX21lc3NhZ2UuaW5uZXJIVE1MID0gJ1BsZWFzZSBlbnRlciBPVFAgY29kZSc7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wYXNzd29yZC52YWx1ZSA9PSAnJyApIHtcclxuICAgICAgdGhpcy5mb3Jnb3R0ZW5fbWVzc2FnZS5pbm5lckhUTUwgPSAnUGxlYXNlIGVudGVyIGEgbmV3IHBhc3N3b3JkJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmNvbmZpcm1fcGFzc3dvcmQudmFsdWUgKSB7XHJcbiAgICAgIHRoaXMuZm9yZ290dGVuX21lc3NhZ2UuaW5uZXJIVE1MID0gJ1Bhc3N3b3JkIGRpZCBub3QgbWF0Y2gnO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51cGRhdGVfcGFzc3dvcmRfYnRuLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwibG9hZGluZy1zcGlubmVyXCI+PC9kaXY+JztcclxuXHJcbiAgICBmZXRjaCggZ3NwX3VpX2tpdF9jb21tb24uYWpheF91cmwgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLCAvLyBJbXBvcnRhbnQgZm9yIFdvcmRQcmVzcyBBSkFYXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xyXG4gICAgICAgIGFjdGlvbjogXCJnc3BfdWlfa2l0X3VwZGF0ZV9wYXNzd29yZF9ieV9waG9uZV9vdHBcIixcclxuICAgICAgICBwaG9uZV9udW1iZXI6IHRoaXMuZm9yZ290dGVuX3Bob25lX251bWJlci52YWx1ZSxcclxuICAgICAgICBvdHBfY29kZTogdGhpcy5mb3Jnb3R0ZW5fb3RwLnZhbHVlLFxyXG4gICAgICAgIHBhc3N3b3JkIDogdGhpcy5wYXNzd29yZC52YWx1ZSxcclxuICAgICAgICBub25jZTogZ3NwX3VpX2tpdF9jb21tb24ubm9uY2UsXHJcbiAgICAgIH0pLFxyXG4gICAgfSApLnRoZW4oICggcmVzcG9uc2UgKSA9PiByZXNwb25zZS5qc29uKCkgKS50aGVuKCAoZGF0YSkgPT4ge1xyXG5cclxuICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIHRoaXMuZm9yZ290dGVuX21lc3NhZ2UuaW5uZXJIVE1MID0gZGF0YS5kYXRhLm1lc3NhZ2UgPz8gJ05vIHJlc3BvbnNlJztcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5mb3Jnb3R0ZW5fbWVzc2FnZS5pbm5lckhUTUwgPSBkYXRhLmRhdGEuZXJyb3IgPz8gJ1NvbWV0aGluZyB3ZW50IHdyb25nJztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHRoaXMudXBkYXRlX3Bhc3N3b3JkX2J0bi5pbm5lckhUTUwgPSAnVXBkYXRlIFBhc3N3b3JkJztcclxuICAgIH0pLmNhdGNoKCAoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIHRoaXMudXBkYXRlX3Bhc3N3b3JkX2J0bi5pbm5lckhUTUwgPSAnVXBkYXRlIFBhc3N3b3JkJztcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHU1BfU2V0X1RodW1ibmFpbF9IZWlnaHQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50aHVtYm5haWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi4tdGh1bWJuYWlsXCIpO1xyXG4gICAgdGhpcy53aW5kb3dfd2lkdGggPSBzY3JlZW4ud2lkdGg7XHJcblxyXG4gICAgaWYgKHRoaXMudGh1bWJuYWlscykge1xyXG4gICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgICB0aGlzLnNldF90aHVtYm5haWxfaGVpZ2h0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBldmVudHMoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMud2luZG93X3dpZHRoID0gc2NyZWVuLndpZHRoO1xyXG4gICAgICB0aGlzLnNldF90aHVtYm5haWxfaGVpZ2h0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldF90aHVtYm5haWxfaGVpZ2h0KCkge1xyXG4gICAgY29uc3QgY2FyZF92aWV3X2Jsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLi1jYXJkLXZpZXctYmxvZ1wiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50aHVtYm5haWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLndpbmRvd193aWR0aCA+IDYwMCkge1xyXG4gICAgICAgIHRoaXMudGh1bWJuYWlsc1tpXS5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICAgIE1hdGgucm91bmQoKGNhcmRfdmlld19ibG9nLm9mZnNldEhlaWdodCAvIDE2KSAqIDcpICsgXCJweFwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy53aW5kb3dfd2lkdGggPiA3NjgpIHtcclxuICAgICAgICB0aGlzLnRodW1ibmFpbHNbaV0uc3R5bGUuaGVpZ2h0ID1cclxuICAgICAgICBNYXRoLnJvdW5kKChjYXJkX3ZpZXdfYmxvZy5vZmZzZXRIZWlnaHQgLyAxNikgKiA4KSArIFwicHhcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMud2luZG93X3dpZHRoID4gOTkyKSB7XHJcbiAgICAgICAgdGhpcy50aHVtYm5haWxzW2ldLnN0eWxlLmhlaWdodCA9XHJcbiAgICAgICAgTWF0aC5yb3VuZCgoY2FyZF92aWV3X2Jsb2cub2Zmc2V0SGVpZ2h0IC8gMTYpICogNykgKyBcInB4XCI7XHJcbiAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBkYXRlX1Byb2ZpbGVfQWZ0ZXJfU2lnbnVwX1dpdGhfT1RQIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jbGFzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlLXVwZGF0ZV9fY2xhc3MnKTtcclxuICAgICAgICB0aGlzLmdlbmRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlLXVwZGF0ZV9fZ2VuZGVyJyk7XHJcbiAgICAgICAgdGhpcy5yZWxpZ2lvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlLXVwZGF0ZV9fcmVsZWdpb24nKTtcclxuICAgICAgICB0aGlzLmhvbWVfZGlzdHJpY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZS11cGRhdGVfX2hvbWUtZGlzdHJpY3QnKTtcclxuICAgICAgICB0aGlzLmRhdGVfb2ZfYmlydGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZS11cGRhdGVfX2RhdGUtb2YtYmlydGgnKTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2ZpbGUtdXBkYXRlX19wYXNzd29yZCcpO1xyXG4gICAgICAgIHRoaXMuY29uZmlybV9wYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlLXVwZGF0ZV9fY29uZmlybS1wYXNzd29yZCcpO1xyXG5cclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLXByb2ZpbGUtbWVzc2FnZScpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlX3Byb2ZpbGVfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1wcm9maWxlLWJ0bicpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jbGFzcykge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgZXZlbnRzKCkge1xyXG5cclxuICAgICAgICB0aGlzLmRhdGVfb2ZfYmlydGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93UGlja2VyKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlX3Byb2ZpbGVfYnRuLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycgLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tfaW5wdXRzX2hhc19kYXRhKCk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5jbGFzcy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnICwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgZ3JlZW4nO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNsYXNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScgLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3Muc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCBncmVlbic7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2VuZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScgLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZGVyLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgZ3JlZW4nO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnJlbGlnaW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScgLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVsaWdpb24uc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCBncmVlbic7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaG9tZV9kaXN0cmljdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnICwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhvbWVfZGlzdHJpY3Quc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCBncmVlbic7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0ZV9vZl9iaXJ0aC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnICwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGVfb2ZfYmlydGguc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCBncmVlbic7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicgLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhc3N3b3JkLnZhbHVlLmxlbmd0aCA+PSA2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgZ3JlZW4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlybV9wYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJyAsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5jb25maXJtX3Bhc3N3b3JkLnZhbHVlICE9ICcnICYmICB0aGlzLnBhc3N3b3JkLnZhbHVlID09IHRoaXMuY29uZmlybV9wYXNzd29yZC52YWx1ZSApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybV9wYXNzd29yZC5zdHlsZS5ib3JkZXIgPSAnMnB4IHNvbGlkIGdyZWVuJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrX2lucHV0c19oYXNfZGF0YSgpIHtcclxuXHJcbiAgICAgICAgbGV0IGlzX3ZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2xhc3MudmFsdWUgPT0gJzAnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3Muc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZWQnO1xyXG4gICAgICAgICAgICBpc192YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2VuZGVyLnZhbHVlID09ICcwJykge1xyXG4gICAgICAgICAgICB0aGlzLmdlbmRlci5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIHJlZCc7XHJcbiAgICAgICAgICAgIGlzX3ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5yZWxpZ2lvbi52YWx1ZSA9PSAnMCcpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWxpZ2lvbi5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIHJlZCc7XHJcbiAgICAgICAgICAgIGlzX3ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5ob21lX2Rpc3RyaWN0LnZhbHVlID09ICcwJykge1xyXG4gICAgICAgICAgICB0aGlzLmhvbWVfZGlzdHJpY3Quc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZWQnO1xyXG4gICAgICAgICAgICBpc192YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0ZV9vZl9iaXJ0aC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRlX29mX2JpcnRoLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgcmVkJztcclxuICAgICAgICAgICAgaXNfdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhc3N3b3JkLnZhbHVlLmxlbmd0aCA8ICA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmQuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZWQnO1xyXG4gICAgICAgICAgICBpc192YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlybV9wYXNzd29yZC52YWx1ZSA9PSAnJyApIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maXJtX3Bhc3N3b3JkLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgcmVkJztcclxuICAgICAgICAgICAgaXNfdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhc3N3b3JkLnZhbHVlICE9IHRoaXMuY29uZmlybV9wYXNzd29yZC52YWx1ZSApIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maXJtX3Bhc3N3b3JkLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgcmVkJztcclxuICAgICAgICAgICAgaXNfdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc192YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbmRfdXBkYXRlX3Byb2ZpbGVfcmVxdWVzdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZW5kX3VwZGF0ZV9wcm9maWxlX3JlcXVlc3QoKSB7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlX3Byb2ZpbGVfYnRuLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwibG9hZGluZy1zcGlubmVyXCI+PC9kaXY+JztcclxuICAgICAgICBjb25zdCBvdHAgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ3NwX290cF9jb2RlJyk7XHJcbiAgICAgICAgY29uc3QgcGhvbmVfbnVtYmVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dzcF9waG9uZV9udW1iZXInKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cob3RwICsgJyAnICsgcGhvbmVfbnVtYmVyKTtcclxuXHJcbiAgICAgICAgZmV0Y2goIGdzcF91aV9raXRfY29tbW9uLmFqYXhfdXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLCAvLyBJbXBvcnRhbnQgZm9yIFdvcmRQcmVzcyBBSkFYXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xyXG4gICAgICAgICAgICAgIGFjdGlvbjogXCJnc3BfdWlfa2l0X3VwZGF0ZV9wcm9maWxlX2J5X3Bob25lX290cFwiLFxyXG4gICAgICAgICAgICAgIG90cF9jb2RlOiBvdHAsXHJcbiAgICAgICAgICAgICAgcGhvbmVfbnVtYmVyOiBwaG9uZV9udW1iZXIsXHJcbiAgICAgICAgICAgICAgY2xhc3M6IHRoaXMuY2xhc3MudmFsdWUsXHJcbiAgICAgICAgICAgICAgZ2VuZGVyOiB0aGlzLmdlbmRlci52YWx1ZSxcclxuICAgICAgICAgICAgICByZWxpZ2lvbjogdGhpcy5yZWxpZ2lvbi52YWx1ZSxcclxuICAgICAgICAgICAgICBob21lX2Rpc3RyaWN0OiB0aGlzLmhvbWVfZGlzdHJpY3QudmFsdWUsXHJcbiAgICAgICAgICAgICAgZGF0ZV9vZl9iaXJ0aDogdGhpcy5kYXRlX29mX2JpcnRoLnZhbHVlLFxyXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLnZhbHVlLFxyXG4gICAgICAgICAgICAgIG5vbmNlOiBnc3BfdWlfa2l0X2NvbW1vbi5ub25jZSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSApLnRoZW4gKCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0gKS50aGVuKChkYXRhKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuaW5uZXJIVE1MID0gZGF0YS5kYXRhLm1lc3NhZ2UgPz8gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2Uuc3R5bGUuY29sb3IgPSAnZ3JlZW4nO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShnc3BfdWlfa2l0X2NvbW1vbi5zaXRlX3VybCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZV9wcm9maWxlX2J0bi5jbGFzc0xpc3QuYWRkKCctZC1ub25lJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5pbm5lckhUTUwgPSBkYXRhLmRhdGEuZXJyb3IgPz8gJyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlX3Byb2ZpbGVfYnRuLmlubmVySFRNTCA9ICdVcGRhdGUgUHJvZmlsZSc7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIH0pLmNhdGNoKCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZV9wcm9maWxlX2J0bi5pbm5lckhUTUwgPSAnVXBkYXRlIFByb2ZpbGUnO1xyXG4gICAgICAgIH0gKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdTUF9VSV9LaXRfWW91dHViZV9QbGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5wbGF5ZXI7XHJcblxyXG4gICAgbGV0IHZpZGVvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1jb250YWluZXJcIik7XHJcbiAgICBpZiAodmlkZW9Db250YWluZXIpIHtcclxuICAgICAgdGhpcy52aWRlb0lkID0gdmlkZW9Db250YWluZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS12aWRlby1pZFwiKTtcclxuXHJcbiAgICAgIHRoaXMubG9hZFlvdVR1YmVBUEkoKTtcclxuICBcclxuICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1lbHNle1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk5vIHZpZGVvIGNvbnRhaW5lciBmb3VuZC5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBldmVudHMoKSB7XHJcbiAgICB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSAoKSA9PiB0aGlzLm9uWW91VHViZUlmcmFtZUFQSVJlYWR5KCk7XHJcblxyXG4gICAgLy8gUGxheSB2aWRlbyBhbmQgaGlkZSBvdmVybGF5XHJcbiAgICB3aW5kb3cucGxheVZpZGVvID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnBsYXllci5wbGF5VmlkZW8oKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1vdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbGljay1ibG9ja2VyXCIpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImFsbFwiO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBQbGF5IG9yIFBhdXNlXHJcbiAgICB3aW5kb3cucGxheVBhdXNlID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wbGF5ZXIuZ2V0UGxheWVyU3RhdGUoKSA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBhdXNlVmlkZW8oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnBsYXllci5wbGF5VmlkZW8oKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTZWVrIGZvcndhcmQgMTAgc2Vjb25kc1xyXG4gICAgd2luZG93LnNlZWtGb3J3YXJkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnBsYXllci5zZWVrVG8odGhpcy5wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSArIDEwLCB0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gU2VlayBiYWNrd2FyZCAxMCBzZWNvbmRzXHJcbiAgICB3aW5kb3cuc2Vla0JhY2t3YXJkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnBsYXllci5zZWVrVG8odGhpcy5wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSAtIDEwLCB0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gRnVsbHNjcmVlbiB0b2dnbGVcclxuICAgIHdpbmRvdy50b2dnbGVGdWxsU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgICB2YXIgdmlkZW9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZGVvLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgIGlmICghZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIHtcclxuICAgICAgICBpZiAodmlkZW9Db250YWluZXIucmVxdWVzdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICAgIHZpZGVvQ29udGFpbmVyLnJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2aWRlb0NvbnRhaW5lci5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xyXG4gICAgICAgICAgdmlkZW9Db250YWluZXIubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZpZGVvQ29udGFpbmVyLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgICB2aWRlb0NvbnRhaW5lci53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmlkZW9Db250YWluZXIubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgdmlkZW9Db250YWluZXIubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2aWRlb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZnVsbHNjcmVlblwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIHZpZGVvQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJmdWxsc2NyZWVuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gTGlzdGVuIGZvciBmdWxsc2NyZWVuIGNoYW5nZXNcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmdWxsc2NyZWVuY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHZpZGVvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1jb250YWluZXJcIik7XHJcbiAgICAgIGlmIChkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xyXG4gICAgICAgIHZpZGVvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmdWxsc2NyZWVuXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZpZGVvQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJmdWxsc2NyZWVuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfSAvLyBlbnZlbnRzIGVuZGluZ1xyXG5cclxuICBsb2FkWW91VHViZUFQSSgpIHtcclxuICAgIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgdGFnLnNyYyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaVwiO1xyXG4gICAgdmFyIGZpcnN0U2NyaXB0VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XHJcbiAgICBmaXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcclxuICB9XHJcblxyXG4gIG9uWW91VHViZUlmcmFtZUFQSVJlYWR5KCkge1xyXG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgWVQuUGxheWVyKFwicGxheWVyXCIsIHtcclxuICAgICAgdmlkZW9JZDogdGhpcy52aWRlb0lkLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIFlvdVR1YmUgdmlkZW8gSURcclxuICAgICAgcGxheWVyVmFyczoge1xyXG4gICAgICAgIGNvbnRyb2xzOiAwLFxyXG4gICAgICAgIG1vZGVzdGJyYW5kaW5nOiAxLFxyXG4gICAgICAgIHJlbDogMCxcclxuICAgICAgICBzaG93aW5mbzogMCxcclxuICAgICAgICBmczogMCxcclxuICAgICAgICBkaXNhYmxla2I6IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIGV2ZW50czoge1xyXG4gICAgICAgIG9uUmVhZHk6IChldmVudCkgPT4gdGhpcy5vblBsYXllclJlYWR5KGV2ZW50KSwgLy8gVXNlIGFycm93IGZ1bmN0aW9uIHRvIHJldGFpbiBgdGhpc2AgY29cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25QbGF5ZXJSZWFkeShldmVudCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1vdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHRoaXMubG9hZFF1YWxpdHlPcHRpb25zKCk7IC8vIExvYWQgYXZhaWxhYmxlIHZpZGVvIHF1YWxpdHkgb3B0aW9uc1xyXG4gIH1cclxuXHJcbiAgLy8gTG9hZCBhdmFpbGFibGUgdmlkZW8gcXVhbGl0aWVzXHJcbiAgbG9hZFF1YWxpdHlPcHRpb25zKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGxldCBxdWFsaXR5TGV2ZWxzID0gcGxheWVyLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKTtcclxuICAgICAgbGV0IHF1YWxpdHlTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVhbGl0eS1zZWxlY3RvclwiKTtcclxuXHJcbiAgICAgIHF1YWxpdHlTZWxlY3Rvci5pbm5lckhUTUwgPSBcIjxvcHRpb24gdmFsdWU9Jyc+UXVhbGl0eTwvb3B0aW9uPlwiOyAvLyBSZXNldFxyXG5cclxuICAgICAgcXVhbGl0eUxldmVscy5mb3JFYWNoKChsZXZlbCkgPT4ge1xyXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGxldmVsO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGxldmVsLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgcXVhbGl0eVNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMTAwMCk7IC8vIERlbGF5IGZvciBBUEkgdG8gcmV0dXJuIHF1YWxpdHkgbGV2ZWxzXHJcbiAgfVxyXG5cclxuICAvLyBDaGFuZ2UgdmlkZW8gcXVhbGl0eVxyXG4gIGNoYW5nZVF1YWxpdHkocXVhbGl0eSkge1xyXG4gICAgaWYgKHF1YWxpdHkpIHtcclxuICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWJhY2tRdWFsaXR5KHF1YWxpdHkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdTUF9TZXRfVGh1bWJuYWlsX0hlaWdodCBmcm9tICcuL21vZHVsZXMvc2V0LXRodW1ibmFpbC1oZWlnaHQnO1xyXG5pbXBvcnQgR1NQX1VJX0tpdF9Zb3V0dWJlX1BsYXllciBmcm9tICcuL21vZHVsZXMveW91dHViZS1wbGF5ZXInO1xyXG5pbXBvcnQgTG9naW5fV2l0aF9PVFAgZnJvbSAnLi9tb2R1bGVzL2xvZ2luLXdpdGgtb3RwJztcclxuaW1wb3J0IFVwZGF0ZV9Qcm9maWxlX0FmdGVyX1NpZ251cF9XaXRoX09UUCBmcm9tICcuL21vZHVsZXMvdXBkYXRlLXByb2ZpbGUtYWZ0ZXItc2lnbnVwLXdpdGgtb3RwJztcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblxyXG4gIG5ldyBHU1BfU2V0X1RodW1ibmFpbF9IZWlnaHQoKTtcclxuICBuZXcgR1NQX1VJX0tpdF9Zb3V0dWJlX1BsYXllcigpO1xyXG4gIG5ldyBMb2dpbl9XaXRoX09UUCgpO1xyXG4gIG5ldyBVcGRhdGVfUHJvZmlsZV9BZnRlcl9TaWdudXBfV2l0aF9PVFAoKTtcclxuXHJcbn0pO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJMb2dpbl9XaXRoX09UUCIsIl9jbGFzc0NhbGxDaGVjayIsInNlY3Rpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9naW5fc2lnbnVwX3NlY3Rpb24iLCJxdWVyeVNlbGVjdG9yIiwibG9naW5fZm9ybSIsInNpZ251cF9mb3JtIiwiZm9yZ2V0X3Bhc3N3b3JkX2Zvcm0iLCJsb2dpbl9mb3JtX3RhYiIsInNpZ251cF9mb3JtX3RhYiIsInNpZ251cF9mb3JtX3RhYjIiLCJmb3JtX3RpdGxlIiwibG9naW5fcGhvbmVfbnVtYmVyIiwibG9naW5fcGFzc3dvcmQiLCJsb2dpbl9tZXNzYWdlIiwicmVkaXJlY3RfYWZ0ZXJfbG9naW4iLCJyZWRpcmVjdF9hZnRlcl9zaWdudXAiLCJzaWdudXBfbmFtZSIsInNpZ251cF9waG9uZV9udW1iZXIiLCJzaWdudXBfb3RwX2NvZGUiLCJzaWdudXBfbWVzc2FnZSIsImZvcmdvdHRlbl9waG9uZV9udW1iZXIiLCJmb3Jnb3R0ZW5fb3RwIiwicGFzc3dvcmQiLCJjb25maXJtX3Bhc3N3b3JkIiwiZm9yZ290dGVuX21lc3NhZ2UiLCJmb3JtX2lucHV0X19uYW1lIiwiZm9ybV9pbnB1dF9fcGhvbmUiLCJmb3JtX2lucHV0X19vdHAiLCJmb3Jnb3R0b25fbnVtYmVyX2JveCIsImZvcmdvdHRvbl9udW1iZXJfb3RwX2JveCIsImxvZ2luX2J0biIsInNpZ251cF9idG4iLCJ2ZXJpZnlfb3RwX2J0biIsImZvcmdldF9wYXNzd29yZF9idG4iLCJyZXF1ZXN0X25ld19wYXNzd29yZF9idG4iLCJ1cGRhdGVfcGFzc3dvcmRfYnRuIiwiYmFja190b19sb2dpbl9idG4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidmFsdWUiLCJwaG9uZU51bWJlciIsImV2ZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsIl90aGlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcm1fdmlzaWFiaWxpdHkiLCJzZW5kX2xvZ2luX3JlcXVlc3QiLCJzZW5kX3NpZ251cF9yZXF1ZXN0Iiwic2VuZF9zaWdudXBfb3RwX3ZlcmlmaWNhdGlvbl9yZXF1ZXN0IiwiaW5uZXJIVE1MIiwic2hvd19mb3Jnb3R0ZW5fZm9ybSIsInNlbmRfZm9yZ2V0X3Bhc3N3b3JkX3JlcXVlc3QiLCJzZW5kX3Bhc3N3b3JkX3VwZGF0ZV9yZXF1ZXN0IiwiaXNfbG9naW5fdmlzaWFibGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJpc192aXNpYmxlIiwiX3RoaXMyIiwibG9naW5fcmVtZW1iYXIiLCJjaGVja2VkIiwic2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsImdzcF91aV9raXRfY29tbW9uIiwiYWpheF91cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIlVSTFNlYXJjaFBhcmFtcyIsImFjdGlvbiIsInVzZXJuYW1lIiwibm9uY2UiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJzdHlsZSIsImNvbG9yIiwibG9jYXRpb24iLCJyZXBsYWNlIiwiZXJyb3IiLCJfdGhpczMiLCJwaG9uZV9udW1iZXIiLCJsZW5ndGgiLCJuYW1lIiwiX2RhdGEkZGF0YSRtZXNzYWdlIiwibWVzc2FnZSIsIl9kYXRhJGRhdGEkZXJyb3IiLCJfdGhpczQiLCJvdHBfY29kZSIsIl9kYXRhJGRhdGEkbWVzc2FnZTIiLCJ3aW5kb3ciLCJocmVmIiwiX2RhdGEkZGF0YSRlcnJvcjIiLCJfdGhpczUiLCJfZGF0YSRkYXRhJGVycm9yMyIsIl90aGlzNiIsIl9kYXRhJGRhdGEkbWVzc2FnZTMiLCJfZGF0YSRkYXRhJGVycm9yNCIsImRlZmF1bHQiLCJHU1BfU2V0X1RodW1ibmFpbF9IZWlnaHQiLCJ0aHVtYm5haWxzIiwicXVlcnlTZWxlY3RvckFsbCIsIndpbmRvd193aWR0aCIsInNjcmVlbiIsIndpZHRoIiwic2V0X3RodW1ibmFpbF9oZWlnaHQiLCJjYXJkX3ZpZXdfYmxvZyIsImkiLCJoZWlnaHQiLCJNYXRoIiwicm91bmQiLCJvZmZzZXRIZWlnaHQiLCJVcGRhdGVfUHJvZmlsZV9BZnRlcl9TaWdudXBfV2l0aF9PVFAiLCJnZW5kZXIiLCJyZWxpZ2lvbiIsImhvbWVfZGlzdHJpY3QiLCJkYXRlX29mX2JpcnRoIiwidXBkYXRlX3Byb2ZpbGVfYnRuIiwic2hvd1BpY2tlciIsImNoZWNrX2lucHV0c19oYXNfZGF0YSIsImJvcmRlciIsImlzX3ZhbGlkIiwic2VuZF91cGRhdGVfcHJvZmlsZV9yZXF1ZXN0Iiwib3RwIiwic2l0ZV91cmwiLCJHU1BfVUlfS2l0X1lvdXR1YmVfUGxheWVyIiwicGxheWVyIiwidmlkZW9Db250YWluZXIiLCJ2aWRlb0lkIiwiZ2V0QXR0cmlidXRlIiwibG9hZFlvdVR1YmVBUEkiLCJvbllvdVR1YmVJZnJhbWVBUElSZWFkeSIsInBsYXlWaWRlbyIsImRpc3BsYXkiLCJwb2ludGVyRXZlbnRzIiwicGxheVBhdXNlIiwiZ2V0UGxheWVyU3RhdGUiLCJwYXVzZVZpZGVvIiwic2Vla0ZvcndhcmQiLCJzZWVrVG8iLCJnZXRDdXJyZW50VGltZSIsInNlZWtCYWNrd2FyZCIsInRvZ2dsZUZ1bGxTY3JlZW4iLCJmdWxsc2NyZWVuRWxlbWVudCIsInJlcXVlc3RGdWxsc2NyZWVuIiwibW96UmVxdWVzdEZ1bGxTY3JlZW4iLCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiIsIm1zUmVxdWVzdEZ1bGxzY3JlZW4iLCJleGl0RnVsbHNjcmVlbiIsInRhZyIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJmaXJzdFNjcmlwdFRhZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIllUIiwiUGxheWVyIiwicGxheWVyVmFycyIsImNvbnRyb2xzIiwibW9kZXN0YnJhbmRpbmciLCJyZWwiLCJzaG93aW5mbyIsImZzIiwiZGlzYWJsZWtiIiwib25SZWFkeSIsImV2ZW50Iiwib25QbGF5ZXJSZWFkeSIsImxvYWRRdWFsaXR5T3B0aW9ucyIsInNldFRpbWVvdXQiLCJxdWFsaXR5TGV2ZWxzIiwiZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscyIsInF1YWxpdHlTZWxlY3RvciIsImZvckVhY2giLCJsZXZlbCIsIm9wdGlvbiIsInRleHRDb250ZW50IiwidG9VcHBlckNhc2UiLCJhcHBlbmRDaGlsZCIsImNoYW5nZVF1YWxpdHkiLCJxdWFsaXR5Iiwic2V0UGxheWJhY2tRdWFsaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==