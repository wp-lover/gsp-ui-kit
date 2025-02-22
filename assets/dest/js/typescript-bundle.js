"use strict";
var GSP_UI_KIT_SLIDER = /** @class */ (function () {
    function GSP_UI_KIT_SLIDER(sliderId) {
        this.slider = document.getElementById(sliderId);
        this.slides = Array.from(this.slider.children);
        this.currentIndex = 0;
        this.translateValue = 0;
    }
    GSP_UI_KIT_SLIDER.prototype.goToSlide = function (index) {
        this.currentIndex = index;
        this.translateValue = -index * 100;
        this.updateSliderPosition();
        // this.updateDots();
        // this.stopAutoSlide(); //stop auto slide when dot is clicked.
        // this.startAutoSlide(); //restart auto slide.
    };
    GSP_UI_KIT_SLIDER.prototype.updateSliderPosition = function () {
        this.slider.style.transform = "translateX(".concat(this.translateValue, "%)");
    };
    return GSP_UI_KIT_SLIDER;
}());
document.addEventListener("DOMContentLoaded", function () {
    new GSP_UI_KIT_SLIDER("gsp-ui-kit-slider");
});
