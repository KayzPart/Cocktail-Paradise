<template>
<SliderCocktails />
  <div id="homepage">
    <h1>Découvrez nos cocktails les plus populaires</h1>
    <div class="popular_cocktails">
      <DrinksPopular v-for="item in data.slice(0, 5)" :key="item.idDrink" :id="item.idDrink" :title="item.strDrink" :poster="item.strDrinkThumb"></DrinksPopular>
    </div>
  </div>
</template>

<script>
import DrinksPopular from '@/components/DrinksPopular.vue'
import SliderCocktails from '@/components/SliderCocktails.vue'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import ApiService from '@/services/ApiService.js'

const apiService = new ApiService()
export default ({
  name: 'HomeView',
  el: '#homepage',
  components: {
    DrinksPopular, SliderCocktails
  },
  data () {
    return {
      data: [],
      type: 'drink'
    }
  },
  mounted () {
    this.DrinksPopular()
  },
  methods: {
    async DrinksPopular () {
      const res = await apiService.getDrinksHomepage()
      const drinks = await res.json()
      this.data = drinks.drinks
    }
  }
})
</script>

<style scoped>
h1{
  font-size: 40px;
  text-align: center;
}
.popular_cocktails{
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.popular_cocktails a{
  filter: grayscale(50%);
  transition: .2s ease-in-out;
}
.popular_cocktails a:hover{
  filter: grayscale(0%);
}
.popular_cocktails > a:nth-child(1){
  width: 60%;
  height: 400px;
}

.popular_cocktails > a:nth-child(2){
  width: 40%;
  height: 400px;
}
.popular_cocktails > a:nth-child(3){
  width: 33.33%;
  height: 333px;
}
.popular_cocktails > a:nth-child(4), .popular_cocktails > a:nth-child(5){
  width: 33.33%;
  height: 333px;
}

/* Media query */
@media screen and (max-width:990px){
  .popular_cocktails{
    width: 90%;
  }
}
@media screen and (max-width:990px){
  h1{
    font-size: 30px;
  }
}
@media screen and (max-width:530px){
  .popular_cocktails > a:nth-child(1), .popular_cocktails > a:nth-child(2), .popular_cocktails > a:nth-child(3), .popular_cocktails > a:nth-child(4), .popular_cocktails > a:nth-child(5){
    height: 200px;
  }
}
@media screen and (max-width: 420px){
  .popular_cocktails{
    width: 95%;
  }
}
</style>
