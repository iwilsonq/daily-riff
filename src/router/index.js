import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Upload from '@/components/Upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    }
  ]
})
