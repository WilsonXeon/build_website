

var app = new Vue({
    el: '#app',
    data: {
        username: '',
        
        usernameError: false,
        userErrMsg: '',

        password: '',
        password: null,
        passwordError: false,
        passErrMsg: '',

        name:'',
        name:null,

        email: '',
        email: null,
        emailError: false,
        emailErrMsg: '',

        tel:'',
        tel:null,
        telError: false,
        telErrMsg:'',

        selected1:'',
        selected1:null,
        selected2:'',
        message:'',

        date:'',
    },

    methods:{

        inputHandler(){

        let formData = {
            username: this.username,
            password: this.password,
            name: this.name,
            email: this.email,
            tel: this.tel,
            address: [this.selected1,this.selected2,this.message].join(''),           
            date: this.date
            };
    
        axios.post('', { formData })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err);
        });
        },
        },
        
    watch:{
        username: function () {
            let isText = /^[a-zA-Z0-9]+$/;
            if (!isText.test(this.username)) {
                this.usernameError = true;
                this.userErrMsg = '☹ 請勿包含特殊字元如-*/?,.:;"';
            }else if (!this.username) {
                this.usernameError = true;
                this.userErrMsg = '☹ 此欄必填';
            }
            else if (this.username.length > 10) {
                this.usernameError = true;
                this.userErrMsg = '☹ 請勿超過10個字';
            }
            else {
                this.usernameError = false;
            }
        },
    
    
    password: function () {
        let isText = /^[a-zA-Z0-9]+$/;
        let inclde = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,10}$/;
        if (!isText.test(this.password)) {
            this.passwordError = true;
            this.passErrMsg = '☹ 請勿包含特殊字元如-*/?,.:;"';
        }
        else if (!inclde.test(this.password)) {
            this.passwordError = true;
            this.passErrMsg = '☹ 至少包括一個大小寫字母或數字';
        }
        else if (this.password.length < 5) {
            this.passwordError = true;
            this.passErrMsg = '☹ 請勿少於5個字';
        }
        else if (this.password.length > 10) {
            this.passwordError = true;
            this.passErrMsg = '☹ 請勿超過10個字';
        }
        
        else {
            this.passwordError = false;
        }
    },
    email: function () {
        let isMail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        if (!isMail.test(this.email)) {
            this.emailError = true;
            this.emailErrMsg = '☹ 信箱格式錯誤';
        }
        else {
            this.emailError = false;
        }
        },
    
    tel: function () {
        let isTel = /^09[0-9]{8}$/;
        if (!isTel.test(this.tel)) {
            this.telError = true;
            this.telErrMsg = '☹ 手機號碼格式錯誤'; 
        }
        else{
            this.telError = false;
        }
      },   

   }
},
);

