import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
  {
    path: '/courses',
    name: 'courses',
    component: () => import(/* webpackChunkName: "about" */ '../views/Courses.vue')
  },
  {
    path: '/courses/:id',
    name: 'course',
    component: () => import(/* webpackChunkName: "about" */ '../views/CourseIntro.vue')
  },
  {
    path: '/create-course',
    name: 'create-course',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateCourse.vue')
  },
  {
    path: '/my-courses',
    name: 'my-courses',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyCourses.vue')
  },
  {
    path: '/add-lecture/:id',
    name: 'add-lecture',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddLecture.vue')
  },
  {
    path: '/books',
    name: 'books',
    component: () => import(/* webpackChunkName: "about" */ '../views/Books.vue')
  },
  {
    path: '/books/:id',
    name: 'book', 
    component: () => import(/* webpackChunkName: "about" */ '../views/BookIntro.vue')
  },
  {
    path: '/add-books',
    name: 'add-books',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddBooks.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import(/* webpackChunkName: "about" */ '../views/Categories.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
