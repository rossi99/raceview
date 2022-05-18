// imports
import {createRouter, createWebHistory} from "vue-router";

// components for routes
import landing from "@/components/landing";
import book from "@/components/bookings/book";
import track from "@/components/track/track";


// route defined
const routes = [
    { path: "/", name: "landing", component: landing},
    { path: "/book", name: "book", component: book},
    { path: "/track", name: "track", component: track},
];

// create router
const router = createRouter({
    history: createWebHistory(), // removes # that vue adds to URL
    routes,
});

export default router;