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
      this.signup_name = document.querySelector('.signup-name');
      this.signup_phone_number = document.querySelector(".signup-phone-number");
      this.signup_otp_code = document.querySelector(".signup-otp-code");
      this.signup_message = document.querySelector('.signup-message');

      // otp box , it will be used to hide/show
      this.form_input__name = document.querySelector('.-from-input__name');
      // otp box , it will be used to hide/show
      this.form_input__phone = document.querySelector('.-from-input__phone');
      // otp box , it will be used to hide/show
      this.form_input__otp = document.querySelector('.-form-input__otp');
      this.login_btn = document.querySelector(".-login-btn");
      this.signup_btn = document.querySelector(".-signup-btn");
      this.verify_otp_btn = document.querySelector('.-verify-otp-btn');
      var password = localStorage.getItem('rememberPassword');
      if (password) {
        this.login_password.value = password;
      }
      var phoneNumber = localStorage.getItem('rememberPhoneNumber');
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
      this.signup_btn.addEventListener('click', function () {
        _this.send_signup_request();
      });
      this.verify_otp_btn.addEventListener('click', function () {
        return _this.send_signup_otp_verification_request();
      });
      this.signup_phone_number.addEventListener('keydown', function () {
        _this.signup_message.innerHTML = '';
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
  }, {
    key: "send_login_request",
    value: function send_login_request() {
      var _this2 = this;
      this.login_btn.innerHTML = '<div class="loading-spinner"></div>';
      var login_remembar = document.getElementById('remember-password');
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
          _this2.login_btn.innerHTML = 'Login';
          _this2.login_message.innerHTML = 'Login successfull!';
          _this2.login_message.style.color = 'green';
          location.replace(_this2.redirect_after_login.value);
        } else {
          _this2.login_message.innerHTML = 'Log-In Faild!';
          _this2.login_message.style.color = 'red';
        }
        _this2.login_btn.innerHTML = 'Login';
        console.log(data);
      })["catch"](function (error) {
        console.error("AJAX error:", error);
        _this2.login_message.innerHTML = 'Something went worng, please try again later.';
        _this2.login_message.style.color = 'red';
        _this2.login_btn.innerHTML = 'Login';
      });
    }
  }, {
    key: "send_signup_request",
    value: function send_signup_request() {
      var _this3 = this;
      var phone_number = this.signup_phone_number.value.replace(/[^0-9]/g, '');
      this.signup_phone_number.value = phone_number;
      if (phone_number.length != 11) {
        this.signup_message.innerHTML = 'Invalid phone number';
        this.signup_message.style.color = 'red';
        return;
      }
      if (this.signup_name.value == '') {
        this.signup_message.innerHTML = 'Name can not be empty!';
        this.signup_message.style.color = 'red';
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
        return response.json();
      }).then(function (data) {
        if (data.success) {
          var _data$data$message;
          // successed response

          // hide name box
          _this3.form_input__name.classList.add('-d-none');
          // hide phone box
          _this3.form_input__phone.classList.add('-d-none');

          // show otp box
          _this3.form_input__otp.classList.remove('-d-none');

          // hide signup button
          _this3.signup_btn.classList.add('-d-none');
          // show otp verify button
          _this3.verify_otp_btn.classList.remove('-d-none');
          _this3.signup_message.innerHTML = (_data$data$message = data.data.message) !== null && _data$data$message !== void 0 ? _data$data$message : '';
          _this3.signup_message.style.color = 'black';
        } else {
          var _data$data$error;
          // false response 

          _this3.signup_message.innerHTML = (_data$data$error = data.data.error) !== null && _data$data$error !== void 0 ? _data$data$error : '';
          _this3.signup_message.style.color = 'red';
        }
        console.log(data);
        _this3.signup_btn.innerHTML = 'Create Account';
      })["catch"](function (error) {
        console.error("AJAX error:", error);
        _this3.signup_btn.innerHTML = 'Create Account';
        _this3.signup_message.innerHTML = '"' + phone_number + '"' + ' This number might be already registed, Try with a new number,';
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
        var _data$data$message2;
        _this4.verify_otp_btn.innerHTML = 'OTP Verify';
        _this4.signup_message.innerHTML = (_data$data$message2 = data.data.message) !== null && _data$data$message2 !== void 0 ? _data$data$message2 : '';
        _this4.signup_message.style.color = 'black';
        console.log(data);
      })["catch"](function (error) {
        console.error('otp verification error' + error);
        _this4.verify_otp_btn.innerHTML = 'OTP Verify';
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



document.addEventListener("DOMContentLoaded", function () {
  new _modules_set_thumbnail_height__WEBPACK_IMPORTED_MODULE_0__["default"]();
  new _modules_youtube_player__WEBPACK_IMPORTED_MODULE_1__["default"]();
  new _modules_login_with_otp__WEBPACK_IMPORTED_MODULE_2__["default"]();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxjQUFjO0VBQ2pDLFNBQUFBLGVBQUEsRUFBYztJQUFBQyxlQUFBLE9BQUFELGNBQUE7SUFDWixJQUFJLENBQUNFLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsNEJBQTRCLENBQUM7SUFFcEUsSUFBSSxJQUFJLENBQUNGLE9BQU8sRUFBRTtNQUNoQixJQUFJLENBQUNHLFVBQVUsR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsYUFBYSxDQUFDO01BQ3ZELElBQUksQ0FBQ0MsV0FBVyxHQUFHSixRQUFRLENBQUNHLGFBQWEsQ0FBQyxjQUFjLENBQUM7TUFFekQsSUFBSSxDQUFDRSxjQUFjLEdBQUdMLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGlCQUFpQixDQUFDO01BQy9ELElBQUksQ0FBQ0csZUFBZSxHQUFHTixRQUFRLENBQUNHLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztNQUNqRSxJQUFJLENBQUNJLGdCQUFnQixHQUFHUCxRQUFRLENBQUNHLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztNQUVwRSxJQUFJLENBQUNLLFVBQVUsR0FBR1IsUUFBUSxDQUFDRyxhQUFhLENBQUMsYUFBYSxDQUFDO01BRXZELElBQUksQ0FBQ00sa0JBQWtCLEdBQUdULFFBQVEsQ0FBQ0csYUFBYSxDQUFDLHNCQUFzQixDQUFDO01BQ3hFLElBQUksQ0FBQ08sY0FBYyxHQUFHVixRQUFRLENBQUNHLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztNQUNoRSxJQUFJLENBQUNRLGFBQWEsR0FBR1gsUUFBUSxDQUFDQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7TUFFOUQsSUFBSSxDQUFDVyxvQkFBb0IsR0FBR1osUUFBUSxDQUFDQyxjQUFjLENBQUMsdUJBQXVCLENBQUM7TUFDNUUsSUFBSSxDQUFDWSxxQkFBcUIsR0FBR2IsUUFBUSxDQUFDQyxjQUFjLENBQUMsd0JBQXdCLENBQUM7TUFFOUUsSUFBSSxDQUFDYSxXQUFXLEdBQUdkLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGNBQWMsQ0FBQztNQUN6RCxJQUFJLENBQUNZLG1CQUFtQixHQUFHZixRQUFRLENBQUNHLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztNQUN6RSxJQUFJLENBQUNhLGVBQWUsR0FBR2hCLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGtCQUFrQixDQUFDO01BQ2pFLElBQUksQ0FBQ2MsY0FBYyxHQUFHakIsUUFBUSxDQUFDRyxhQUFhLENBQUMsaUJBQWlCLENBQUM7O01BRS9EO01BQ0EsSUFBSSxDQUFDZSxnQkFBZ0IsR0FBR2xCLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLG9CQUFvQixDQUFDO01BQ3BFO01BQ0EsSUFBSSxDQUFDZ0IsaUJBQWlCLEdBQUduQixRQUFRLENBQUNHLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztNQUN0RTtNQUNBLElBQUksQ0FBQ2lCLGVBQWUsR0FBR3BCLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLG1CQUFtQixDQUFDO01BRWxFLElBQUksQ0FBQ2tCLFNBQVMsR0FBR3JCLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGFBQWEsQ0FBQztNQUN0RCxJQUFJLENBQUNtQixVQUFVLEdBQUd0QixRQUFRLENBQUNHLGFBQWEsQ0FBQyxjQUFjLENBQUM7TUFDeEQsSUFBSSxDQUFDb0IsY0FBYyxHQUFHdkIsUUFBUSxDQUFDRyxhQUFhLENBQUMsa0JBQWtCLENBQUM7TUFFaEUsSUFBTXFCLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsa0JBQWtCLENBQUM7TUFDekQsSUFBSUYsUUFBUSxFQUFFO1FBQ1osSUFBSSxDQUFDZCxjQUFjLENBQUNpQixLQUFLLEdBQUdILFFBQVE7TUFDdEM7TUFFQSxJQUFNSSxXQUFXLEdBQUdILFlBQVksQ0FBQ0MsT0FBTyxDQUFDLHFCQUFxQixDQUFDO01BQy9ELElBQUlFLFdBQVcsRUFBRTtRQUNmLElBQUksQ0FBQ25CLGtCQUFrQixDQUFDa0IsS0FBSyxHQUFHQyxXQUFXO01BQzdDO01BRUEsSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQztJQUNmO0VBQ0Y7RUFBQyxPQUFBQyxZQUFBLENBQUFqQyxjQUFBO0lBQUFrQyxHQUFBO0lBQUFKLEtBQUEsRUFFRCxTQUFBRSxNQUFNQSxDQUFBLEVBQUc7TUFBQSxJQUFBRyxLQUFBO01BQ1AsSUFBSSxDQUFDM0IsY0FBYyxDQUFDNEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQUEsT0FDNUNELEtBQUksQ0FBQ0UsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO01BQUEsQ0FDN0IsQ0FBQztNQUVELElBQUksQ0FBQzVCLGVBQWUsQ0FBQzJCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUFBLE9BQzdDRCxLQUFJLENBQUNFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztNQUFBLENBQzlCLENBQUM7TUFFRCxJQUFJLENBQUMzQixnQkFBZ0IsQ0FBQzBCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUFBLE9BQzlDRCxLQUFJLENBQUNFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztNQUFBLENBQzlCLENBQUM7TUFFRCxJQUFJLENBQUNiLFNBQVMsQ0FBQ1ksZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQUEsT0FBTUQsS0FBSSxDQUFDRyxrQkFBa0IsQ0FBQyxDQUFDO01BQUEsRUFBQztNQUV6RSxJQUFJLENBQUNiLFVBQVUsQ0FBQ1csZ0JBQWdCLENBQUUsT0FBTyxFQUFHLFlBQU07UUFDaERELEtBQUksQ0FBQ0ksbUJBQW1CLENBQUMsQ0FBQztNQUM1QixDQUFFLENBQUM7TUFFSCxJQUFJLENBQUNiLGNBQWMsQ0FBQ1UsZ0JBQWdCLENBQUUsT0FBTyxFQUFHO1FBQUEsT0FBTUQsS0FBSSxDQUFDSyxvQ0FBb0MsQ0FBQyxDQUFDO01BQUEsQ0FBQyxDQUFDO01BRW5HLElBQUksQ0FBQ3RCLG1CQUFtQixDQUFDa0IsZ0JBQWdCLENBQUUsU0FBUyxFQUFHLFlBQU07UUFDM0RELEtBQUksQ0FBQ2YsY0FBYyxDQUFDcUIsU0FBUyxHQUFHLEVBQUU7TUFDcEMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0VBQUE7SUFBQVAsR0FBQTtJQUFBSixLQUFBLEVBRUYsU0FBQU8sZ0JBQWdCQSxDQUFDSyxpQkFBaUIsRUFBRTtNQUNsQyxJQUFJQSxpQkFBaUIsRUFBRTtRQUNyQjtRQUNBLElBQUksQ0FBQ25DLFdBQVcsQ0FBQ29DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUN6QyxJQUFJLENBQUNuQyxlQUFlLENBQUNrQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxhQUFhLENBQUM7O1FBRXBEO1FBQ0EsSUFBSSxDQUFDckMsY0FBYyxDQUFDbUMsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQ2hELElBQUksQ0FBQ3ZDLFVBQVUsQ0FBQ3NDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUUzQyxJQUFJLENBQUNsQyxVQUFVLENBQUM4QixTQUFTLEdBQUcsa0JBQWtCO01BQ2hELENBQUMsTUFBTTtRQUNMO1FBQ0EsSUFBSSxDQUFDakMsY0FBYyxDQUFDbUMsU0FBUyxDQUFDRSxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ25ELElBQUksQ0FBQ3hDLFVBQVUsQ0FBQ3NDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUV4QyxJQUFJLENBQUNyQyxXQUFXLENBQUNvQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDNUMsSUFBSSxDQUFDcEMsZUFBZSxDQUFDa0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBRWpELElBQUksQ0FBQ2pDLFVBQVUsQ0FBQzhCLFNBQVMsR0FBRywyQkFBMkI7TUFDekQ7SUFDRjtFQUFDO0lBQUFQLEdBQUE7SUFBQUosS0FBQSxFQUVELFNBQUFRLGtCQUFrQkEsQ0FBQSxFQUFHO01BQUEsSUFBQVEsTUFBQTtNQUVuQixJQUFJLENBQUN0QixTQUFTLENBQUNpQixTQUFTLEdBQUcscUNBQXFDO01BRWhFLElBQUlNLGNBQWMsR0FBRzVDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLG1CQUFtQixDQUFDO01BRWpFLElBQUksQ0FBQ1UsYUFBYSxDQUFDMkIsU0FBUyxHQUFHLEVBQUU7TUFFakMsSUFBSU0sY0FBYyxDQUFDQyxPQUFPLEVBQUU7UUFDMUJwQixZQUFZLENBQUNxQixPQUFPLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDcEMsY0FBYyxDQUFDaUIsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNyRUYsWUFBWSxDQUFDcUIsT0FBTyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQ3JDLGtCQUFrQixDQUFDa0IsS0FBSyxDQUFDLENBQUMsQ0FBQztNQUM5RTtNQUVBb0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDdkMsa0JBQWtCLENBQUNrQixLQUFLLENBQUM7TUFDMUNvQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUN0QyxjQUFjLENBQUNpQixLQUFLLENBQUM7TUFHdENzQixLQUFLLENBQUNDLGlCQUFpQixDQUFDQyxRQUFRLEVBQUU7UUFDaENDLE1BQU0sRUFBRSxNQUFNO1FBQ2RDLE9BQU8sRUFBRTtVQUNQLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBRTtRQUN2RCxDQUFDO1FBQ0RDLElBQUksRUFBRSxJQUFJQyxlQUFlLENBQUM7VUFDeEJDLE1BQU0sRUFBRSxrQkFBa0I7VUFDMUJDLFFBQVEsRUFBRSxJQUFJLENBQUNoRCxrQkFBa0IsQ0FBQ2tCLEtBQUs7VUFDdkNILFFBQVEsRUFBRSxJQUFJLENBQUNkLGNBQWMsQ0FBQ2lCLEtBQUs7VUFDbkMrQixLQUFLLEVBQUVSLGlCQUFpQixDQUFDUTtRQUMzQixDQUFDO01BQ0gsQ0FBQyxDQUFDLENBQ0NDLElBQUksQ0FBQyxVQUFDQyxRQUFRO1FBQUEsT0FBS0EsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztNQUFBLEVBQUMsQ0FDbkNGLElBQUksQ0FBQyxVQUFDRyxJQUFJLEVBQUs7UUFDZDtRQUNBLElBQUlBLElBQUksQ0FBQ0MsT0FBTyxFQUFFO1VBQ2hCaEIsT0FBTyxDQUFDQyxHQUFHLENBQUNjLElBQUksQ0FBQ0EsSUFBSSxDQUFDO1VBQ3RCbkIsTUFBSSxDQUFDdEIsU0FBUyxDQUFDaUIsU0FBUyxHQUFHLE9BQU87VUFDbENLLE1BQUksQ0FBQ2hDLGFBQWEsQ0FBQzJCLFNBQVMsR0FBRyxvQkFBb0I7VUFDbkRLLE1BQUksQ0FBQ2hDLGFBQWEsQ0FBQ3FELEtBQUssQ0FBQ0MsS0FBSyxHQUFHLE9BQU87VUFDeENDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDeEIsTUFBSSxDQUFDL0Isb0JBQW9CLENBQUNlLEtBQUssQ0FBQztRQUNuRCxDQUFDLE1BQUk7VUFDSGdCLE1BQUksQ0FBQ2hDLGFBQWEsQ0FBQzJCLFNBQVMsR0FBRyxlQUFlO1VBQzlDSyxNQUFJLENBQUNoQyxhQUFhLENBQUNxRCxLQUFLLENBQUNDLEtBQUssR0FBRyxLQUFLO1FBQ3hDO1FBQ0F0QixNQUFJLENBQUN0QixTQUFTLENBQUNpQixTQUFTLEdBQUcsT0FBTztRQUNsQ1MsT0FBTyxDQUFDQyxHQUFHLENBQUNjLElBQUksQ0FBQztNQUNuQixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUNNLEtBQUssRUFBSztRQUNoQnJCLE9BQU8sQ0FBQ3FCLEtBQUssQ0FBQyxhQUFhLEVBQUVBLEtBQUssQ0FBQztRQUNuQ3pCLE1BQUksQ0FBQ2hDLGFBQWEsQ0FBQzJCLFNBQVMsR0FBRywrQ0FBK0M7UUFDOUVLLE1BQUksQ0FBQ2hDLGFBQWEsQ0FBQ3FELEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEtBQUs7UUFDdEN0QixNQUFJLENBQUN0QixTQUFTLENBQUNpQixTQUFTLEdBQUcsT0FBTztNQUNwQyxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUFQLEdBQUE7SUFBQUosS0FBQSxFQUVELFNBQUFTLG1CQUFtQkEsQ0FBQSxFQUFHO01BQUEsSUFBQWlDLE1BQUE7TUFFcEIsSUFBTUMsWUFBWSxHQUFHLElBQUksQ0FBQ3ZELG1CQUFtQixDQUFDWSxLQUFLLENBQUN3QyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztNQUMxRSxJQUFJLENBQUNwRCxtQkFBbUIsQ0FBQ1ksS0FBSyxHQUFHMkMsWUFBWTtNQUU3QyxJQUFJQSxZQUFZLENBQUNDLE1BQU0sSUFBSSxFQUFFLEVBQUU7UUFDN0IsSUFBSSxDQUFDdEQsY0FBYyxDQUFDcUIsU0FBUyxHQUFHLHNCQUFzQjtRQUN0RCxJQUFJLENBQUNyQixjQUFjLENBQUMrQyxLQUFLLENBQUNDLEtBQUssR0FBRyxLQUFLO1FBQ3ZDO01BQ0Y7TUFFQSxJQUFJLElBQUksQ0FBQ25ELFdBQVcsQ0FBQ2EsS0FBSyxJQUFJLEVBQUUsRUFBRTtRQUNoQyxJQUFJLENBQUNWLGNBQWMsQ0FBQ3FCLFNBQVMsR0FBRyx3QkFBd0I7UUFDeEQsSUFBSSxDQUFDckIsY0FBYyxDQUFDK0MsS0FBSyxDQUFDQyxLQUFLLEdBQUcsS0FBSztRQUN2QztNQUNGO01BR0EsSUFBSSxDQUFDM0MsVUFBVSxDQUFDZ0IsU0FBUyxHQUFHLHFDQUFxQztNQUVqRVcsS0FBSyxDQUFFQyxpQkFBaUIsQ0FBQ0MsUUFBUSxFQUFFO1FBQ2pDQyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxPQUFPLEVBQUU7VUFDUCxjQUFjLEVBQUUsbUNBQW1DLENBQUU7UUFDdkQsQ0FBQztRQUNEQyxJQUFJLEVBQUUsSUFBSUMsZUFBZSxDQUFDO1VBQ3hCQyxNQUFNLEVBQUUsNEJBQTRCO1VBQ3BDYyxZQUFZLEVBQUVBLFlBQVk7VUFDMUJFLElBQUksRUFBRSxJQUFJLENBQUMxRCxXQUFXLENBQUNhLEtBQUs7VUFDNUIrQixLQUFLLEVBQUVSLGlCQUFpQixDQUFDUTtRQUMzQixDQUFDO01BQ0gsQ0FBRSxDQUFDLENBQUNDLElBQUksQ0FBRyxVQUFDQyxRQUFRO1FBQUEsT0FBTUEsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztNQUFBLENBQUMsQ0FBQyxDQUFDRixJQUFJLENBQUUsVUFBRUcsSUFBSSxFQUFNO1FBRTVELElBQUlBLElBQUksQ0FBQ0MsT0FBTyxFQUFFO1VBQUEsSUFBQVUsa0JBQUE7VUFDaEI7O1VBRUE7VUFDQUosTUFBSSxDQUFDbkQsZ0JBQWdCLENBQUNzQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7VUFDOUM7VUFDQTRCLE1BQUksQ0FBQ2xELGlCQUFpQixDQUFDcUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDOztVQUUvQztVQUNBNEIsTUFBSSxDQUFDakQsZUFBZSxDQUFDb0IsU0FBUyxDQUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDOztVQUVoRDtVQUNBMkIsTUFBSSxDQUFDL0MsVUFBVSxDQUFDa0IsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO1VBQ3hDO1VBQ0E0QixNQUFJLENBQUM5QyxjQUFjLENBQUNpQixTQUFTLENBQUNFLE1BQU0sQ0FBQyxTQUFTLENBQUM7VUFFL0MyQixNQUFJLENBQUNwRCxjQUFjLENBQUNxQixTQUFTLElBQUFtQyxrQkFBQSxHQUFHWCxJQUFJLENBQUNBLElBQUksQ0FBQ1ksT0FBTyxjQUFBRCxrQkFBQSxjQUFBQSxrQkFBQSxHQUFJLEVBQUU7VUFDdkRKLE1BQUksQ0FBQ3BELGNBQWMsQ0FBQytDLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLE9BQU87UUFDM0MsQ0FBQyxNQUFJO1VBQUEsSUFBQVUsZ0JBQUE7VUFDSDs7VUFFQU4sTUFBSSxDQUFDcEQsY0FBYyxDQUFDcUIsU0FBUyxJQUFBcUMsZ0JBQUEsR0FBR2IsSUFBSSxDQUFDQSxJQUFJLENBQUNNLEtBQUssY0FBQU8sZ0JBQUEsY0FBQUEsZ0JBQUEsR0FBSSxFQUFFO1VBQ3JETixNQUFJLENBQUNwRCxjQUFjLENBQUMrQyxLQUFLLENBQUNDLEtBQUssR0FBRyxLQUFLO1FBQ3pDO1FBRUFsQixPQUFPLENBQUNDLEdBQUcsQ0FBRWMsSUFBSyxDQUFDO1FBRW5CTyxNQUFJLENBQUMvQyxVQUFVLENBQUNnQixTQUFTLEdBQUcsZ0JBQWdCO01BQzlDLENBQUUsQ0FBQyxTQUFNLENBQUcsVUFBRThCLEtBQUssRUFBTTtRQUN2QnJCLE9BQU8sQ0FBQ3FCLEtBQUssQ0FBQyxhQUFhLEVBQUVBLEtBQUssQ0FBQztRQUNuQ0MsTUFBSSxDQUFDL0MsVUFBVSxDQUFDZ0IsU0FBUyxHQUFHLGdCQUFnQjtRQUM1QytCLE1BQUksQ0FBQ3BELGNBQWMsQ0FBQ3FCLFNBQVMsR0FBRyxHQUFHLEdBQUVnQyxZQUFZLEdBQUcsR0FBRyxHQUFHLGdFQUFnRTtNQUM1SCxDQUFDLENBQUM7SUFFSjtFQUFDO0lBQUF2QyxHQUFBO0lBQUFKLEtBQUEsRUFFRCxTQUFBVSxvQ0FBb0NBLENBQUEsRUFBRztNQUFBLElBQUF1QyxNQUFBO01BRXJDLElBQUksQ0FBQ3JELGNBQWMsQ0FBQ2UsU0FBUyxHQUFHLHFDQUFxQztNQUVyRVcsS0FBSyxDQUFFQyxpQkFBaUIsQ0FBQ0MsUUFBUSxFQUFHO1FBQ2xDQyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxPQUFPLEVBQUU7VUFDUCxjQUFjLEVBQUUsbUNBQW1DLENBQUU7UUFDdkQsQ0FBQztRQUNEQyxJQUFJLEVBQUUsSUFBSUMsZUFBZSxDQUFDO1VBQ3hCQyxNQUFNLEVBQUUsb0NBQW9DO1VBQzVDcUIsUUFBUSxFQUFFLElBQUksQ0FBQzdELGVBQWUsQ0FBQ1csS0FBSztVQUNwQzJDLFlBQVksRUFBRSxJQUFJLENBQUN2RCxtQkFBbUIsQ0FBQ1ksS0FBSztVQUM1QytCLEtBQUssRUFBRVIsaUJBQWlCLENBQUNRO1FBQzNCLENBQUM7TUFDSCxDQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFFLFVBQUNDLFFBQVE7UUFBQSxPQUFLQSxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDO01BQUEsQ0FBQyxDQUFDLENBQUNGLElBQUksQ0FBRSxVQUFDRyxJQUFJLEVBQUs7UUFBQSxJQUFBZ0IsbUJBQUE7UUFDeERGLE1BQUksQ0FBQ3JELGNBQWMsQ0FBQ2UsU0FBUyxHQUFHLFlBQVk7UUFDNUNzQyxNQUFJLENBQUMzRCxjQUFjLENBQUNxQixTQUFTLElBQUF3QyxtQkFBQSxHQUFHaEIsSUFBSSxDQUFDQSxJQUFJLENBQUNZLE9BQU8sY0FBQUksbUJBQUEsY0FBQUEsbUJBQUEsR0FBSSxFQUFFO1FBQ3ZERixNQUFJLENBQUMzRCxjQUFjLENBQUMrQyxLQUFLLENBQUNDLEtBQUssR0FBRyxPQUFPO1FBQ3pDbEIsT0FBTyxDQUFDQyxHQUFHLENBQUNjLElBQUksQ0FBQztNQUNuQixDQUFDLENBQUMsU0FBTSxDQUFFLFVBQUVNLEtBQUssRUFBTTtRQUNyQnJCLE9BQU8sQ0FBQ3FCLEtBQUssQ0FBQyx3QkFBd0IsR0FBR0EsS0FBSyxDQUFDO1FBQy9DUSxNQUFJLENBQUNyRCxjQUFjLENBQUNlLFNBQVMsR0FBRyxZQUFZO01BQzlDLENBQUMsQ0FBQztJQUNKO0VBQUM7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDdFBrQjBDLHdCQUF3QjtFQUMzQyxTQUFBQSx5QkFBQSxFQUFjO0lBQUFsRixlQUFBLE9BQUFrRix3QkFBQTtJQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHakYsUUFBUSxDQUFDa0YsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQzFELElBQUksQ0FBQ0MsWUFBWSxHQUFHQyxNQUFNLENBQUNDLEtBQUs7SUFFaEMsSUFBSSxJQUFJLENBQUNKLFVBQVUsRUFBRTtNQUNuQixJQUFJLENBQUNwRCxNQUFNLENBQUMsQ0FBQztNQUNiLElBQUksQ0FBQ3lELG9CQUFvQixDQUFDLENBQUM7SUFDN0I7RUFDRjtFQUFDLE9BQUF4RCxZQUFBLENBQUFrRCx3QkFBQTtJQUFBakQsR0FBQTtJQUFBSixLQUFBLEVBRUQsU0FBQUUsTUFBTUEsQ0FBQSxFQUFHO01BQUEsSUFBQUcsS0FBQTtNQUNQdUQsTUFBTSxDQUFDdEQsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07UUFDdENELEtBQUksQ0FBQ21ELFlBQVksR0FBR0MsTUFBTSxDQUFDQyxLQUFLO1FBQ2hDckQsS0FBSSxDQUFDc0Qsb0JBQW9CLENBQUMsQ0FBQztNQUM3QixDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUF2RCxHQUFBO0lBQUFKLEtBQUEsRUFFRCxTQUFBMkQsb0JBQW9CQSxDQUFBLEVBQUc7TUFDckIsSUFBTUUsY0FBYyxHQUFHeEYsUUFBUSxDQUFDRyxhQUFhLENBQUMsa0JBQWtCLENBQUM7TUFDakUsS0FBSyxJQUFJc0YsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLElBQUksQ0FBQ1IsVUFBVSxDQUFDVixNQUFNLEVBQUVrQixDQUFDLEVBQUUsRUFBRTtRQUMvQyxJQUFJLElBQUksQ0FBQ04sWUFBWSxHQUFHLEdBQUcsRUFBRTtVQUMzQixJQUFJLENBQUNGLFVBQVUsQ0FBQ1EsQ0FBQyxDQUFDLENBQUN6QixLQUFLLENBQUMwQixNQUFNLEdBQy9CQyxJQUFJLENBQUNDLEtBQUssQ0FBRUosY0FBYyxDQUFDSyxZQUFZLEdBQUcsRUFBRSxHQUFJLENBQUMsQ0FBQyxHQUFHLElBQUk7UUFDM0Q7UUFFQSxJQUFJLElBQUksQ0FBQ1YsWUFBWSxHQUFHLEdBQUcsRUFBRTtVQUMzQixJQUFJLENBQUNGLFVBQVUsQ0FBQ1EsQ0FBQyxDQUFDLENBQUN6QixLQUFLLENBQUMwQixNQUFNLEdBQy9CQyxJQUFJLENBQUNDLEtBQUssQ0FBRUosY0FBYyxDQUFDSyxZQUFZLEdBQUcsRUFBRSxHQUFJLENBQUMsQ0FBQyxHQUFHLElBQUk7UUFDM0Q7UUFFQSxJQUFJLElBQUksQ0FBQ1YsWUFBWSxHQUFHLEdBQUcsRUFBRTtVQUMzQixJQUFJLENBQUNGLFVBQVUsQ0FBQ1EsQ0FBQyxDQUFDLENBQUN6QixLQUFLLENBQUMwQixNQUFNLEdBQy9CQyxJQUFJLENBQUNDLEtBQUssQ0FBRUosY0FBYyxDQUFDSyxZQUFZLEdBQUcsRUFBRSxHQUFJLENBQUMsQ0FBQyxHQUFHLElBQUk7UUFDM0Q7TUFFRjtJQUNGO0VBQUM7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDckNrQkMseUJBQXlCO0VBQzVDLFNBQUFBLDBCQUFBLEVBQWM7SUFBQWhHLGVBQUEsT0FBQWdHLHlCQUFBO0lBQ1osSUFBSSxDQUFDQyxNQUFNO0lBRVgsSUFBSUMsY0FBYyxHQUFHaEcsUUFBUSxDQUFDRyxhQUFhLENBQUMsa0JBQWtCLENBQUM7SUFDL0QsSUFBSTZGLGNBQWMsRUFBRTtNQUNsQixJQUFJLENBQUNDLE9BQU8sR0FBR0QsY0FBYyxDQUFDRSxZQUFZLENBQUMsZUFBZSxDQUFDO01BRTNELElBQUksQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFFckIsSUFBSSxDQUFDdEUsTUFBTSxDQUFDLENBQUM7SUFDZixDQUFDLE1BQUk7TUFDSGtCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO01BQ3hDO0lBQ0Y7RUFHRjtFQUFDLE9BQUFsQixZQUFBLENBQUFnRSx5QkFBQTtJQUFBL0QsR0FBQTtJQUFBSixLQUFBLEVBRUQsU0FBQUUsTUFBTUEsQ0FBQSxFQUFHO01BQUEsSUFBQUcsS0FBQTtNQUNQdUQsTUFBTSxDQUFDYSx1QkFBdUIsR0FBRztRQUFBLE9BQU1wRSxLQUFJLENBQUNvRSx1QkFBdUIsQ0FBQyxDQUFDO01BQUE7O01BRXJFO01BQ0FiLE1BQU0sQ0FBQ2MsU0FBUyxHQUFHLFlBQU07UUFDdkJyRSxLQUFJLENBQUMrRCxNQUFNLENBQUNNLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCckcsUUFBUSxDQUFDRyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzZELEtBQUssQ0FBQ3NDLE9BQU8sR0FBRyxNQUFNO1FBQy9EdEcsUUFBUSxDQUFDRyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzZELEtBQUssQ0FBQ3VDLGFBQWEsR0FBRyxLQUFLO01BQ3RFLENBQUM7O01BRUQ7TUFDQWhCLE1BQU0sQ0FBQ2lCLFNBQVMsR0FBRyxZQUFNO1FBQ3ZCLElBQUl4RSxLQUFJLENBQUMrRCxNQUFNLENBQUNVLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1VBQ3RDekUsS0FBSSxDQUFDK0QsTUFBTSxDQUFDVyxVQUFVLENBQUMsQ0FBQztRQUMxQixDQUFDLE1BQU07VUFDTDFFLEtBQUksQ0FBQytELE1BQU0sQ0FBQ00sU0FBUyxDQUFDLENBQUM7UUFDekI7TUFDRixDQUFDOztNQUVEO01BQ0FkLE1BQU0sQ0FBQ29CLFdBQVcsR0FBRyxZQUFNO1FBQ3pCM0UsS0FBSSxDQUFDK0QsTUFBTSxDQUFDYSxNQUFNLENBQUM1RSxLQUFJLENBQUMrRCxNQUFNLENBQUNjLGNBQWMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQztNQUM3RCxDQUFDOztNQUVEO01BQ0F0QixNQUFNLENBQUN1QixZQUFZLEdBQUcsWUFBTTtRQUMxQjlFLEtBQUksQ0FBQytELE1BQU0sQ0FBQ2EsTUFBTSxDQUFDNUUsS0FBSSxDQUFDK0QsTUFBTSxDQUFDYyxjQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUM7TUFDN0QsQ0FBQzs7TUFFRDtNQUNBdEIsTUFBTSxDQUFDd0IsZ0JBQWdCLEdBQUcsWUFBTTtRQUM5QixJQUFJZixjQUFjLEdBQUdoRyxRQUFRLENBQUNHLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztRQUUvRCxJQUFJLENBQUNILFFBQVEsQ0FBQ2dILGlCQUFpQixFQUFFO1VBQy9CLElBQUloQixjQUFjLENBQUNpQixpQkFBaUIsRUFBRTtZQUNwQ2pCLGNBQWMsQ0FBQ2lCLGlCQUFpQixDQUFDLENBQUM7VUFDcEMsQ0FBQyxNQUFNLElBQUlqQixjQUFjLENBQUNrQixvQkFBb0IsRUFBRTtZQUM5Q2xCLGNBQWMsQ0FBQ2tCLG9CQUFvQixDQUFDLENBQUM7VUFDdkMsQ0FBQyxNQUFNLElBQUlsQixjQUFjLENBQUNtQix1QkFBdUIsRUFBRTtZQUNqRG5CLGNBQWMsQ0FBQ21CLHVCQUF1QixDQUFDLENBQUM7VUFDMUMsQ0FBQyxNQUFNLElBQUluQixjQUFjLENBQUNvQixtQkFBbUIsRUFBRTtZQUM3Q3BCLGNBQWMsQ0FBQ29CLG1CQUFtQixDQUFDLENBQUM7VUFDdEM7VUFDQXBCLGNBQWMsQ0FBQ3hELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUM1QyxDQUFDLE1BQU07VUFDTHpDLFFBQVEsQ0FBQ3FILGNBQWMsQ0FBQyxDQUFDO1VBQ3pCckIsY0FBYyxDQUFDeEQsU0FBUyxDQUFDRSxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQy9DO01BQ0YsQ0FBQztNQUNEO01BQ0ExQyxRQUFRLENBQUNpQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO1FBQ3hELElBQUkrRCxjQUFjLEdBQUdoRyxRQUFRLENBQUNHLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztRQUMvRCxJQUFJSCxRQUFRLENBQUNnSCxpQkFBaUIsRUFBRTtVQUM5QmhCLGNBQWMsQ0FBQ3hELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUM1QyxDQUFDLE1BQU07VUFDTHVELGNBQWMsQ0FBQ3hELFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUMvQztNQUNGLENBQUMsQ0FBQztJQUVKLENBQUMsQ0FBQztFQUFBO0lBQUFYLEdBQUE7SUFBQUosS0FBQSxFQUVGLFNBQUF3RSxjQUFjQSxDQUFBLEVBQUc7TUFDZixJQUFJbUIsR0FBRyxHQUFHdEgsUUFBUSxDQUFDdUgsYUFBYSxDQUFDLFFBQVEsQ0FBQztNQUMxQ0QsR0FBRyxDQUFDRSxHQUFHLEdBQUcsb0NBQW9DO01BQzlDLElBQUlDLGNBQWMsR0FBR3pILFFBQVEsQ0FBQzBILG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUMvREQsY0FBYyxDQUFDRSxVQUFVLENBQUNDLFlBQVksQ0FBQ04sR0FBRyxFQUFFRyxjQUFjLENBQUM7SUFDN0Q7RUFBQztJQUFBMUYsR0FBQTtJQUFBSixLQUFBLEVBRUQsU0FBQXlFLHVCQUF1QkEsQ0FBQSxFQUFHO01BQUEsSUFBQXpELE1BQUE7TUFDeEIsSUFBSSxDQUFDb0QsTUFBTSxHQUFHLElBQUk4QixFQUFFLENBQUNDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7UUFDcEM3QixPQUFPLEVBQUUsSUFBSSxDQUFDQSxPQUFPO1FBQUU7UUFDdkI4QixVQUFVLEVBQUU7VUFDVkMsUUFBUSxFQUFFLENBQUM7VUFDWEMsY0FBYyxFQUFFLENBQUM7VUFDakJDLEdBQUcsRUFBRSxDQUFDO1VBQ05DLFFBQVEsRUFBRSxDQUFDO1VBQ1hDLEVBQUUsRUFBRSxDQUFDO1VBQ0xDLFNBQVMsRUFBRTtRQUNiLENBQUM7UUFDRHhHLE1BQU0sRUFBRTtVQUNOeUcsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUdDLEtBQUs7WUFBQSxPQUFLNUYsTUFBSSxDQUFDNkYsYUFBYSxDQUFDRCxLQUFLLENBQUM7VUFBQSxFQUFFO1FBQ2pEO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBeEcsR0FBQTtJQUFBSixLQUFBLEVBRUQsU0FBQTZHLGFBQWFBLENBQUNELEtBQUssRUFBRTtNQUNuQnZJLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM2RCxLQUFLLENBQUNzQyxPQUFPLEdBQUcsTUFBTTtNQUMvRCxJQUFJLENBQUNtQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3Qjs7SUFFQTtFQUFBO0lBQUExRyxHQUFBO0lBQUFKLEtBQUEsRUFDQSxTQUFBOEcsa0JBQWtCQSxDQUFBLEVBQUc7TUFDbkJDLFVBQVUsQ0FBQyxZQUFNO1FBQ2YsSUFBSUMsYUFBYSxHQUFHNUMsTUFBTSxDQUFDNkMseUJBQXlCLENBQUMsQ0FBQztRQUN0RCxJQUFJQyxlQUFlLEdBQUc3SSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztRQUVqRTRJLGVBQWUsQ0FBQ3ZHLFNBQVMsR0FBRyxtQ0FBbUMsQ0FBQyxDQUFDOztRQUVqRXFHLGFBQWEsQ0FBQ0csT0FBTyxDQUFDLFVBQUNDLEtBQUssRUFBSztVQUMvQixJQUFJQyxNQUFNLEdBQUdoSixRQUFRLENBQUN1SCxhQUFhLENBQUMsUUFBUSxDQUFDO1VBQzdDeUIsTUFBTSxDQUFDckgsS0FBSyxHQUFHb0gsS0FBSztVQUNwQkMsTUFBTSxDQUFDQyxXQUFXLEdBQUdGLEtBQUssQ0FBQ0csV0FBVyxDQUFDLENBQUM7VUFDeENMLGVBQWUsQ0FBQ00sV0FBVyxDQUFDSCxNQUFNLENBQUM7UUFDckMsQ0FBQyxDQUFDO01BQ0osQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDWjs7SUFFQTtFQUFBO0lBQUFqSCxHQUFBO0lBQUFKLEtBQUEsRUFDQSxTQUFBeUgsYUFBYUEsQ0FBQ0MsT0FBTyxFQUFFO01BQ3JCLElBQUlBLE9BQU8sRUFBRTtRQUNYLElBQUksQ0FBQ3RELE1BQU0sQ0FBQ3VELGtCQUFrQixDQUFDRCxPQUFPLENBQUM7TUFDekM7SUFDRjtFQUFDO0FBQUE7Ozs7Ozs7VUNuSUg7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnNFO0FBQ0w7QUFDWDtBQUd0RHJKLFFBQVEsQ0FBQ2lDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFFbEQsSUFBSStDLHFFQUF3QixDQUFDLENBQUM7RUFDOUIsSUFBSWMsK0RBQXlCLENBQUMsQ0FBQztFQUMvQixJQUFJakcsK0RBQWMsQ0FBQyxDQUFDO0FBRXRCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3NwLXVpLWtpdC8uL2Fzc2V0cy9zcmMvanMvbW9kdWxlcy9sb2dpbi13aXRoLW90cC5qcyIsIndlYnBhY2s6Ly9nc3AtdWkta2l0Ly4vYXNzZXRzL3NyYy9qcy9tb2R1bGVzL3NldC10aHVtYm5haWwtaGVpZ2h0LmpzIiwid2VicGFjazovL2dzcC11aS1raXQvLi9hc3NldHMvc3JjL2pzL21vZHVsZXMveW91dHViZS1wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vZ3NwLXVpLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nc3AtdWkta2l0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nc3AtdWkta2l0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ3NwLXVpLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dzcC11aS1raXQvLi9hc3NldHMvc3JjL2pzL2J1bmRsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbl9XaXRoX09UUCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdzcC1sb2dpbi13aXRoLW90cC1zZWN0aW9uXCIpO1xyXG5cclxuICAgIGlmICh0aGlzLnNlY3Rpb24pIHtcclxuICAgICAgdGhpcy5sb2dpbl9mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dpbi1mb3JtXCIpO1xyXG4gICAgICB0aGlzLnNpZ251cF9mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWdudXAtZm9ybVwiKTtcclxuXHJcbiAgICAgIHRoaXMubG9naW5fZm9ybV90YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luLWZvcm0tdGFiXCIpO1xyXG4gICAgICB0aGlzLnNpZ251cF9mb3JtX3RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbnVwLWZvcm0tdGFiXCIpO1xyXG4gICAgICB0aGlzLnNpZ251cF9mb3JtX3RhYjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC1mb3JtLXRhYi0yXCIpO1xyXG5cclxuICAgICAgdGhpcy5mb3JtX3RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXRpdGxlXCIpO1xyXG5cclxuICAgICAgdGhpcy5sb2dpbl9waG9uZV9udW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLWxvZ2luLXBob25lLW51bWJlcicpO1xyXG4gICAgICB0aGlzLmxvZ2luX3Bhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi1sb2dpbi1wYXNzd29yZCcpO1xyXG4gICAgICB0aGlzLmxvZ2luX21lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnLWxvZ2luLW1lc3NhZ2UnKTtcclxuXHJcbiAgICAgIHRoaXMucmVkaXJlY3RfYWZ0ZXJfbG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnLXJlZGlyZWN0LWFmdGVyLWxvZ2luJyk7XHJcbiAgICAgIHRoaXMucmVkaXJlY3RfYWZ0ZXJfc2lnbnVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJy1yZWRpcmVjdC1hZnRlci1zaWdudXAnKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuc2lnbnVwX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lnbnVwLW5hbWUnKTtcclxuICAgICAgdGhpcy5zaWdudXBfcGhvbmVfbnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWdudXAtcGhvbmUtbnVtYmVyXCIpO1xyXG4gICAgICB0aGlzLnNpZ251cF9vdHBfY29kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbnVwLW90cC1jb2RlXCIpO1xyXG4gICAgICB0aGlzLnNpZ251cF9tZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZ251cC1tZXNzYWdlJyk7XHJcblxyXG4gICAgICAvLyBvdHAgYm94ICwgaXQgd2lsbCBiZSB1c2VkIHRvIGhpZGUvc2hvd1xyXG4gICAgICB0aGlzLmZvcm1faW5wdXRfX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLWZyb20taW5wdXRfX25hbWUnKTtcclxuICAgICAgLy8gb3RwIGJveCAsIGl0IHdpbGwgYmUgdXNlZCB0byBoaWRlL3Nob3dcclxuICAgICAgdGhpcy5mb3JtX2lucHV0X19waG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tZnJvbS1pbnB1dF9fcGhvbmUnKTtcclxuICAgICAgLy8gb3RwIGJveCAsIGl0IHdpbGwgYmUgdXNlZCB0byBoaWRlL3Nob3dcclxuICAgICAgdGhpcy5mb3JtX2lucHV0X19vdHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLWZvcm0taW5wdXRfX290cCcpO1xyXG5cclxuICAgICAgdGhpcy5sb2dpbl9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLi1sb2dpbi1idG5cIik7XHJcbiAgICAgIHRoaXMuc2lnbnVwX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuLXNpZ251cC1idG5cIik7XHJcbiAgICAgIHRoaXMudmVyaWZ5X290cF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLXZlcmlmeS1vdHAtYnRuJyk7XHJcblxyXG4gICAgICBjb25zdCBwYXNzd29yZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZW1lbWJlclBhc3N3b3JkJyk7XHJcbiAgICAgIGlmIChwYXNzd29yZCkge1xyXG4gICAgICAgIHRoaXMubG9naW5fcGFzc3dvcmQudmFsdWUgPSBwYXNzd29yZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcGhvbmVOdW1iZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVtZW1iZXJQaG9uZU51bWJlcicpO1xyXG4gICAgICBpZiAocGhvbmVOdW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxvZ2luX3Bob25lX251bWJlci52YWx1ZSA9IHBob25lTnVtYmVyO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXZlbnRzKCkge1xyXG4gICAgdGhpcy5sb2dpbl9mb3JtX3RhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICAgICAgdGhpcy5mb3JtX3Zpc2lhYmlsaXR5KHRydWUpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuc2lnbnVwX2Zvcm1fdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxyXG4gICAgICB0aGlzLmZvcm1fdmlzaWFiaWxpdHkoZmFsc2UpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuc2lnbnVwX2Zvcm1fdGFiMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICAgICAgdGhpcy5mb3JtX3Zpc2lhYmlsaXR5KGZhbHNlKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmxvZ2luX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zZW5kX2xvZ2luX3JlcXVlc3QoKSk7XHJcblxyXG4gICAgdGhpcy5zaWdudXBfYnRuLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycgLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2VuZF9zaWdudXBfcmVxdWVzdCgpO1xyXG4gICAgfSApO1xyXG5cclxuICAgIHRoaXMudmVyaWZ5X290cF9idG4uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJyAsICgpID0+IHRoaXMuc2VuZF9zaWdudXBfb3RwX3ZlcmlmaWNhdGlvbl9yZXF1ZXN0KCkgKTtcclxuXHJcbiAgICB0aGlzLnNpZ251cF9waG9uZV9udW1iZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nICwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNpZ251cF9tZXNzYWdlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfSApO1xyXG4gIH0gLy8gZW52ZW50cyBlbmRpbmdcclxuXHJcbiAgZm9ybV92aXNpYWJpbGl0eShpc19sb2dpbl92aXNpYWJsZSkge1xyXG4gICAgaWYgKGlzX2xvZ2luX3Zpc2lhYmxlKSB7XHJcbiAgICAgIC8vIHNob3cgdGhlIGxvZ2luIGZvcm1cclxuICAgICAgdGhpcy5zaWdudXBfZm9ybS5jbGFzc0xpc3QuYWRkKFwiLWQtbm9uZVwiKTtcclxuICAgICAgdGhpcy5zaWdudXBfZm9ybV90YWIuY2xhc3NMaXN0LnJlbW92ZShcIi1hY2l0dmUtdGFiXCIpO1xyXG5cclxuICAgICAgLy8gbG9naW4gZm9ybVxyXG4gICAgICB0aGlzLmxvZ2luX2Zvcm1fdGFiLmNsYXNzTGlzdC5hZGQoXCItYWNpdHZlLXRhYlwiKTtcclxuICAgICAgdGhpcy5sb2dpbl9mb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCItZC1ub25lXCIpO1xyXG5cclxuICAgICAgdGhpcy5mb3JtX3RpdGxlLmlubmVySFRNTCA9ICdXZWxjb21lIHRvIGxvZ2luJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHNob3cgdGhlIHNpZ251cCBmb3JtXHJcbiAgICAgIHRoaXMubG9naW5fZm9ybV90YWIuY2xhc3NMaXN0LnJlbW92ZShcIi1hY2l0dmUtdGFiXCIpO1xyXG4gICAgICB0aGlzLmxvZ2luX2Zvcm0uY2xhc3NMaXN0LmFkZChcIi1kLW5vbmVcIik7XHJcblxyXG4gICAgICB0aGlzLnNpZ251cF9mb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCItZC1ub25lXCIpO1xyXG4gICAgICB0aGlzLnNpZ251cF9mb3JtX3RhYi5jbGFzc0xpc3QuYWRkKFwiLWFjaXR2ZS10YWJcIik7XHJcblxyXG4gICAgICB0aGlzLmZvcm1fdGl0bGUuaW5uZXJIVE1MID0gJ1dlbGNvbWUgdG8gY3JlYXRlIGFjY291bnQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VuZF9sb2dpbl9yZXF1ZXN0KCkge1xyXG4gICAgXHJcbiAgICB0aGlzLmxvZ2luX2J0bi5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImxvYWRpbmctc3Bpbm5lclwiPjwvZGl2Pic7XHJcblxyXG4gICAgbGV0IGxvZ2luX3JlbWVtYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbWVtYmVyLXBhc3N3b3JkJyk7XHJcblxyXG4gICAgdGhpcy5sb2dpbl9tZXNzYWdlLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGlmIChsb2dpbl9yZW1lbWJhci5jaGVja2VkKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZW1lbWJlclBhc3N3b3JkJywgdGhpcy5sb2dpbl9wYXNzd29yZC52YWx1ZSk7IC8vIFN0b3JlICd0cnVlJyBhcyBhIHN0cmluZ1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVtZW1iZXJQaG9uZU51bWJlcicsIHRoaXMubG9naW5fcGhvbmVfbnVtYmVyLnZhbHVlKTsgLy8gU3RvcmUgJ3RydWUnIGFzIGEgc3RyaW5nXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5sb2dpbl9waG9uZV9udW1iZXIudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5sb2dpbl9wYXNzd29yZC52YWx1ZSk7XHJcblxyXG5cclxuICAgIGZldGNoKGdzcF91aV9raXRfY29tbW9uLmFqYXhfdXJsLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLCAvLyBJbXBvcnRhbnQgZm9yIFdvcmRQcmVzcyBBSkFYXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xyXG4gICAgICAgIGFjdGlvbjogXCJnc3BfdWlfa2l0X2xvZ2luXCIsXHJcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMubG9naW5fcGhvbmVfbnVtYmVyLnZhbHVlLFxyXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLmxvZ2luX3Bhc3N3b3JkLnZhbHVlLFxyXG4gICAgICAgIG5vbmNlOiBnc3BfdWlfa2l0X2NvbW1vbi5ub25jZSxcclxuICAgICAgfSksXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAvLyBIYW5kbGUgdGhlIHJlc3BvbnNlXHJcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgICAgICAgIHRoaXMubG9naW5fYnRuLmlubmVySFRNTCA9ICdMb2dpbic7XHJcbiAgICAgICAgICB0aGlzLmxvZ2luX21lc3NhZ2UuaW5uZXJIVE1MID0gJ0xvZ2luIHN1Y2Nlc3NmdWxsISc7XHJcbiAgICAgICAgICB0aGlzLmxvZ2luX21lc3NhZ2Uuc3R5bGUuY29sb3IgPSAnZ3JlZW4nO1xyXG4gICAgICAgICAgbG9jYXRpb24ucmVwbGFjZSh0aGlzLnJlZGlyZWN0X2FmdGVyX2xvZ2luLnZhbHVlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMubG9naW5fbWVzc2FnZS5pbm5lckhUTUwgPSAnTG9nLUluIEZhaWxkISc7XHJcbiAgICAgICAgICB0aGlzLmxvZ2luX21lc3NhZ2Uuc3R5bGUuY29sb3IgPSAncmVkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2dpbl9idG4uaW5uZXJIVE1MID0gJ0xvZ2luJztcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBSkFYIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgICAgdGhpcy5sb2dpbl9tZXNzYWdlLmlubmVySFRNTCA9ICdTb21ldGhpbmcgd2VudCB3b3JuZywgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nO1xyXG4gICAgICAgIHRoaXMubG9naW5fbWVzc2FnZS5zdHlsZS5jb2xvciA9ICdyZWQnO1xyXG4gICAgICAgIHRoaXMubG9naW5fYnRuLmlubmVySFRNTCA9ICdMb2dpbic7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VuZF9zaWdudXBfcmVxdWVzdCgpIHtcclxuXHJcbiAgICBjb25zdCBwaG9uZV9udW1iZXIgPSB0aGlzLnNpZ251cF9waG9uZV9udW1iZXIudmFsdWUucmVwbGFjZSgvW14wLTldL2csICcnKTtcclxuICAgIHRoaXMuc2lnbnVwX3Bob25lX251bWJlci52YWx1ZSA9IHBob25lX251bWJlcjtcclxuXHJcbiAgICBpZiAocGhvbmVfbnVtYmVyLmxlbmd0aCAhPSAxMSkge1xyXG4gICAgICB0aGlzLnNpZ251cF9tZXNzYWdlLmlubmVySFRNTCA9ICdJbnZhbGlkIHBob25lIG51bWJlcic7XHJcbiAgICAgIHRoaXMuc2lnbnVwX21lc3NhZ2Uuc3R5bGUuY29sb3IgPSAncmVkJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNpZ251cF9uYW1lLnZhbHVlID09ICcnKSB7XHJcbiAgICAgIHRoaXMuc2lnbnVwX21lc3NhZ2UuaW5uZXJIVE1MID0gJ05hbWUgY2FuIG5vdCBiZSBlbXB0eSEnO1xyXG4gICAgICB0aGlzLnNpZ251cF9tZXNzYWdlLnN0eWxlLmNvbG9yID0gJ3JlZCc7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdGhpcy5zaWdudXBfYnRuLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwibG9hZGluZy1zcGlubmVyXCI+PC9kaXY+JztcclxuXHJcbiAgICBmZXRjaCggZ3NwX3VpX2tpdF9jb21tb24uYWpheF91cmwsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsIC8vIEltcG9ydGFudCBmb3IgV29yZFByZXNzIEFKQVhcclxuICAgICAgfSxcclxuICAgICAgYm9keTogbmV3IFVSTFNlYXJjaFBhcmFtcyh7XHJcbiAgICAgICAgYWN0aW9uOiBcImdzcF91aV9raXRfc2lnbnVwX3dpdGhfb3RwXCIsXHJcbiAgICAgICAgcGhvbmVfbnVtYmVyOiBwaG9uZV9udW1iZXIsXHJcbiAgICAgICAgbmFtZTogdGhpcy5zaWdudXBfbmFtZS52YWx1ZSxcclxuICAgICAgICBub25jZTogZ3NwX3VpX2tpdF9jb21tb24ubm9uY2UsXHJcbiAgICAgIH0pLFxyXG4gICAgfSApLnRoZW4gKCAocmVzcG9uc2UgKSA9PiByZXNwb25zZS5qc29uKCkgKS50aGVuKCAoIGRhdGEgKSA9PiB7XHJcblxyXG4gICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgLy8gc3VjY2Vzc2VkIHJlc3BvbnNlXHJcblxyXG4gICAgICAgIC8vIGhpZGUgbmFtZSBib3hcclxuICAgICAgICB0aGlzLmZvcm1faW5wdXRfX25hbWUuY2xhc3NMaXN0LmFkZCgnLWQtbm9uZScpO1xyXG4gICAgICAgIC8vIGhpZGUgcGhvbmUgYm94XHJcbiAgICAgICAgdGhpcy5mb3JtX2lucHV0X19waG9uZS5jbGFzc0xpc3QuYWRkKCctZC1ub25lJyk7XHJcblxyXG4gICAgICAgIC8vIHNob3cgb3RwIGJveFxyXG4gICAgICAgIHRoaXMuZm9ybV9pbnB1dF9fb3RwLmNsYXNzTGlzdC5yZW1vdmUoJy1kLW5vbmUnKTtcclxuXHJcbiAgICAgICAgLy8gaGlkZSBzaWdudXAgYnV0dG9uXHJcbiAgICAgICAgdGhpcy5zaWdudXBfYnRuLmNsYXNzTGlzdC5hZGQoJy1kLW5vbmUnKTtcclxuICAgICAgICAvLyBzaG93IG90cCB2ZXJpZnkgYnV0dG9uXHJcbiAgICAgICAgdGhpcy52ZXJpZnlfb3RwX2J0bi5jbGFzc0xpc3QucmVtb3ZlKCctZC1ub25lJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2lnbnVwX21lc3NhZ2UuaW5uZXJIVE1MID0gZGF0YS5kYXRhLm1lc3NhZ2UgPz8gJyc7XHJcbiAgICAgICAgdGhpcy5zaWdudXBfbWVzc2FnZS5zdHlsZS5jb2xvciA9ICdibGFjayc7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIC8vIGZhbHNlIHJlc3BvbnNlIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2lnbnVwX21lc3NhZ2UuaW5uZXJIVE1MID0gZGF0YS5kYXRhLmVycm9yID8/ICcnO1xyXG4gICAgICAgIHRoaXMuc2lnbnVwX21lc3NhZ2Uuc3R5bGUuY29sb3IgPSAncmVkJztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc29sZS5sb2coIGRhdGEgKTtcclxuXHJcbiAgICAgIHRoaXMuc2lnbnVwX2J0bi5pbm5lckhUTUwgPSAnQ3JlYXRlIEFjY291bnQnO1xyXG4gICAgfSApLmNhdGNoICggKCBlcnJvciApID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkFKQVggZXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgdGhpcy5zaWdudXBfYnRuLmlubmVySFRNTCA9ICdDcmVhdGUgQWNjb3VudCc7XHJcbiAgICAgIHRoaXMuc2lnbnVwX21lc3NhZ2UuaW5uZXJIVE1MID0gJ1wiJyArcGhvbmVfbnVtYmVyICsgJ1wiJyArICcgVGhpcyBudW1iZXIgbWlnaHQgYmUgYWxyZWFkeSByZWdpc3RlZCwgVHJ5IHdpdGggYSBuZXcgbnVtYmVyLCc7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBzZW5kX3NpZ251cF9vdHBfdmVyaWZpY2F0aW9uX3JlcXVlc3QoKSB7XHJcblxyXG4gICAgdGhpcy52ZXJpZnlfb3RwX2J0bi5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImxvYWRpbmctc3Bpbm5lclwiPjwvZGl2Pic7XHJcblxyXG4gICAgZmV0Y2goIGdzcF91aV9raXRfY29tbW9uLmFqYXhfdXJsICwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiwgLy8gSW1wb3J0YW50IGZvciBXb3JkUHJlc3MgQUpBWFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcclxuICAgICAgICBhY3Rpb246IFwiZ3NwX3VpX2tpdF9zaWdudXBfb3RwX3ZlcmlmaWNhdGlvblwiLFxyXG4gICAgICAgIG90cF9jb2RlOiB0aGlzLnNpZ251cF9vdHBfY29kZS52YWx1ZSxcclxuICAgICAgICBwaG9uZV9udW1iZXI6IHRoaXMuc2lnbnVwX3Bob25lX251bWJlci52YWx1ZSxcclxuICAgICAgICBub25jZTogZ3NwX3VpX2tpdF9jb21tb24ubm9uY2UsXHJcbiAgICAgIH0pLFxyXG4gICAgfSApLnRoZW4oIChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpICkudGhlbiggKGRhdGEpID0+IHtcclxuICAgICAgdGhpcy52ZXJpZnlfb3RwX2J0bi5pbm5lckhUTUwgPSAnT1RQIFZlcmlmeSc7XHJcbiAgICAgIHRoaXMuc2lnbnVwX21lc3NhZ2UuaW5uZXJIVE1MID0gZGF0YS5kYXRhLm1lc3NhZ2UgPz8gJyc7XHJcbiAgICAgIHRoaXMuc2lnbnVwX21lc3NhZ2Uuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH0pLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdvdHAgdmVyaWZpY2F0aW9uIGVycm9yJyArIGVycm9yKTtcclxuICAgICAgdGhpcy52ZXJpZnlfb3RwX2J0bi5pbm5lckhUTUwgPSAnT1RQIFZlcmlmeSc7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR1NQX1NldF9UaHVtYm5haWxfSGVpZ2h0IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGh1bWJuYWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuLXRodW1ibmFpbFwiKTtcclxuICAgIHRoaXMud2luZG93X3dpZHRoID0gc2NyZWVuLndpZHRoO1xyXG5cclxuICAgIGlmICh0aGlzLnRodW1ibmFpbHMpIHtcclxuICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgICAgdGhpcy5zZXRfdGh1bWJuYWlsX2hlaWdodCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXZlbnRzKCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLndpbmRvd193aWR0aCA9IHNjcmVlbi53aWR0aDtcclxuICAgICAgdGhpcy5zZXRfdGh1bWJuYWlsX2hlaWdodCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRfdGh1bWJuYWlsX2hlaWdodCgpIHtcclxuICAgIGNvbnN0IGNhcmRfdmlld19ibG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi4tY2FyZC12aWV3LWJsb2dcIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGh1bWJuYWlscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy53aW5kb3dfd2lkdGggPiA2MDApIHtcclxuICAgICAgICB0aGlzLnRodW1ibmFpbHNbaV0uc3R5bGUuaGVpZ2h0ID1cclxuICAgICAgICBNYXRoLnJvdW5kKChjYXJkX3ZpZXdfYmxvZy5vZmZzZXRIZWlnaHQgLyAxNikgKiA3KSArIFwicHhcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMud2luZG93X3dpZHRoID4gNzY4KSB7XHJcbiAgICAgICAgdGhpcy50aHVtYm5haWxzW2ldLnN0eWxlLmhlaWdodCA9XHJcbiAgICAgICAgTWF0aC5yb3VuZCgoY2FyZF92aWV3X2Jsb2cub2Zmc2V0SGVpZ2h0IC8gMTYpICogOCkgKyBcInB4XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLndpbmRvd193aWR0aCA+IDk5Mikge1xyXG4gICAgICAgIHRoaXMudGh1bWJuYWlsc1tpXS5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICAgIE1hdGgucm91bmQoKGNhcmRfdmlld19ibG9nLm9mZnNldEhlaWdodCAvIDE2KSAqIDcpICsgXCJweFwiO1xyXG4gICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdTUF9VSV9LaXRfWW91dHViZV9QbGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5wbGF5ZXI7XHJcblxyXG4gICAgbGV0IHZpZGVvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1jb250YWluZXJcIik7XHJcbiAgICBpZiAodmlkZW9Db250YWluZXIpIHtcclxuICAgICAgdGhpcy52aWRlb0lkID0gdmlkZW9Db250YWluZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS12aWRlby1pZFwiKTtcclxuXHJcbiAgICAgIHRoaXMubG9hZFlvdVR1YmVBUEkoKTtcclxuICBcclxuICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1lbHNle1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk5vIHZpZGVvIGNvbnRhaW5lciBmb3VuZC5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBldmVudHMoKSB7XHJcbiAgICB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSAoKSA9PiB0aGlzLm9uWW91VHViZUlmcmFtZUFQSVJlYWR5KCk7XHJcblxyXG4gICAgLy8gUGxheSB2aWRlbyBhbmQgaGlkZSBvdmVybGF5XHJcbiAgICB3aW5kb3cucGxheVZpZGVvID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnBsYXllci5wbGF5VmlkZW8oKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1vdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbGljay1ibG9ja2VyXCIpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImFsbFwiO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBQbGF5IG9yIFBhdXNlXHJcbiAgICB3aW5kb3cucGxheVBhdXNlID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wbGF5ZXIuZ2V0UGxheWVyU3RhdGUoKSA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBhdXNlVmlkZW8oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnBsYXllci5wbGF5VmlkZW8oKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTZWVrIGZvcndhcmQgMTAgc2Vjb25kc1xyXG4gICAgd2luZG93LnNlZWtGb3J3YXJkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnBsYXllci5zZWVrVG8odGhpcy5wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSArIDEwLCB0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gU2VlayBiYWNrd2FyZCAxMCBzZWNvbmRzXHJcbiAgICB3aW5kb3cuc2Vla0JhY2t3YXJkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnBsYXllci5zZWVrVG8odGhpcy5wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSAtIDEwLCB0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gRnVsbHNjcmVlbiB0b2dnbGVcclxuICAgIHdpbmRvdy50b2dnbGVGdWxsU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgICB2YXIgdmlkZW9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZGVvLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgIGlmICghZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIHtcclxuICAgICAgICBpZiAodmlkZW9Db250YWluZXIucmVxdWVzdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICAgIHZpZGVvQ29udGFpbmVyLnJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2aWRlb0NvbnRhaW5lci5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xyXG4gICAgICAgICAgdmlkZW9Db250YWluZXIubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZpZGVvQ29udGFpbmVyLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgICB2aWRlb0NvbnRhaW5lci53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmlkZW9Db250YWluZXIubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgdmlkZW9Db250YWluZXIubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2aWRlb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZnVsbHNjcmVlblwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIHZpZGVvQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJmdWxsc2NyZWVuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gTGlzdGVuIGZvciBmdWxsc2NyZWVuIGNoYW5nZXNcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmdWxsc2NyZWVuY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHZpZGVvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1jb250YWluZXJcIik7XHJcbiAgICAgIGlmIChkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xyXG4gICAgICAgIHZpZGVvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmdWxsc2NyZWVuXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZpZGVvQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJmdWxsc2NyZWVuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfSAvLyBlbnZlbnRzIGVuZGluZ1xyXG5cclxuICBsb2FkWW91VHViZUFQSSgpIHtcclxuICAgIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgdGFnLnNyYyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaVwiO1xyXG4gICAgdmFyIGZpcnN0U2NyaXB0VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XHJcbiAgICBmaXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcclxuICB9XHJcblxyXG4gIG9uWW91VHViZUlmcmFtZUFQSVJlYWR5KCkge1xyXG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgWVQuUGxheWVyKFwicGxheWVyXCIsIHtcclxuICAgICAgdmlkZW9JZDogdGhpcy52aWRlb0lkLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIFlvdVR1YmUgdmlkZW8gSURcclxuICAgICAgcGxheWVyVmFyczoge1xyXG4gICAgICAgIGNvbnRyb2xzOiAwLFxyXG4gICAgICAgIG1vZGVzdGJyYW5kaW5nOiAxLFxyXG4gICAgICAgIHJlbDogMCxcclxuICAgICAgICBzaG93aW5mbzogMCxcclxuICAgICAgICBmczogMCxcclxuICAgICAgICBkaXNhYmxla2I6IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIGV2ZW50czoge1xyXG4gICAgICAgIG9uUmVhZHk6IChldmVudCkgPT4gdGhpcy5vblBsYXllclJlYWR5KGV2ZW50KSwgLy8gVXNlIGFycm93IGZ1bmN0aW9uIHRvIHJldGFpbiBgdGhpc2AgY29cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25QbGF5ZXJSZWFkeShldmVudCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1vdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHRoaXMubG9hZFF1YWxpdHlPcHRpb25zKCk7IC8vIExvYWQgYXZhaWxhYmxlIHZpZGVvIHF1YWxpdHkgb3B0aW9uc1xyXG4gIH1cclxuXHJcbiAgLy8gTG9hZCBhdmFpbGFibGUgdmlkZW8gcXVhbGl0aWVzXHJcbiAgbG9hZFF1YWxpdHlPcHRpb25zKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGxldCBxdWFsaXR5TGV2ZWxzID0gcGxheWVyLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKTtcclxuICAgICAgbGV0IHF1YWxpdHlTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVhbGl0eS1zZWxlY3RvclwiKTtcclxuXHJcbiAgICAgIHF1YWxpdHlTZWxlY3Rvci5pbm5lckhUTUwgPSBcIjxvcHRpb24gdmFsdWU9Jyc+UXVhbGl0eTwvb3B0aW9uPlwiOyAvLyBSZXNldFxyXG5cclxuICAgICAgcXVhbGl0eUxldmVscy5mb3JFYWNoKChsZXZlbCkgPT4ge1xyXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGxldmVsO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGxldmVsLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgcXVhbGl0eVNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMTAwMCk7IC8vIERlbGF5IGZvciBBUEkgdG8gcmV0dXJuIHF1YWxpdHkgbGV2ZWxzXHJcbiAgfVxyXG5cclxuICAvLyBDaGFuZ2UgdmlkZW8gcXVhbGl0eVxyXG4gIGNoYW5nZVF1YWxpdHkocXVhbGl0eSkge1xyXG4gICAgaWYgKHF1YWxpdHkpIHtcclxuICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWJhY2tRdWFsaXR5KHF1YWxpdHkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdTUF9TZXRfVGh1bWJuYWlsX0hlaWdodCBmcm9tICcuL21vZHVsZXMvc2V0LXRodW1ibmFpbC1oZWlnaHQnO1xyXG5pbXBvcnQgR1NQX1VJX0tpdF9Zb3V0dWJlX1BsYXllciBmcm9tICcuL21vZHVsZXMveW91dHViZS1wbGF5ZXInO1xyXG5pbXBvcnQgTG9naW5fV2l0aF9PVFAgZnJvbSAnLi9tb2R1bGVzL2xvZ2luLXdpdGgtb3RwJztcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblxyXG4gIG5ldyBHU1BfU2V0X1RodW1ibmFpbF9IZWlnaHQoKTtcclxuICBuZXcgR1NQX1VJX0tpdF9Zb3V0dWJlX1BsYXllcigpO1xyXG4gIG5ldyBMb2dpbl9XaXRoX09UUCgpO1xyXG5cclxufSk7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkxvZ2luX1dpdGhfT1RQIiwiX2NsYXNzQ2FsbENoZWNrIiwic2VjdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2dpbl9mb3JtIiwicXVlcnlTZWxlY3RvciIsInNpZ251cF9mb3JtIiwibG9naW5fZm9ybV90YWIiLCJzaWdudXBfZm9ybV90YWIiLCJzaWdudXBfZm9ybV90YWIyIiwiZm9ybV90aXRsZSIsImxvZ2luX3Bob25lX251bWJlciIsImxvZ2luX3Bhc3N3b3JkIiwibG9naW5fbWVzc2FnZSIsInJlZGlyZWN0X2FmdGVyX2xvZ2luIiwicmVkaXJlY3RfYWZ0ZXJfc2lnbnVwIiwic2lnbnVwX25hbWUiLCJzaWdudXBfcGhvbmVfbnVtYmVyIiwic2lnbnVwX290cF9jb2RlIiwic2lnbnVwX21lc3NhZ2UiLCJmb3JtX2lucHV0X19uYW1lIiwiZm9ybV9pbnB1dF9fcGhvbmUiLCJmb3JtX2lucHV0X19vdHAiLCJsb2dpbl9idG4iLCJzaWdudXBfYnRuIiwidmVyaWZ5X290cF9idG4iLCJwYXNzd29yZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ2YWx1ZSIsInBob25lTnVtYmVyIiwiZXZlbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiX3RoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9ybV92aXNpYWJpbGl0eSIsInNlbmRfbG9naW5fcmVxdWVzdCIsInNlbmRfc2lnbnVwX3JlcXVlc3QiLCJzZW5kX3NpZ251cF9vdHBfdmVyaWZpY2F0aW9uX3JlcXVlc3QiLCJpbm5lckhUTUwiLCJpc19sb2dpbl92aXNpYWJsZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIl90aGlzMiIsImxvZ2luX3JlbWVtYmFyIiwiY2hlY2tlZCIsInNldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJnc3BfdWlfa2l0X2NvbW1vbiIsImFqYXhfdXJsIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJVUkxTZWFyY2hQYXJhbXMiLCJhY3Rpb24iLCJ1c2VybmFtZSIsIm5vbmNlIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzdWNjZXNzIiwic3R5bGUiLCJjb2xvciIsImxvY2F0aW9uIiwicmVwbGFjZSIsImVycm9yIiwiX3RoaXMzIiwicGhvbmVfbnVtYmVyIiwibGVuZ3RoIiwibmFtZSIsIl9kYXRhJGRhdGEkbWVzc2FnZSIsIm1lc3NhZ2UiLCJfZGF0YSRkYXRhJGVycm9yIiwiX3RoaXM0Iiwib3RwX2NvZGUiLCJfZGF0YSRkYXRhJG1lc3NhZ2UyIiwiZGVmYXVsdCIsIkdTUF9TZXRfVGh1bWJuYWlsX0hlaWdodCIsInRodW1ibmFpbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwid2luZG93X3dpZHRoIiwic2NyZWVuIiwid2lkdGgiLCJzZXRfdGh1bWJuYWlsX2hlaWdodCIsIndpbmRvdyIsImNhcmRfdmlld19ibG9nIiwiaSIsImhlaWdodCIsIk1hdGgiLCJyb3VuZCIsIm9mZnNldEhlaWdodCIsIkdTUF9VSV9LaXRfWW91dHViZV9QbGF5ZXIiLCJwbGF5ZXIiLCJ2aWRlb0NvbnRhaW5lciIsInZpZGVvSWQiLCJnZXRBdHRyaWJ1dGUiLCJsb2FkWW91VHViZUFQSSIsIm9uWW91VHViZUlmcmFtZUFQSVJlYWR5IiwicGxheVZpZGVvIiwiZGlzcGxheSIsInBvaW50ZXJFdmVudHMiLCJwbGF5UGF1c2UiLCJnZXRQbGF5ZXJTdGF0ZSIsInBhdXNlVmlkZW8iLCJzZWVrRm9yd2FyZCIsInNlZWtUbyIsImdldEN1cnJlbnRUaW1lIiwic2Vla0JhY2t3YXJkIiwidG9nZ2xlRnVsbFNjcmVlbiIsImZ1bGxzY3JlZW5FbGVtZW50IiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJtb3pSZXF1ZXN0RnVsbFNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuIiwibXNSZXF1ZXN0RnVsbHNjcmVlbiIsImV4aXRGdWxsc2NyZWVuIiwidGFnIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImZpcnN0U2NyaXB0VGFnIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiWVQiLCJQbGF5ZXIiLCJwbGF5ZXJWYXJzIiwiY29udHJvbHMiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInNob3dpbmZvIiwiZnMiLCJkaXNhYmxla2IiLCJvblJlYWR5IiwiZXZlbnQiLCJvblBsYXllclJlYWR5IiwibG9hZFF1YWxpdHlPcHRpb25zIiwic2V0VGltZW91dCIsInF1YWxpdHlMZXZlbHMiLCJnZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzIiwicXVhbGl0eVNlbGVjdG9yIiwiZm9yRWFjaCIsImxldmVsIiwib3B0aW9uIiwidGV4dENvbnRlbnQiLCJ0b1VwcGVyQ2FzZSIsImFwcGVuZENoaWxkIiwiY2hhbmdlUXVhbGl0eSIsInF1YWxpdHkiLCJzZXRQbGF5YmFja1F1YWxpdHkiXSwic291cmNlUm9vdCI6IiJ9