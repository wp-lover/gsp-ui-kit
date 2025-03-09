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
      this.signup_otp_code = document.querySelector(".signup-otp-code");
      this.login_btn = document.querySelector(".-login-btn");
      this.signup_btn = document.querySelector(".-signup-btn");
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
    }
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
      } else {
        // show the signup form
        this.login_form_tab.classList.remove("-acitve-tab");
        this.login_form.classList.add("-d-none");
        this.signup_form.classList.remove("-d-none");
        this.signup_form_tab.classList.add("-acitve-tab");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxjQUFjO0VBQ2pDLFNBQUFBLGVBQUEsRUFBYztJQUFBQyxlQUFBLE9BQUFELGNBQUE7SUFDWixJQUFJLENBQUNFLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsNEJBQTRCLENBQUM7SUFFcEUsSUFBSSxJQUFJLENBQUNGLE9BQU8sRUFBRTtNQUNoQixJQUFJLENBQUNHLFVBQVUsR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsYUFBYSxDQUFDO01BQ3ZELElBQUksQ0FBQ0MsV0FBVyxHQUFHSixRQUFRLENBQUNHLGFBQWEsQ0FBQyxjQUFjLENBQUM7TUFFekQsSUFBSSxDQUFDRSxjQUFjLEdBQUdMLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGlCQUFpQixDQUFDO01BQy9ELElBQUksQ0FBQ0csZUFBZSxHQUFHTixRQUFRLENBQUNHLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztNQUNqRSxJQUFJLENBQUNJLGdCQUFnQixHQUFHUCxRQUFRLENBQUNHLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztNQUVwRSxJQUFJLENBQUNLLFVBQVUsR0FBR1IsUUFBUSxDQUFDRyxhQUFhLENBQUMsYUFBYSxDQUFDO01BRXZELElBQUksQ0FBQ00sa0JBQWtCLEdBQUdULFFBQVEsQ0FBQ0csYUFBYSxDQUFDLHNCQUFzQixDQUFDO01BQ3hFLElBQUksQ0FBQ08sY0FBYyxHQUFHVixRQUFRLENBQUNHLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztNQUNoRSxJQUFJLENBQUNRLGFBQWEsR0FBR1gsUUFBUSxDQUFDQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7TUFFOUQsSUFBSSxDQUFDVyxvQkFBb0IsR0FBR1osUUFBUSxDQUFDQyxjQUFjLENBQUMsdUJBQXVCLENBQUM7TUFDNUUsSUFBSSxDQUFDWSxxQkFBcUIsR0FBR2IsUUFBUSxDQUFDQyxjQUFjLENBQUMsd0JBQXdCLENBQUM7TUFHOUUsSUFBSSxDQUFDYSxtQkFBbUIsR0FBR2QsUUFBUSxDQUFDRyxhQUFhLENBQUMsc0JBQXNCLENBQUM7TUFDekUsSUFBSSxDQUFDWSxlQUFlLEdBQUdmLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGtCQUFrQixDQUFDO01BRWpFLElBQUksQ0FBQ2EsU0FBUyxHQUFHaEIsUUFBUSxDQUFDRyxhQUFhLENBQUMsYUFBYSxDQUFDO01BQ3RELElBQUksQ0FBQ2MsVUFBVSxHQUFHakIsUUFBUSxDQUFDRyxhQUFhLENBQUMsY0FBYyxDQUFDO01BRXhELElBQU1lLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsa0JBQWtCLENBQUM7TUFDekQsSUFBSUYsUUFBUSxFQUFFO1FBQ1osSUFBSSxDQUFDUixjQUFjLENBQUNXLEtBQUssR0FBR0gsUUFBUTtNQUN0QztNQUVBLElBQU1JLFdBQVcsR0FBR0gsWUFBWSxDQUFDQyxPQUFPLENBQUMscUJBQXFCLENBQUM7TUFDL0QsSUFBSUUsV0FBVyxFQUFFO1FBQ2YsSUFBSSxDQUFDYixrQkFBa0IsQ0FBQ1ksS0FBSyxHQUFHQyxXQUFXO01BQzdDO01BRUEsSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQztJQUNmO0VBQ0Y7RUFBQyxPQUFBQyxZQUFBLENBQUEzQixjQUFBO0lBQUE0QixHQUFBO0lBQUFKLEtBQUEsRUFFRCxTQUFBRSxNQUFNQSxDQUFBLEVBQUc7TUFBQSxJQUFBRyxLQUFBO01BQ1AsSUFBSSxDQUFDckIsY0FBYyxDQUFDc0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQUEsT0FDNUNELEtBQUksQ0FBQ0UsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO01BQUEsQ0FDN0IsQ0FBQztNQUVELElBQUksQ0FBQ3RCLGVBQWUsQ0FBQ3FCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUFBLE9BQzdDRCxLQUFJLENBQUNFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztNQUFBLENBQzlCLENBQUM7TUFFRCxJQUFJLENBQUNyQixnQkFBZ0IsQ0FBQ29CLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUFBLE9BQzlDRCxLQUFJLENBQUNFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztNQUFBLENBQzlCLENBQUM7TUFFRCxJQUFJLENBQUNaLFNBQVMsQ0FBQ1csZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQUEsT0FBTUQsS0FBSSxDQUFDRyxrQkFBa0IsQ0FBQyxDQUFDO01BQUEsRUFBQztJQUMzRTtFQUFDO0lBQUFKLEdBQUE7SUFBQUosS0FBQSxFQUVELFNBQUFPLGdCQUFnQkEsQ0FBQ0UsaUJBQWlCLEVBQUU7TUFDbEMsSUFBSUEsaUJBQWlCLEVBQUU7UUFDckI7UUFDQSxJQUFJLENBQUMxQixXQUFXLENBQUMyQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDekMsSUFBSSxDQUFDMUIsZUFBZSxDQUFDeUIsU0FBUyxDQUFDRSxNQUFNLENBQUMsYUFBYSxDQUFDOztRQUVwRDtRQUNBLElBQUksQ0FBQzVCLGNBQWMsQ0FBQzBCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUNoRCxJQUFJLENBQUM5QixVQUFVLENBQUM2QixTQUFTLENBQUNFLE1BQU0sQ0FBQyxTQUFTLENBQUM7TUFDN0MsQ0FBQyxNQUFNO1FBQ0w7UUFDQSxJQUFJLENBQUM1QixjQUFjLENBQUMwQixTQUFTLENBQUNFLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDbkQsSUFBSSxDQUFDL0IsVUFBVSxDQUFDNkIsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBRXhDLElBQUksQ0FBQzVCLFdBQVcsQ0FBQzJCLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUM1QyxJQUFJLENBQUMzQixlQUFlLENBQUN5QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7TUFDbkQ7SUFDRjtFQUFDO0lBQUFQLEdBQUE7SUFBQUosS0FBQSxFQUVELFNBQUFRLGtCQUFrQkEsQ0FBQSxFQUFHO01BQUEsSUFBQUssTUFBQTtNQUVuQixJQUFJLENBQUNsQixTQUFTLENBQUNtQixTQUFTLEdBQUcscUNBQXFDO01BRWhFLElBQUlDLGNBQWMsR0FBR3BDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLG1CQUFtQixDQUFDO01BRWpFLElBQUksQ0FBQ1UsYUFBYSxDQUFDd0IsU0FBUyxHQUFHLEVBQUU7TUFFakMsSUFBSUMsY0FBYyxDQUFDQyxPQUFPLEVBQUU7UUFDMUJsQixZQUFZLENBQUNtQixPQUFPLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDNUIsY0FBYyxDQUFDVyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3JFRixZQUFZLENBQUNtQixPQUFPLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDN0Isa0JBQWtCLENBQUNZLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFDOUU7TUFFQWtCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQy9CLGtCQUFrQixDQUFDWSxLQUFLLENBQUM7TUFDMUNrQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUM5QixjQUFjLENBQUNXLEtBQUssQ0FBQztNQUd0Q29CLEtBQUssQ0FBQ0MsaUJBQWlCLENBQUNDLFFBQVEsRUFBRTtRQUNoQ0MsTUFBTSxFQUFFLE1BQU07UUFDZEMsT0FBTyxFQUFFO1VBQ1AsY0FBYyxFQUFFLG1DQUFtQyxDQUFFO1FBQ3ZELENBQUM7UUFDREMsSUFBSSxFQUFFLElBQUlDLGVBQWUsQ0FBQztVQUN4QkMsTUFBTSxFQUFFLGtCQUFrQjtVQUMxQkMsUUFBUSxFQUFFLElBQUksQ0FBQ3hDLGtCQUFrQixDQUFDWSxLQUFLO1VBQ3ZDSCxRQUFRLEVBQUUsSUFBSSxDQUFDUixjQUFjLENBQUNXLEtBQUs7VUFDbkM2QixLQUFLLEVBQUVSLGlCQUFpQixDQUFDUTtRQUMzQixDQUFDO01BQ0gsQ0FBQyxDQUFDLENBQ0NDLElBQUksQ0FBQyxVQUFDQyxRQUFRO1FBQUEsT0FBS0EsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztNQUFBLEVBQUMsQ0FDbkNGLElBQUksQ0FBQyxVQUFDRyxJQUFJLEVBQUs7UUFDZDtRQUNBLElBQUlBLElBQUksQ0FBQ0MsT0FBTyxFQUFFO1VBQ2hCaEIsT0FBTyxDQUFDQyxHQUFHLENBQUNjLElBQUksQ0FBQ0EsSUFBSSxDQUFDO1VBQ3RCcEIsTUFBSSxDQUFDbEIsU0FBUyxDQUFDbUIsU0FBUyxHQUFHLE9BQU87VUFDbENELE1BQUksQ0FBQ3ZCLGFBQWEsQ0FBQ3dCLFNBQVMsR0FBRyxvQkFBb0I7VUFDbkRELE1BQUksQ0FBQ3ZCLGFBQWEsQ0FBQzZDLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLE9BQU87VUFDeENDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDekIsTUFBSSxDQUFDdEIsb0JBQW9CLENBQUNTLEtBQUssQ0FBQztRQUNuRCxDQUFDLE1BQUk7VUFDSGEsTUFBSSxDQUFDdkIsYUFBYSxDQUFDd0IsU0FBUyxHQUFHLGVBQWU7VUFDOUNELE1BQUksQ0FBQ3ZCLGFBQWEsQ0FBQzZDLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEtBQUs7UUFDeEM7UUFDQXZCLE1BQUksQ0FBQ2xCLFNBQVMsQ0FBQ21CLFNBQVMsR0FBRyxPQUFPO1FBQ2xDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDO01BQ25CLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQ00sS0FBSyxFQUFLO1FBQ2hCckIsT0FBTyxDQUFDcUIsS0FBSyxDQUFDLGFBQWEsRUFBRUEsS0FBSyxDQUFDO1FBQ25DMUIsTUFBSSxDQUFDdkIsYUFBYSxDQUFDd0IsU0FBUyxHQUFHLCtDQUErQztRQUM5RUQsTUFBSSxDQUFDdkIsYUFBYSxDQUFDNkMsS0FBSyxDQUFDQyxLQUFLLEdBQUcsS0FBSztRQUN0Q3ZCLE1BQUksQ0FBQ2xCLFNBQVMsQ0FBQ21CLFNBQVMsR0FBRyxPQUFPO01BQ3BDLENBQUMsQ0FBQztJQUNOO0VBQUM7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDaElrQjJCLHdCQUF3QjtFQUMzQyxTQUFBQSx5QkFBQSxFQUFjO0lBQUFoRSxlQUFBLE9BQUFnRSx3QkFBQTtJQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHL0QsUUFBUSxDQUFDZ0UsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQzFELElBQUksQ0FBQ0MsWUFBWSxHQUFHQyxNQUFNLENBQUNDLEtBQUs7SUFFaEMsSUFBSSxJQUFJLENBQUNKLFVBQVUsRUFBRTtNQUNuQixJQUFJLENBQUN4QyxNQUFNLENBQUMsQ0FBQztNQUNiLElBQUksQ0FBQzZDLG9CQUFvQixDQUFDLENBQUM7SUFDN0I7RUFDRjtFQUFDLE9BQUE1QyxZQUFBLENBQUFzQyx3QkFBQTtJQUFBckMsR0FBQTtJQUFBSixLQUFBLEVBRUQsU0FBQUUsTUFBTUEsQ0FBQSxFQUFHO01BQUEsSUFBQUcsS0FBQTtNQUNQMkMsTUFBTSxDQUFDMUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07UUFDdENELEtBQUksQ0FBQ3VDLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxLQUFLO1FBQ2hDekMsS0FBSSxDQUFDMEMsb0JBQW9CLENBQUMsQ0FBQztNQUM3QixDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUEzQyxHQUFBO0lBQUFKLEtBQUEsRUFFRCxTQUFBK0Msb0JBQW9CQSxDQUFBLEVBQUc7TUFDckIsSUFBTUUsY0FBYyxHQUFHdEUsUUFBUSxDQUFDRyxhQUFhLENBQUMsa0JBQWtCLENBQUM7TUFDakUsS0FBSyxJQUFJb0UsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLElBQUksQ0FBQ1IsVUFBVSxDQUFDUyxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO1FBQy9DLElBQUksSUFBSSxDQUFDTixZQUFZLEdBQUcsR0FBRyxFQUFFO1VBQzNCLElBQUksQ0FBQ0YsVUFBVSxDQUFDUSxDQUFDLENBQUMsQ0FBQ2YsS0FBSyxDQUFDaUIsTUFBTSxHQUMvQkMsSUFBSSxDQUFDQyxLQUFLLENBQUVMLGNBQWMsQ0FBQ00sWUFBWSxHQUFHLEVBQUUsR0FBSSxDQUFDLENBQUMsR0FBRyxJQUFJO1FBQzNEO1FBRUEsSUFBSSxJQUFJLENBQUNYLFlBQVksR0FBRyxHQUFHLEVBQUU7VUFDM0IsSUFBSSxDQUFDRixVQUFVLENBQUNRLENBQUMsQ0FBQyxDQUFDZixLQUFLLENBQUNpQixNQUFNLEdBQy9CQyxJQUFJLENBQUNDLEtBQUssQ0FBRUwsY0FBYyxDQUFDTSxZQUFZLEdBQUcsRUFBRSxHQUFJLENBQUMsQ0FBQyxHQUFHLElBQUk7UUFDM0Q7UUFFQSxJQUFJLElBQUksQ0FBQ1gsWUFBWSxHQUFHLEdBQUcsRUFBRTtVQUMzQixJQUFJLENBQUNGLFVBQVUsQ0FBQ1EsQ0FBQyxDQUFDLENBQUNmLEtBQUssQ0FBQ2lCLE1BQU0sR0FDL0JDLElBQUksQ0FBQ0MsS0FBSyxDQUFFTCxjQUFjLENBQUNNLFlBQVksR0FBRyxFQUFFLEdBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSTtRQUMzRDtNQUVGO0lBQ0Y7RUFBQztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNyQ2tCQyx5QkFBeUI7RUFDNUMsU0FBQUEsMEJBQUEsRUFBYztJQUFBL0UsZUFBQSxPQUFBK0UseUJBQUE7SUFDWixJQUFJLENBQUNDLE1BQU07SUFFWCxJQUFJQyxjQUFjLEdBQUcvRSxRQUFRLENBQUNHLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztJQUMvRCxJQUFJNEUsY0FBYyxFQUFFO01BQ2xCLElBQUksQ0FBQ0MsT0FBTyxHQUFHRCxjQUFjLENBQUNFLFlBQVksQ0FBQyxlQUFlLENBQUM7TUFFM0QsSUFBSSxDQUFDQyxjQUFjLENBQUMsQ0FBQztNQUVyQixJQUFJLENBQUMzRCxNQUFNLENBQUMsQ0FBQztJQUNmLENBQUMsTUFBSTtNQUNIZ0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLENBQUM7TUFDeEM7SUFDRjtFQUdGO0VBQUMsT0FBQWhCLFlBQUEsQ0FBQXFELHlCQUFBO0lBQUFwRCxHQUFBO0lBQUFKLEtBQUEsRUFFRCxTQUFBRSxNQUFNQSxDQUFBLEVBQUc7TUFBQSxJQUFBRyxLQUFBO01BQ1AyQyxNQUFNLENBQUNjLHVCQUF1QixHQUFHO1FBQUEsT0FBTXpELEtBQUksQ0FBQ3lELHVCQUF1QixDQUFDLENBQUM7TUFBQTs7TUFFckU7TUFDQWQsTUFBTSxDQUFDZSxTQUFTLEdBQUcsWUFBTTtRQUN2QjFELEtBQUksQ0FBQ29ELE1BQU0sQ0FBQ00sU0FBUyxDQUFDLENBQUM7UUFDdkJwRixRQUFRLENBQUNHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDcUQsS0FBSyxDQUFDNkIsT0FBTyxHQUFHLE1BQU07UUFDL0RyRixRQUFRLENBQUNHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDcUQsS0FBSyxDQUFDOEIsYUFBYSxHQUFHLEtBQUs7TUFDdEUsQ0FBQzs7TUFFRDtNQUNBakIsTUFBTSxDQUFDa0IsU0FBUyxHQUFHLFlBQU07UUFDdkIsSUFBSTdELEtBQUksQ0FBQ29ELE1BQU0sQ0FBQ1UsY0FBYyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7VUFDdEM5RCxLQUFJLENBQUNvRCxNQUFNLENBQUNXLFVBQVUsQ0FBQyxDQUFDO1FBQzFCLENBQUMsTUFBTTtVQUNML0QsS0FBSSxDQUFDb0QsTUFBTSxDQUFDTSxTQUFTLENBQUMsQ0FBQztRQUN6QjtNQUNGLENBQUM7O01BRUQ7TUFDQWYsTUFBTSxDQUFDcUIsV0FBVyxHQUFHLFlBQU07UUFDekJoRSxLQUFJLENBQUNvRCxNQUFNLENBQUNhLE1BQU0sQ0FBQ2pFLEtBQUksQ0FBQ29ELE1BQU0sQ0FBQ2MsY0FBYyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDO01BQzdELENBQUM7O01BRUQ7TUFDQXZCLE1BQU0sQ0FBQ3dCLFlBQVksR0FBRyxZQUFNO1FBQzFCbkUsS0FBSSxDQUFDb0QsTUFBTSxDQUFDYSxNQUFNLENBQUNqRSxLQUFJLENBQUNvRCxNQUFNLENBQUNjLGNBQWMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQztNQUM3RCxDQUFDOztNQUVEO01BQ0F2QixNQUFNLENBQUN5QixnQkFBZ0IsR0FBRyxZQUFNO1FBQzlCLElBQUlmLGNBQWMsR0FBRy9FLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGtCQUFrQixDQUFDO1FBRS9ELElBQUksQ0FBQ0gsUUFBUSxDQUFDK0YsaUJBQWlCLEVBQUU7VUFDL0IsSUFBSWhCLGNBQWMsQ0FBQ2lCLGlCQUFpQixFQUFFO1lBQ3BDakIsY0FBYyxDQUFDaUIsaUJBQWlCLENBQUMsQ0FBQztVQUNwQyxDQUFDLE1BQU0sSUFBSWpCLGNBQWMsQ0FBQ2tCLG9CQUFvQixFQUFFO1lBQzlDbEIsY0FBYyxDQUFDa0Isb0JBQW9CLENBQUMsQ0FBQztVQUN2QyxDQUFDLE1BQU0sSUFBSWxCLGNBQWMsQ0FBQ21CLHVCQUF1QixFQUFFO1lBQ2pEbkIsY0FBYyxDQUFDbUIsdUJBQXVCLENBQUMsQ0FBQztVQUMxQyxDQUFDLE1BQU0sSUFBSW5CLGNBQWMsQ0FBQ29CLG1CQUFtQixFQUFFO1lBQzdDcEIsY0FBYyxDQUFDb0IsbUJBQW1CLENBQUMsQ0FBQztVQUN0QztVQUNBcEIsY0FBYyxDQUFDaEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO1FBQzVDLENBQUMsTUFBTTtVQUNMaEMsUUFBUSxDQUFDb0csY0FBYyxDQUFDLENBQUM7VUFDekJyQixjQUFjLENBQUNoRCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDL0M7TUFDRixDQUFDO01BQ0Q7TUFDQWpDLFFBQVEsQ0FBQzJCLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7UUFDeEQsSUFBSW9ELGNBQWMsR0FBRy9FLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGtCQUFrQixDQUFDO1FBQy9ELElBQUlILFFBQVEsQ0FBQytGLGlCQUFpQixFQUFFO1VBQzlCaEIsY0FBYyxDQUFDaEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO1FBQzVDLENBQUMsTUFBTTtVQUNMK0MsY0FBYyxDQUFDaEQsU0FBUyxDQUFDRSxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQy9DO01BQ0YsQ0FBQyxDQUFDO0lBRUosQ0FBQyxDQUFDO0VBQUE7SUFBQVIsR0FBQTtJQUFBSixLQUFBLEVBRUYsU0FBQTZELGNBQWNBLENBQUEsRUFBRztNQUNmLElBQUltQixHQUFHLEdBQUdyRyxRQUFRLENBQUNzRyxhQUFhLENBQUMsUUFBUSxDQUFDO01BQzFDRCxHQUFHLENBQUNFLEdBQUcsR0FBRyxvQ0FBb0M7TUFDOUMsSUFBSUMsY0FBYyxHQUFHeEcsUUFBUSxDQUFDeUcsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQy9ERCxjQUFjLENBQUNFLFVBQVUsQ0FBQ0MsWUFBWSxDQUFDTixHQUFHLEVBQUVHLGNBQWMsQ0FBQztJQUM3RDtFQUFDO0lBQUEvRSxHQUFBO0lBQUFKLEtBQUEsRUFFRCxTQUFBOEQsdUJBQXVCQSxDQUFBLEVBQUc7TUFBQSxJQUFBakQsTUFBQTtNQUN4QixJQUFJLENBQUM0QyxNQUFNLEdBQUcsSUFBSThCLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsRUFBRTtRQUNwQzdCLE9BQU8sRUFBRSxJQUFJLENBQUNBLE9BQU87UUFBRTtRQUN2QjhCLFVBQVUsRUFBRTtVQUNWQyxRQUFRLEVBQUUsQ0FBQztVQUNYQyxjQUFjLEVBQUUsQ0FBQztVQUNqQkMsR0FBRyxFQUFFLENBQUM7VUFDTkMsUUFBUSxFQUFFLENBQUM7VUFDWEMsRUFBRSxFQUFFLENBQUM7VUFDTEMsU0FBUyxFQUFFO1FBQ2IsQ0FBQztRQUNEN0YsTUFBTSxFQUFFO1VBQ044RixPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBR0MsS0FBSztZQUFBLE9BQUtwRixNQUFJLENBQUNxRixhQUFhLENBQUNELEtBQUssQ0FBQztVQUFBLEVBQUU7UUFDakQ7TUFDRixDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUE3RixHQUFBO0lBQUFKLEtBQUEsRUFFRCxTQUFBa0csYUFBYUEsQ0FBQ0QsS0FBSyxFQUFFO01BQ25CdEgsUUFBUSxDQUFDRyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ3FELEtBQUssQ0FBQzZCLE9BQU8sR0FBRyxNQUFNO01BQy9ELElBQUksQ0FBQ21DLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCOztJQUVBO0VBQUE7SUFBQS9GLEdBQUE7SUFBQUosS0FBQSxFQUNBLFNBQUFtRyxrQkFBa0JBLENBQUEsRUFBRztNQUNuQkMsVUFBVSxDQUFDLFlBQU07UUFDZixJQUFJQyxhQUFhLEdBQUc1QyxNQUFNLENBQUM2Qyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3RELElBQUlDLGVBQWUsR0FBRzVILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGtCQUFrQixDQUFDO1FBRWpFMkgsZUFBZSxDQUFDekYsU0FBUyxHQUFHLG1DQUFtQyxDQUFDLENBQUM7O1FBRWpFdUYsYUFBYSxDQUFDRyxPQUFPLENBQUMsVUFBQ0MsS0FBSyxFQUFLO1VBQy9CLElBQUlDLE1BQU0sR0FBRy9ILFFBQVEsQ0FBQ3NHLGFBQWEsQ0FBQyxRQUFRLENBQUM7VUFDN0N5QixNQUFNLENBQUMxRyxLQUFLLEdBQUd5RyxLQUFLO1VBQ3BCQyxNQUFNLENBQUNDLFdBQVcsR0FBR0YsS0FBSyxDQUFDRyxXQUFXLENBQUMsQ0FBQztVQUN4Q0wsZUFBZSxDQUFDTSxXQUFXLENBQUNILE1BQU0sQ0FBQztRQUNyQyxDQUFDLENBQUM7TUFDSixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNaOztJQUVBO0VBQUE7SUFBQXRHLEdBQUE7SUFBQUosS0FBQSxFQUNBLFNBQUE4RyxhQUFhQSxDQUFDQyxPQUFPLEVBQUU7TUFDckIsSUFBSUEsT0FBTyxFQUFFO1FBQ1gsSUFBSSxDQUFDdEQsTUFBTSxDQUFDdUQsa0JBQWtCLENBQUNELE9BQU8sQ0FBQztNQUN6QztJQUNGO0VBQUM7QUFBQTs7Ozs7OztVQ25JSDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOc0U7QUFDTDtBQUNYO0FBR3REcEksUUFBUSxDQUFDMkIsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUVsRCxJQUFJbUMscUVBQXdCLENBQUMsQ0FBQztFQUM5QixJQUFJZSwrREFBeUIsQ0FBQyxDQUFDO0VBQy9CLElBQUloRiwrREFBYyxDQUFDLENBQUM7QUFFdEIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nc3AtdWkta2l0Ly4vYXNzZXRzL3NyYy9qcy9tb2R1bGVzL2xvZ2luLXdpdGgtb3RwLmpzIiwid2VicGFjazovL2dzcC11aS1raXQvLi9hc3NldHMvc3JjL2pzL21vZHVsZXMvc2V0LXRodW1ibmFpbC1oZWlnaHQuanMiLCJ3ZWJwYWNrOi8vZ3NwLXVpLWtpdC8uL2Fzc2V0cy9zcmMvanMvbW9kdWxlcy95b3V0dWJlLXBsYXllci5qcyIsIndlYnBhY2s6Ly9nc3AtdWkta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dzcC11aS1raXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dzcC11aS1raXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nc3AtdWkta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ3NwLXVpLWtpdC8uL2Fzc2V0cy9zcmMvanMvYnVuZGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luX1dpdGhfT1RQIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3NwLWxvZ2luLXdpdGgtb3RwLXNlY3Rpb25cIik7XHJcblxyXG4gICAgaWYgKHRoaXMuc2VjdGlvbikge1xyXG4gICAgICB0aGlzLmxvZ2luX2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luLWZvcm1cIik7XHJcbiAgICAgIHRoaXMuc2lnbnVwX2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC1mb3JtXCIpO1xyXG5cclxuICAgICAgdGhpcy5sb2dpbl9mb3JtX3RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4tZm9ybS10YWJcIik7XHJcbiAgICAgIHRoaXMuc2lnbnVwX2Zvcm1fdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWdudXAtZm9ybS10YWJcIik7XHJcbiAgICAgIHRoaXMuc2lnbnVwX2Zvcm1fdGFiMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbnVwLWZvcm0tdGFiLTJcIik7XHJcblxyXG4gICAgICB0aGlzLmZvcm1fdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tdGl0bGVcIik7XHJcblxyXG4gICAgICB0aGlzLmxvZ2luX3Bob25lX251bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tbG9naW4tcGhvbmUtbnVtYmVyJyk7XHJcbiAgICAgIHRoaXMubG9naW5fcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLWxvZ2luLXBhc3N3b3JkJyk7XHJcbiAgICAgIHRoaXMubG9naW5fbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCctbG9naW4tbWVzc2FnZScpO1xyXG5cclxuICAgICAgdGhpcy5yZWRpcmVjdF9hZnRlcl9sb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCctcmVkaXJlY3QtYWZ0ZXItbG9naW4nKTtcclxuICAgICAgdGhpcy5yZWRpcmVjdF9hZnRlcl9zaWdudXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnLXJlZGlyZWN0LWFmdGVyLXNpZ251cCcpO1xyXG4gICAgICBcclxuXHJcbiAgICAgIHRoaXMuc2lnbnVwX3Bob25lX251bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbnVwLXBob25lLW51bWJlclwiKTtcclxuICAgICAgdGhpcy5zaWdudXBfb3RwX2NvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC1vdHAtY29kZVwiKTtcclxuXHJcbiAgICAgIHRoaXMubG9naW5fYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi4tbG9naW4tYnRuXCIpO1xyXG4gICAgICB0aGlzLnNpZ251cF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLi1zaWdudXAtYnRuXCIpO1xyXG5cclxuICAgICAgY29uc3QgcGFzc3dvcmQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVtZW1iZXJQYXNzd29yZCcpO1xyXG4gICAgICBpZiAocGFzc3dvcmQpIHtcclxuICAgICAgICB0aGlzLmxvZ2luX3Bhc3N3b3JkLnZhbHVlID0gcGFzc3dvcmQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHBob25lTnVtYmVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlbWVtYmVyUGhvbmVOdW1iZXInKTtcclxuICAgICAgaWYgKHBob25lTnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbl9waG9uZV9udW1iZXIudmFsdWUgPSBwaG9uZU51bWJlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV2ZW50cygpIHtcclxuICAgIHRoaXMubG9naW5fZm9ybV90YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XHJcbiAgICAgIHRoaXMuZm9ybV92aXNpYWJpbGl0eSh0cnVlKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnNpZ251cF9mb3JtX3RhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICAgICAgdGhpcy5mb3JtX3Zpc2lhYmlsaXR5KGZhbHNlKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnNpZ251cF9mb3JtX3RhYjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XHJcbiAgICAgIHRoaXMuZm9ybV92aXNpYWJpbGl0eShmYWxzZSlcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5sb2dpbl9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc2VuZF9sb2dpbl9yZXF1ZXN0KCkpO1xyXG4gIH1cclxuXHJcbiAgZm9ybV92aXNpYWJpbGl0eShpc19sb2dpbl92aXNpYWJsZSkge1xyXG4gICAgaWYgKGlzX2xvZ2luX3Zpc2lhYmxlKSB7XHJcbiAgICAgIC8vIHNob3cgdGhlIGxvZ2luIGZvcm1cclxuICAgICAgdGhpcy5zaWdudXBfZm9ybS5jbGFzc0xpc3QuYWRkKFwiLWQtbm9uZVwiKTtcclxuICAgICAgdGhpcy5zaWdudXBfZm9ybV90YWIuY2xhc3NMaXN0LnJlbW92ZShcIi1hY2l0dmUtdGFiXCIpO1xyXG5cclxuICAgICAgLy8gbG9naW4gZm9ybVxyXG4gICAgICB0aGlzLmxvZ2luX2Zvcm1fdGFiLmNsYXNzTGlzdC5hZGQoXCItYWNpdHZlLXRhYlwiKTtcclxuICAgICAgdGhpcy5sb2dpbl9mb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCItZC1ub25lXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gc2hvdyB0aGUgc2lnbnVwIGZvcm1cclxuICAgICAgdGhpcy5sb2dpbl9mb3JtX3RhYi5jbGFzc0xpc3QucmVtb3ZlKFwiLWFjaXR2ZS10YWJcIik7XHJcbiAgICAgIHRoaXMubG9naW5fZm9ybS5jbGFzc0xpc3QuYWRkKFwiLWQtbm9uZVwiKTtcclxuXHJcbiAgICAgIHRoaXMuc2lnbnVwX2Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcIi1kLW5vbmVcIik7XHJcbiAgICAgIHRoaXMuc2lnbnVwX2Zvcm1fdGFiLmNsYXNzTGlzdC5hZGQoXCItYWNpdHZlLXRhYlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbmRfbG9naW5fcmVxdWVzdCgpIHtcclxuICAgIFxyXG4gICAgdGhpcy5sb2dpbl9idG4uaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJsb2FkaW5nLXNwaW5uZXJcIj48L2Rpdj4nO1xyXG5cclxuICAgIGxldCBsb2dpbl9yZW1lbWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1lbWJlci1wYXNzd29yZCcpO1xyXG5cclxuICAgIHRoaXMubG9naW5fbWVzc2FnZS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBpZiAobG9naW5fcmVtZW1iYXIuY2hlY2tlZCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVtZW1iZXJQYXNzd29yZCcsIHRoaXMubG9naW5fcGFzc3dvcmQudmFsdWUpOyAvLyBTdG9yZSAndHJ1ZScgYXMgYSBzdHJpbmdcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlbWVtYmVyUGhvbmVOdW1iZXInLCB0aGlzLmxvZ2luX3Bob25lX251bWJlci52YWx1ZSk7IC8vIFN0b3JlICd0cnVlJyBhcyBhIHN0cmluZ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMubG9naW5fcGhvbmVfbnVtYmVyLnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMubG9naW5fcGFzc3dvcmQudmFsdWUpO1xyXG5cclxuXHJcbiAgICBmZXRjaChnc3BfdWlfa2l0X2NvbW1vbi5hamF4X3VybCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiwgLy8gSW1wb3J0YW50IGZvciBXb3JkUHJlc3MgQUpBWFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcclxuICAgICAgICBhY3Rpb246IFwiZ3NwX3VpX2tpdF9sb2dpblwiLFxyXG4gICAgICAgIHVzZXJuYW1lOiB0aGlzLmxvZ2luX3Bob25lX251bWJlci52YWx1ZSxcclxuICAgICAgICBwYXNzd29yZDogdGhpcy5sb2dpbl9wYXNzd29yZC52YWx1ZSxcclxuICAgICAgICBub25jZTogZ3NwX3VpX2tpdF9jb21tb24ubm9uY2UsXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgLy8gSGFuZGxlIHRoZSByZXNwb25zZVxyXG4gICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLmxvZ2luX2J0bi5pbm5lckhUTUwgPSAnTG9naW4nO1xyXG4gICAgICAgICAgdGhpcy5sb2dpbl9tZXNzYWdlLmlubmVySFRNTCA9ICdMb2dpbiBzdWNjZXNzZnVsbCEnO1xyXG4gICAgICAgICAgdGhpcy5sb2dpbl9tZXNzYWdlLnN0eWxlLmNvbG9yID0gJ2dyZWVuJztcclxuICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UodGhpcy5yZWRpcmVjdF9hZnRlcl9sb2dpbi52YWx1ZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLmxvZ2luX21lc3NhZ2UuaW5uZXJIVE1MID0gJ0xvZy1JbiBGYWlsZCEnO1xyXG4gICAgICAgICAgdGhpcy5sb2dpbl9tZXNzYWdlLnN0eWxlLmNvbG9yID0gJ3JlZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9naW5fYnRuLmlubmVySFRNTCA9ICdMb2dpbic7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQUpBWCBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHRoaXMubG9naW5fbWVzc2FnZS5pbm5lckhUTUwgPSAnU29tZXRoaW5nIHdlbnQgd29ybmcsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJztcclxuICAgICAgICB0aGlzLmxvZ2luX21lc3NhZ2Uuc3R5bGUuY29sb3IgPSAncmVkJztcclxuICAgICAgICB0aGlzLmxvZ2luX2J0bi5pbm5lckhUTUwgPSAnTG9naW4nO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR1NQX1NldF9UaHVtYm5haWxfSGVpZ2h0IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGh1bWJuYWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuLXRodW1ibmFpbFwiKTtcclxuICAgIHRoaXMud2luZG93X3dpZHRoID0gc2NyZWVuLndpZHRoO1xyXG5cclxuICAgIGlmICh0aGlzLnRodW1ibmFpbHMpIHtcclxuICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgICAgdGhpcy5zZXRfdGh1bWJuYWlsX2hlaWdodCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXZlbnRzKCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLndpbmRvd193aWR0aCA9IHNjcmVlbi53aWR0aDtcclxuICAgICAgdGhpcy5zZXRfdGh1bWJuYWlsX2hlaWdodCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRfdGh1bWJuYWlsX2hlaWdodCgpIHtcclxuICAgIGNvbnN0IGNhcmRfdmlld19ibG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi4tY2FyZC12aWV3LWJsb2dcIik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGh1bWJuYWlscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy53aW5kb3dfd2lkdGggPiA2MDApIHtcclxuICAgICAgICB0aGlzLnRodW1ibmFpbHNbaV0uc3R5bGUuaGVpZ2h0ID1cclxuICAgICAgICBNYXRoLnJvdW5kKChjYXJkX3ZpZXdfYmxvZy5vZmZzZXRIZWlnaHQgLyAxNikgKiA3KSArIFwicHhcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMud2luZG93X3dpZHRoID4gNzY4KSB7XHJcbiAgICAgICAgdGhpcy50aHVtYm5haWxzW2ldLnN0eWxlLmhlaWdodCA9XHJcbiAgICAgICAgTWF0aC5yb3VuZCgoY2FyZF92aWV3X2Jsb2cub2Zmc2V0SGVpZ2h0IC8gMTYpICogOCkgKyBcInB4XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLndpbmRvd193aWR0aCA+IDk5Mikge1xyXG4gICAgICAgIHRoaXMudGh1bWJuYWlsc1tpXS5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICAgIE1hdGgucm91bmQoKGNhcmRfdmlld19ibG9nLm9mZnNldEhlaWdodCAvIDE2KSAqIDcpICsgXCJweFwiO1xyXG4gICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdTUF9VSV9LaXRfWW91dHViZV9QbGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5wbGF5ZXI7XHJcblxyXG4gICAgbGV0IHZpZGVvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1jb250YWluZXJcIik7XHJcbiAgICBpZiAodmlkZW9Db250YWluZXIpIHtcclxuICAgICAgdGhpcy52aWRlb0lkID0gdmlkZW9Db250YWluZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS12aWRlby1pZFwiKTtcclxuXHJcbiAgICAgIHRoaXMubG9hZFlvdVR1YmVBUEkoKTtcclxuICBcclxuICAgICAgdGhpcy5ldmVudHMoKTtcclxuICAgIH1lbHNle1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk5vIHZpZGVvIGNvbnRhaW5lciBmb3VuZC5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBldmVudHMoKSB7XHJcbiAgICB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSAoKSA9PiB0aGlzLm9uWW91VHViZUlmcmFtZUFQSVJlYWR5KCk7XHJcblxyXG4gICAgLy8gUGxheSB2aWRlbyBhbmQgaGlkZSBvdmVybGF5XHJcbiAgICB3aW5kb3cucGxheVZpZGVvID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnBsYXllci5wbGF5VmlkZW8oKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1vdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbGljay1ibG9ja2VyXCIpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImFsbFwiO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBQbGF5IG9yIFBhdXNlXHJcbiAgICB3aW5kb3cucGxheVBhdXNlID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wbGF5ZXIuZ2V0UGxheWVyU3RhdGUoKSA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBhdXNlVmlkZW8oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnBsYXllci5wbGF5VmlkZW8oKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTZWVrIGZvcndhcmQgMTAgc2Vjb25kc1xyXG4gICAgd2luZG93LnNlZWtGb3J3YXJkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnBsYXllci5zZWVrVG8odGhpcy5wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSArIDEwLCB0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gU2VlayBiYWNrd2FyZCAxMCBzZWNvbmRzXHJcbiAgICB3aW5kb3cuc2Vla0JhY2t3YXJkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnBsYXllci5zZWVrVG8odGhpcy5wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSAtIDEwLCB0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gRnVsbHNjcmVlbiB0b2dnbGVcclxuICAgIHdpbmRvdy50b2dnbGVGdWxsU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgICB2YXIgdmlkZW9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZGVvLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgIGlmICghZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIHtcclxuICAgICAgICBpZiAodmlkZW9Db250YWluZXIucmVxdWVzdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICAgIHZpZGVvQ29udGFpbmVyLnJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2aWRlb0NvbnRhaW5lci5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xyXG4gICAgICAgICAgdmlkZW9Db250YWluZXIubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZpZGVvQ29udGFpbmVyLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgICB2aWRlb0NvbnRhaW5lci53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmlkZW9Db250YWluZXIubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgdmlkZW9Db250YWluZXIubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2aWRlb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZnVsbHNjcmVlblwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIHZpZGVvQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJmdWxsc2NyZWVuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gTGlzdGVuIGZvciBmdWxsc2NyZWVuIGNoYW5nZXNcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmdWxsc2NyZWVuY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHZpZGVvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1jb250YWluZXJcIik7XHJcbiAgICAgIGlmIChkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xyXG4gICAgICAgIHZpZGVvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmdWxsc2NyZWVuXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZpZGVvQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJmdWxsc2NyZWVuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfSAvLyBlbnZlbnRzIGVuZGluZ1xyXG5cclxuICBsb2FkWW91VHViZUFQSSgpIHtcclxuICAgIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgdGFnLnNyYyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaVwiO1xyXG4gICAgdmFyIGZpcnN0U2NyaXB0VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XHJcbiAgICBmaXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcclxuICB9XHJcblxyXG4gIG9uWW91VHViZUlmcmFtZUFQSVJlYWR5KCkge1xyXG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgWVQuUGxheWVyKFwicGxheWVyXCIsIHtcclxuICAgICAgdmlkZW9JZDogdGhpcy52aWRlb0lkLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIFlvdVR1YmUgdmlkZW8gSURcclxuICAgICAgcGxheWVyVmFyczoge1xyXG4gICAgICAgIGNvbnRyb2xzOiAwLFxyXG4gICAgICAgIG1vZGVzdGJyYW5kaW5nOiAxLFxyXG4gICAgICAgIHJlbDogMCxcclxuICAgICAgICBzaG93aW5mbzogMCxcclxuICAgICAgICBmczogMCxcclxuICAgICAgICBkaXNhYmxla2I6IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIGV2ZW50czoge1xyXG4gICAgICAgIG9uUmVhZHk6IChldmVudCkgPT4gdGhpcy5vblBsYXllclJlYWR5KGV2ZW50KSwgLy8gVXNlIGFycm93IGZ1bmN0aW9uIHRvIHJldGFpbiBgdGhpc2AgY29cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25QbGF5ZXJSZWFkeShldmVudCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1vdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHRoaXMubG9hZFF1YWxpdHlPcHRpb25zKCk7IC8vIExvYWQgYXZhaWxhYmxlIHZpZGVvIHF1YWxpdHkgb3B0aW9uc1xyXG4gIH1cclxuXHJcbiAgLy8gTG9hZCBhdmFpbGFibGUgdmlkZW8gcXVhbGl0aWVzXHJcbiAgbG9hZFF1YWxpdHlPcHRpb25zKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGxldCBxdWFsaXR5TGV2ZWxzID0gcGxheWVyLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKTtcclxuICAgICAgbGV0IHF1YWxpdHlTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVhbGl0eS1zZWxlY3RvclwiKTtcclxuXHJcbiAgICAgIHF1YWxpdHlTZWxlY3Rvci5pbm5lckhUTUwgPSBcIjxvcHRpb24gdmFsdWU9Jyc+UXVhbGl0eTwvb3B0aW9uPlwiOyAvLyBSZXNldFxyXG5cclxuICAgICAgcXVhbGl0eUxldmVscy5mb3JFYWNoKChsZXZlbCkgPT4ge1xyXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGxldmVsO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGxldmVsLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgcXVhbGl0eVNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMTAwMCk7IC8vIERlbGF5IGZvciBBUEkgdG8gcmV0dXJuIHF1YWxpdHkgbGV2ZWxzXHJcbiAgfVxyXG5cclxuICAvLyBDaGFuZ2UgdmlkZW8gcXVhbGl0eVxyXG4gIGNoYW5nZVF1YWxpdHkocXVhbGl0eSkge1xyXG4gICAgaWYgKHF1YWxpdHkpIHtcclxuICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWJhY2tRdWFsaXR5KHF1YWxpdHkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdTUF9TZXRfVGh1bWJuYWlsX0hlaWdodCBmcm9tICcuL21vZHVsZXMvc2V0LXRodW1ibmFpbC1oZWlnaHQnO1xyXG5pbXBvcnQgR1NQX1VJX0tpdF9Zb3V0dWJlX1BsYXllciBmcm9tICcuL21vZHVsZXMveW91dHViZS1wbGF5ZXInO1xyXG5pbXBvcnQgTG9naW5fV2l0aF9PVFAgZnJvbSAnLi9tb2R1bGVzL2xvZ2luLXdpdGgtb3RwJztcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblxyXG4gIG5ldyBHU1BfU2V0X1RodW1ibmFpbF9IZWlnaHQoKTtcclxuICBuZXcgR1NQX1VJX0tpdF9Zb3V0dWJlX1BsYXllcigpO1xyXG4gIG5ldyBMb2dpbl9XaXRoX09UUCgpO1xyXG5cclxufSk7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkxvZ2luX1dpdGhfT1RQIiwiX2NsYXNzQ2FsbENoZWNrIiwic2VjdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2dpbl9mb3JtIiwicXVlcnlTZWxlY3RvciIsInNpZ251cF9mb3JtIiwibG9naW5fZm9ybV90YWIiLCJzaWdudXBfZm9ybV90YWIiLCJzaWdudXBfZm9ybV90YWIyIiwiZm9ybV90aXRsZSIsImxvZ2luX3Bob25lX251bWJlciIsImxvZ2luX3Bhc3N3b3JkIiwibG9naW5fbWVzc2FnZSIsInJlZGlyZWN0X2FmdGVyX2xvZ2luIiwicmVkaXJlY3RfYWZ0ZXJfc2lnbnVwIiwic2lnbnVwX3Bob25lX251bWJlciIsInNpZ251cF9vdHBfY29kZSIsImxvZ2luX2J0biIsInNpZ251cF9idG4iLCJwYXNzd29yZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ2YWx1ZSIsInBob25lTnVtYmVyIiwiZXZlbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiX3RoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9ybV92aXNpYWJpbGl0eSIsInNlbmRfbG9naW5fcmVxdWVzdCIsImlzX2xvZ2luX3Zpc2lhYmxlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiX3RoaXMyIiwiaW5uZXJIVE1MIiwibG9naW5fcmVtZW1iYXIiLCJjaGVja2VkIiwic2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsImdzcF91aV9raXRfY29tbW9uIiwiYWpheF91cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIlVSTFNlYXJjaFBhcmFtcyIsImFjdGlvbiIsInVzZXJuYW1lIiwibm9uY2UiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJzdHlsZSIsImNvbG9yIiwibG9jYXRpb24iLCJyZXBsYWNlIiwiZXJyb3IiLCJkZWZhdWx0IiwiR1NQX1NldF9UaHVtYm5haWxfSGVpZ2h0IiwidGh1bWJuYWlscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3aW5kb3dfd2lkdGgiLCJzY3JlZW4iLCJ3aWR0aCIsInNldF90aHVtYm5haWxfaGVpZ2h0Iiwid2luZG93IiwiY2FyZF92aWV3X2Jsb2ciLCJpIiwibGVuZ3RoIiwiaGVpZ2h0IiwiTWF0aCIsInJvdW5kIiwib2Zmc2V0SGVpZ2h0IiwiR1NQX1VJX0tpdF9Zb3V0dWJlX1BsYXllciIsInBsYXllciIsInZpZGVvQ29udGFpbmVyIiwidmlkZW9JZCIsImdldEF0dHJpYnV0ZSIsImxvYWRZb3VUdWJlQVBJIiwib25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkiLCJwbGF5VmlkZW8iLCJkaXNwbGF5IiwicG9pbnRlckV2ZW50cyIsInBsYXlQYXVzZSIsImdldFBsYXllclN0YXRlIiwicGF1c2VWaWRlbyIsInNlZWtGb3J3YXJkIiwic2Vla1RvIiwiZ2V0Q3VycmVudFRpbWUiLCJzZWVrQmFja3dhcmQiLCJ0b2dnbGVGdWxsU2NyZWVuIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsIm1velJlcXVlc3RGdWxsU2NyZWVuIiwid2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4iLCJtc1JlcXVlc3RGdWxsc2NyZWVuIiwiZXhpdEZ1bGxzY3JlZW4iLCJ0YWciLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiZmlyc3RTY3JpcHRUYWciLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJZVCIsIlBsYXllciIsInBsYXllclZhcnMiLCJjb250cm9scyIsIm1vZGVzdGJyYW5kaW5nIiwicmVsIiwic2hvd2luZm8iLCJmcyIsImRpc2FibGVrYiIsIm9uUmVhZHkiLCJldmVudCIsIm9uUGxheWVyUmVhZHkiLCJsb2FkUXVhbGl0eU9wdGlvbnMiLCJzZXRUaW1lb3V0IiwicXVhbGl0eUxldmVscyIsImdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMiLCJxdWFsaXR5U2VsZWN0b3IiLCJmb3JFYWNoIiwibGV2ZWwiLCJvcHRpb24iLCJ0ZXh0Q29udGVudCIsInRvVXBwZXJDYXNlIiwiYXBwZW5kQ2hpbGQiLCJjaGFuZ2VRdWFsaXR5IiwicXVhbGl0eSIsInNldFBsYXliYWNrUXVhbGl0eSJdLCJzb3VyY2VSb290IjoiIn0=