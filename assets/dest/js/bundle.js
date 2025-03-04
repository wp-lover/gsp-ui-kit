/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/modules/set-thumbnail-height.js":
/*!*******************************************************!*\
  !*** ./assets/src/js/modules/set-thumbnail-height.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GSP_Set_Thumbnail)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var GSP_Set_Thumbnail = /*#__PURE__*/function () {
  function GSP_Set_Thumbnail() {
    _classCallCheck(this, GSP_Set_Thumbnail);
    this.thumbnails = document.querySelectorAll(".-thumbnail");
    this.events();
    this.set_thumbnail_height();
  }
  return _createClass(GSP_Set_Thumbnail, [{
    key: "events",
    value: function events() {
      window.addEventListener("resize", function () {});
    }
  }, {
    key: "set_thumbnail_height",
    value: function set_thumbnail_height() {
      var card_view_blog = document.querySelector(".-card-view-blog");
      for (var i = 0; i < this.thumbnails.length; i++) {
        this.thumbnails[i].style.height = Math.round(card_view_blog.offsetHeight / 16 * 9) + "px";
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
    if (!videoContainer) {
      console.error("No video container found.");
      return;
    }
    this.videoId = videoContainer.getAttribute("data-video-id");
    this.loadYouTubeAPI();
    this.events();
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var GSP_UI_KIT_SLIDER = /*#__PURE__*/function () {
  function GSP_UI_KIT_SLIDER() {
    _classCallCheck(this, GSP_UI_KIT_SLIDER);
    this.sliderBoxs = document.getElementsByClassName("gsp-ui-kit-slider-box");
    this.slidersData = [];
    if (this.sliderBoxs) {
      for (var i = 0; i < this.sliderBoxs.length; i++) {
        this.goToNextSlide(i);
        this.goToPrevSlide(i);
        this.sliders = this.sliderBoxs[i].getElementsByClassName("sliders");

        // this is the each slide inside slider
        var slide = this.sliders[i].getElementsByClassName("slide");
        var is_auto_play = this.sliderBoxs[i].classList.contains('auto-play') ? true : false;

        // set slidebox quantity
        if (slide) {
          // in zero index contain total slide , second index contain current index.
          // third index contain slide width
          var slideWidth = slide[0].offsetWidth;
          this.slidersData.push({
            total_slides: slide.length,
            current_slide: 1,
            slide_width: slideWidth,
            is_auto_play: is_auto_play
          });
        }
      }
    }
  } // constructor
  return _createClass(GSP_UI_KIT_SLIDER, [{
    key: "goToNextSlide",
    value: function goToNextSlide(index) {
      var _this = this;
      var next = document.getElementsByClassName("gsp-ui-kit-next-slide");
      next[index].addEventListener("click", function () {
        var slideData = _this.slidersData[index];
        if (slideData.current_slide < slideData.total_slides) {
          _this.setSlideForward(index, slideData.current_slide * slideData.slide_width);
          slideData.current_slide++;
          console.log("forwarding");
        } else {
          // set current slide number from 1

          _this.setSlideFirst(index);

          // again set current in first index
          slideData.current_slide = 1;
        }
      });
    }
  }, {
    key: "goToPrevSlide",
    value: function goToPrevSlide(index) {
      var _this2 = this;
      var next = document.getElementsByClassName("gsp-ui-kit-prev-slide");
      next[index].addEventListener("click", function () {
        var slideData = _this2.slidersData[index];
        if (slideData.current_slide == 1) {
          slideData.current_slide = slideData.total_slides - 1;
        } else {
          slideData.current_slide--;
        }
        var translateX = "translateX(-".concat(slideData.slide_width, "px)");
        if (_this2.sliders[index].style.transform == translateX) {
          _this2.setSlideFirst(index);
          slideData.current_slide = 1;
        } else {
          // if slider reach on the last slider
          if (slideData.current_slide == slideData.total_slides - 1) {
            _this2.setSlideForward(index, (slideData.current_slide - 1) * slideData.slide_width);
          } else {
            // 
            _this2.setSlideForward(index, slideData.current_slide * slideData.slide_width);
          }
        }
      });
    }
  }, {
    key: "setSlideForward",
    value: function setSlideForward(index, value) {
      this.sliders[index].style.transform = "translateX(-".concat(value, "px)");
    }
  }, {
    key: "setSlideReverse",
    value: function setSlideReverse(index, value) {
      this.sliders[index].style.transform = "translateX(".concat(value, "px)");
    }
  }, {
    key: "setSlideFirst",
    value: function setSlideFirst(index) {
      this.sliders[index].style.transform = "translateX(0px)";
    }
  }]);
}();
document.addEventListener("DOMContentLoaded", function () {
  new _modules_set_thumbnail_height__WEBPACK_IMPORTED_MODULE_0__["default"]();
  new _modules_youtube_player__WEBPACK_IMPORTED_MODULE_1__["default"]();

  // const slider = new Siema({
  //   selector: ".gsp-ui-kit-slider-1",
  //   easing: "ease",
  //   draggable: true,
  //   multipleDrag: true,
  //   threshold: 20,
  //   loop: false,
  //   rtl: false,
  //   onInit: () => {},
  //   onChange: () => {},
  // });

  // $('.gsp-ui-kit-slider-1').slick();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQSxpQkFBaUI7RUFDbEMsU0FBQUEsa0JBQUEsRUFBYztJQUFBQyxlQUFBLE9BQUFELGlCQUFBO0lBQ1osSUFBSSxDQUFDRSxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBRzFELElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUM7SUFFYixJQUFJLENBQUNDLG9CQUFvQixDQUFDLENBQUM7RUFDN0I7RUFBQyxPQUFBQyxZQUFBLENBQUFQLGlCQUFBO0lBQUFRLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFKLE1BQU1BLENBQUEsRUFBRztNQUVQSyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNLENBRXRDLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQUgsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUgsb0JBQW9CQSxDQUFBLEVBQUc7TUFDdEIsSUFBT00sY0FBYyxHQUFHVCxRQUFRLENBQUNVLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztNQUNqRSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxJQUFJLENBQUNaLFVBQVUsQ0FBQ2EsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtRQUMvQyxJQUFJLENBQUNaLFVBQVUsQ0FBQ1ksQ0FBQyxDQUFDLENBQUNFLEtBQUssQ0FBQ0MsTUFBTSxHQUMvQkMsSUFBSSxDQUFDQyxLQUFLLENBQUlQLGNBQWMsQ0FBQ1EsWUFBWSxHQUFHLEVBQUUsR0FBSSxDQUFFLENBQUMsR0FBRyxJQUFJO01BRTlEO0lBQ0Y7RUFBQztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN4QmdCRSx5QkFBeUI7RUFDNUMsU0FBQUEsMEJBQUEsRUFBYztJQUFBckIsZUFBQSxPQUFBcUIseUJBQUE7SUFDWixJQUFJLENBQUNDLE1BQU07SUFFWCxJQUFJQyxjQUFjLEdBQUdyQixRQUFRLENBQUNVLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztJQUMvRCxJQUFJLENBQUNXLGNBQWMsRUFBRTtNQUNqQkMsT0FBTyxDQUFDQyxLQUFLLENBQUMsMkJBQTJCLENBQUM7TUFDMUM7SUFDSjtJQUNBLElBQUksQ0FBQ0MsT0FBTyxHQUFHSCxjQUFjLENBQUNJLFlBQVksQ0FBQyxlQUFlLENBQUM7SUFFM0QsSUFBSSxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUVyQixJQUFJLENBQUN4QixNQUFNLENBQUMsQ0FBQztFQUNmO0VBQUMsT0FBQUUsWUFBQSxDQUFBZSx5QkFBQTtJQUFBZCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBSixNQUFNQSxDQUFBLEVBQUc7TUFBQSxJQUFBeUIsS0FBQTtNQUNQcEIsTUFBTSxDQUFDcUIsdUJBQXVCLEdBQUc7UUFBQSxPQUFNRCxLQUFJLENBQUNDLHVCQUF1QixDQUFDLENBQUM7TUFBQTs7TUFFckU7TUFDQXJCLE1BQU0sQ0FBQ3NCLFNBQVMsR0FBRyxZQUFNO1FBQ3ZCRixLQUFJLENBQUNQLE1BQU0sQ0FBQ1MsU0FBUyxDQUFDLENBQUM7UUFDdkI3QixRQUFRLENBQUNVLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDRyxLQUFLLENBQUNpQixPQUFPLEdBQUcsTUFBTTtRQUMvRDlCLFFBQVEsQ0FBQ1UsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUNHLEtBQUssQ0FBQ2tCLGFBQWEsR0FBRyxLQUFLO01BQ3RFLENBQUM7O01BRUQ7TUFDQXhCLE1BQU0sQ0FBQ3lCLFNBQVMsR0FBRyxZQUFNO1FBQ3ZCLElBQUlMLEtBQUksQ0FBQ1AsTUFBTSxDQUFDYSxjQUFjLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtVQUN0Q04sS0FBSSxDQUFDUCxNQUFNLENBQUNjLFVBQVUsQ0FBQyxDQUFDO1FBQzFCLENBQUMsTUFBTTtVQUNMUCxLQUFJLENBQUNQLE1BQU0sQ0FBQ1MsU0FBUyxDQUFDLENBQUM7UUFDekI7TUFDRixDQUFDOztNQUVEO01BQ0F0QixNQUFNLENBQUM0QixXQUFXLEdBQUcsWUFBTTtRQUN6QlIsS0FBSSxDQUFDUCxNQUFNLENBQUNnQixNQUFNLENBQUNULEtBQUksQ0FBQ1AsTUFBTSxDQUFDaUIsY0FBYyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDO01BQzdELENBQUM7O01BRUQ7TUFDQTlCLE1BQU0sQ0FBQytCLFlBQVksR0FBRyxZQUFNO1FBQzFCWCxLQUFJLENBQUNQLE1BQU0sQ0FBQ2dCLE1BQU0sQ0FBQ1QsS0FBSSxDQUFDUCxNQUFNLENBQUNpQixjQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUM7TUFDN0QsQ0FBQzs7TUFFRDtNQUNBOUIsTUFBTSxDQUFDZ0MsZ0JBQWdCLEdBQUcsWUFBTTtRQUM5QixJQUFJbEIsY0FBYyxHQUFHckIsUUFBUSxDQUFDVSxhQUFhLENBQUMsa0JBQWtCLENBQUM7UUFFL0QsSUFBSSxDQUFDVixRQUFRLENBQUN3QyxpQkFBaUIsRUFBRTtVQUMvQixJQUFJbkIsY0FBYyxDQUFDb0IsaUJBQWlCLEVBQUU7WUFDcENwQixjQUFjLENBQUNvQixpQkFBaUIsQ0FBQyxDQUFDO1VBQ3BDLENBQUMsTUFBTSxJQUFJcEIsY0FBYyxDQUFDcUIsb0JBQW9CLEVBQUU7WUFDOUNyQixjQUFjLENBQUNxQixvQkFBb0IsQ0FBQyxDQUFDO1VBQ3ZDLENBQUMsTUFBTSxJQUFJckIsY0FBYyxDQUFDc0IsdUJBQXVCLEVBQUU7WUFDakR0QixjQUFjLENBQUNzQix1QkFBdUIsQ0FBQyxDQUFDO1VBQzFDLENBQUMsTUFBTSxJQUFJdEIsY0FBYyxDQUFDdUIsbUJBQW1CLEVBQUU7WUFDN0N2QixjQUFjLENBQUN1QixtQkFBbUIsQ0FBQyxDQUFDO1VBQ3RDO1VBQ0F2QixjQUFjLENBQUN3QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7UUFDNUMsQ0FBQyxNQUFNO1VBQ0w5QyxRQUFRLENBQUMrQyxjQUFjLENBQUMsQ0FBQztVQUN6QjFCLGNBQWMsQ0FBQ3dCLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLFlBQVksQ0FBQztRQUMvQztNQUNGLENBQUM7TUFDRDtNQUNBaEQsUUFBUSxDQUFDUSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO1FBQ3hELElBQUlhLGNBQWMsR0FBR3JCLFFBQVEsQ0FBQ1UsYUFBYSxDQUFDLGtCQUFrQixDQUFDO1FBQy9ELElBQUlWLFFBQVEsQ0FBQ3dDLGlCQUFpQixFQUFFO1VBQzlCbkIsY0FBYyxDQUFDd0IsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO1FBQzVDLENBQUMsTUFBTTtVQUNMekIsY0FBYyxDQUFDd0IsU0FBUyxDQUFDRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQy9DO01BQ0YsQ0FBQyxDQUFDO0lBRUosQ0FBQyxDQUFDO0VBQUE7SUFBQTNDLEdBQUE7SUFBQUMsS0FBQSxFQUVGLFNBQUFvQixjQUFjQSxDQUFBLEVBQUc7TUFDZixJQUFJdUIsR0FBRyxHQUFHakQsUUFBUSxDQUFDa0QsYUFBYSxDQUFDLFFBQVEsQ0FBQztNQUMxQ0QsR0FBRyxDQUFDRSxHQUFHLEdBQUcsb0NBQW9DO01BQzlDLElBQUlDLGNBQWMsR0FBR3BELFFBQVEsQ0FBQ3FELG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUMvREQsY0FBYyxDQUFDRSxVQUFVLENBQUNDLFlBQVksQ0FBQ04sR0FBRyxFQUFFRyxjQUFjLENBQUM7SUFDN0Q7RUFBQztJQUFBL0MsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXNCLHVCQUF1QkEsQ0FBQSxFQUFHO01BQUEsSUFBQTRCLE1BQUE7TUFDeEIsSUFBSSxDQUFDcEMsTUFBTSxHQUFHLElBQUlxQyxFQUFFLENBQUNDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7UUFDcENsQyxPQUFPLEVBQUUsSUFBSSxDQUFDQSxPQUFPO1FBQUU7UUFDdkJtQyxVQUFVLEVBQUU7VUFDVkMsUUFBUSxFQUFFLENBQUM7VUFDWEMsY0FBYyxFQUFFLENBQUM7VUFDakJDLEdBQUcsRUFBRSxDQUFDO1VBQ05DLFFBQVEsRUFBRSxDQUFDO1VBQ1hDLEVBQUUsRUFBRSxDQUFDO1VBQ0xDLFNBQVMsRUFBRTtRQUNiLENBQUM7UUFDRC9ELE1BQU0sRUFBRTtVQUNOZ0UsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUdDLEtBQUs7WUFBQSxPQUFLWCxNQUFJLENBQUNZLGFBQWEsQ0FBQ0QsS0FBSyxDQUFDO1VBQUEsRUFBRTtRQUNqRDtNQUNGLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQTlELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE4RCxhQUFhQSxDQUFDRCxLQUFLLEVBQUU7TUFDbkJuRSxRQUFRLENBQUNVLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDRyxLQUFLLENBQUNpQixPQUFPLEdBQUcsTUFBTTtNQUMvRCxJQUFJLENBQUN1QyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3Qjs7SUFFQTtFQUFBO0lBQUFoRSxHQUFBO0lBQUFDLEtBQUEsRUFDQSxTQUFBK0Qsa0JBQWtCQSxDQUFBLEVBQUc7TUFDbkJDLFVBQVUsQ0FBQyxZQUFNO1FBQ2YsSUFBSUMsYUFBYSxHQUFHbkQsTUFBTSxDQUFDb0QseUJBQXlCLENBQUMsQ0FBQztRQUN0RCxJQUFJQyxlQUFlLEdBQUd6RSxRQUFRLENBQUMwRSxjQUFjLENBQUMsa0JBQWtCLENBQUM7UUFFakVELGVBQWUsQ0FBQ0UsU0FBUyxHQUFHLG1DQUFtQyxDQUFDLENBQUM7O1FBRWpFSixhQUFhLENBQUNLLE9BQU8sQ0FBQyxVQUFDQyxLQUFLLEVBQUs7VUFDL0IsSUFBSUMsTUFBTSxHQUFHOUUsUUFBUSxDQUFDa0QsYUFBYSxDQUFDLFFBQVEsQ0FBQztVQUM3QzRCLE1BQU0sQ0FBQ3hFLEtBQUssR0FBR3VFLEtBQUs7VUFDcEJDLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHRixLQUFLLENBQUNHLFdBQVcsQ0FBQyxDQUFDO1VBQ3hDUCxlQUFlLENBQUNRLFdBQVcsQ0FBQ0gsTUFBTSxDQUFDO1FBQ3JDLENBQUMsQ0FBQztNQUNKLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ1o7O0lBRUE7RUFBQTtJQUFBekUsR0FBQTtJQUFBQyxLQUFBLEVBQ0EsU0FBQTRFLGFBQWFBLENBQUNDLE9BQU8sRUFBRTtNQUNyQixJQUFJQSxPQUFPLEVBQUU7UUFDWCxJQUFJLENBQUMvRCxNQUFNLENBQUNnRSxrQkFBa0IsQ0FBQ0QsT0FBTyxDQUFDO01BQ3pDO0lBQ0Y7RUFBQztBQUFBOzs7Ozs7O1VDaElIO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmtFO0FBQ0Q7QUFBQSxJQUUzREcsaUJBQWlCO0VBQ3JCLFNBQUFBLGtCQUFBLEVBQWM7SUFBQXhGLGVBQUEsT0FBQXdGLGlCQUFBO0lBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUd2RixRQUFRLENBQUN3RixzQkFBc0IsQ0FBQyx1QkFBdUIsQ0FBQztJQUMxRSxJQUFJLENBQUNDLFdBQVcsR0FBRyxFQUFFO0lBRXJCLElBQUksSUFBSSxDQUFDRixVQUFVLEVBQUU7TUFDbkIsS0FBSyxJQUFJNUUsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLElBQUksQ0FBQzRFLFVBQVUsQ0FBQzNFLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7UUFDL0MsSUFBSSxDQUFDK0UsYUFBYSxDQUFDL0UsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQ2dGLGFBQWEsQ0FBQ2hGLENBQUMsQ0FBQztRQUVyQixJQUFJLENBQUNpRixPQUFPLEdBQUcsSUFBSSxDQUFDTCxVQUFVLENBQUM1RSxDQUFDLENBQUMsQ0FBQzZFLHNCQUFzQixDQUFDLFNBQVMsQ0FBQzs7UUFFbkU7UUFDQSxJQUFNSyxLQUFLLEdBQUcsSUFBSSxDQUFDRCxPQUFPLENBQUNqRixDQUFDLENBQUMsQ0FBQzZFLHNCQUFzQixDQUFDLE9BQU8sQ0FBQztRQUM3RCxJQUFNTSxZQUFZLEdBQUcsSUFBSSxDQUFDUCxVQUFVLENBQUM1RSxDQUFDLENBQUMsQ0FBQ2tDLFNBQVMsQ0FBQ2tELFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSzs7UUFFdEY7UUFDQSxJQUFJRixLQUFLLEVBQUU7VUFDVDtVQUNBO1VBQ0EsSUFBTUcsVUFBVSxHQUFHSCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNJLFdBQVc7VUFDdkMsSUFBSSxDQUFDUixXQUFXLENBQUNTLElBQUksQ0FBQztZQUNwQkMsWUFBWSxFQUFFTixLQUFLLENBQUNqRixNQUFNO1lBQzFCd0YsYUFBYSxFQUFFLENBQUM7WUFDaEJDLFdBQVcsRUFBRUwsVUFBVTtZQUN2QkYsWUFBWSxFQUFFQTtVQUNoQixDQUFDLENBQUM7UUFDSjtNQUNGO0lBQ0Y7RUFDRixDQUFDLENBQUM7RUFBQSxPQUFBMUYsWUFBQSxDQUFBa0YsaUJBQUE7SUFBQWpGLEdBQUE7SUFBQUMsS0FBQSxFQUVGLFNBQUFvRixhQUFhQSxDQUFDWSxLQUFLLEVBQUU7TUFBQSxJQUFBM0UsS0FBQTtNQUNuQixJQUFNNEUsSUFBSSxHQUFHdkcsUUFBUSxDQUFDd0Ysc0JBQXNCLENBQUMsdUJBQXVCLENBQUM7TUFFckVlLElBQUksQ0FBQ0QsS0FBSyxDQUFDLENBQUM5RixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtRQUMxQyxJQUFNZ0csU0FBUyxHQUFHN0UsS0FBSSxDQUFDOEQsV0FBVyxDQUFDYSxLQUFLLENBQUM7UUFFekMsSUFBSUUsU0FBUyxDQUFDSixhQUFhLEdBQUdJLFNBQVMsQ0FBQ0wsWUFBWSxFQUFFO1VBQ3BEeEUsS0FBSSxDQUFDOEUsZUFBZSxDQUNsQkgsS0FBSyxFQUNMRSxTQUFTLENBQUNKLGFBQWEsR0FBR0ksU0FBUyxDQUFDSCxXQUN0QyxDQUFDO1VBQ0RHLFNBQVMsQ0FBQ0osYUFBYSxFQUFFO1VBQ3pCOUUsT0FBTyxDQUFDb0YsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDLE1BQU07VUFDTDs7VUFFQS9FLEtBQUksQ0FBQ2dGLGFBQWEsQ0FBQ0wsS0FBSyxDQUFDOztVQUV6QjtVQUNBRSxTQUFTLENBQUNKLGFBQWEsR0FBRyxDQUFDO1FBQzdCO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBL0YsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXFGLGFBQWFBLENBQUNXLEtBQUssRUFBRTtNQUFBLElBQUE5QyxNQUFBO01BQ25CLElBQU0rQyxJQUFJLEdBQUd2RyxRQUFRLENBQUN3RixzQkFBc0IsQ0FBQyx1QkFBdUIsQ0FBQztNQUVyRWUsSUFBSSxDQUFDRCxLQUFLLENBQUMsQ0FBQzlGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQzFDLElBQU1nRyxTQUFTLEdBQUdoRCxNQUFJLENBQUNpQyxXQUFXLENBQUNhLEtBQUssQ0FBQztRQUV6QyxJQUFLRSxTQUFTLENBQUNKLGFBQWEsSUFBSSxDQUFDLEVBQUU7VUFDakNJLFNBQVMsQ0FBQ0osYUFBYSxHQUFHSSxTQUFTLENBQUNMLFlBQVksR0FBRyxDQUFDO1FBQ3RELENBQUMsTUFBTTtVQUNMSyxTQUFTLENBQUNKLGFBQWEsRUFBRTtRQUMzQjtRQUVBLElBQU1RLFVBQVUsa0JBQUFDLE1BQUEsQ0FBbUJMLFNBQVMsQ0FBQ0gsV0FBVyxRQUFLO1FBRTdELElBQUs3QyxNQUFJLENBQUNvQyxPQUFPLENBQUNVLEtBQUssQ0FBQyxDQUFDekYsS0FBSyxDQUFDaUcsU0FBUyxJQUFJRixVQUFVLEVBQUc7VUFDdkRwRCxNQUFJLENBQUNtRCxhQUFhLENBQUNMLEtBQUssQ0FBQztVQUN6QkUsU0FBUyxDQUFDSixhQUFhLEdBQUcsQ0FBQztRQUM3QixDQUFDLE1BQU07VUFFTDtVQUNBLElBQUlJLFNBQVMsQ0FBQ0osYUFBYSxJQUFNSSxTQUFTLENBQUNMLFlBQVksR0FBRyxDQUFHLEVBQUU7WUFDN0QzQyxNQUFJLENBQUNpRCxlQUFlLENBQ2xCSCxLQUFLLEVBQ0wsQ0FBRUUsU0FBUyxDQUFDSixhQUFhLEdBQUcsQ0FBQyxJQUFNSSxTQUFTLENBQUNILFdBQy9DLENBQUM7VUFDSCxDQUFDLE1BQUk7WUFDSDtZQUNBN0MsTUFBSSxDQUFDaUQsZUFBZSxDQUNsQkgsS0FBSyxFQUNMRSxTQUFTLENBQUNKLGFBQWEsR0FBR0ksU0FBUyxDQUFDSCxXQUN0QyxDQUFDO1VBQ0g7UUFFRjtNQUVGLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQWhHLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFtRyxlQUFlQSxDQUFDSCxLQUFLLEVBQUVoRyxLQUFLLEVBQUU7TUFDNUIsSUFBSSxDQUFDc0YsT0FBTyxDQUFDVSxLQUFLLENBQUMsQ0FBQ3pGLEtBQUssQ0FBQ2lHLFNBQVMsa0JBQUFELE1BQUEsQ0FBa0J2RyxLQUFLLFFBQUs7SUFDakU7RUFBQztJQUFBRCxHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBeUcsZUFBZUEsQ0FBQ1QsS0FBSyxFQUFFaEcsS0FBSyxFQUFFO01BQzVCLElBQUksQ0FBQ3NGLE9BQU8sQ0FBQ1UsS0FBSyxDQUFDLENBQUN6RixLQUFLLENBQUNpRyxTQUFTLGlCQUFBRCxNQUFBLENBQWlCdkcsS0FBSyxRQUFLO0lBQ2hFO0VBQUM7SUFBQUQsR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQXFHLGFBQWFBLENBQUNMLEtBQUssRUFBRTtNQUNuQixJQUFJLENBQUNWLE9BQU8sQ0FBQ1UsS0FBSyxDQUFDLENBQUN6RixLQUFLLENBQUNpRyxTQUFTLG9CQUFvQjtJQUN6RDtFQUFDO0FBQUE7QUFHSDlHLFFBQVEsQ0FBQ1EsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUVsRCxJQUFJNkUscUVBQW9CLENBQUMsQ0FBQztFQUcxQixJQUFJbEUsK0RBQXlCLENBQUMsQ0FBQzs7RUFFL0I7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtBQUVGLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3NwLXVpLWtpdC8uL2Fzc2V0cy9zcmMvanMvbW9kdWxlcy9zZXQtdGh1bWJuYWlsLWhlaWdodC5qcyIsIndlYnBhY2s6Ly9nc3AtdWkta2l0Ly4vYXNzZXRzL3NyYy9qcy9tb2R1bGVzL3lvdXR1YmUtcGxheWVyLmpzIiwid2VicGFjazovL2dzcC11aS1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3NwLXVpLWtpdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ3NwLXVpLWtpdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dzcC11aS1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nc3AtdWkta2l0Ly4vYXNzZXRzL3NyYy9qcy9idW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR1NQX1NldF9UaHVtYm5haWwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMudGh1bWJuYWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuLXRodW1ibmFpbFwiKTtcclxuICBcclxuICBcclxuICAgICAgdGhpcy5ldmVudHMoKTtcclxuICBcclxuICAgICAgdGhpcy5zZXRfdGh1bWJuYWlsX2hlaWdodCgpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZXZlbnRzKCkge1xyXG4gIFxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICBcclxuICAgIHNldF90aHVtYm5haWxfaGVpZ2h0KCkge1xyXG4gICAgIGNvbnN0ICBjYXJkX3ZpZXdfYmxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuLWNhcmQtdmlldy1ibG9nXCIpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGh1bWJuYWlscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMudGh1bWJuYWlsc1tpXS5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICAgIE1hdGgucm91bmQoICAoY2FyZF92aWV3X2Jsb2cub2Zmc2V0SGVpZ2h0IC8gMTYpICogOSApICsgXCJweFwiO1xyXG4gIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHU1BfVUlfS2l0X1lvdXR1YmVfUGxheWVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucGxheWVyO1xyXG5cclxuICAgIGxldCB2aWRlb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW8tY29udGFpbmVyXCIpO1xyXG4gICAgaWYgKCF2aWRlb0NvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyB2aWRlbyBjb250YWluZXIgZm91bmQuXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMudmlkZW9JZCA9IHZpZGVvQ29udGFpbmVyLmdldEF0dHJpYnV0ZShcImRhdGEtdmlkZW8taWRcIik7XHJcblxyXG4gICAgdGhpcy5sb2FkWW91VHViZUFQSSgpO1xyXG5cclxuICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBldmVudHMoKSB7XHJcbiAgICB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSAoKSA9PiB0aGlzLm9uWW91VHViZUlmcmFtZUFQSVJlYWR5KCk7XHJcblxyXG4gICAgLy8gUGxheSB2aWRlbyBhbmQgaGlkZSBvdmVybGF5XHJcbiAgICB3aW5kb3cucGxheVZpZGVvID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnBsYXllci5wbGF5VmlkZW8oKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1vdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbGljay1ibG9ja2VyXCIpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImFsbFwiO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBQbGF5IG9yIFBhdXNlXHJcbiAgICB3aW5kb3cucGxheVBhdXNlID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wbGF5ZXIuZ2V0UGxheWVyU3RhdGUoKSA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBhdXNlVmlkZW8oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnBsYXllci5wbGF5VmlkZW8oKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTZWVrIGZvcndhcmQgMTAgc2Vjb25kc1xyXG4gICAgd2luZG93LnNlZWtGb3J3YXJkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnBsYXllci5zZWVrVG8odGhpcy5wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSArIDEwLCB0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gU2VlayBiYWNrd2FyZCAxMCBzZWNvbmRzXHJcbiAgICB3aW5kb3cuc2Vla0JhY2t3YXJkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnBsYXllci5zZWVrVG8odGhpcy5wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKSAtIDEwLCB0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gRnVsbHNjcmVlbiB0b2dnbGVcclxuICAgIHdpbmRvdy50b2dnbGVGdWxsU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgICB2YXIgdmlkZW9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZGVvLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgIGlmICghZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIHtcclxuICAgICAgICBpZiAodmlkZW9Db250YWluZXIucmVxdWVzdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICAgIHZpZGVvQ29udGFpbmVyLnJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2aWRlb0NvbnRhaW5lci5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xyXG4gICAgICAgICAgdmlkZW9Db250YWluZXIubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZpZGVvQ29udGFpbmVyLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgICB2aWRlb0NvbnRhaW5lci53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmlkZW9Db250YWluZXIubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgdmlkZW9Db250YWluZXIubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2aWRlb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZnVsbHNjcmVlblwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIHZpZGVvQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJmdWxsc2NyZWVuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gTGlzdGVuIGZvciBmdWxsc2NyZWVuIGNoYW5nZXNcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmdWxsc2NyZWVuY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHZpZGVvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1jb250YWluZXJcIik7XHJcbiAgICAgIGlmIChkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xyXG4gICAgICAgIHZpZGVvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmdWxsc2NyZWVuXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZpZGVvQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJmdWxsc2NyZWVuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfSAvLyBlbnZlbnRzIGVuZGluZ1xyXG5cclxuICBsb2FkWW91VHViZUFQSSgpIHtcclxuICAgIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgdGFnLnNyYyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaVwiO1xyXG4gICAgdmFyIGZpcnN0U2NyaXB0VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XHJcbiAgICBmaXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcclxuICB9XHJcblxyXG4gIG9uWW91VHViZUlmcmFtZUFQSVJlYWR5KCkge1xyXG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgWVQuUGxheWVyKFwicGxheWVyXCIsIHtcclxuICAgICAgdmlkZW9JZDogdGhpcy52aWRlb0lkLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIFlvdVR1YmUgdmlkZW8gSURcclxuICAgICAgcGxheWVyVmFyczoge1xyXG4gICAgICAgIGNvbnRyb2xzOiAwLFxyXG4gICAgICAgIG1vZGVzdGJyYW5kaW5nOiAxLFxyXG4gICAgICAgIHJlbDogMCxcclxuICAgICAgICBzaG93aW5mbzogMCxcclxuICAgICAgICBmczogMCxcclxuICAgICAgICBkaXNhYmxla2I6IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIGV2ZW50czoge1xyXG4gICAgICAgIG9uUmVhZHk6IChldmVudCkgPT4gdGhpcy5vblBsYXllclJlYWR5KGV2ZW50KSwgLy8gVXNlIGFycm93IGZ1bmN0aW9uIHRvIHJldGFpbiBgdGhpc2AgY29cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25QbGF5ZXJSZWFkeShldmVudCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1vdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHRoaXMubG9hZFF1YWxpdHlPcHRpb25zKCk7IC8vIExvYWQgYXZhaWxhYmxlIHZpZGVvIHF1YWxpdHkgb3B0aW9uc1xyXG4gIH1cclxuXHJcbiAgLy8gTG9hZCBhdmFpbGFibGUgdmlkZW8gcXVhbGl0aWVzXHJcbiAgbG9hZFF1YWxpdHlPcHRpb25zKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGxldCBxdWFsaXR5TGV2ZWxzID0gcGxheWVyLmdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMoKTtcclxuICAgICAgbGV0IHF1YWxpdHlTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVhbGl0eS1zZWxlY3RvclwiKTtcclxuXHJcbiAgICAgIHF1YWxpdHlTZWxlY3Rvci5pbm5lckhUTUwgPSBcIjxvcHRpb24gdmFsdWU9Jyc+UXVhbGl0eTwvb3B0aW9uPlwiOyAvLyBSZXNldFxyXG5cclxuICAgICAgcXVhbGl0eUxldmVscy5mb3JFYWNoKChsZXZlbCkgPT4ge1xyXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGxldmVsO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGxldmVsLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgcXVhbGl0eVNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMTAwMCk7IC8vIERlbGF5IGZvciBBUEkgdG8gcmV0dXJuIHF1YWxpdHkgbGV2ZWxzXHJcbiAgfVxyXG5cclxuICAvLyBDaGFuZ2UgdmlkZW8gcXVhbGl0eVxyXG4gIGNoYW5nZVF1YWxpdHkocXVhbGl0eSkge1xyXG4gICAgaWYgKHF1YWxpdHkpIHtcclxuICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWJhY2tRdWFsaXR5KHF1YWxpdHkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFNldF9UaHVtYm5haWxfSGVpZ2h0IGZyb20gJy4vbW9kdWxlcy9zZXQtdGh1bWJuYWlsLWhlaWdodCc7XHJcbmltcG9ydCBHU1BfVUlfS2l0X1lvdXR1YmVfUGxheWVyIGZyb20gJy4vbW9kdWxlcy95b3V0dWJlLXBsYXllcic7XHJcblxyXG5jbGFzcyBHU1BfVUlfS0lUX1NMSURFUiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNsaWRlckJveHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ3NwLXVpLWtpdC1zbGlkZXItYm94XCIpO1xyXG4gICAgdGhpcy5zbGlkZXJzRGF0YSA9IFtdO1xyXG5cclxuICAgIGlmICh0aGlzLnNsaWRlckJveHMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNsaWRlckJveHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmdvVG9OZXh0U2xpZGUoaSk7XHJcbiAgICAgICAgdGhpcy5nb1RvUHJldlNsaWRlKGkpO1xyXG5cclxuICAgICAgICB0aGlzLnNsaWRlcnMgPSB0aGlzLnNsaWRlckJveHNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNsaWRlcnNcIik7XHJcblxyXG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIGVhY2ggc2xpZGUgaW5zaWRlIHNsaWRlclxyXG4gICAgICAgIGNvbnN0IHNsaWRlID0gdGhpcy5zbGlkZXJzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzbGlkZVwiKTtcclxuICAgICAgICBjb25zdCBpc19hdXRvX3BsYXkgPSB0aGlzLnNsaWRlckJveHNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhdXRvLXBsYXknKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBzZXQgc2xpZGVib3ggcXVhbnRpdHlcclxuICAgICAgICBpZiAoc2xpZGUpIHtcclxuICAgICAgICAgIC8vIGluIHplcm8gaW5kZXggY29udGFpbiB0b3RhbCBzbGlkZSAsIHNlY29uZCBpbmRleCBjb250YWluIGN1cnJlbnQgaW5kZXguXHJcbiAgICAgICAgICAvLyB0aGlyZCBpbmRleCBjb250YWluIHNsaWRlIHdpZHRoXHJcbiAgICAgICAgICBjb25zdCBzbGlkZVdpZHRoID0gc2xpZGVbMF0ub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICB0aGlzLnNsaWRlcnNEYXRhLnB1c2goe1xyXG4gICAgICAgICAgICB0b3RhbF9zbGlkZXM6IHNsaWRlLmxlbmd0aCxcclxuICAgICAgICAgICAgY3VycmVudF9zbGlkZTogMSxcclxuICAgICAgICAgICAgc2xpZGVfd2lkdGg6IHNsaWRlV2lkdGgsXHJcbiAgICAgICAgICAgIGlzX2F1dG9fcGxheTogaXNfYXV0b19wbGF5LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSAvLyBjb25zdHJ1Y3RvclxyXG5cclxuICBnb1RvTmV4dFNsaWRlKGluZGV4KSB7XHJcbiAgICBjb25zdCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImdzcC11aS1raXQtbmV4dC1zbGlkZVwiKTtcclxuXHJcbiAgICBuZXh0W2luZGV4XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCBzbGlkZURhdGEgPSB0aGlzLnNsaWRlcnNEYXRhW2luZGV4XTtcclxuXHJcbiAgICAgIGlmIChzbGlkZURhdGEuY3VycmVudF9zbGlkZSA8IHNsaWRlRGF0YS50b3RhbF9zbGlkZXMpIHtcclxuICAgICAgICB0aGlzLnNldFNsaWRlRm9yd2FyZChcclxuICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgc2xpZGVEYXRhLmN1cnJlbnRfc2xpZGUgKiBzbGlkZURhdGEuc2xpZGVfd2lkdGhcclxuICAgICAgICApO1xyXG4gICAgICAgIHNsaWRlRGF0YS5jdXJyZW50X3NsaWRlKys7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmb3J3YXJkaW5nXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHNldCBjdXJyZW50IHNsaWRlIG51bWJlciBmcm9tIDFcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTbGlkZUZpcnN0KGluZGV4KTtcclxuXHJcbiAgICAgICAgLy8gYWdhaW4gc2V0IGN1cnJlbnQgaW4gZmlyc3QgaW5kZXhcclxuICAgICAgICBzbGlkZURhdGEuY3VycmVudF9zbGlkZSA9IDE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ29Ub1ByZXZTbGlkZShpbmRleCkge1xyXG4gICAgY29uc3QgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJnc3AtdWkta2l0LXByZXYtc2xpZGVcIik7XHJcblxyXG4gICAgbmV4dFtpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3Qgc2xpZGVEYXRhID0gdGhpcy5zbGlkZXJzRGF0YVtpbmRleF07XHJcblxyXG4gICAgICBpZiAoIHNsaWRlRGF0YS5jdXJyZW50X3NsaWRlID09IDEpIHtcclxuICAgICAgICBzbGlkZURhdGEuY3VycmVudF9zbGlkZSA9IHNsaWRlRGF0YS50b3RhbF9zbGlkZXMgLSAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNsaWRlRGF0YS5jdXJyZW50X3NsaWRlLS07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZVggPSAgYHRyYW5zbGF0ZVgoLSR7c2xpZGVEYXRhLnNsaWRlX3dpZHRofXB4KWA7XHJcblxyXG4gICAgICBpZiAoIHRoaXMuc2xpZGVyc1tpbmRleF0uc3R5bGUudHJhbnNmb3JtID09IHRyYW5zbGF0ZVggKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTbGlkZUZpcnN0KGluZGV4KTtcclxuICAgICAgICBzbGlkZURhdGEuY3VycmVudF9zbGlkZSA9IDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIC8vIGlmIHNsaWRlciByZWFjaCBvbiB0aGUgbGFzdCBzbGlkZXJcclxuICAgICAgICBpZiAoc2xpZGVEYXRhLmN1cnJlbnRfc2xpZGUgPT0gKCBzbGlkZURhdGEudG90YWxfc2xpZGVzIC0gMSApKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFNsaWRlRm9yd2FyZChcclxuICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICggc2xpZGVEYXRhLmN1cnJlbnRfc2xpZGUgLSAxICApICogc2xpZGVEYXRhLnNsaWRlX3dpZHRoXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgLy8gXHJcbiAgICAgICAgICB0aGlzLnNldFNsaWRlRm9yd2FyZChcclxuICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgIHNsaWRlRGF0YS5jdXJyZW50X3NsaWRlICogc2xpZGVEYXRhLnNsaWRlX3dpZHRoXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0U2xpZGVGb3J3YXJkKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgdGhpcy5zbGlkZXJzW2luZGV4XS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHt2YWx1ZX1weClgO1xyXG4gIH1cclxuICBzZXRTbGlkZVJldmVyc2UoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICB0aGlzLnNsaWRlcnNbaW5kZXhdLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dmFsdWV9cHgpYDtcclxuICB9XHJcbiAgc2V0U2xpZGVGaXJzdChpbmRleCkge1xyXG4gICAgdGhpcy5zbGlkZXJzW2luZGV4XS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgwcHgpYDtcclxuICB9XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuXHJcbiAgbmV3IFNldF9UaHVtYm5haWxfSGVpZ2h0KCk7XHJcblxyXG4gIFxyXG4gIG5ldyBHU1BfVUlfS2l0X1lvdXR1YmVfUGxheWVyKCk7XHJcbiAgXHJcbiAgLy8gY29uc3Qgc2xpZGVyID0gbmV3IFNpZW1hKHtcclxuICAvLyAgIHNlbGVjdG9yOiBcIi5nc3AtdWkta2l0LXNsaWRlci0xXCIsXHJcbiAgLy8gICBlYXNpbmc6IFwiZWFzZVwiLFxyXG4gIC8vICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gIC8vICAgbXVsdGlwbGVEcmFnOiB0cnVlLFxyXG4gIC8vICAgdGhyZXNob2xkOiAyMCxcclxuICAvLyAgIGxvb3A6IGZhbHNlLFxyXG4gIC8vICAgcnRsOiBmYWxzZSxcclxuICAvLyAgIG9uSW5pdDogKCkgPT4ge30sXHJcbiAgLy8gICBvbkNoYW5nZTogKCkgPT4ge30sXHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vICQoJy5nc3AtdWkta2l0LXNsaWRlci0xJykuc2xpY2soKTtcclxuXHJcbn0pO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJHU1BfU2V0X1RodW1ibmFpbCIsIl9jbGFzc0NhbGxDaGVjayIsInRodW1ibmFpbHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJldmVudHMiLCJzZXRfdGh1bWJuYWlsX2hlaWdodCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhcmRfdmlld19ibG9nIiwicXVlcnlTZWxlY3RvciIsImkiLCJsZW5ndGgiLCJzdHlsZSIsImhlaWdodCIsIk1hdGgiLCJyb3VuZCIsIm9mZnNldEhlaWdodCIsImRlZmF1bHQiLCJHU1BfVUlfS2l0X1lvdXR1YmVfUGxheWVyIiwicGxheWVyIiwidmlkZW9Db250YWluZXIiLCJjb25zb2xlIiwiZXJyb3IiLCJ2aWRlb0lkIiwiZ2V0QXR0cmlidXRlIiwibG9hZFlvdVR1YmVBUEkiLCJfdGhpcyIsIm9uWW91VHViZUlmcmFtZUFQSVJlYWR5IiwicGxheVZpZGVvIiwiZGlzcGxheSIsInBvaW50ZXJFdmVudHMiLCJwbGF5UGF1c2UiLCJnZXRQbGF5ZXJTdGF0ZSIsInBhdXNlVmlkZW8iLCJzZWVrRm9yd2FyZCIsInNlZWtUbyIsImdldEN1cnJlbnRUaW1lIiwic2Vla0JhY2t3YXJkIiwidG9nZ2xlRnVsbFNjcmVlbiIsImZ1bGxzY3JlZW5FbGVtZW50IiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJtb3pSZXF1ZXN0RnVsbFNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuIiwibXNSZXF1ZXN0RnVsbHNjcmVlbiIsImNsYXNzTGlzdCIsImFkZCIsImV4aXRGdWxsc2NyZWVuIiwicmVtb3ZlIiwidGFnIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImZpcnN0U2NyaXB0VGFnIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiX3RoaXMyIiwiWVQiLCJQbGF5ZXIiLCJwbGF5ZXJWYXJzIiwiY29udHJvbHMiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInNob3dpbmZvIiwiZnMiLCJkaXNhYmxla2IiLCJvblJlYWR5IiwiZXZlbnQiLCJvblBsYXllclJlYWR5IiwibG9hZFF1YWxpdHlPcHRpb25zIiwic2V0VGltZW91dCIsInF1YWxpdHlMZXZlbHMiLCJnZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzIiwicXVhbGl0eVNlbGVjdG9yIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwibGV2ZWwiLCJvcHRpb24iLCJ0ZXh0Q29udGVudCIsInRvVXBwZXJDYXNlIiwiYXBwZW5kQ2hpbGQiLCJjaGFuZ2VRdWFsaXR5IiwicXVhbGl0eSIsInNldFBsYXliYWNrUXVhbGl0eSIsIlNldF9UaHVtYm5haWxfSGVpZ2h0IiwiR1NQX1VJX0tJVF9TTElERVIiLCJzbGlkZXJCb3hzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNsaWRlcnNEYXRhIiwiZ29Ub05leHRTbGlkZSIsImdvVG9QcmV2U2xpZGUiLCJzbGlkZXJzIiwic2xpZGUiLCJpc19hdXRvX3BsYXkiLCJjb250YWlucyIsInNsaWRlV2lkdGgiLCJvZmZzZXRXaWR0aCIsInB1c2giLCJ0b3RhbF9zbGlkZXMiLCJjdXJyZW50X3NsaWRlIiwic2xpZGVfd2lkdGgiLCJpbmRleCIsIm5leHQiLCJzbGlkZURhdGEiLCJzZXRTbGlkZUZvcndhcmQiLCJsb2ciLCJzZXRTbGlkZUZpcnN0IiwidHJhbnNsYXRlWCIsImNvbmNhdCIsInRyYW5zZm9ybSIsInNldFNsaWRlUmV2ZXJzZSJdLCJzb3VyY2VSb290IjoiIn0=