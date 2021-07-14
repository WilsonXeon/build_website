import { AlertPlugin } from 'bootstrap-vue'
Vue.use(AlertPlugin)
import { BAlert } from 'bootstrap-vue'
Vue.component('b-alert', BAlert)

var app = new Vue({
    el: '#app',
    data: {
        username: '',
        usernameError: false,
        userErrMsg: '',

        password: '',
        passwordError: false,
        passErrMsg: '',

        email: '',
        emailError: false,
        emailErrMsg: ''

    },

    watch:{
        username: function () {
            var isText = /^[a-zA-Z0-9]+$/;
            if (!isText.test(this.username)) {
                this.usernameError = true;
                this.userErrMsg = '請勿包含特殊字元如-*/?,.:;"';
            }
            else if (this.username.length > 15) {
                this.usernameError = true;
                this.userErrMsg = '請勿超過15個字';
            }
            else {
                this.usernameError = false;
            }
        }
    },

    password: function () {
        var isText = /^[a-zA-Z0-9]+$/;
        var inclde = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
        if (!isText.test(this.password)) {
            this.passwordError = true;
            this.passErrMsg = '請勿包含特殊字元如-*/?,.:;"';
        }
        else if (this.password.length < 6) {
            this.passwordError = true;
            this.passErrMsg = '請勿少於6個字';
        }
        else if (this.password.length > 15) {
            this.passwordError = true;
            this.passErrMsg = '請勿超過15個字';
        }
        else if (!include.test(this.password)) {
            this.passwordError = true;
            this.passErrMsg = '至少包括一個大小寫字母或數字';
        }
        else {
            this.passwordError = false;
        }
    },
    email: function () {
        var isMail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        if (!isMail.test(this.email)) {
            this.emailError = true;
            this.emailErrMsg = 'email格式錯誤';
        }
        else {
            this.emailError = false;
        }
        },
    

    }

);

