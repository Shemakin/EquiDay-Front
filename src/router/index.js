import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/components/LoginPage.vue';
import MainPage from "@/components/MainPage.vue";
import registerPage from "@/components/RegisterPage.vue";
import ResetPasword from "@/components/ResetPasword.vue";

const routes = [
    {
        path: '/',
        name: 'Main',
        component: MainPage,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
    },
    {
        path: "/signup",
        name: "RegisterPage",
        component: registerPage,
    },
    {
        path: "/reset-password",
        name: "ResetPassword",
        component:ResetPasword,
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
