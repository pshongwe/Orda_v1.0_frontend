// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Orders from '@/components/OrdaOrders.vue';
import About from '@/components/OrdaAbout.vue';
import LandingPage from '@/components/LandingPage.vue';
// import Restaurant from '@components/OrdaRestaurant';

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: LandingPage
    },
    {
        path: '/orders',
        name: 'Orders',
        component: Orders
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), // use the history mode
    routes // short for `routes: routes`
});

export default router;