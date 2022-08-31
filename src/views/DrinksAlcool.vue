<template>
  <section class="box_sizing">
    <AllDrinks v-for="item in data" :key="item.idDrink" :id="item.idDrink" :title="item.strDrink" :poster="item.strDrinkThumb" :ingredient="item.strIngredient"></AllDrinks>
  </section>
</template>

<script>
import AllDrinks from '@/components/AllDrinks.vue'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import ApiService from '@/services/ApiService.js'

const apiService = new ApiService()
export default ({
  name: 'HomeView',
  el: '#homepage',
  components: {
    AllDrinks
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
