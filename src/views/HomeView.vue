<template>
  <div id="homepage">
    <!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
    <AllDrinks v-for="item in data" :key="item.idDrink" :id="item.idDrink" :title="item.strDrink" :poster="item.strDrinkThumb"></AllDrinks>
  </div>
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
    this.AllDrinks()
  },
  methods: {
    async AllDrinks () {
      const res = await apiService.getDrinksHomepage()
      const drinks = await res.json()
      this.data = drinks.drinks
    }
  }
})
</script>
