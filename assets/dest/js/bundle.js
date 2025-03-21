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



// When DOM is ready

document.addEventListener("DOMContentLoaded", function () {
  new _modules_set_thumbnail_height__WEBPACK_IMPORTED_MODULE_0__["default"]();
  new _modules_youtube_player__WEBPACK_IMPORTED_MODULE_1__["default"]();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNFO0FBQ0w7O0FBR2pFOztBQUVBdEYsUUFBUSxDQUFDWSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBRWxELElBQUlmLHFFQUF3QixDQUFDLENBQUM7RUFDOUIsSUFBSTBCLCtEQUF5QixDQUFDLENBQUM7QUFFakMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nc3AtdWkta2l0Ly4vYXNzZXRzL3NyYy9qcy9tb2R1bGVzL3NldC10aHVtYm5haWwtaGVpZ2h0LmpzIiwid2VicGFjazovL2dzcC11aS1raXQvLi9hc3NldHMvc3JjL2pzL21vZHVsZXMveW91dHViZS1wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vZ3NwLXVpLWtpdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nc3AtdWkta2l0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nc3AtdWkta2l0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ3NwLXVpLWtpdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dzcC11aS1raXQvLi9hc3NldHMvc3JjL2pzL2J1bmRsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBHU1BfU2V0X1RodW1ibmFpbF9IZWlnaHQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50aHVtYm5haWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi4tdGh1bWJuYWlsXCIpO1xyXG4gICAgdGhpcy53aW5kb3dfd2lkdGggPSBzY3JlZW4ud2lkdGg7XHJcblxyXG4gICAgaWYgKHRoaXMudGh1bWJuYWlscykge1xyXG4gICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgICB0aGlzLnNldF90aHVtYm5haWxfaGVpZ2h0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBldmVudHMoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMud2luZG93X3dpZHRoID0gc2NyZWVuLndpZHRoO1xyXG4gICAgICB0aGlzLnNldF90aHVtYm5haWxfaGVpZ2h0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldF90aHVtYm5haWxfaGVpZ2h0KCkge1xyXG4gICAgY29uc3QgY2FyZF92aWV3X2Jsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLi1jYXJkLXZpZXctYmxvZ1wiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50aHVtYm5haWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLndpbmRvd193aWR0aCA+IDYwMCkge1xyXG4gICAgICAgIHRoaXMudGh1bWJuYWlsc1tpXS5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICAgIE1hdGgucm91bmQoKGNhcmRfdmlld19ibG9nLm9mZnNldEhlaWdodCAvIDE2KSAqIDcpICsgXCJweFwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy53aW5kb3dfd2lkdGggPiA3NjgpIHtcclxuICAgICAgICB0aGlzLnRodW1ibmFpbHNbaV0uc3R5bGUuaGVpZ2h0ID1cclxuICAgICAgICBNYXRoLnJvdW5kKChjYXJkX3ZpZXdfYmxvZy5vZmZzZXRIZWlnaHQgLyAxNikgKiA4KSArIFwicHhcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMud2luZG93X3dpZHRoID4gOTkyKSB7XHJcbiAgICAgICAgdGhpcy50aHVtYm5haWxzW2ldLnN0eWxlLmhlaWdodCA9XHJcbiAgICAgICAgTWF0aC5yb3VuZCgoY2FyZF92aWV3X2Jsb2cub2Zmc2V0SGVpZ2h0IC8gMTYpICogNykgKyBcInB4XCI7XHJcbiAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR1NQX1VJX0tpdF9Zb3V0dWJlX1BsYXllciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnBsYXllcjtcclxuXHJcbiAgICBsZXQgdmlkZW9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZGVvLWNvbnRhaW5lclwiKTtcclxuICAgIGlmICh2aWRlb0NvbnRhaW5lcikge1xyXG4gICAgICB0aGlzLnZpZGVvSWQgPSB2aWRlb0NvbnRhaW5lci5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZGVvLWlkXCIpO1xyXG5cclxuICAgICAgdGhpcy5sb2FkWW91VHViZUFQSSgpO1xyXG4gIFxyXG4gICAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTm8gdmlkZW8gY29udGFpbmVyIGZvdW5kLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICB9XHJcblxyXG4gIGV2ZW50cygpIHtcclxuICAgIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9ICgpID0+IHRoaXMub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkoKTtcclxuXHJcbiAgICAvLyBQbGF5IHZpZGVvIGFuZCBoaWRlIG92ZXJsYXlcclxuICAgIHdpbmRvdy5wbGF5VmlkZW8gPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMucGxheWVyLnBsYXlWaWRlbygpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZGVvLW92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsaWNrLWJsb2NrZXJcIikuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYWxsXCI7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFBsYXkgb3IgUGF1c2VcclxuICAgIHdpbmRvdy5wbGF5UGF1c2UgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnBsYXllci5nZXRQbGF5ZXJTdGF0ZSgpID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucGF1c2VWaWRlbygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBsYXlWaWRlbygpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNlZWsgZm9yd2FyZCAxMCBzZWNvbmRzXHJcbiAgICB3aW5kb3cuc2Vla0ZvcndhcmQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMucGxheWVyLnNlZWtUbyh0aGlzLnBsYXllci5nZXRDdXJyZW50VGltZSgpICsgMTAsIHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTZWVrIGJhY2t3YXJkIDEwIHNlY29uZHNcclxuICAgIHdpbmRvdy5zZWVrQmFja3dhcmQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMucGxheWVyLnNlZWtUbyh0aGlzLnBsYXllci5nZXRDdXJyZW50VGltZSgpIC0gMTAsIHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBGdWxsc2NyZWVuIHRvZ2dsZVxyXG4gICAgd2luZG93LnRvZ2dsZUZ1bGxTY3JlZW4gPSAoKSA9PiB7XHJcbiAgICAgIHZhciB2aWRlb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW8tY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgaWYgKCFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xyXG4gICAgICAgIGlmICh2aWRlb0NvbnRhaW5lci5yZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgdmlkZW9Db250YWluZXIucmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZpZGVvQ29udGFpbmVyLm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XHJcbiAgICAgICAgICB2aWRlb0NvbnRhaW5lci5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmlkZW9Db250YWluZXIud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICAgIHZpZGVvQ29udGFpbmVyLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2aWRlb0NvbnRhaW5lci5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgICB2aWRlb0NvbnRhaW5lci5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpZGVvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmdWxsc2NyZWVuXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgdmlkZW9Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImZ1bGxzY3JlZW5cIik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyBMaXN0ZW4gZm9yIGZ1bGxzY3JlZW4gY2hhbmdlc1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZ1bGxzY3JlZW5jaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgdmlkZW9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZGVvLWNvbnRhaW5lclwiKTtcclxuICAgICAgaWYgKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XHJcbiAgICAgICAgdmlkZW9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZ1bGxzY3JlZW5cIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmlkZW9Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImZ1bGxzY3JlZW5cIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9IC8vIGVudmVudHMgZW5kaW5nXHJcblxyXG4gIGxvYWRZb3VUdWJlQVBJKCkge1xyXG4gICAgdmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICB0YWcuc3JjID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpXCI7XHJcbiAgICB2YXIgZmlyc3RTY3JpcHRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtcclxuICAgIGZpcnN0U2NyaXB0VGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhZywgZmlyc3RTY3JpcHRUYWcpO1xyXG4gIH1cclxuXHJcbiAgb25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkoKSB7XHJcbiAgICB0aGlzLnBsYXllciA9IG5ldyBZVC5QbGF5ZXIoXCJwbGF5ZXJcIiwge1xyXG4gICAgICB2aWRlb0lkOiB0aGlzLnZpZGVvSWQsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgWW91VHViZSB2aWRlbyBJRFxyXG4gICAgICBwbGF5ZXJWYXJzOiB7XHJcbiAgICAgICAgY29udHJvbHM6IDAsXHJcbiAgICAgICAgbW9kZXN0YnJhbmRpbmc6IDEsXHJcbiAgICAgICAgcmVsOiAwLFxyXG4gICAgICAgIHNob3dpbmZvOiAwLFxyXG4gICAgICAgIGZzOiAwLFxyXG4gICAgICAgIGRpc2FibGVrYjogMSxcclxuICAgICAgfSxcclxuICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgb25SZWFkeTogKGV2ZW50KSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoZXZlbnQpLCAvLyBVc2UgYXJyb3cgZnVuY3Rpb24gdG8gcmV0YWluIGB0aGlzYCBjb1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblBsYXllclJlYWR5KGV2ZW50KSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZGVvLW92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgdGhpcy5sb2FkUXVhbGl0eU9wdGlvbnMoKTsgLy8gTG9hZCBhdmFpbGFibGUgdmlkZW8gcXVhbGl0eSBvcHRpb25zXHJcbiAgfVxyXG5cclxuICAvLyBMb2FkIGF2YWlsYWJsZSB2aWRlbyBxdWFsaXRpZXNcclxuICBsb2FkUXVhbGl0eU9wdGlvbnMoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgbGV0IHF1YWxpdHlMZXZlbHMgPSBwbGF5ZXIuZ2V0QXZhaWxhYmxlUXVhbGl0eUxldmVscygpO1xyXG4gICAgICBsZXQgcXVhbGl0eVNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWFsaXR5LXNlbGVjdG9yXCIpO1xyXG5cclxuICAgICAgcXVhbGl0eVNlbGVjdG9yLmlubmVySFRNTCA9IFwiPG9wdGlvbiB2YWx1ZT0nJz5RdWFsaXR5PC9vcHRpb24+XCI7IC8vIFJlc2V0XHJcblxyXG4gICAgICBxdWFsaXR5TGV2ZWxzLmZvckVhY2goKGxldmVsKSA9PiB7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gbGV2ZWw7XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gbGV2ZWwudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBxdWFsaXR5U2VsZWN0b3IuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgfSk7XHJcbiAgICB9LCAxMDAwKTsgLy8gRGVsYXkgZm9yIEFQSSB0byByZXR1cm4gcXVhbGl0eSBsZXZlbHNcclxuICB9XHJcblxyXG4gIC8vIENoYW5nZSB2aWRlbyBxdWFsaXR5XHJcbiAgY2hhbmdlUXVhbGl0eShxdWFsaXR5KSB7XHJcbiAgICBpZiAocXVhbGl0eSkge1xyXG4gICAgICB0aGlzLnBsYXllci5zZXRQbGF5YmFja1F1YWxpdHkocXVhbGl0eSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgR1NQX1NldF9UaHVtYm5haWxfSGVpZ2h0IGZyb20gJy4vbW9kdWxlcy9zZXQtdGh1bWJuYWlsLWhlaWdodCc7XHJcbmltcG9ydCBHU1BfVUlfS2l0X1lvdXR1YmVfUGxheWVyIGZyb20gJy4vbW9kdWxlcy95b3V0dWJlLXBsYXllcic7XHJcblxyXG5cclxuLy8gV2hlbiBET00gaXMgcmVhZHlcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuXHJcbiAgbmV3IEdTUF9TZXRfVGh1bWJuYWlsX0hlaWdodCgpO1xyXG4gIG5ldyBHU1BfVUlfS2l0X1lvdXR1YmVfUGxheWVyKCk7XHJcblxyXG59KTtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiR1NQX1NldF9UaHVtYm5haWxfSGVpZ2h0IiwiX2NsYXNzQ2FsbENoZWNrIiwidGh1bWJuYWlscyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIndpbmRvd193aWR0aCIsInNjcmVlbiIsIndpZHRoIiwiZXZlbnRzIiwic2V0X3RodW1ibmFpbF9oZWlnaHQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhcmRfdmlld19ibG9nIiwicXVlcnlTZWxlY3RvciIsImkiLCJsZW5ndGgiLCJzdHlsZSIsImhlaWdodCIsIk1hdGgiLCJyb3VuZCIsIm9mZnNldEhlaWdodCIsImRlZmF1bHQiLCJHU1BfVUlfS2l0X1lvdXR1YmVfUGxheWVyIiwicGxheWVyIiwidmlkZW9Db250YWluZXIiLCJ2aWRlb0lkIiwiZ2V0QXR0cmlidXRlIiwibG9hZFlvdVR1YmVBUEkiLCJjb25zb2xlIiwibG9nIiwib25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkiLCJwbGF5VmlkZW8iLCJkaXNwbGF5IiwicG9pbnRlckV2ZW50cyIsInBsYXlQYXVzZSIsImdldFBsYXllclN0YXRlIiwicGF1c2VWaWRlbyIsInNlZWtGb3J3YXJkIiwic2Vla1RvIiwiZ2V0Q3VycmVudFRpbWUiLCJzZWVrQmFja3dhcmQiLCJ0b2dnbGVGdWxsU2NyZWVuIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsIm1velJlcXVlc3RGdWxsU2NyZWVuIiwid2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4iLCJtc1JlcXVlc3RGdWxsc2NyZWVuIiwiY2xhc3NMaXN0IiwiYWRkIiwiZXhpdEZ1bGxzY3JlZW4iLCJyZW1vdmUiLCJ0YWciLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiZmlyc3RTY3JpcHRUYWciLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJfdGhpczIiLCJZVCIsIlBsYXllciIsInBsYXllclZhcnMiLCJjb250cm9scyIsIm1vZGVzdGJyYW5kaW5nIiwicmVsIiwic2hvd2luZm8iLCJmcyIsImRpc2FibGVrYiIsIm9uUmVhZHkiLCJldmVudCIsIm9uUGxheWVyUmVhZHkiLCJsb2FkUXVhbGl0eU9wdGlvbnMiLCJzZXRUaW1lb3V0IiwicXVhbGl0eUxldmVscyIsImdldEF2YWlsYWJsZVF1YWxpdHlMZXZlbHMiLCJxdWFsaXR5U2VsZWN0b3IiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImZvckVhY2giLCJsZXZlbCIsIm9wdGlvbiIsInRleHRDb250ZW50IiwidG9VcHBlckNhc2UiLCJhcHBlbmRDaGlsZCIsImNoYW5nZVF1YWxpdHkiLCJxdWFsaXR5Iiwic2V0UGxheWJhY2tRdWFsaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==