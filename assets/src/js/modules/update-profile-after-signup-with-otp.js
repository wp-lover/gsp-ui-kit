export default class Update_Profile_After_Signup_With_OTP {

    constructor() {

        this.class = document.getElementById('profile-update__class');
        this.gender = document.getElementById('profile-update__gender');
        this.religion = document.getElementById('profile-update__relegion');
        this.home_district = document.getElementById('profile-update__home-district');
        this.date_of_birth = document.getElementById('profile-update__date-of-birth');
        this.password = document.getElementById('profile-update__password');
        this.confirm_password = document.getElementById('profile-update__confirm-password');

        this.message = document.getElementById('update-profile-message');
        this.update_profile_btn = document.getElementById('update-profile-btn');

        if (this.class) {


            this.events();
        }

        
    }


    events() {

        this.date_of_birth.addEventListener('click', function() {
            this.showPicker();
        });

        this.update_profile_btn.addEventListener( 'click' , () => {
            this.check_inputs_has_data();
        } );
       
        this.class.addEventListener('change' , () => {
            this.class.style.border = '2px solid green';
        });

        this.class.addEventListener('change' , () => {
            this.class.style.border = '2px solid green';
        });

        this.gender.addEventListener('change' , () => {
            this.gender.style.border = '2px solid green';
        });

        this.religion.addEventListener('change' , () => {
            this.religion.style.border = '2px solid green';
        });

        this.home_district.addEventListener('change' , () => {
            this.home_district.style.border = '2px solid green';
        });

        this.date_of_birth.addEventListener('change' , () => {
            this.date_of_birth.style.border = '2px solid green';
        });

        this.password.addEventListener('keydown' , () => {
            if (this.password.value.length >= 6) {
                this.password.style.border = '2px solid green';
            }
        });

        this.confirm_password.addEventListener('keydown' , () => {

            if ( this.confirm_password.value != '' &&  this.password.value == this.confirm_password.value ) {
                this.confirm_password.style.border = '2px solid green';
            }
        });
    }

    check_inputs_has_data() {

        let is_valid = true;

        if (this.class.value == '0') {
            this.class.style.border = '1px solid red';
            is_valid = false;
        }

        if (this.gender.value == '0') {
            this.gender.style.border = '1px solid red';
            is_valid = false;
        }

        if (this.religion.value == '0') {
            this.religion.style.border = '1px solid red';
            is_valid = false;
        }

        if (this.home_district.value == '0') {
            this.home_district.style.border = '1px solid red';
            is_valid = false;
        }

        if (this.date_of_birth.value === '') {
            this.date_of_birth.style.border = '1px solid red';
            is_valid = false;
        }

        if (this.password.value.length <  5) {
            this.password.style.border = '1px solid red';
            is_valid = false;
        }

        if (this.confirm_password.value == '' ) {
            this.confirm_password.style.border = '1px solid red';
            is_valid = false;
        }

        if (this.password.value != this.confirm_password.value ) {
            this.confirm_password.style.border = '1px solid red';
            is_valid = false;
        }

        if (is_valid) {
            this.send_update_profile_request();
        }
    }

    send_update_profile_request() {

        this.update_profile_btn.innerHTML = '<div class="loading-spinner"></div>';
        const otp = localStorage.getItem('gsp_otp_code');
        const phone_number = localStorage.getItem('gsp_phone_number');

        console.log(otp + ' ' + phone_number);

        fetch( gsp_ui_kit_common.ajax_url, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded", // Important for WordPress AJAX
            },
            body: new URLSearchParams({
              action: "gsp_ui_kit_update_profile_by_phone_otp",
              otp_code: otp,
              phone_number: phone_number,
              class: this.class.value,
              gender: this.gender.value,
              religion: this.religion.value,
              home_district: this.home_district.value,
              date_of_birth: this.date_of_birth.value,
              password: this.password.value,
              nonce: gsp_ui_kit_common.nonce,
            }),
        } ).then ( (response) => {
            console.log(response);
            return response.json();
        } ).then((data) => {

            if (data.success) {
                this.message.innerHTML = data.data.message ?? '';
                this.message.style.color = 'green';
                location.replace(gsp_ui_kit_common.site_url);
                this.update_profile_btn.classList.add('-d-none');

                return;
            }else{
                this.message.innerHTML = data.data.error ?? '';
            }

            this.update_profile_btn.innerHTML = 'Update Profile';
            console.log(data);
        }).catch( (error) => {
            console.log(error);
            this.update_profile_btn.innerHTML = 'Update Profile';
        } );
    }
}