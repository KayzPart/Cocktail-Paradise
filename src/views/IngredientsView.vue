<template>
  <section class="box_sizing">
    <AllIngredients v-for="item in data" :key="item" :title="item.strIngredient1"></AllIngredients>
  </section>
</template>

<script>
import ApiService from '@/services/ApiService.js'
import AllIngredients from '@/components/AllIngredients.vue'

const apiService = new ApiService()
export default {
  name: 'IngredientsView',
  components: {
    AllIngredients
  },
  data () {
    return {
      data: [],
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
