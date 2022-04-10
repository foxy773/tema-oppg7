import Home from './views/Home.vue';
import Order from "./views/Order.vue";
import Tempest from "./views/Tempest.vue";
import Fameux from "./views/Fameux.vue";

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'tempest', path: '/tempest', component: Tempest },
	{ name: 'fameux', path: '/fameux', component: Fameux },
	{ name: 'order', path: '/order', component: Order }
	
];