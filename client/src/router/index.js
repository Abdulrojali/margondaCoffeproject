import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/loginRegisterView/login.vue'
import registers from '@/views/loginRegisterView/registers.vue'
import Home from '@/views/home.vue'
import dashboardHome from '@/views/dashboardHome.vue'
import landingpage from '@/views/landingpage.vue'


import homeDashboard from '@/views/dashboard/home.vue'
import menuDashboard from '@/views/dashboard/menu.vue'
import searchDashboard from '@/views/dashboard/settings.vue'
import transaksiDashboard from '@/views/dashboard/transaksi.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'landingpage',
      component:landingpage
    },
    {
      path:'/home',
      name:'home',
      component:Home,
      children:[
        {
          path:'login',
          name:'login',
          component:login
        },
        {
          path:'registers',
          name:'registers',
          component:registers
        },
      ]
    },
    {
      path:'/dashboard',
      name:'dashboard',
      children:[
        {name:'dashboardHome',path:'halamanUtama',component:homeDashboard},
        {name:'dashboardMenu',path:'menu',component:menuDashboard},
        {name:'dashboardTransaksi',path:'transaksi',component:transaksiDashboard},
      ],     
      component:dashboardHome
    }
  ],
})

export default router
