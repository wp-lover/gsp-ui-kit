"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var Slider = /** @class */ (function () {
        function Slider(sliderId) {
            this.slider = document.getElementById(sliderId);
            this.slides = Array.from(this.slider.children);
            this.currentIndex = 0;
            this.translateValue = 0;
            this.dotsContainer = document.getElementById("sliderDots");
            this.dots = [];
            this.intervalId = null;
            this.createDots();
            this.setupEventListeners();
            this.setupMouseEvents();
            this.updateSliderPosition();
            this.updateDots();
            this.startAutoSlide(); // Start automatic sliding
        }
        Slider.prototype.createDots = function () {
            var _this = this;
            if (this.dotsContainer) {
                var _loop_1 = function (i) {
                    var dot = document.createElement("div");
                    dot.classList.add("dot");
                    dot.addEventListener("click", function () { return _this.goToSlide(i); });
                    this_1.dotsContainer.appendChild(dot);
                    this_1.dots.push(dot);
                };
                var this_1 = this;
                for (var i = 0; i < this.slides.length; i++) {
                    _loop_1(i);
                }
            }
        };
        Slider.prototype.goToSlide = function (index) {
            this.currentIndex = index;
            this.translateValue = -index * 100;
            this.updateSliderPosition();
            this.updateDots();
            this.stopAutoSlide(); //stop auto slide when dot is clicked.
            this.startAutoSlide(); //restart auto slide.
        };
        Slider.prototype.setupEventListeners = function () {
            var _this = this;
            var prevBtn = document.getElementById("prevBtn");
            var nextBtn = document.getElementById("nextBtn");
            prevBtn.addEventListener("click", function () {
                _this.stopAutoSlide();
                _this.prevSlide();
                _this.startAutoSlide();
            });
            nextBtn.addEventListener("click", function () {
                _this.stopAutoSlide();
                _this.nextSlide();
                _this.startAutoSlide();
            });
        };
        Slider.prototype.updateSliderPosition = function () {
            this.slider.style.transform = "translateX(".concat(this.translateValue, "%)");
        };
        Slider.prototype.nextSlide = function () {
            this.currentIndex++;
            if (this.currentIndex >= this.slides.length) {
                this.currentIndex = 0;
                this.translateValue = 0;
            }
            else {
                this.translateValue -= 100;
            }
            this.updateSliderPosition();
            this.updateDots();
        };
        Slider.prototype.prevSlide = function () {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.slides.length - 1;
                this.translateValue = -this.currentIndex * 100;
            }
            else {
                this.translateValue += 100;
            }
            this.updateSliderPosition();
            this.updateDots();
        };
        Slider.prototype.updateDots = function () {
            var _this = this;
            this.dots.forEach(function (dot, index) {
                if (index === _this.currentIndex) {
                    dot.classList.add("active");
                }
                else {
                    dot.classList.remove("active");
                }
            });
        };
        Slider.prototype.startAutoSlide = function () {
            var _this = this;
            if (this.intervalId === null) {
                this.intervalId = window.setInterval(function () {
                    _this.nextSlide();
                }, 2000);
            }
        };
        Slider.prototype.stopAutoSlide = function () {
            if (this.intervalId !== null) {
                window.clearInterval(this.intervalId);
                this.intervalId = null;
            }
        };
        Slider.prototype.setupMouseEvents = function () {
            var _this = this;
            this.slider.addEventListener("mouseenter", function () {
                _this.stopAutoSlide();
            });
            this.slider.addEventListener("mouseleave", function () {
                _this.startAutoSlide();
            });
        };
        return Slider;
    }());
    new Slider("gsp-ui-kit-slider");
});
