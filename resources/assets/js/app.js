
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import VueRouter from 'vue-router';
require('./bootstrap');

window.Vue = require('vue');
Vue.use(VueRouter);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 //import vue router from router.js to app.js
 import router from './routes.js';

Vue.component('ninja-page', require('./components/Ninja_Layout.vue'));
// Vue.component('landing-page', require('./components/Landing.vue'));
// Vue.component('landing-page-2', require('./components/Landing-Page-2.vue'));
// Vue.component('landing-page-3', require('./components/Landing-Page-3.vue'));
// Vue.component('landing-page-4', require('./components/Landing-Page-About.vue'));
// Vue.component('landing-page-5', require('./components/Landing-Page-Base.vue'));
// Vue.component('footer-layout', require('./components/Footer.vue'));

const app = new Vue({
    el: '#ninja-roofing',
    router
});
