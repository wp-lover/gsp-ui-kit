import Set_Thumbnail_Height from './modules/set-thumbnail-height';

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
        const is_auto_play = this.sliderBoxs[i].classList.contains('auto-play') ? true : false;
        
        // set slidebox quantity
        if (slide) {
          // in zero index contain total slide , second index contain current index.
          // third index contain slide width
          const slideWidth = slide[0].offsetWidth;
          this.slidersData.push({
            total_slides: slide.length,
            current_slide: 1,
            slide_width: slideWidth,
            is_auto_play: is_auto_play,
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

      if ( slideData.current_slide == 1) {
        slideData.current_slide = slideData.total_slides - 1;
      } else {
        slideData.current_slide--;
      }

      const translateX =  `translateX(-${slideData.slide_width}px)`;

      if ( this.sliders[index].style.transform == translateX ) {
        this.setSlideFirst(index);
        slideData.current_slide = 1;
      } else {

        // if slider reach on the last slider
        if (slideData.current_slide == ( slideData.total_slides - 1 )) {
          this.setSlideForward(
            index,
            ( slideData.current_slide - 1  ) * slideData.slide_width
          );
        }else{
          // 
          this.setSlideForward(
            index,
            slideData.current_slide * slideData.slide_width
          );
        }
        
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

  new Set_Thumbnail_Height();
  
  const slider = new Siema({
    selector: ".gsp-ui-kit-slider-1",
    easing: "ease",
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: false,
    rtl: false,
    onInit: () => {},
    onChange: () => {},
  });

  $('.gsp-ui-kit-slider-1').slick();

});
