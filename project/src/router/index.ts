import { createRouter, createWebHistory, RouteRecordRaw, } from 'vue-router'
import route from "./routes"

const routes: Array<RouteRecordRaw> = route

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
