<template>
  <SearchByIngredient></SearchByIngredient>
  <section class="box_sizing">
    <AllIngredients v-for="item in data" :key="item.idIngredient" :id="item.idIngredient" :title="item.strIngredient1"></AllIngredients>
  </section>
</template>

<script>
import ApiService from '@/services/ApiService.js'
import SearchByIngredient from '@/components/SearchByIngredient.vue'
import AllIngredients from '@/components/AllIngredients.vue'

const apiService = new ApiService()
export default {
  name: 'IngredientsView',
  components: {
    AllIngredients, SearchByIngredient
  },
  data () {
    return {
      data: [],
      dataSearchIngredient: [],
      type: 'ingredient'
    }
  },
  mounted () {
    this.AllIngredients()
  },
  methods: {
    async AllIngredients () {
      const res = await apiService.getIngredientsList()
      const ingredient = await res.json()
      this.data = ingredient.drinks
      console.log(ingredient.drinks)
    }
  }
}
</script>
