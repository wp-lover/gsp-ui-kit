class GSP_UI_KIT_SLIDER {
  //
  private sliderContainer: HTMLElement[];
  private slides: HTMLElement[];
  private currentIndex: number;
  private translateValue: number;

  constructor() {
    this.sliderContainer = [];
    const htmlCollection = document.getElementsByClassName("gsp-ui-kit-slider");

    for (let i = 0; i < htmlCollection.length; i++) {
      this.sliderContainer.push(htmlCollection[i] as HTMLElement);
    }

    if (this.sliderContainer.length > 0) {
      this.slides = Array.from(
        this.sliderContainer[0].children
      ) as HTMLElement[];
    } else {
      this.slides = [];
      console.error(`No elements found with class: gsp-ui-kit-slider`);
    }

    this.currentIndex = 0;
    this.translateValue = 0;


  } // constructor
}

document.addEventListener("DOMContentLoaded", () => {
  new GSP_UI_KIT_SLIDER();
});
