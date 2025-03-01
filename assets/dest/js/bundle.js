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
  var slider = new Siema({
    selector: ".gsp-ui-kit-slider-1",
    easing: "ease",
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: false,
    rtl: false,
    onInit: function onInit() {},
    onChange: function onChange() {}
  });
  $('.gsp-ui-kit-slider-1').slick();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3NldC10aHVtYm5haWwtaGVpZ2h0LmpzIiwid2VicGFjazovL2dzcC11aS1raXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3NwLXVpLWtpdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ3NwLXVpLWtpdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dzcC11aS1raXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nc3AtdWkta2l0Ly4vYXNzZXRzL3NyYy9qcy9idW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR1NQX1NldF9UaHVtYm5haWwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMudGh1bWJuYWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuLXRodW1ibmFpbFwiKTtcclxuICBcclxuICBcclxuICAgICAgdGhpcy5ldmVudHMoKTtcclxuICBcclxuICAgICAgdGhpcy5zZXRfdGh1bWJuYWlsX2hlaWdodCgpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZXZlbnRzKCkge1xyXG4gIFxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICBcclxuICAgIHNldF90aHVtYm5haWxfaGVpZ2h0KCkge1xyXG4gICAgIGNvbnN0ICBjYXJkX3ZpZXdfYmxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuLWNhcmQtdmlldy1ibG9nXCIpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGh1bWJuYWlscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMudGh1bWJuYWlsc1tpXS5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICAgIE1hdGgucm91bmQoICAoY2FyZF92aWV3X2Jsb2cub2Zmc2V0SGVpZ2h0IC8gMTYpICogOSApICsgXCJweFwiO1xyXG4gIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuICAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBTZXRfVGh1bWJuYWlsX0hlaWdodCBmcm9tICcuL21vZHVsZXMvc2V0LXRodW1ibmFpbC1oZWlnaHQnO1xyXG5cclxuY2xhc3MgR1NQX1VJX0tJVF9TTElERVIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zbGlkZXJCb3hzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImdzcC11aS1raXQtc2xpZGVyLWJveFwiKTtcclxuICAgIHRoaXMuc2xpZGVyc0RhdGEgPSBbXTtcclxuXHJcbiAgICBpZiAodGhpcy5zbGlkZXJCb3hzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbGlkZXJCb3hzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5nb1RvTmV4dFNsaWRlKGkpO1xyXG4gICAgICAgIHRoaXMuZ29Ub1ByZXZTbGlkZShpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zbGlkZXJzID0gdGhpcy5zbGlkZXJCb3hzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzbGlkZXJzXCIpO1xyXG5cclxuICAgICAgICAvLyB0aGlzIGlzIHRoZSBlYWNoIHNsaWRlIGluc2lkZSBzbGlkZXJcclxuICAgICAgICBjb25zdCBzbGlkZSA9IHRoaXMuc2xpZGVyc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2xpZGVcIik7XHJcbiAgICAgICAgY29uc3QgaXNfYXV0b19wbGF5ID0gdGhpcy5zbGlkZXJCb3hzW2ldLmNsYXNzTGlzdC5jb250YWlucygnYXV0by1wbGF5JykgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gc2V0IHNsaWRlYm94IHF1YW50aXR5XHJcbiAgICAgICAgaWYgKHNsaWRlKSB7XHJcbiAgICAgICAgICAvLyBpbiB6ZXJvIGluZGV4IGNvbnRhaW4gdG90YWwgc2xpZGUgLCBzZWNvbmQgaW5kZXggY29udGFpbiBjdXJyZW50IGluZGV4LlxyXG4gICAgICAgICAgLy8gdGhpcmQgaW5kZXggY29udGFpbiBzbGlkZSB3aWR0aFxyXG4gICAgICAgICAgY29uc3Qgc2xpZGVXaWR0aCA9IHNsaWRlWzBdLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgdGhpcy5zbGlkZXJzRGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgdG90YWxfc2xpZGVzOiBzbGlkZS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGN1cnJlbnRfc2xpZGU6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlX3dpZHRoOiBzbGlkZVdpZHRoLFxyXG4gICAgICAgICAgICBpc19hdXRvX3BsYXk6IGlzX2F1dG9fcGxheSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gLy8gY29uc3RydWN0b3JcclxuXHJcbiAgZ29Ub05leHRTbGlkZShpbmRleCkge1xyXG4gICAgY29uc3QgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJnc3AtdWkta2l0LW5leHQtc2xpZGVcIik7XHJcblxyXG4gICAgbmV4dFtpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3Qgc2xpZGVEYXRhID0gdGhpcy5zbGlkZXJzRGF0YVtpbmRleF07XHJcblxyXG4gICAgICBpZiAoc2xpZGVEYXRhLmN1cnJlbnRfc2xpZGUgPCBzbGlkZURhdGEudG90YWxfc2xpZGVzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTbGlkZUZvcndhcmQoXHJcbiAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgIHNsaWRlRGF0YS5jdXJyZW50X3NsaWRlICogc2xpZGVEYXRhLnNsaWRlX3dpZHRoXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzbGlkZURhdGEuY3VycmVudF9zbGlkZSsrO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZm9yd2FyZGluZ1wiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBzZXQgY3VycmVudCBzbGlkZSBudW1iZXIgZnJvbSAxXHJcblxyXG4gICAgICAgIHRoaXMuc2V0U2xpZGVGaXJzdChpbmRleCk7XHJcblxyXG4gICAgICAgIC8vIGFnYWluIHNldCBjdXJyZW50IGluIGZpcnN0IGluZGV4XHJcbiAgICAgICAgc2xpZGVEYXRhLmN1cnJlbnRfc2xpZGUgPSAxO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdvVG9QcmV2U2xpZGUoaW5kZXgpIHtcclxuICAgIGNvbnN0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ3NwLXVpLWtpdC1wcmV2LXNsaWRlXCIpO1xyXG5cclxuICAgIG5leHRbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNsaWRlRGF0YSA9IHRoaXMuc2xpZGVyc0RhdGFbaW5kZXhdO1xyXG5cclxuICAgICAgaWYgKCBzbGlkZURhdGEuY3VycmVudF9zbGlkZSA9PSAxKSB7XHJcbiAgICAgICAgc2xpZGVEYXRhLmN1cnJlbnRfc2xpZGUgPSBzbGlkZURhdGEudG90YWxfc2xpZGVzIC0gMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzbGlkZURhdGEuY3VycmVudF9zbGlkZS0tO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB0cmFuc2xhdGVYID0gIGB0cmFuc2xhdGVYKC0ke3NsaWRlRGF0YS5zbGlkZV93aWR0aH1weClgO1xyXG5cclxuICAgICAgaWYgKCB0aGlzLnNsaWRlcnNbaW5kZXhdLnN0eWxlLnRyYW5zZm9ybSA9PSB0cmFuc2xhdGVYICkge1xyXG4gICAgICAgIHRoaXMuc2V0U2xpZGVGaXJzdChpbmRleCk7XHJcbiAgICAgICAgc2xpZGVEYXRhLmN1cnJlbnRfc2xpZGUgPSAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAvLyBpZiBzbGlkZXIgcmVhY2ggb24gdGhlIGxhc3Qgc2xpZGVyXHJcbiAgICAgICAgaWYgKHNsaWRlRGF0YS5jdXJyZW50X3NsaWRlID09ICggc2xpZGVEYXRhLnRvdGFsX3NsaWRlcyAtIDEgKSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRTbGlkZUZvcndhcmQoXHJcbiAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICAoIHNsaWRlRGF0YS5jdXJyZW50X3NsaWRlIC0gMSAgKSAqIHNsaWRlRGF0YS5zbGlkZV93aWR0aFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgdGhpcy5zZXRTbGlkZUZvcndhcmQoXHJcbiAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICBzbGlkZURhdGEuY3VycmVudF9zbGlkZSAqIHNsaWRlRGF0YS5zbGlkZV93aWR0aFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFNsaWRlRm9yd2FyZChpbmRleCwgdmFsdWUpIHtcclxuICAgIHRoaXMuc2xpZGVyc1tpbmRleF0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7dmFsdWV9cHgpYDtcclxuICB9XHJcbiAgc2V0U2xpZGVSZXZlcnNlKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgdGhpcy5zbGlkZXJzW2luZGV4XS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3ZhbHVlfXB4KWA7XHJcbiAgfVxyXG4gIHNldFNsaWRlRmlyc3QoaW5kZXgpIHtcclxuICAgIHRoaXMuc2xpZGVyc1tpbmRleF0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoMHB4KWA7XHJcbiAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblxyXG4gIG5ldyBTZXRfVGh1bWJuYWlsX0hlaWdodCgpO1xyXG4gIFxyXG4gIGNvbnN0IHNsaWRlciA9IG5ldyBTaWVtYSh7XHJcbiAgICBzZWxlY3RvcjogXCIuZ3NwLXVpLWtpdC1zbGlkZXItMVwiLFxyXG4gICAgZWFzaW5nOiBcImVhc2VcIixcclxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgIG11bHRpcGxlRHJhZzogdHJ1ZSxcclxuICAgIHRocmVzaG9sZDogMjAsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIHJ0bDogZmFsc2UsXHJcbiAgICBvbkluaXQ6ICgpID0+IHt9LFxyXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxyXG4gIH0pO1xyXG5cclxuICAkKCcuZ3NwLXVpLWtpdC1zbGlkZXItMScpLnNsaWNrKCk7XHJcblxyXG59KTtcclxuIl0sIm5hbWVzIjpbIkdTUF9TZXRfVGh1bWJuYWlsIiwiX2NsYXNzQ2FsbENoZWNrIiwidGh1bWJuYWlscyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImV2ZW50cyIsInNldF90aHVtYm5haWxfaGVpZ2h0IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FyZF92aWV3X2Jsb2ciLCJxdWVyeVNlbGVjdG9yIiwiaSIsImxlbmd0aCIsInN0eWxlIiwiaGVpZ2h0IiwiTWF0aCIsInJvdW5kIiwib2Zmc2V0SGVpZ2h0IiwiZGVmYXVsdCIsIlNldF9UaHVtYm5haWxfSGVpZ2h0IiwiR1NQX1VJX0tJVF9TTElERVIiLCJzbGlkZXJCb3hzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNsaWRlcnNEYXRhIiwiZ29Ub05leHRTbGlkZSIsImdvVG9QcmV2U2xpZGUiLCJzbGlkZXJzIiwic2xpZGUiLCJpc19hdXRvX3BsYXkiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInNsaWRlV2lkdGgiLCJvZmZzZXRXaWR0aCIsInB1c2giLCJ0b3RhbF9zbGlkZXMiLCJjdXJyZW50X3NsaWRlIiwic2xpZGVfd2lkdGgiLCJpbmRleCIsIl90aGlzIiwibmV4dCIsInNsaWRlRGF0YSIsInNldFNsaWRlRm9yd2FyZCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTbGlkZUZpcnN0IiwiX3RoaXMyIiwidHJhbnNsYXRlWCIsImNvbmNhdCIsInRyYW5zZm9ybSIsInNldFNsaWRlUmV2ZXJzZSIsInNsaWRlciIsIlNpZW1hIiwic2VsZWN0b3IiLCJlYXNpbmciLCJkcmFnZ2FibGUiLCJtdWx0aXBsZURyYWciLCJ0aHJlc2hvbGQiLCJsb29wIiwicnRsIiwib25Jbml0Iiwib25DaGFuZ2UiLCIkIiwic2xpY2siXSwic291cmNlUm9vdCI6IiJ9