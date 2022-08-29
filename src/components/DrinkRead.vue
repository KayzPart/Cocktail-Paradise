<template>
  <h1>coucou</h1>
  <p>{{data.strDrink}}</p>
</template>

<script>
import ApiService from '@/services/ApiService.js'

const apiService = new ApiService()

export default {
  name: 'DrinkRead',
  data () {
    return {
      data: null,
      id: this.$route.params.id
    }
  },
  created () {
    this.ReadDrink(this.id)
  },
  methods: {
    async ReadDrink (id) {
      const res = await apiService.getRead(id)
      const drinks = await res.json()
      this.data = drinks.drinks[0]
    }
  }
}
</script>
