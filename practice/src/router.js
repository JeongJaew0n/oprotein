import Vue from "vue";
Vue.use(VueRouter);  //vue에서 공식 제공하는 플러그인은 Vue가 전역으로 선언되어 있다면, 자동으로 Vue.use를 호출한다.

import VueRouter from "vue-router";
import ToDo from './views/ToDoList.vue'

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: '/todo', component: ToDo }
    ]
})

export default router;
