class GSP_UI_KIT_SLIDER {
  constructor() {
    this.sliderBoxs = document.getElementsByClassName("gsp-ui-kit-slider-box");
    this.slidersData = [];

    if (this.sliderBoxs) {
      for (let i = 0; i < this.sliderBoxs.length; i++) {
        this.goToNextSlide(i);
        this.goToPrevSlide(i);

        this.sliders = this.sliderBoxs[i].getElementsByClassName("sliders");

        // this is the each slide inside slider
        const slide = this.sliders[i].getElementsByClassName("slide");
        // set slidebox quantity
        if (slide) {
          // in zero index contain total slide , second index contain current index.
          // third index contain slide width
          const slideWidth = slide[0].offsetWidth;
          this.slidersData.push({
            total_slides: slide.length,
            current_slide: 1,
            slide_width: slideWidth,
            is_forward: true,
          });
        }
      }
    }
  } // constructor

  goToNextSlide(index) {
    const next = document.getElementsByClassName("gsp-ui-kit-next-slide");

    next[index].addEventListener("click", () => {
      const slideData = this.slidersData[index];

      if (slideData.current_slide < slideData.total_slides) {
        this.setSlideForward(
          index,
          slideData.current_slide * slideData.slide_width
        );
        slideData.current_slide++;
        console.log("forwarding");
      } else {
        // set current slide number from 1

        this.setSlideFirst(index);

        // again set current in first index
        slideData.current_slide = 1;
      }
    });
  }

  goToPrevSlide(index) {
    const next = document.getElementsByClassName("gsp-ui-kit-prev-slide");

    next[index].addEventListener("click", () => {
      const slideData = this.slidersData[index];

      // slideData.current_slide = slideData.total_slides;

      if (slideData.current_slide < slideData.total_slides) {
        // reduce the current index
        slideData.current_slide--;
        this.setSlideForward(
          index,
         (  ) * slideData.slide_width
        );
          
        console.log("forwarding..." + slideData.current_slide);

      } else {
        // set current slide number from 1
        slideData.current_slide--;

        this.sliders[index].style.transform = `translateX(-${
          (slideData.current_slide - 1) * slideData.slide_width
        }px)`;
        // setTimeout(() => {
        //   this.sliders[index].style.transition = "transform 0.5s ease";
        // }, 600);
        // again set current in first index
        // slideData.current_slide = 1;
      }
    });
  }

  setSlideForward(index, value) {
    this.sliders[index].style.transform = `translateX(-${value}px)`;
  }
  setSlideReverse(index, value) {
    this.sliders[index].style.transform = `translateX(${value}px)`;
  }
  setSlideFirst(index) {
    this.sliders[index].style.transform = `translateX(0px)`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new GSP_UI_KIT_SLIDER();
});
