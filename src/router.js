import Vue from 'vue'
import Router from 'vue-router'
import signInComponent from './pages/signIn'
import homeComponent from './pages/home'
import tableComponent from './pages/home/children/table'

Vue.use(Router)

export default new Router({
  routes: [
    { path:'/',redirect:'/signIn'},
    { path: '/signIn', component: signInComponent },
    { path: '/home',
    component: homeComponent ,
    children:[
      { path: 'table',
        component: tableComponent
      }

    ],

  }
  ]
})
