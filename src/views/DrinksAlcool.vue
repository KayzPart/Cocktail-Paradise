<template>
  <h1>
    Nos cocktails avec alcool
  </h1>
  <SearchCocktail></SearchCocktail>
  <section class="box_sizing">
    <AllDrinks v-for="item in data" :key="item.idDrink" :id="item.idDrink" :title="item.strDrink" :poster="item.strDrinkThumb" :ingredient="item.strIngredient"></AllDrinks>
  </section>
  <PaginationVue></PaginationVue>
</template>

<script>
import AllDrinks from '@/components/AllDrinks.vue'
import SearchCocktail from '@/components/SearchCocktail.vue'
import PaginationVue from '@/components/PaginationVue.vue'
import ApiService from '@/services/ApiService.js'

const apiService = new ApiService()
export default ({
  name: 'HomeView',
  el: '#homepage',
  components: {
    AllDrinks, SearchCocktail, PaginationVue
  },
  data () {
    return {
      data: [],
      type: 'drink'
    }
  },
  mounted () {
    this.AllDrinksAlcool()
  },
  methods: {
    async AllDrinksAlcool () {
      const res = await apiService.getDrinkAlcool()
      const drinks = await res.json()
      this.data = drinks.drinks
    }
  }
})
</script>
