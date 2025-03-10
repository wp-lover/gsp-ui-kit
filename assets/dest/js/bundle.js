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
      this.signup_phone_number = document.querySelector(".signup-phone-number");
      this.signup_phone_number_label = document.getElementById('-signup-phone-number-label');
      this.signup_otp_code = document.querySelector(".signup-otp-code");
      this.signup_message = document.querySelector('.signup-message');
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
      this.signup_btn.innerHTML = '<div class="loading-spinner"></div>';
      fetch(gsp_ui_kit_common.ajax_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded" // Important for WordPress AJAX
        },
        body: new URLSearchParams({
          action: "gsp_ui_kit_signup_with_otp",
          username: phone_number,
          nonce: gsp_ui_kit_common.nonce
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.success) {
          // successed response
          _this3.signup_phone_number.setAttribute('hidden', 1);
          _this3.signup_btn.classList.add('-d-none');
          _this3.signup_otp_code.classList.remove('-d-none');
          _this3.verify_otp_btn.classList.remove('-d-none');
          _this3.signup_phone_number_label.innerHTML = 'OTP CODE';
        } else {
          // false response 
          _this3.signup_message.innerHTML = 'Something went wrong, Try again later.';
          _this3.signup_message.style.color = 'red';
        }
        console.log(data);

        // this.signup_btn.innerHTML = '<div class="loading-spinner">Create Account</div>';
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
        _this4.verify_otp_btn.innerHTML = 'OTP Verify';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO01BQ3pDO0lBQ0Y7RUFBQztBQUFBOzs7Ozs7O1VDbklIO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05zRTtBQUNMO0FBQ1g7QUFHdEQ5SSxRQUFRLENBQUM4QixnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBRWxELElBQUkyQyxxRUFBd0IsQ0FBQyxDQUFDO0VBQzlCLElBQUljLCtEQUF5QixDQUFDLENBQUM7RUFDL0IsSUFBSTFGLCtEQUFjLENBQUMsQ0FBQztBQUV0QixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dzcC11aS1raXQvLi9hc3NldHMvc3JjL2pzL21vZHVsZXMvbG9naW4td2l0aC1vdHAuanMiLCJ3ZWJwYWNrOi8vZ3NwLXVpLWtpdC8uL2Fzc2V0cy9zcmMvanMvbW9kdWxlcy9zZXQtdGh1bWJuYWlsLWhlaWdodC5qcyIsIndlYnBhY2s6Ly9nc3AtdWkta2l0Ly4vYXNzZXRzL3NyYy9qcy9tb2R1bGVzL3lvdXR1YmUtcGxheWVyLmpzIiwid2VicGFjazovL2dzcC11aS1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3NwLXVpLWtpdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ3NwLXVpLWtpdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dzcC11aS1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nc3AtdWkta2l0Ly4vYXNzZXRzL3NyYy9qcy9idW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5fV2l0aF9PVFAge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnc3AtbG9naW4td2l0aC1vdHAtc2VjdGlvblwiKTtcclxuXHJcbiAgICBpZiAodGhpcy5zZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMubG9naW5fZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4tZm9ybVwiKTtcclxuICAgICAgdGhpcy5zaWdudXBfZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbnVwLWZvcm1cIik7XHJcblxyXG4gICAgICB0aGlzLmxvZ2luX2Zvcm1fdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dpbi1mb3JtLXRhYlwiKTtcclxuICAgICAgdGhpcy5zaWdudXBfZm9ybV90YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC1mb3JtLXRhYlwiKTtcclxuICAgICAgdGhpcy5zaWdudXBfZm9ybV90YWIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWdudXAtZm9ybS10YWItMlwiKTtcclxuXHJcbiAgICAgIHRoaXMuZm9ybV90aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS10aXRsZVwiKTtcclxuXHJcbiAgICAgIHRoaXMubG9naW5fcGhvbmVfbnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi1sb2dpbi1waG9uZS1udW1iZXInKTtcclxuICAgICAgdGhpcy5sb2dpbl9wYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tbG9naW4tcGFzc3dvcmQnKTtcclxuICAgICAgdGhpcy5sb2dpbl9tZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJy1sb2dpbi1tZXNzYWdlJyk7XHJcblxyXG4gICAgICB0aGlzLnJlZGlyZWN0X2FmdGVyX2xvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJy1yZWRpcmVjdC1hZnRlci1sb2dpbicpO1xyXG4gICAgICB0aGlzLnJlZGlyZWN0X2FmdGVyX3NpZ251cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCctcmVkaXJlY3QtYWZ0ZXItc2lnbnVwJyk7XHJcbiAgICAgIFxyXG5cclxuICAgICAgdGhpcy5zaWdudXBfcGhvbmVfbnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWdudXAtcGhvbmUtbnVtYmVyXCIpO1xyXG4gICAgICB0aGlzLnNpZ251cF9waG9uZV9udW1iZXJfbGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnLXNpZ251cC1waG9uZS1udW1iZXItbGFiZWwnKTtcclxuICAgICAgdGhpcy5zaWdudXBfb3RwX2NvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC1vdHAtY29kZVwiKTtcclxuICAgICAgdGhpcy5zaWdudXBfbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWdudXAtbWVzc2FnZScpO1xyXG5cclxuICAgICAgdGhpcy5sb2dpbl9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLi1sb2dpbi1idG5cIik7XHJcbiAgICAgIHRoaXMuc2lnbnVwX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuLXNpZ251cC1idG5cIik7XHJcbiAgICAgIHRoaXMudmVyaWZ5X290cF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLXZlcmlmeS1vdHAtYnRuJyk7XHJcblxyXG4gICAgICBjb25zdCBwYXNzd29yZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZW1lbWJlclBhc3N3b3JkJyk7XHJcbiAgICAgIGlmIChwYXNzd29yZCkge1xyXG4gICAgICAgIHRoaXMubG9naW5fcGFzc3dvcmQudmFsdWUgPSBwYXNzd29yZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcGhvbmVOdW1iZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVtZW1iZXJQaG9uZU51bWJlcicpO1xyXG4gICAgICBpZiAocGhvbmVOdW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxvZ2luX3Bob25lX251bWJlci52YWx1ZSA9IHBob25lTnVtYmVyO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXZlbnRzKCkge1xyXG4gICAgdGhpcy5sb2dpbl9mb3JtX3RhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICAgICAgdGhpcy5mb3JtX3Zpc2lhYmlsaXR5KHRydWUpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuc2lnbnVwX2Zvcm1fdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxyXG4gICAgICB0aGlzLmZvcm1fdmlzaWFiaWxpdHkoZmFsc2UpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuc2lnbnVwX2Zvcm1fdGFiMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICAgICAgdGhpcy5mb3JtX3Zpc2lhYmlsaXR5KGZhbHNlKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmxvZ2luX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zZW5kX2xvZ2luX3JlcXVlc3QoKSk7XHJcblxyXG4gICAgdGhpcy5zaWdudXBfYnRuLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycgLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2VuZF9zaWdudXBfcmVxdWVzdCgpO1xyXG4gICAgfSApO1xyXG5cclxuICAgIHRoaXMudmVyaWZ5X290cF9idG4uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJyAsICgpID0+IHRoaXMuc2VuZF9zaWdudXBfb3RwX3ZlcmlmaWNhdGlvbl9yZXF1ZXN0KCkgKTtcclxuXHJcbiAgICB0aGlzLnNpZ251cF9waG9uZV9udW1iZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nICwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNpZ251cF9tZXNzYWdlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfSApO1xyXG4gIH0gLy8gZW52ZW50cyBlbmRpbmdcclxuXHJcbiAgZm9ybV92aXNpYWJpbGl0eShpc19sb2dpbl92aXNpYWJsZSkge1xyXG4gICAgaWYgKGlzX2xvZ2luX3Zpc2lhYmxlKSB7XHJcbiAgICAgIC8vIHNob3cgdGhlIGxvZ2luIGZvcm1cclxuICAgICAgdGhpcy5zaWdudXBfZm9ybS5jbGFzc0xpc3QuYWRkKFwiLWQtbm9uZVwiKTtcclxuICAgICAgdGhpcy5zaWdudXBfZm9ybV90YWIuY2xhc3NMaXN0LnJlbW92ZShcIi1hY2l0dmUtdGFiXCIpO1xyXG5cclxuICAgICAgLy8gbG9naW4gZm9ybVxyXG4gICAgICB0aGlzLmxvZ2luX2Zvcm1fdGFiLmNsYXNzTGlzdC5hZGQoXCItYWNpdHZlLXRhYlwiKTtcclxuICAgICAgdGhpcy5sb2dpbl9mb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCItZC1ub25lXCIpO1xyXG5cclxuICAgICAgdGhpcy5mb3JtX3RpdGxlLmlubmVySFRNTCA9ICdXZWxjb21lIHRvIGxvZ2luJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHNob3cgdGhlIHNpZ251cCBmb3JtXHJcbiAgICAgIHRoaXMubG9naW5fZm9ybV90YWIuY2xhc3NMaXN0LnJlbW92ZShcIi1hY2l0dmUtdGFiXCIpO1xyXG4gICAgICB0aGlzLmxvZ2luX2Zvcm0uY2xhc3NMaXN0LmFkZChcIi1kLW5vbmVcIik7XHJcblxyXG4gICAgICB0aGlzLnNpZ251cF9mb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCItZC1ub25lXCIpO1xyXG4gICAgICB0aGlzLnNpZ251cF9mb3JtX3RhYi5jbGFzc0xpc3QuYWRkKFwiLWFjaXR2ZS10YWJcIik7XHJcblxyXG4gICAgICB0aGlzLmZvcm1fdGl0bGUuaW5uZXJIVE1MID0gJ1dlbGNvbWUgdG8gY3JlYXRlIGFjY291bnQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VuZF9sb2dpbl9yZXF1ZXN0KCkge1xyXG4gICAgXHJcbiAgICB0aGlzLmxvZ2luX2J0bi5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImxvYWRpbmctc3Bpbm5lclwiPjwvZGl2Pic7XHJcblxyXG4gICAgbGV0IGxvZ2luX3JlbWVtYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbWVtYmVyLXBhc3N3b3JkJyk7XHJcblxyXG4gICAgdGhpcy5sb2dpbl9tZXNzYWdlLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGlmIChsb2dpbl9yZW1lbWJhci5jaGVja2VkKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZW1lbWJlclBhc3N3b3JkJywgdGhpcy5sb2dpbl9wYXNzd29yZC52YWx1ZSk7IC8vIFN0b3JlICd0cnVlJyBhcyBhIHN0cmluZ1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVtZW1iZXJQaG9uZU51bWJlcicsIHRoaXMubG9naW5fcGhvbmVfbnVtYmVyLnZhbHVlKTsgLy8gU3RvcmUgJ3RydWUnIGFzIGEgc3RyaW5nXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5sb2dpbl9waG9uZV9udW1iZXIudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5sb2dpbl9wYXNzd29yZC52YWx1ZSk7XHJcblxyXG5cclxuICAgIGZldGNoKGdzcF91aV9raXRfY29tbW9uLmFqYXhfdXJsLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLCAvLyBJbXBvcnRhbnQgZm9yIFdvcmRQcmVzcyBBSkFYXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xyXG4gICAgICAgIGFjdGlvbjogXCJnc3BfdWlfa2l0X2xvZ2luXCIsXHJcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMubG9naW5fcGhvbmVfbnVtYmVyLnZhbHVlLFxyXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLmxvZ2luX3Bhc3N3b3JkLnZhbHVlLFxyXG4gICAgICAgIG5vbmNlOiBnc3BfdWlfa2l0X2NvbW1vbi5ub25jZSxcclxuICAgICAgfSksXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAvLyBIYW5kbGUgdGhlIHJlc3BvbnNlXHJcbiAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgICAgICAgIHRoaXMubG9naW5fYnRuLmlubmVySFRNTCA9ICdMb2dpbic7XHJcbiAgICAgICAgICB0aGlzLmxvZ2luX21lc3NhZ2UuaW5uZXJIVE1MID0gJ0xvZ2luIHN1Y2Nlc3NmdWxsISc7XHJcbiAgICAgICAgICB0aGlzLmxvZ2luX21lc3NhZ2Uuc3R5bGUuY29sb3IgPSAnZ3JlZW4nO1xyXG4gICAgICAgICAgbG9jYXRpb24ucmVwbGFjZSh0aGlzLnJlZGlyZWN0X2FmdGVyX2xvZ2luLnZhbHVlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMubG9naW5fbWVzc2FnZS5pbm5lckhUTUwgPSAnTG9nLUluIEZhaWxkISc7XHJcbiAgICAgICAgICB0aGlzLmxvZ2luX21lc3NhZ2Uuc3R5bGUuY29sb3IgPSAncmVkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2dpbl9idG4uaW5uZXJIVE1MID0gJ0xvZ2luJztcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBSkFYIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgICAgdGhpcy5sb2dpbl9tZXNzYWdlLmlubmVySFRNTCA9ICdTb21ldGhpbmcgd2VudCB3b3JuZywgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nO1xyXG4gICAgICAgIHRoaXMubG9naW5fbWVzc2FnZS5zdHlsZS5jb2xvciA9ICdyZWQnO1xyXG4gICAgICAgIHRoaXMubG9naW5fYnRuLmlubmVySFRNTCA9ICdMb2dpbic7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VuZF9zaWdudXBfcmVxdWVzdCgpIHtcclxuXHJcbiAgICBjb25zdCBwaG9uZV9udW1iZXIgPSB0aGlzLnNpZ251cF9waG9uZV9udW1iZXIudmFsdWUucmVwbGFjZSgvW14wLTldL2csICcnKTtcclxuICAgIHRoaXMuc2lnbnVwX3Bob25lX251bWJlci52YWx1ZSA9IHBob25lX251bWJlcjtcclxuXHJcbiAgICBpZiAocGhvbmVfbnVtYmVyLmxlbmd0aCAhPSAxMSkge1xyXG4gICAgICB0aGlzLnNpZ251cF9tZXNzYWdlLmlubmVySFRNTCA9ICdJbnZhbGlkIHBob25lIG51bWJlcic7XHJcbiAgICAgIHRoaXMuc2lnbnVwX21lc3NhZ2Uuc3R5bGUuY29sb3IgPSAncmVkJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2lnbnVwX2J0bi5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImxvYWRpbmctc3Bpbm5lclwiPjwvZGl2Pic7XHJcblxyXG4gICAgZmV0Y2goIGdzcF91aV9raXRfY29tbW9uLmFqYXhfdXJsLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLCAvLyBJbXBvcnRhbnQgZm9yIFdvcmRQcmVzcyBBSkFYXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xyXG4gICAgICAgIGFjdGlvbjogXCJnc3BfdWlfa2l0X3NpZ251cF93aXRoX290cFwiLFxyXG4gICAgICAgIHVzZXJuYW1lOiBwaG9uZV9udW1iZXIsXHJcbiAgICAgICAgbm9uY2U6IGdzcF91aV9raXRfY29tbW9uLm5vbmNlLFxyXG4gICAgICB9KSxcclxuICAgIH0gKS50aGVuICggKHJlc3BvbnNlICkgPT4gcmVzcG9uc2UuanNvbigpICkudGhlbiggKCBkYXRhICkgPT4ge1xyXG5cclxuICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIC8vIHN1Y2Nlc3NlZCByZXNwb25zZVxyXG4gICAgICAgIHRoaXMuc2lnbnVwX3Bob25lX251bWJlci5zZXRBdHRyaWJ1dGUoICdoaWRkZW4nICwgMSk7XHJcbiAgICAgICAgdGhpcy5zaWdudXBfYnRuLmNsYXNzTGlzdC5hZGQoJy1kLW5vbmUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaWdudXBfb3RwX2NvZGUuY2xhc3NMaXN0LnJlbW92ZSgnLWQtbm9uZScpO1xyXG4gICAgICAgIHRoaXMudmVyaWZ5X290cF9idG4uY2xhc3NMaXN0LnJlbW92ZSgnLWQtbm9uZScpO1xyXG4gICAgICAgIHRoaXMuc2lnbnVwX3Bob25lX251bWJlcl9sYWJlbC5pbm5lckhUTUwgPSAnT1RQIENPREUnO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAvLyBmYWxzZSByZXNwb25zZSBcclxuICAgICAgICB0aGlzLnNpZ251cF9tZXNzYWdlLmlubmVySFRNTCA9ICdTb21ldGhpbmcgd2VudCB3cm9uZywgVHJ5IGFnYWluIGxhdGVyLic7XHJcbiAgICAgICAgdGhpcy5zaWdudXBfbWVzc2FnZS5zdHlsZS5jb2xvciA9ICdyZWQnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyggZGF0YSApO1xyXG5cclxuICAgICAgLy8gdGhpcy5zaWdudXBfYnRuLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwibG9hZGluZy1zcGlubmVyXCI+Q3JlYXRlIEFjY291bnQ8L2Rpdj4nO1xyXG4gICAgICB0aGlzLnNpZ251cF9idG4uaW5uZXJIVE1MID0gJ0NyZWF0ZSBBY2NvdW50JztcclxuICAgIH0gKS5jYXRjaCAoICggZXJyb3IgKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJBSkFYIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICAgIHRoaXMuc2lnbnVwX2J0bi5pbm5lckhUTUwgPSAnQ3JlYXRlIEFjY291bnQnO1xyXG4gICAgICB0aGlzLnNpZ251cF9tZXNzYWdlLmlubmVySFRNTCA9ICdcIicgK3Bob25lX251bWJlciArICdcIicgKyAnIFRoaXMgbnVtYmVyIG1pZ2h0IGJlIGFscmVhZHkgcmVnaXN0ZWQsIFRyeSB3aXRoIGEgbmV3IG51bWJlciwnO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgc2VuZF9zaWdudXBfb3RwX3ZlcmlmaWNhdGlvbl9yZXF1ZXN0KCkge1xyXG5cclxuICAgIHRoaXMudmVyaWZ5X290cF9idG4uaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJsb2FkaW5nLXNwaW5uZXJcIj48L2Rpdj4nO1xyXG5cclxuICAgIGZldGNoKCBnc3BfdWlfa2l0X2NvbW1vbi5hamF4X3VybCAsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsIC8vIEltcG9ydGFudCBmb3IgV29yZFByZXNzIEFKQVhcclxuICAgICAgfSxcclxuICAgICAgYm9keTogbmV3IFVSTFNlYXJjaFBhcmFtcyh7XHJcbiAgICAgICAgYWN0aW9uOiBcImdzcF91aV9raXRfc2lnbnVwX290cF92ZXJpZmljYXRpb25cIixcclxuICAgICAgICBvdHBfY29kZTogdGhpcy5zaWdudXBfb3RwX2NvZGUudmFsdWUsXHJcbiAgICAgICAgcGhvbmVfbnVtYmVyOiB0aGlzLnNpZ251cF9waG9uZV9udW1iZXIudmFsdWUsXHJcbiAgICAgICAgbm9uY2U6IGdzcF91aV9raXRfY29tbW9uLm5vbmNlLFxyXG4gICAgICB9KSxcclxuICAgIH0gKS50aGVuKCAocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSApLnRoZW4oIChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMudmVyaWZ5X290cF9idG4uaW5uZXJIVE1MID0gJ09UUCBWZXJpZnknO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH0pLmNhdGNoKCAoIGVycm9yICkgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdvdHAgdmVyaWZpY2F0aW9uIGVycm9yJyArIGVycm9yKTtcclxuICAgICAgdGhpcy52ZXJpZnlfb3RwX2J0bi5pbm5lckhUTUwgPSAnT1RQIFZlcmlmeSc7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR1NQX1NldF9UaHVtYm5haWxfSGVpZ2h0IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGh1bWJuYWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuLXRodW1ibmFpbFwiKTtcclxuICAgIHRoaXMud2luZG93X3dpZHRoID0gc2NyZWVuLndpZHRoO1xyXG5cclxuICAgIGlmICh0aGlzLnRodW1ibmFpbHMpIHtcclxuICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgICAgdGhpcy5zZXRfdGh1bWJuYWlsX2hlaWdodCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXZlbnRzKCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLndpbmRvd193aWR0aCA9IHNjcmVlbi53aWR0aDtcclxuICAgICAgdGhpcy5zZXRfdGh1bWJuYWlsX2hlaWdodCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRfdGh1bWJuYWlsX2hlaWdodCgpIHtcclxuICAgIGNvbnN0IGNhcmRfdmlld19ibG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi4tY2FyZC12aWV3LWJsb2dcIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGh1bWJuYWlscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy53aW5kb3dfd2lkdGggPiA2MDApIHtcclxuICAgICAgICB0aGlzLnRodW1ibmFpbHNbaV0uc3R5bGUuaGVpZ2h0ID1cclxuICAgICAgICBNYXRoLnJvdW5kKChjYXJkX3ZpZXdfYmxvZy5vZmZzZXRIZWlnaHQgLyAxNikgKiA3KSArIFwicHhcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMud2luZG93X3dpZHRoID4gNzY4KSB7XHJcbiAgICAgICAgdGhpcy50aHVtYm5haWxzW2ldLnN0eWxlLmhlaWdodCA9XHJcbiAgICAgICAgTWF0aC5yb3VuZCgoY2FyZF92aWV3X2Jsb2cub2Zmc2V0SGVpZ2h0IC8gMTYpICogOCkgKyBcInB4XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLndpbmRvd193aWR0aCA+IDk5Mikge1xyXG4gICAgICAgIHRoaXMudGh1bWJuYWlsc1tpXS5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICAgIE1hdGgucm91bmQoKGNhcmRfdmlld19ibG9nLm9mZnNldEhlaWdodCAvIDE2KSAqIDcpICsgXCJweFwiO1xyXG4gICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdTUF9VSV9LaXRfWW91dHViZV9QbGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5wbGF5ZXI7XHJcblxyXG4gICAgbGV0IHZpZGVvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1jb250YWluZXJcIik7XHJcbiAgICBpZiAodmlkZW9Db250YWluZXIpIHtcclxuICAgICAgdGhpcy52aWRlb0lkID0gdmlkZW9Db250YWluZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS12aWRlby1pZFwiKTtcclxuXHJcbiAgICAgIHRoaXMubG9hZFlvdVR1YmVBUEkoKTtcclxuICBcclxuICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1lbHNle1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk5vIHZpZGVvIGNvbnRhaW5lciBmb3VuZC5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBldmVudHMoKSB7XHJcbiAgICB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSAoKSA9PiB0aGlzLm9uWW91VHViZUlmcmFtZUFQSVJlYWR5KCk7XHJcblxyXG4gICAgLy8gUGxheSB2aWRlbyBhbmQgaGlkZSBvdmVybGF5XHJcbiAgICB3aW5kb3cucGxheVZpZGVvID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnBsYXllci5wbGF5VmlkZW8oKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1vdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbGljay1ibG9ja2VyXCIpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImFsbFwiO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBQbGF5IG9yIFBhdXNlXHJcbiAgICB3aW5kb3cucGxheVBhdXNlID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wbGF5ZXIuZ2V0UGxheWVyU3RhdGUoKSA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBhdXNlVmlkZW8oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnBsYXllci5wbGF5VmlkZW8oKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTZWVrIGZvcndhcmQgMTAgc2Vjb25kc1xyXG4gICAgd2luZG93LnNlZWtGb3J3YXJkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnBsYXllci5zZWVrVG8odGhpcy5wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSArIDEwLCB0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gU2VlayBiYWNrd2FyZCAxMCBzZWNvbmRzXHJcbiAgICB3aW5kb3cuc2Vla0JhY2t3YXJkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnBsYXllci5zZWVrVG8odGhpcy5wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSAtIDEwLCB0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gRnVsbHNjcmVlbiB0b2dnbGVcclxuICAgIHdpbmRvdy50b2dnbGVGdWxsU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgICB2YXIgdmlkZW9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZGVvLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgIGlmICghZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIHtcclxuICAgICAgICBpZiAodmlkZW9Db250YWluZXIucmVxdWVzdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICAgIHZpZGVvQ29udGFpbmVyLnJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2aWRlb0NvbnRhaW5lci5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xyXG4gICAgICAgICAgdmlkZW9Db250YWluZXIubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZpZGVvQ29udGFpbmVyLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgICB2aWRlb0NvbnRhaW5lci53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmlkZW9Db250YWluZXIubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgdmlkZW9Db250YWluZXIubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2aWRlb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZnVsbHNjcmVlblwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIHZpZGVvQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJmdWxsc2NyZWVuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gTGlzdGVuIGZvciBmdWxsc2NyZWVuIGNoYW5nZXNcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmdWxsc2NyZWVuY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHZpZGVvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1jb250YWluZXJcIik7XHJcbiAgICAgIGlmIChkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xyXG4gICAgICAgIHZpZGVvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmdWxsc2NyZWVuXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZpZGVvQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJmdWxsc2NyZWVuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfSAvLyBlbnZlbnRzIGVuZGluZ1xyXG5cclxuICBsb2FkWW91VHViZUFQSSgpIHtcclxuICAgIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgdGFnLnNyYyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaVwiO1xyXG4gICAgdmFyIGZpcnN0U2NyaXB0VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XHJcbiAgICBmaXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcclxuICB9XHJcblxyXG4gIG9uWW91VHViZUlmcmFtZUFQSVJlYWR5KCkge1xyXG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgWVQuUGxheWVyKFwicGxheWVyXCIsIHtcclxuICAgICAgdmlkZW9JZDogdGhpcy52aWRlb0lkLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIFlvdVR1YmUgdmlkZW8gSURcclxuICAgICAgcGxheWVyVmFyczoge1xyXG4gICAgICAgIGNvbnRyb2xzOiAwLFxyXG4gICAgICAgIG1vZGVzdGJyYW5kaW5nOiAxLFxyXG4gICAgICAgIHJlbDogMCxcclxuICAgICAgICBzaG93aW5mbzogMCxcclxuICAgICAgICBmczogMCxcclxuICAgICAgICBkaXNhYmxla2I6IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIGV2ZW50czoge1xyXG4gICAgICAgIG9uUmVhZHk6IChldmVudCkgPT4gdGhpcy5vblBsYXllclJlYWR5KGV2ZW50KSwgLy8gVXNlIGFycm93IGZ1bmN0aW9uIHRvIHJldGFpbiBgdGhpc2AgY29cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25QbGF5ZXJSZWFkeShldmVudCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1vdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHRoaXMubG9hZFF1YWxpdHlPcHRpb25zKCk7IC8vIExvYWQgYXZhaWxhYmxlIHZpZGVvIHF1YWxpdHkgb3B0aW9uc1xyXG4gIH1cclxuXHJcbiAgLy8gTG9hZCBhdmFpbGFibGUgdmlkZW8gcXVhbGl0aWVzXHJcbiAgbG9hZFF1YWxpdHlPcHRpb25zKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGxldCBxdWFsaXR5TGV2ZWxzID0gcGxheWVyLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKTtcclxuICAgICAgbGV0IHF1YWxpdHlTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVhbGl0eS1zZWxlY3RvclwiKTtcclxuXHJcbiAgICAgIHF1YWxpdHlTZWxlY3Rvci5pbm5lckhUTUwgPSBcIjxvcHRpb24gdmFsdWU9Jyc+UXVhbGl0eTwvb3B0aW9uPlwiOyAvLyBSZXNldFxyXG5cclxuICAgICAgcXVhbGl0eUxldmVscy5mb3JFYWNoKChsZXZlbCkgPT4ge1xyXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGxldmVsO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGxldmVsLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgcXVhbGl0eVNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMTAwMCk7IC8vIERlbGF5IGZvciBBUEkgdG8gcmV0dXJuIHF1YWxpdHkgbGV2ZWxzXHJcbiAgfVxyXG5cclxuICAvLyBDaGFuZ2UgdmlkZW8gcXVhbGl0eVxyXG4gIGNoYW5nZVF1YWxpdHkocXVhbGl0eSkge1xyXG4gICAgaWYgKHF1YWxpdHkpIHtcclxuICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWJhY2tRdWFsaXR5KHF1YWxpdHkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdTUF9TZXRfVGh1bWJuYWlsX0hlaWdodCBmcm9tICcuL21vZHVsZXMvc2V0LXRodW1ibmFpbC1oZWlnaHQnO1xyXG5pbXBvcnQgR1NQX1VJX0tpdF9Zb3V0dWJlX1BsYXllciBmcm9tICcuL21vZHVsZXMveW91dHViZS1wbGF5ZXInO1xyXG5pbXBvcnQgTG9naW5fV2l0aF9PVFAgZnJvbSAnLi9tb2R1bGVzL2xvZ2luLXdpdGgtb3RwJztcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblxyXG4gIG5ldyBHU1BfU2V0X1RodW1ibmFpbF9IZWlnaHQoKTtcclxuICBuZXcgR1NQX1VJX0tpdF9Zb3V0dWJlX1BsYXllcigpO1xyXG4gIG5ldyBMb2dpbl9XaXRoX09UUCgpO1xyXG5cclxufSk7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkxvZ2luX1dpdGhfT1RQIiwiX2NsYXNzQ2FsbENoZWNrIiwic2VjdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2dpbl9mb3JtIiwicXVlcnlTZWxlY3RvciIsInNpZ251cF9mb3JtIiwibG9naW5fZm9ybV90YWIiLCJzaWdudXBfZm9ybV90YWIiLCJzaWdudXBfZm9ybV90YWIyIiwiZm9ybV90aXRsZSIsImxvZ2luX3Bob25lX251bWJlciIsImxvZ2luX3Bhc3N3b3JkIiwibG9naW5fbWVzc2FnZSIsInJlZGlyZWN0X2FmdGVyX2xvZ2luIiwicmVkaXJlY3RfYWZ0ZXJfc2lnbnVwIiwic2lnbnVwX3Bob25lX251bWJlciIsInNpZ251cF9waG9uZV9udW1iZXJfbGFiZWwiLCJzaWdudXBfb3RwX2NvZGUiLCJzaWdudXBfbWVzc2FnZSIsImxvZ2luX2J0biIsInNpZ251cF9idG4iLCJ2ZXJpZnlfb3RwX2J0biIsInBhc3N3b3JkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInZhbHVlIiwicGhvbmVOdW1iZXIiLCJldmVudHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJfdGhpcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JtX3Zpc2lhYmlsaXR5Iiwic2VuZF9sb2dpbl9yZXF1ZXN0Iiwic2VuZF9zaWdudXBfcmVxdWVzdCIsInNlbmRfc2lnbnVwX290cF92ZXJpZmljYXRpb25fcmVxdWVzdCIsImlubmVySFRNTCIsImlzX2xvZ2luX3Zpc2lhYmxlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiX3RoaXMyIiwibG9naW5fcmVtZW1iYXIiLCJjaGVja2VkIiwic2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsImdzcF91aV9raXRfY29tbW9uIiwiYWpheF91cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIlVSTFNlYXJjaFBhcmFtcyIsImFjdGlvbiIsInVzZXJuYW1lIiwibm9uY2UiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJzdHlsZSIsImNvbG9yIiwibG9jYXRpb24iLCJyZXBsYWNlIiwiZXJyb3IiLCJfdGhpczMiLCJwaG9uZV9udW1iZXIiLCJsZW5ndGgiLCJzZXRBdHRyaWJ1dGUiLCJfdGhpczQiLCJvdHBfY29kZSIsImRlZmF1bHQiLCJHU1BfU2V0X1RodW1ibmFpbF9IZWlnaHQiLCJ0aHVtYm5haWxzIiwicXVlcnlTZWxlY3RvckFsbCIsIndpbmRvd193aWR0aCIsInNjcmVlbiIsIndpZHRoIiwic2V0X3RodW1ibmFpbF9oZWlnaHQiLCJ3aW5kb3ciLCJjYXJkX3ZpZXdfYmxvZyIsImkiLCJoZWlnaHQiLCJNYXRoIiwicm91bmQiLCJvZmZzZXRIZWlnaHQiLCJHU1BfVUlfS2l0X1lvdXR1YmVfUGxheWVyIiwicGxheWVyIiwidmlkZW9Db250YWluZXIiLCJ2aWRlb0lkIiwiZ2V0QXR0cmlidXRlIiwibG9hZFlvdVR1YmVBUEkiLCJvbllvdVR1YmVJZnJhbWVBUElSZWFkeSIsInBsYXlWaWRlbyIsImRpc3BsYXkiLCJwb2ludGVyRXZlbnRzIiwicGxheVBhdXNlIiwiZ2V0UGxheWVyU3RhdGUiLCJwYXVzZVZpZGVvIiwic2Vla0ZvcndhcmQiLCJzZWVrVG8iLCJnZXRDdXJyZW50VGltZSIsInNlZWtCYWNrd2FyZCIsInRvZ2dsZUZ1bGxTY3JlZW4iLCJmdWxsc2NyZWVuRWxlbWVudCIsInJlcXVlc3RGdWxsc2NyZWVuIiwibW96UmVxdWVzdEZ1bGxTY3JlZW4iLCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiIsIm1zUmVxdWVzdEZ1bGxzY3JlZW4iLCJleGl0RnVsbHNjcmVlbiIsInRhZyIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJmaXJzdFNjcmlwdFRhZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIllUIiwiUGxheWVyIiwicGxheWVyVmFycyIsImNvbnRyb2xzIiwibW9kZXN0YnJhbmRpbmciLCJyZWwiLCJzaG93aW5mbyIsImZzIiwiZGlzYWJsZWtiIiwib25SZWFkeSIsImV2ZW50Iiwib25QbGF5ZXJSZWFkeSIsImxvYWRRdWFsaXR5T3B0aW9ucyIsInNldFRpbWVvdXQiLCJxdWFsaXR5TGV2ZWxzIiwiZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscyIsInF1YWxpdHlTZWxlY3RvciIsImZvckVhY2giLCJsZXZlbCIsIm9wdGlvbiIsInRleHRDb250ZW50IiwidG9VcHBlckNhc2UiLCJhcHBlbmRDaGlsZCIsImNoYW5nZVF1YWxpdHkiLCJxdWFsaXR5Iiwic2V0UGxheWJhY2tRdWFsaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==