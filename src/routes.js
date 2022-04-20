import Home from './views/Home.vue';
import Order from "./views/Order.vue";
import CarPageView from "./views/CarPageView.vue";

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'carPageView', path: '/:carPageSlug', component: CarPageView },
	{ name: 'order', path: '/:carPageSlug/order', component: Order },
];