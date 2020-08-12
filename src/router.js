import Vue from "vue";
import Router from "vue-router";
import NotFound from './views/404'
//引入nprogress（页面加载进度条）
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //这个样式必须引入
Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/user',
            // component: { render: h => h('router-view')},
            component: () =>
                import(/* webpackChunkName: "layouts" */ "./layouts/UserLayout"),
            children: [
                {
                    // 重定向
                    path: "/user",
                    redirect: "/user/login"
                },
                {
                    path: "/user/login",
                    name: 'login',
                    component: () =>
                        import(/* webpackChunkName: "user" */ "./views/User/Login")
                },
                {
                    path: "/user/register",
                    name: 'register',
                    component: () =>
                        import(/* webpackChunkName: "user" */ "./views/User/Register")
                }]
        },
        {
            path: "/",
            component: () =>
                import(/* webpackChunkName: "layout" */ "./layouts/BasicLayout"),
            children: [
                {
                    path: "/",
                    redirect: "/dashboard/analysis"
                },
                {
                    path: "/dashboard",
                    name: "dashboard",
                    component: { render: h => h("router-view") },
                    children: [{
                        path: "/dashboard/analysis",
                        name: "analysis",
                        component: () =>
                            import(/* webpackChunkName: "dashboard" */ "./views/Dashboard/Analysis")
                    }]
                }
            ]
        },
        // form
        // form
        {
            path: "/form",
            name: "form",
            component: { render: h => h("router-view") },
            meta: { icon: "form", title: "表单", authority: ["admin"] },
            children: [
                {
                    path: "/form/basic-form",
                    name: "basicform",
                    meta: { title: "基础表单" },
                    component: () =>
                        import(/* webpackChunkName: "form" */ "./views/Forms/BasicForm")
                },
                {
                    path: "/form/step-form",
                    name: "stepform",
                    hideChildrenInMenu: true,
                    meta: { title: "分布表单" },
                    component: () =>
                        import(/* webpackChunkName: "form" */ "./views/Forms/StepForm"),
                    children: [
                        {
                            path: "/form/step-form",
                            redirect: "/form/step-form/info"
                        },
                        {
                            path: "/form/step-form/info",
                            name: "info",
                            component: () =>
                                import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/Step1")
                        },
                        {
                            path: "/form/step-form/confirm",
                            name: "confirm",
                            component: () =>
                                import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/Step2")
                        },
                        {
                            path: "/form/step-form/result",
                            name: "result",
                            component: () =>
                                import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/Step3")
                        }
                    ]
                }
            ]
        },
        {
            path: "*",
            name: "404",
            component: NotFound
        }

    ]
});
// to 将要跳转的路由
// from 当前路由
// next 路由的控制参数，常用的有next(true)和next(false)
router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})


export default router