import routes from "~pages";
import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";

export default {
  install(app, _options) {

    const router = createRouter({
        history: createWebHistory(),
        routes,
        scrollBehavior(_to, _from, _savedPosition) {
            // always scroll to top
            return { top: 0 }
        },
    });
    router.beforeResolve((to, _from, next) => {
        // If this isn't an initial page load.
        if (to.name) {
            // Start the route progress bar.
            NProgress.start();
        }
        next();
    });
    router.afterEach((_to, _from) => {
        // Complete the animation of the route progress bar.
        NProgress.done();
    });
    app.use(router);
  }
}