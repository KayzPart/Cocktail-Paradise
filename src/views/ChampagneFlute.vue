<template>
  <h1>
    Nos recettes verres à champagnes
  </h1>
  <SearchCocktail></SearchCocktail>
  <section class="box_sizing">
    <AllDrinks v-for="item in data" :key="item.idDrink" :id="item.idDrink" :title="item.strDrink"
    :poster="item.strDrinkThumb" :ingredient="item.strIngredient"></AllDrinks>
  </section>
</template>

<script>
import AllDrinks from '@/components/AllDrinks.vue'
import ApiService from '@/services/ApiService.js'
import SearchCocktail from '@/components/SearchCocktail.vue'

const apiService = new ApiService()
export default {
  name: 'ChampagneFlute',
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
    this.AllChampagneFlute()
  },
  methods: {
    async AllChampagneFlute () {
      const res = await apiService.getChampagne()
      const drinks = await res.json()
      this.data = drinks.drinks
    }
  }
}
</script>
