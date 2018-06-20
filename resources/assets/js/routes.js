import VueRouter from 'vue-router';

let routes = [
        {
            name: 'Home',
            path: '/',
            component: require('./components/Landing.vue')
        },
        {
            name: 'Residential',
            path: '/residential',
            component: require('./views/Residential.vue')
        },
        {
            name: 'Re-roofing',
            path: '/re-roofing',
            component: require('./views/Re-roofing.vue')
        },
        {
            name: 'repairs-maintenance',
            path: '/repairs-maintenance',
            component: require('./views/Repairs-maintenance.vue')
        },
        {
            name: 'construction',
            path: '/new-construction',
            component: require('./views/Construction.vue')
        },
        {
            name: 'products',
            path: '/products',
            component: require('./views/Products.vue')
        },
        {
            name: 'contact',
            path: '/contact',
            component: require('./views/Contact.vue')
        },

];

export default new VueRouter({
    routes
});
