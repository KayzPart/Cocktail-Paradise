<template>
<SliderCocktails />
  <div id="homepage">
    <h1>Découvrez nos cocktails les plus populaires</h1>
    <div class="popular_cocktails">
      <DrinksPopular v-for="item in data.slice(0, 5)" :key="item.idDrink" :id="item.idDrink" :title="item.strDrink" :poster="item.strDrinkThumb"></DrinksPopular>
    </div>
    <h1>Découvrez nos nouveautés</h1>
    <div class="news_cocktails">
      <DrinksNews v-for="item in dataLatest.slice(0, 4)" :key="item.idDrink" :id="item.idDrink" :title="item.strDrink" :poster="item.strDrinkThumb"></DrinksNews>
    </div>
  </div>
</template>

<script>
import SliderCocktails from '@/components/SliderCocktails.vue'
import DrinksPopular from '@/components/DrinksPopular.vue'
import DrinksNews from '@/components/DrinksNews.vue'
import ApiService from '@/services/ApiService.js'

const apiService = new ApiService()

export default {
  name: 'HomeView',
  el: '#homepage',
  components: {
    SliderCocktails, DrinksPopular, DrinksNews
  },
  data () {
    return {
      data: [],
      dataLatest: [],
      type: 'drink'
    }
  },
  mounted () {
    this.DrinksPopular()
    this.DrinksLatest()
  },
  methods: {
    async DrinksPopular () {
      const res = await apiService.getDrinksHomepage()
      const drinks = await res.json()
      this.data = drinks.drinks
    },
    async DrinksLatest () {
      const res = await apiService.getDrinksLatest()
      const drinksLatest = await res.json()
      this.dataLatest = drinksLatest.drinks
    }
  }
}
</script>

<style scoped>
h1{
  font-size: 40px;
  text-align: center;
  margin: 20px 0;
}
/* Cocktails populaires */
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

/* Nouveautés cocktails */
.news_cocktails{
  width: 100%;
  height: 300px;
  background-color: #d9d9d935;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.news_cocktails a{
  filter: grayscale(50%);
  transition: .2s ease-in-out;
}
.news_cocktails a:hover{
  filter: grayscale(0%);
}
.news_cocktails a{
  width: 250px;
  height: 250px;
}

/* Media query */
@media screen and (max-width: 1020px){
  .news_cocktails a{
  width: 200px;
  height: 200px;
  }
  .news_cocktails{
    height: 200px;
  }
}
@media screen and (max-width:990px){
  .popular_cocktails{
    width: 90%;
  }
  h1{
    font-size: 30px;
  }
}
@media screen and (max-width: 800px){
  .news_cocktails{
    height: auto;
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
  .news_cocktails a{
  width: 150px;
  height: 150px;
  }
}
</style>
