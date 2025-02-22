document.addEventListener("DOMContentLoaded", () => {
    class Slider {
        private slider: HTMLElement;
        private slides: HTMLElement[];
        private currentIndex: number;
        private translateValue: number;
        private dotsContainer: HTMLElement;
        private dots: HTMLElement[];
        private intervalId: number | null; // Store the interval ID
  
        constructor(sliderId: string) {
            this.slider = document.getElementById(sliderId)!;
            this.slides = Array.from(this.slider.children) as HTMLElement[];
            this.currentIndex = 0;
            this.translateValue = 0;
            this.dotsContainer = document.getElementById("sliderDots")!;
            this.dots = [];
            this.intervalId = null;
  
            this.createDots();
            this.setupEventListeners();
            this.setupMouseEvents(); 
            this.updateSliderPosition();
            this.updateDots();
            this.startAutoSlide(); // Start automatic sliding
        }
  
        private createDots() {
            if (this.dotsContainer) {
                for (let i = 0; i < this.slides.length; i++) {
                    const dot = document.createElement("div");
                    dot.classList.add("dot");
                    dot.addEventListener("click", () => this.goToSlide(i));
                    this.dotsContainer.appendChild(dot);
                    this.dots.push(dot);
                }
            }
        }
  
        private goToSlide(index: number) {
            this.currentIndex = index;
            this.translateValue = -index * 100;
            this.updateSliderPosition();
            this.updateDots();
            this.stopAutoSlide(); //stop auto slide when dot is clicked.
            this.startAutoSlide(); //restart auto slide.
        }
  
        private setupEventListeners() {
            const prevBtn = document.getElementById("prevBtn")!;
            const nextBtn = document.getElementById("nextBtn")!;
  
            prevBtn.addEventListener("click", () => {
                this.stopAutoSlide();
                this.prevSlide();
                this.startAutoSlide();
            });
            nextBtn.addEventListener("click", () => {
                this.stopAutoSlide();
                this.nextSlide();
                this.startAutoSlide();
            });
        }
  
        private updateSliderPosition() {
            this.slider.style.transform = `translateX(${this.translateValue}%)`;
        }
  
        private nextSlide() {
            this.currentIndex++;
            if (this.currentIndex >= this.slides.length) {
                this.currentIndex = 0;
                this.translateValue = 0;
            } else {
                this.translateValue -= 100;
            }
            this.updateSliderPosition();
            this.updateDots();
        }
  
        private prevSlide() {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.slides.length - 1;
                this.translateValue = -this.currentIndex * 100;
            } else {
                this.translateValue += 100;
            }
            this.updateSliderPosition();
            this.updateDots();
        }
  
        private updateDots() {
            this.dots.forEach((dot, index) => {
                if (index === this.currentIndex) {
                    dot.classList.add("active");
                } else {
                    dot.classList.remove("active");
                }
            });
        }
  
        private startAutoSlide() {
            if (this.intervalId === null) {
                this.intervalId = window.setInterval(() => {
                    this.nextSlide();
                }, 2000);
            }
        }
  
        private stopAutoSlide() {
            if (this.intervalId !== null) {
                window.clearInterval(this.intervalId);
                this.intervalId = null;
            }
        }
  
        private setupMouseEvents() {
          this.slider.addEventListener("mouseenter", () => {
              this.stopAutoSlide();
          });
          this.slider.addEventListener("mouseleave", () => {
              this.startAutoSlide();
          });
      }
    }
  
    new Slider("gsp-ui-kit-slider");
  });