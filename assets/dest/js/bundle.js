/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./assets/src/js/bundle.js ***!
  \*********************************/
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
        // set slidebox quantity
        if (slide) {
          // in zero index contain total slide , second index contain current index.
          // third index contain slide width
          var slideWidth = slide[0].offsetWidth;
          this.slidersData.push({
            total_slides: slide.length,
            current_slide: 1,
            slide_width: slideWidth,
            is_forward: true
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

        // slideData.current_slide = slideData.total_slides;

        if (slideData.current_slide < slideData.total_slides) {
          // reduce the current index
          _this2.setSlideForward(index, (slideData.current_slide - 1) * slideData.slide_width);
          console.log("forwarding..." + slideData.current_slide);
        } else {
          // set current slide number from 1
          slideData.current_slide--;
          _this2.sliders[index].style.transform = "translateX(-".concat((slideData.current_slide - 1) * slideData.slide_width, "px)");
          // setTimeout(() => {
          //   this.sliders[index].style.transition = "transform 0.5s ease";
          // }, 600);
          // again set current in first index
          // slideData.current_slide = 1;
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
  new GSP_UI_KIT_SLIDER();
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQU07RUFDbEQsSUFBSXpCLGlCQUFpQixDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nc3AtdWkta2l0Ly4vYXNzZXRzL3NyYy9qcy9idW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR1NQX1VJX0tJVF9TTElERVIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zbGlkZXJCb3hzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImdzcC11aS1raXQtc2xpZGVyLWJveFwiKTtcclxuICAgIHRoaXMuc2xpZGVyc0RhdGEgPSBbXTtcclxuXHJcbiAgICBpZiAodGhpcy5zbGlkZXJCb3hzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbGlkZXJCb3hzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5nb1RvTmV4dFNsaWRlKGkpO1xyXG4gICAgICAgIHRoaXMuZ29Ub1ByZXZTbGlkZShpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zbGlkZXJzID0gdGhpcy5zbGlkZXJCb3hzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzbGlkZXJzXCIpO1xyXG5cclxuICAgICAgICAvLyB0aGlzIGlzIHRoZSBlYWNoIHNsaWRlIGluc2lkZSBzbGlkZXJcclxuICAgICAgICBjb25zdCBzbGlkZSA9IHRoaXMuc2xpZGVyc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2xpZGVcIik7XHJcbiAgICAgICAgLy8gc2V0IHNsaWRlYm94IHF1YW50aXR5XHJcbiAgICAgICAgaWYgKHNsaWRlKSB7XHJcbiAgICAgICAgICAvLyBpbiB6ZXJvIGluZGV4IGNvbnRhaW4gdG90YWwgc2xpZGUgLCBzZWNvbmQgaW5kZXggY29udGFpbiBjdXJyZW50IGluZGV4LlxyXG4gICAgICAgICAgLy8gdGhpcmQgaW5kZXggY29udGFpbiBzbGlkZSB3aWR0aFxyXG4gICAgICAgICAgY29uc3Qgc2xpZGVXaWR0aCA9IHNsaWRlWzBdLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgdGhpcy5zbGlkZXJzRGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgdG90YWxfc2xpZGVzOiBzbGlkZS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGN1cnJlbnRfc2xpZGU6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlX3dpZHRoOiBzbGlkZVdpZHRoLFxyXG4gICAgICAgICAgICBpc19mb3J3YXJkOiB0cnVlLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSAvLyBjb25zdHJ1Y3RvclxyXG5cclxuICBnb1RvTmV4dFNsaWRlKGluZGV4KSB7XHJcbiAgICBjb25zdCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImdzcC11aS1raXQtbmV4dC1zbGlkZVwiKTtcclxuXHJcbiAgICBuZXh0W2luZGV4XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCBzbGlkZURhdGEgPSB0aGlzLnNsaWRlcnNEYXRhW2luZGV4XTtcclxuXHJcbiAgICAgIGlmIChzbGlkZURhdGEuY3VycmVudF9zbGlkZSA8IHNsaWRlRGF0YS50b3RhbF9zbGlkZXMpIHtcclxuICAgICAgICB0aGlzLnNldFNsaWRlRm9yd2FyZChcclxuICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgc2xpZGVEYXRhLmN1cnJlbnRfc2xpZGUgKiBzbGlkZURhdGEuc2xpZGVfd2lkdGhcclxuICAgICAgICApO1xyXG4gICAgICAgIHNsaWRlRGF0YS5jdXJyZW50X3NsaWRlKys7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmb3J3YXJkaW5nXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHNldCBjdXJyZW50IHNsaWRlIG51bWJlciBmcm9tIDFcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTbGlkZUZpcnN0KGluZGV4KTtcclxuXHJcbiAgICAgICAgLy8gYWdhaW4gc2V0IGN1cnJlbnQgaW4gZmlyc3QgaW5kZXhcclxuICAgICAgICBzbGlkZURhdGEuY3VycmVudF9zbGlkZSA9IDE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ29Ub1ByZXZTbGlkZShpbmRleCkge1xyXG4gICAgY29uc3QgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJnc3AtdWkta2l0LXByZXYtc2xpZGVcIik7XHJcblxyXG4gICAgbmV4dFtpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3Qgc2xpZGVEYXRhID0gdGhpcy5zbGlkZXJzRGF0YVtpbmRleF07XHJcblxyXG4gICAgICAvLyBzbGlkZURhdGEuY3VycmVudF9zbGlkZSA9IHNsaWRlRGF0YS50b3RhbF9zbGlkZXM7XHJcblxyXG4gICAgICBpZiAoc2xpZGVEYXRhLmN1cnJlbnRfc2xpZGUgPCBzbGlkZURhdGEudG90YWxfc2xpZGVzKSB7XHJcbiAgICAgICAgLy8gcmVkdWNlIHRoZSBjdXJyZW50IGluZGV4XHJcbiAgICAgICAgdGhpcy5zZXRTbGlkZUZvcndhcmQoXHJcbiAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgKCBzbGlkZURhdGEuY3VycmVudF9zbGlkZSAtIDEgKSAqIHNsaWRlRGF0YS5zbGlkZV93aWR0aFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZvcndhcmRpbmcuLi5cIiArIHNsaWRlRGF0YS5jdXJyZW50X3NsaWRlKTtcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gc2V0IGN1cnJlbnQgc2xpZGUgbnVtYmVyIGZyb20gMVxyXG4gICAgICAgIHNsaWRlRGF0YS5jdXJyZW50X3NsaWRlLS07XHJcblxyXG4gICAgICAgIHRoaXMuc2xpZGVyc1tpbmRleF0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7XHJcbiAgICAgICAgICAoc2xpZGVEYXRhLmN1cnJlbnRfc2xpZGUgLSAxKSAqIHNsaWRlRGF0YS5zbGlkZV93aWR0aFxyXG4gICAgICAgIH1weClgO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgdGhpcy5zbGlkZXJzW2luZGV4XS5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gMC41cyBlYXNlXCI7XHJcbiAgICAgICAgLy8gfSwgNjAwKTtcclxuICAgICAgICAvLyBhZ2FpbiBzZXQgY3VycmVudCBpbiBmaXJzdCBpbmRleFxyXG4gICAgICAgIC8vIHNsaWRlRGF0YS5jdXJyZW50X3NsaWRlID0gMTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRTbGlkZUZvcndhcmQoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICB0aGlzLnNsaWRlcnNbaW5kZXhdLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3ZhbHVlfXB4KWA7XHJcbiAgfVxyXG4gIHNldFNsaWRlUmV2ZXJzZShpbmRleCwgdmFsdWUpIHtcclxuICAgIHRoaXMuc2xpZGVyc1tpbmRleF0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt2YWx1ZX1weClgO1xyXG4gIH1cclxuICBzZXRTbGlkZUZpcnN0KGluZGV4KSB7XHJcbiAgICB0aGlzLnNsaWRlcnNbaW5kZXhdLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKDBweClgO1xyXG4gIH1cclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIG5ldyBHU1BfVUlfS0lUX1NMSURFUigpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIkdTUF9VSV9LSVRfU0xJREVSIiwiX2NsYXNzQ2FsbENoZWNrIiwic2xpZGVyQm94cyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNsaWRlcnNEYXRhIiwiaSIsImxlbmd0aCIsImdvVG9OZXh0U2xpZGUiLCJnb1RvUHJldlNsaWRlIiwic2xpZGVycyIsInNsaWRlIiwic2xpZGVXaWR0aCIsIm9mZnNldFdpZHRoIiwicHVzaCIsInRvdGFsX3NsaWRlcyIsImN1cnJlbnRfc2xpZGUiLCJzbGlkZV93aWR0aCIsImlzX2ZvcndhcmQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImluZGV4IiwiX3RoaXMiLCJuZXh0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNsaWRlRGF0YSIsInNldFNsaWRlRm9yd2FyZCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTbGlkZUZpcnN0IiwiX3RoaXMyIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJjb25jYXQiLCJzZXRTbGlkZVJldmVyc2UiXSwic291cmNlUm9vdCI6IiJ9