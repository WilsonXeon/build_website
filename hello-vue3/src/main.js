import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')
var app=new Vue({
    el:'#app',
    data:{
     message:'hello world!'
    }
   });