import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import Hello from './components/Hello'

Vue.config.debug = true;
Vue.use(Router);

const routes = [
    { name:'hello', path:'/hello', component: Hello}
];

const router = new Router({
    routes:routes
});

new Vue({
    el: '#app',
    router:router,
    render (createElement){
        return createElement(App);
    }
});