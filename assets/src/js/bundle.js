import GSP_Set_Thumbnail_Height from './modules/set-thumbnail-height';
import GSP_UI_Kit_Youtube_Player from './modules/youtube-player';
import Login_With_OTP from './modules/login-with-otp';


document.addEventListener("DOMContentLoaded", () => {

  new GSP_Set_Thumbnail_Height();
  new GSP_UI_Kit_Youtube_Player();
  new Login_With_OTP();

});


