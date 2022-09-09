import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DrinksAlcool from '../views/DrinksAlcool.vue'
import DrinksNotAlcool from '../views/DrinksNotAlcool.vue'
import IngredientsView from '../views/IngredientsView.vue'
import ChampagneFlute from '../views/ChampagneFlute.vue'
import CocktailGlass from '../views/CocktailGlass.vue'
import OrdinaryCocktail from '../views/OrdinaryDrink.vue'
import CocktailsView from '../views/CocktailsView.vue'
import DrinkRead from '../components/DrinkRead.vue'
import IngredientRead from '../components/IngredientRead.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/drinksAlcool',
    name: 'drinksAlcool',
    component: DrinksAlcool
  },
  {
    path: '/drinksNotAlcool',
    name: 'drinksNotAlcool',
    component: DrinksNotAlcool
  },
  {
    path: '/IngredientsView',
    name: 'IngredientsView',
    component: IngredientsView
  },
  {
    path: '/ChampagneFlute',
    name: 'ChampagneFlute',
    component: ChampagneFlute
  },
  {
    path: '/CocktailGlass',
    name: 'CocktailGlass',
    component: CocktailGlass
  },
  {
    path: '/OrdinaryCocktail',
    name: 'OrdinaryCocktail',
    component: OrdinaryCocktail
  },
  {
    path: '/CocktailsView',
    name: 'CocktailsView',
    component: CocktailsView
  },
  {
    path: '/drink/:id',
    name: 'drink',
    component: DrinkRead
  },
  {
    path: '/ingredient/:id',
    name: 'ingredient',
    component: IngredientRead
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
