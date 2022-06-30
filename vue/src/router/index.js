import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Main from '@/views/Main'
import Place from '@/views/num/Place'
import Number from '@/views/num/Number'
import Test from '@/views/echarts/test'
import Region from '@/views/echarts/Region'
import Shmap from '@/views/echarts/Shmap'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/gomain',
      redirect:'Main'
    },
    {
      path: '/main/',
      name: 'Main',
      component: Main,
      children:[
        {
          path: '/num/place/',
          name: 'Place',
          component: Place
        },
        {
          path: '/num/Number/',
          name: 'Number',
          component: Number
        },
        {
          path: '/echarts/test',
          name: 'Test',
          component: Test
        },
        {
          path: '/echarts/region',
          name: 'Region',
          component: Region
        },
        {
          path: '/echarts/shmap',
          name: 'Shmap',
          component: Shmap
        },
      ]
    }
    
  ]
})
