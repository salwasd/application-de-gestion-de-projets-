import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import AboutView from '../views/AboutView.vue'
import TheLogin from '../views/TheLogin.vue'
import signup from '../views/signup.vue'
import projets from '../views/projets.vue'
import addPrj from '../components/addPrj.vue'
import clients from '../views/clients.vue'
import addclt from '../views/addclt.vue'
import prjx from '../views/prjx.vue'
import facture from '../views/facture.vue'
import cltx from '../views/cltx.vue'
import home2 from '../views/home2.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: TheLogin
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/projets',
    name: 'projets',
    component: projets
  },
  {
    path: '/addPrj',
    name: 'addPrj',
    component: addPrj
  },
  {
    path: '/clients',
    name: 'clients',
    component: clients
  },
  {
    path: '/addclt',
    name: 'addclt',
    component: addclt
  },
  {
  path: '/prjx',
  name: 'prjx',
  component: prjx,
  props: true
},
{
  path: '/facture',
  name: 'facture',
  component: facture
},
{
  path: '/cltx',
  name: 'cltx',
  component: cltx,
  props: true
},
{
  path: '/home2',
  name: 'home2',
  component: home2
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
