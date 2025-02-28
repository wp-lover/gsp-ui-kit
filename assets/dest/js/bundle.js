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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsRUFDRCxTQUFBZSxlQUFlQSxDQUFDZCxLQUFLLEVBQUVELEtBQUssRUFBRTtNQUM1QixJQUFJLENBQUNiLE9BQU8sQ0FBQ2MsS0FBSyxDQUFDLENBQUNZLEtBQUssQ0FBQ0MsU0FBUyxpQkFBQUYsTUFBQSxDQUFpQlosS0FBSyxRQUFLO0lBQ2hFO0VBQUM7SUFBQUQsR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQVMsYUFBYUEsQ0FBQ1IsS0FBSyxFQUFFO01BQ25CLElBQUksQ0FBQ2QsT0FBTyxDQUFDYyxLQUFLLENBQUMsQ0FBQ1ksS0FBSyxDQUFDQyxTQUFTLG9CQUFvQjtJQUN6RDtFQUFDO0FBQUE7QUFHSGxDLFFBQVEsQ0FBQ3dCLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFFbEQsSUFBTVksTUFBTSxHQUFHLElBQUlDLEtBQUssQ0FBQztJQUN2QkMsUUFBUSxFQUFFLHNCQUFzQjtJQUNoQ0MsTUFBTSxFQUFFLE1BQU07SUFDZEMsU0FBUyxFQUFFLElBQUk7SUFDZkMsWUFBWSxFQUFFLElBQUk7SUFDbEJDLFNBQVMsRUFBRSxFQUFFO0lBQ2JDLElBQUksRUFBRSxLQUFLO0lBQ1hDLEdBQUcsRUFBRSxLQUFLO0lBQ1ZDLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFBLEVBQVEsQ0FBQyxDQUFDO0lBQ2hCQyxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBQSxFQUFRLENBQUM7RUFDbkIsQ0FBQyxDQUFDO0VBRUZDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDQyxLQUFLLENBQUMsQ0FBQztBQUVuQyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dzcC11aS1raXQvLi9hc3NldHMvc3JjL2pzL2J1bmRsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHU1BfVUlfS0lUX1NMSURFUiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNsaWRlckJveHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ3NwLXVpLWtpdC1zbGlkZXItYm94XCIpO1xyXG4gICAgdGhpcy5zbGlkZXJzRGF0YSA9IFtdO1xyXG5cclxuICAgIGlmICh0aGlzLnNsaWRlckJveHMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNsaWRlckJveHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmdvVG9OZXh0U2xpZGUoaSk7XHJcbiAgICAgICAgdGhpcy5nb1RvUHJldlNsaWRlKGkpO1xyXG5cclxuICAgICAgICB0aGlzLnNsaWRlcnMgPSB0aGlzLnNsaWRlckJveHNbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNsaWRlcnNcIik7XHJcblxyXG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIGVhY2ggc2xpZGUgaW5zaWRlIHNsaWRlclxyXG4gICAgICAgIGNvbnN0IHNsaWRlID0gdGhpcy5zbGlkZXJzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzbGlkZVwiKTtcclxuICAgICAgICBjb25zdCBpc19hdXRvX3BsYXkgPSB0aGlzLnNsaWRlckJveHNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhdXRvLXBsYXknKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBzZXQgc2xpZGVib3ggcXVhbnRpdHlcclxuICAgICAgICBpZiAoc2xpZGUpIHtcclxuICAgICAgICAgIC8vIGluIHplcm8gaW5kZXggY29udGFpbiB0b3RhbCBzbGlkZSAsIHNlY29uZCBpbmRleCBjb250YWluIGN1cnJlbnQgaW5kZXguXHJcbiAgICAgICAgICAvLyB0aGlyZCBpbmRleCBjb250YWluIHNsaWRlIHdpZHRoXHJcbiAgICAgICAgICBjb25zdCBzbGlkZVdpZHRoID0gc2xpZGVbMF0ub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICB0aGlzLnNsaWRlcnNEYXRhLnB1c2goe1xyXG4gICAgICAgICAgICB0b3RhbF9zbGlkZXM6IHNsaWRlLmxlbmd0aCxcclxuICAgICAgICAgICAgY3VycmVudF9zbGlkZTogMSxcclxuICAgICAgICAgICAgc2xpZGVfd2lkdGg6IHNsaWRlV2lkdGgsXHJcbiAgICAgICAgICAgIGlzX2F1dG9fcGxheTogaXNfYXV0b19wbGF5LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSAvLyBjb25zdHJ1Y3RvclxyXG5cclxuICBnb1RvTmV4dFNsaWRlKGluZGV4KSB7XHJcbiAgICBjb25zdCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImdzcC11aS1raXQtbmV4dC1zbGlkZVwiKTtcclxuXHJcbiAgICBuZXh0W2luZGV4XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCBzbGlkZURhdGEgPSB0aGlzLnNsaWRlcnNEYXRhW2luZGV4XTtcclxuXHJcbiAgICAgIGlmIChzbGlkZURhdGEuY3VycmVudF9zbGlkZSA8IHNsaWRlRGF0YS50b3RhbF9zbGlkZXMpIHtcclxuICAgICAgICB0aGlzLnNldFNsaWRlRm9yd2FyZChcclxuICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgc2xpZGVEYXRhLmN1cnJlbnRfc2xpZGUgKiBzbGlkZURhdGEuc2xpZGVfd2lkdGhcclxuICAgICAgICApO1xyXG4gICAgICAgIHNsaWRlRGF0YS5jdXJyZW50X3NsaWRlKys7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmb3J3YXJkaW5nXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHNldCBjdXJyZW50IHNsaWRlIG51bWJlciBmcm9tIDFcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTbGlkZUZpcnN0KGluZGV4KTtcclxuXHJcbiAgICAgICAgLy8gYWdhaW4gc2V0IGN1cnJlbnQgaW4gZmlyc3QgaW5kZXhcclxuICAgICAgICBzbGlkZURhdGEuY3VycmVudF9zbGlkZSA9IDE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ29Ub1ByZXZTbGlkZShpbmRleCkge1xyXG4gICAgY29uc3QgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJnc3AtdWkta2l0LXByZXYtc2xpZGVcIik7XHJcblxyXG4gICAgbmV4dFtpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3Qgc2xpZGVEYXRhID0gdGhpcy5zbGlkZXJzRGF0YVtpbmRleF07XHJcblxyXG4gICAgICBpZiAoIHNsaWRlRGF0YS5jdXJyZW50X3NsaWRlID09IDEpIHtcclxuICAgICAgICBzbGlkZURhdGEuY3VycmVudF9zbGlkZSA9IHNsaWRlRGF0YS50b3RhbF9zbGlkZXMgLSAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNsaWRlRGF0YS5jdXJyZW50X3NsaWRlLS07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZVggPSAgYHRyYW5zbGF0ZVgoLSR7c2xpZGVEYXRhLnNsaWRlX3dpZHRofXB4KWA7XHJcblxyXG4gICAgICBpZiAoIHRoaXMuc2xpZGVyc1tpbmRleF0uc3R5bGUudHJhbnNmb3JtID09IHRyYW5zbGF0ZVggKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTbGlkZUZpcnN0KGluZGV4KTtcclxuICAgICAgICBzbGlkZURhdGEuY3VycmVudF9zbGlkZSA9IDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIC8vIGlmIHNsaWRlciByZWFjaCBvbiB0aGUgbGFzdCBzbGlkZXJcclxuICAgICAgICBpZiAoc2xpZGVEYXRhLmN1cnJlbnRfc2xpZGUgPT0gKCBzbGlkZURhdGEudG90YWxfc2xpZGVzIC0gMSApKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFNsaWRlRm9yd2FyZChcclxuICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICggc2xpZGVEYXRhLmN1cnJlbnRfc2xpZGUgLSAxICApICogc2xpZGVEYXRhLnNsaWRlX3dpZHRoXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgLy8gXHJcbiAgICAgICAgICB0aGlzLnNldFNsaWRlRm9yd2FyZChcclxuICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgIHNsaWRlRGF0YS5jdXJyZW50X3NsaWRlICogc2xpZGVEYXRhLnNsaWRlX3dpZHRoXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0U2xpZGVGb3J3YXJkKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgdGhpcy5zbGlkZXJzW2luZGV4XS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHt2YWx1ZX1weClgO1xyXG4gIH1cclxuICBzZXRTbGlkZVJldmVyc2UoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICB0aGlzLnNsaWRlcnNbaW5kZXhdLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dmFsdWV9cHgpYDtcclxuICB9XHJcbiAgc2V0U2xpZGVGaXJzdChpbmRleCkge1xyXG4gICAgdGhpcy5zbGlkZXJzW2luZGV4XS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgwcHgpYDtcclxuICB9XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBcclxuICBjb25zdCBzbGlkZXIgPSBuZXcgU2llbWEoe1xyXG4gICAgc2VsZWN0b3I6IFwiLmdzcC11aS1raXQtc2xpZGVyLTFcIixcclxuICAgIGVhc2luZzogXCJlYXNlXCIsXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICBtdWx0aXBsZURyYWc6IHRydWUsXHJcbiAgICB0aHJlc2hvbGQ6IDIwLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICBydGw6IGZhbHNlLFxyXG4gICAgb25Jbml0OiAoKSA9PiB7fSxcclxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcclxuICB9KTtcclxuXHJcbiAgJCgnLmdzcC11aS1raXQtc2xpZGVyLTEnKS5zbGljaygpO1xyXG5cclxufSk7XHJcbiJdLCJuYW1lcyI6WyJHU1BfVUlfS0lUX1NMSURFUiIsIl9jbGFzc0NhbGxDaGVjayIsInNsaWRlckJveHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzbGlkZXJzRGF0YSIsImkiLCJsZW5ndGgiLCJnb1RvTmV4dFNsaWRlIiwiZ29Ub1ByZXZTbGlkZSIsInNsaWRlcnMiLCJzbGlkZSIsImlzX2F1dG9fcGxheSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic2xpZGVXaWR0aCIsIm9mZnNldFdpZHRoIiwicHVzaCIsInRvdGFsX3NsaWRlcyIsImN1cnJlbnRfc2xpZGUiLCJzbGlkZV93aWR0aCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiaW5kZXgiLCJfdGhpcyIsIm5leHQiLCJhZGRFdmVudExpc3RlbmVyIiwic2xpZGVEYXRhIiwic2V0U2xpZGVGb3J3YXJkIiwiY29uc29sZSIsImxvZyIsInNldFNsaWRlRmlyc3QiLCJfdGhpczIiLCJ0cmFuc2xhdGVYIiwiY29uY2F0Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzZXRTbGlkZVJldmVyc2UiLCJzbGlkZXIiLCJTaWVtYSIsInNlbGVjdG9yIiwiZWFzaW5nIiwiZHJhZ2dhYmxlIiwibXVsdGlwbGVEcmFnIiwidGhyZXNob2xkIiwibG9vcCIsInJ0bCIsIm9uSW5pdCIsIm9uQ2hhbmdlIiwiJCIsInNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==