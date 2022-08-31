<template>
  <h1>Ingredient titre </h1>
  <p>{{data.strIngredient}}</p>
</template>

<script>
import ApiService from '@/services/ApiService.js'
const apiService = new ApiService()

export default {
  name: 'IngredientRead',
  data () {
    return {
      data: null,
      id: this.$route.params.id
    }
  },
  created () {
    this.ReadIngredient(this.id)
  },
  methods: {
    async ReadIngredient (id) {
      const res = await apiService.getReadIngredient(id)
      const ingredient = await res.json()
      this.data = ingredient.ingredients[0]
    }
  }
}
</script>
