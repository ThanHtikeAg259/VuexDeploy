import Home from "./pages/Home.vue";
import Product from "./pages/Product.vue"
import About from "./pages/About.vue"

export default [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/product/:id',
    component: Product,
    name: 'product',
    props: true
  },
  {
    path: '/about',
    component: About,
    name: 'about'
  }
]