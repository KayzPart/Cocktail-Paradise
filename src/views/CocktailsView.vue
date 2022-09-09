<template>
  <h1>
    Nos cocktails
  </h1>
  <SearchCocktail></SearchCocktail>
  <section class="box_sizing">
    <AllDrinks v-for="item in data" :key="item.idDrink" :id="item.idDrink" :title="item.strDrink"
      :poster="item.strDrinkThumb" :ingredient="item.strIngredient"></AllDrinks>
  </section>
</template>

<script>
import AllDrinks from '@/components/AllDrinks.vue'
import SearchCocktail from '@/components/SearchCocktail.vue'
import ApiService from '@/services/ApiService.js'

const apiService = new ApiService()
export default {
  name: 'CocktailsView',
  components: {
    AllDrinks, SearchCocktail
  },
  data () {
    return {
      data: [],
      type: 'drink'
    }
  },
  mounted () {
    this.AllCocktails()
  },
  methods: {
    async AllCocktails () {
      const res = await apiService.getCocktail()
      const drinks = await res.json()
      this.data = drinks.drinks
    }
  }
}
</script>
