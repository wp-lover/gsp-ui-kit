export default class GSP_UI_Kit_Youtube_Player {
  constructor() {
    this.player;

    let videoContainer = document.querySelector(".video-container");
    if (videoContainer) {
      this.videoId = videoContainer.getAttribute("data-video-id");

      this.loadYouTubeAPI();
  
      this.events();
    }else{
      console.log("No video container found.");
      return;
    }
    
    
  }

  events() {
    window.onYouTubeIframeAPIReady = () => this.onYouTubeIframeAPIReady();

    // Play video and hide overlay
    window.playVideo = () => {
      this.player.playVideo();
      document.querySelector(".video-overlay").style.display = "none";
      document.querySelector(".click-blocker").style.pointerEvents = "all";
    };

    // Play or Pause
    window.playPause = () => {
      if (this.player.getPlayerState() === 1) {
        this.player.pauseVideo();
      } else {
        this.player.playVideo();
      }
    };

    // Seek forward 10 seconds
    window.seekForward = () => {
      this.player.seekTo(this.player.getCurrentTime() + 10, true);
    };

    // Seek backward 10 seconds
    window.seekBackward = () => {
      this.player.seekTo(this.player.getCurrentTime() - 10, true);
    };

    // Fullscreen toggle
    window.toggleFullScreen = () => {
      var videoContainer = document.querySelector(".video-container");

      if (!document.fullscreenElement) {
        if (videoContainer.requestFullscreen) {
          videoContainer.requestFullscreen();
        } else if (videoContainer.mozRequestFullScreen) {
          videoContainer.mozRequestFullScreen();
        } else if (videoContainer.webkitRequestFullscreen) {
          videoContainer.webkitRequestFullscreen();
        } else if (videoContainer.msRequestFullscreen) {
          videoContainer.msRequestFullscreen();
        }
        videoContainer.classList.add("fullscreen");
      } else {
        document.exitFullscreen();
        videoContainer.classList.remove("fullscreen");
      }
    };
    // Listen for fullscreen changes
    document.addEventListener("fullscreenchange", function () {
      var videoContainer = document.querySelector(".video-container");
      if (document.fullscreenElement) {
        videoContainer.classList.add("fullscreen");
      } else {
        videoContainer.classList.remove("fullscreen");
      }
    });

  } // envents ending

  loadYouTubeAPI() {
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  onYouTubeIframeAPIReady() {
    this.player = new YT.Player("player", {
      videoId: this.videoId, // Replace with actual YouTube video ID
      playerVars: {
        controls: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        fs: 0,
        disablekb: 1,
      },
      events: {
        onReady: (event) => this.onPlayerReady(event), // Use arrow function to retain `this` co
      },
    });
  }

  onPlayerReady(event) {
    document.querySelector(".video-overlay").style.display = "flex";
    this.loadQualityOptions(); // Load available video quality options
  }

  // Load available video qualities
  loadQualityOptions() {
    setTimeout(() => {
      let qualityLevels = player.getAvailableQualityLevels();
      let qualitySelector = document.getElementById("quality-selector");

      qualitySelector.innerHTML = "<option value=''>Quality</option>"; // Reset

      qualityLevels.forEach((level) => {
        let option = document.createElement("option");
        option.value = level;
        option.textContent = level.toUpperCase();
        qualitySelector.appendChild(option);
      });
    }, 1000); // Delay for API to return quality levels
  }

  // Change video quality
  changeQuality(quality) {
    if (quality) {
      this.player.setPlaybackQuality(quality);
    }
  }
}


