export default class GSP_Set_Thumbnail_Height {
  constructor() {
    this.thumbnails = document.querySelectorAll(".-thumbnail");
    this.window_width = screen.width;

    if (this.thumbnails) {
      this.events();
      this.set_thumbnail_height();
    }
  }

  events() {
    window.addEventListener("resize", () => {
      this.window_width = screen.width;
      this.set_thumbnail_height();
    });
  }

  set_thumbnail_height() {
    const card_view_blog = document.querySelector(".-card-view-blog");
    for (let i = 0; i < this.thumbnails.length; i++) {
      if (this.window_width > 600) {
        this.thumbnails[i].style.height =
        Math.round((card_view_blog.offsetHeight / 16) * 7) + "px";
      }

      if (this.window_width > 768) {
        this.thumbnails[i].style.height =
        Math.round((card_view_blog.offsetHeight / 16) * 8) + "px";
      }

      if (this.window_width > 992) {
        this.thumbnails[i].style.height =
        Math.round((card_view_blog.offsetHeight / 16) * 7) + "px";
      }
        
    }
  }
}
