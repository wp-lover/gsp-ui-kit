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


document.addEventListener("DOMContentLoaded", function () {
  new _modules_set_thumbnail_height__WEBPACK_IMPORTED_MODULE_0__["default"]();
  new _modules_youtube_player__WEBPACK_IMPORTED_MODULE_1__["default"]();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNFO0FBQ0w7QUFHakV0RixRQUFRLENBQUNZLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFFbEQsSUFBSWYscUVBQXdCLENBQUMsQ0FBQztFQUM5QixJQUFJMEIsK0RBQXlCLENBQUMsQ0FBQztBQUVqQyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dzcC11aS1raXQvLi9hc3NldHMvc3JjL2pzL21vZHVsZXMvc2V0LXRodW1ibmFpbC1oZWlnaHQuanMiLCJ3ZWJwYWNrOi8vZ3NwLXVpLWtpdC8uL2Fzc2V0cy9zcmMvanMvbW9kdWxlcy95b3V0dWJlLXBsYXllci5qcyIsIndlYnBhY2s6Ly9nc3AtdWkta2l0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dzcC11aS1raXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dzcC11aS1raXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nc3AtdWkta2l0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ3NwLXVpLWtpdC8uL2Fzc2V0cy9zcmMvanMvYnVuZGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdTUF9TZXRfVGh1bWJuYWlsX0hlaWdodCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRodW1ibmFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLi10aHVtYm5haWxcIik7XHJcbiAgICB0aGlzLndpbmRvd193aWR0aCA9IHNjcmVlbi53aWR0aDtcclxuXHJcbiAgICBpZiAodGhpcy50aHVtYm5haWxzKSB7XHJcbiAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICAgIHRoaXMuc2V0X3RodW1ibmFpbF9oZWlnaHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV2ZW50cygpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuICAgICAgdGhpcy53aW5kb3dfd2lkdGggPSBzY3JlZW4ud2lkdGg7XHJcbiAgICAgIHRoaXMuc2V0X3RodW1ibmFpbF9oZWlnaHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0X3RodW1ibmFpbF9oZWlnaHQoKSB7XHJcbiAgICBjb25zdCBjYXJkX3ZpZXdfYmxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuLWNhcmQtdmlldy1ibG9nXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRodW1ibmFpbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMud2luZG93X3dpZHRoID4gNjAwKSB7XHJcbiAgICAgICAgdGhpcy50aHVtYm5haWxzW2ldLnN0eWxlLmhlaWdodCA9XHJcbiAgICAgICAgTWF0aC5yb3VuZCgoY2FyZF92aWV3X2Jsb2cub2Zmc2V0SGVpZ2h0IC8gMTYpICogNykgKyBcInB4XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLndpbmRvd193aWR0aCA+IDc2OCkge1xyXG4gICAgICAgIHRoaXMudGh1bWJuYWlsc1tpXS5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICAgIE1hdGgucm91bmQoKGNhcmRfdmlld19ibG9nLm9mZnNldEhlaWdodCAvIDE2KSAqIDgpICsgXCJweFwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy53aW5kb3dfd2lkdGggPiA5OTIpIHtcclxuICAgICAgICB0aGlzLnRodW1ibmFpbHNbaV0uc3R5bGUuaGVpZ2h0ID1cclxuICAgICAgICBNYXRoLnJvdW5kKChjYXJkX3ZpZXdfYmxvZy5vZmZzZXRIZWlnaHQgLyAxNikgKiA3KSArIFwicHhcIjtcclxuICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHU1BfVUlfS2l0X1lvdXR1YmVfUGxheWVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucGxheWVyO1xyXG5cclxuICAgIGxldCB2aWRlb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW8tY29udGFpbmVyXCIpO1xyXG4gICAgaWYgKHZpZGVvQ29udGFpbmVyKSB7XHJcbiAgICAgIHRoaXMudmlkZW9JZCA9IHZpZGVvQ29udGFpbmVyLmdldEF0dHJpYnV0ZShcImRhdGEtdmlkZW8taWRcIik7XHJcblxyXG4gICAgICB0aGlzLmxvYWRZb3VUdWJlQVBJKCk7XHJcbiAgXHJcbiAgICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgY29uc29sZS5sb2coXCJObyB2aWRlbyBjb250YWluZXIgZm91bmQuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZXZlbnRzKCkge1xyXG4gICAgd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ID0gKCkgPT4gdGhpcy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSgpO1xyXG5cclxuICAgIC8vIFBsYXkgdmlkZW8gYW5kIGhpZGUgb3ZlcmxheVxyXG4gICAgd2luZG93LnBsYXlWaWRlbyA9ICgpID0+IHtcclxuICAgICAgdGhpcy5wbGF5ZXIucGxheVZpZGVvKCk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW8tb3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xpY2stYmxvY2tlclwiKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhbGxcIjtcclxuICAgIH07XHJcblxyXG4gICAgLy8gUGxheSBvciBQYXVzZVxyXG4gICAgd2luZG93LnBsYXlQYXVzZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMucGxheWVyLmdldFBsYXllclN0YXRlKCkgPT09IDEpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5wYXVzZVZpZGVvKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucGxheVZpZGVvKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gU2VlayBmb3J3YXJkIDEwIHNlY29uZHNcclxuICAgIHdpbmRvdy5zZWVrRm9yd2FyZCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5wbGF5ZXIuc2Vla1RvKHRoaXMucGxheWVyLmdldEN1cnJlbnRUaW1lKCkgKyAxMCwgdHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNlZWsgYmFja3dhcmQgMTAgc2Vjb25kc1xyXG4gICAgd2luZG93LnNlZWtCYWNrd2FyZCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5wbGF5ZXIuc2Vla1RvKHRoaXMucGxheWVyLmdldEN1cnJlbnRUaW1lKCkgLSAxMCwgdHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEZ1bGxzY3JlZW4gdG9nZ2xlXHJcbiAgICB3aW5kb3cudG9nZ2xlRnVsbFNjcmVlbiA9ICgpID0+IHtcclxuICAgICAgdmFyIHZpZGVvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1jb250YWluZXJcIik7XHJcblxyXG4gICAgICBpZiAoIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKHZpZGVvQ29udGFpbmVyLnJlcXVlc3RGdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgICB2aWRlb0NvbnRhaW5lci5yZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmlkZW9Db250YWluZXIubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcclxuICAgICAgICAgIHZpZGVvQ29udGFpbmVyLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2aWRlb0NvbnRhaW5lci53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgdmlkZW9Db250YWluZXIud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZpZGVvQ29udGFpbmVyLm1zUmVxdWVzdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICAgIHZpZGVvQ29udGFpbmVyLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmlkZW9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZ1bGxzY3JlZW5cIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB2aWRlb0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZnVsbHNjcmVlblwiKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIExpc3RlbiBmb3IgZnVsbHNjcmVlbiBjaGFuZ2VzXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZnVsbHNjcmVlbmNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciB2aWRlb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW8tY29udGFpbmVyXCIpO1xyXG4gICAgICBpZiAoZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIHtcclxuICAgICAgICB2aWRlb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZnVsbHNjcmVlblwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2aWRlb0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZnVsbHNjcmVlblwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH0gLy8gZW52ZW50cyBlbmRpbmdcclxuXHJcbiAgbG9hZFlvdVR1YmVBUEkoKSB7XHJcbiAgICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgIHRhZy5zcmMgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGlcIjtcclxuICAgIHZhciBmaXJzdFNjcmlwdFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO1xyXG4gICAgZmlyc3RTY3JpcHRUYWcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFnLCBmaXJzdFNjcmlwdFRhZyk7XHJcbiAgfVxyXG5cclxuICBvbllvdVR1YmVJZnJhbWVBUElSZWFkeSgpIHtcclxuICAgIHRoaXMucGxheWVyID0gbmV3IFlULlBsYXllcihcInBsYXllclwiLCB7XHJcbiAgICAgIHZpZGVvSWQ6IHRoaXMudmlkZW9JZCwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBZb3VUdWJlIHZpZGVvIElEXHJcbiAgICAgIHBsYXllclZhcnM6IHtcclxuICAgICAgICBjb250cm9sczogMCxcclxuICAgICAgICBtb2Rlc3RicmFuZGluZzogMSxcclxuICAgICAgICByZWw6IDAsXHJcbiAgICAgICAgc2hvd2luZm86IDAsXHJcbiAgICAgICAgZnM6IDAsXHJcbiAgICAgICAgZGlzYWJsZWtiOiAxLFxyXG4gICAgICB9LFxyXG4gICAgICBldmVudHM6IHtcclxuICAgICAgICBvblJlYWR5OiAoZXZlbnQpID0+IHRoaXMub25QbGF5ZXJSZWFkeShldmVudCksIC8vIFVzZSBhcnJvdyBmdW5jdGlvbiB0byByZXRhaW4gYHRoaXNgIGNvXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uUGxheWVyUmVhZHkoZXZlbnQpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW8tb3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICB0aGlzLmxvYWRRdWFsaXR5T3B0aW9ucygpOyAvLyBMb2FkIGF2YWlsYWJsZSB2aWRlbyBxdWFsaXR5IG9wdGlvbnNcclxuICB9XHJcblxyXG4gIC8vIExvYWQgYXZhaWxhYmxlIHZpZGVvIHF1YWxpdGllc1xyXG4gIGxvYWRRdWFsaXR5T3B0aW9ucygpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBsZXQgcXVhbGl0eUxldmVscyA9IHBsYXllci5nZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzKCk7XHJcbiAgICAgIGxldCBxdWFsaXR5U2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1YWxpdHktc2VsZWN0b3JcIik7XHJcblxyXG4gICAgICBxdWFsaXR5U2VsZWN0b3IuaW5uZXJIVE1MID0gXCI8b3B0aW9uIHZhbHVlPScnPlF1YWxpdHk8L29wdGlvbj5cIjsgLy8gUmVzZXRcclxuXHJcbiAgICAgIHF1YWxpdHlMZXZlbHMuZm9yRWFjaCgobGV2ZWwpID0+IHtcclxuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBsZXZlbDtcclxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBsZXZlbC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIHF1YWxpdHlTZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICB9KTtcclxuICAgIH0sIDEwMDApOyAvLyBEZWxheSBmb3IgQVBJIHRvIHJldHVybiBxdWFsaXR5IGxldmVsc1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hhbmdlIHZpZGVvIHF1YWxpdHlcclxuICBjaGFuZ2VRdWFsaXR5KHF1YWxpdHkpIHtcclxuICAgIGlmIChxdWFsaXR5KSB7XHJcbiAgICAgIHRoaXMucGxheWVyLnNldFBsYXliYWNrUXVhbGl0eShxdWFsaXR5KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBHU1BfU2V0X1RodW1ibmFpbF9IZWlnaHQgZnJvbSAnLi9tb2R1bGVzL3NldC10aHVtYm5haWwtaGVpZ2h0JztcclxuaW1wb3J0IEdTUF9VSV9LaXRfWW91dHViZV9QbGF5ZXIgZnJvbSAnLi9tb2R1bGVzL3lvdXR1YmUtcGxheWVyJztcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblxyXG4gIG5ldyBHU1BfU2V0X1RodW1ibmFpbF9IZWlnaHQoKTtcclxuICBuZXcgR1NQX1VJX0tpdF9Zb3V0dWJlX1BsYXllcigpO1xyXG5cclxufSk7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkdTUF9TZXRfVGh1bWJuYWlsX0hlaWdodCIsIl9jbGFzc0NhbGxDaGVjayIsInRodW1ibmFpbHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3aW5kb3dfd2lkdGgiLCJzY3JlZW4iLCJ3aWR0aCIsImV2ZW50cyIsInNldF90aHVtYm5haWxfaGVpZ2h0IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfdGhpcyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYXJkX3ZpZXdfYmxvZyIsInF1ZXJ5U2VsZWN0b3IiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJoZWlnaHQiLCJNYXRoIiwicm91bmQiLCJvZmZzZXRIZWlnaHQiLCJkZWZhdWx0IiwiR1NQX1VJX0tpdF9Zb3V0dWJlX1BsYXllciIsInBsYXllciIsInZpZGVvQ29udGFpbmVyIiwidmlkZW9JZCIsImdldEF0dHJpYnV0ZSIsImxvYWRZb3VUdWJlQVBJIiwiY29uc29sZSIsImxvZyIsIm9uWW91VHViZUlmcmFtZUFQSVJlYWR5IiwicGxheVZpZGVvIiwiZGlzcGxheSIsInBvaW50ZXJFdmVudHMiLCJwbGF5UGF1c2UiLCJnZXRQbGF5ZXJTdGF0ZSIsInBhdXNlVmlkZW8iLCJzZWVrRm9yd2FyZCIsInNlZWtUbyIsImdldEN1cnJlbnRUaW1lIiwic2Vla0JhY2t3YXJkIiwidG9nZ2xlRnVsbFNjcmVlbiIsImZ1bGxzY3JlZW5FbGVtZW50IiwicmVxdWVzdEZ1bGxzY3JlZW4iLCJtb3pSZXF1ZXN0RnVsbFNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuIiwibXNSZXF1ZXN0RnVsbHNjcmVlbiIsImNsYXNzTGlzdCIsImFkZCIsImV4aXRGdWxsc2NyZWVuIiwicmVtb3ZlIiwidGFnIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImZpcnN0U2NyaXB0VGFnIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiX3RoaXMyIiwiWVQiLCJQbGF5ZXIiLCJwbGF5ZXJWYXJzIiwiY29udHJvbHMiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInNob3dpbmZvIiwiZnMiLCJkaXNhYmxla2IiLCJvblJlYWR5IiwiZXZlbnQiLCJvblBsYXllclJlYWR5IiwibG9hZFF1YWxpdHlPcHRpb25zIiwic2V0VGltZW91dCIsInF1YWxpdHlMZXZlbHMiLCJnZXRBdmFpbGFibGVRdWFsaXR5TGV2ZWxzIiwicXVhbGl0eVNlbGVjdG9yIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwibGV2ZWwiLCJvcHRpb24iLCJ0ZXh0Q29udGVudCIsInRvVXBwZXJDYXNlIiwiYXBwZW5kQ2hpbGQiLCJjaGFuZ2VRdWFsaXR5IiwicXVhbGl0eSIsInNldFBsYXliYWNrUXVhbGl0eSJdLCJzb3VyY2VSb290IjoiIn0=