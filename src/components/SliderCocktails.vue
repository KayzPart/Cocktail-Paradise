<template>
  <div class="body-cocktail">
    <div class="slide_caraousel_data" v-for="item in data" :key="item.idDrink" :id="item.idDrink" :title="item.strDrink" :poster="item.strDrinkThumb"></div>
    <Carousel :items-to-show="2.5" :wrap-around="true" :autoplay="3000">
      <Slide v-for='slide in data' :key='slide'>
        <div class='carousel__item'>
          <img :src="slide.strDrinkThumb" :alt="slide.strDrink">
        </div>
      </Slide>

      <template #addons>
        <Pagination>
          <div class='carousel__item'>
            <img :src="slide.strDrinkThumb" :alt="slide.strDrink">
          </div>
        </Pagination>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
import ApiService from '@/services/ApiService.js'
const apiService = new ApiService()
export default {
  name: 'SliderCock"tails',
  components: {
    Carousel, Navigation, Slide, Pagination
  },
  data () {
    return {
      data: [],
      settings: {
        itemsToShow: 1,
        snapAlign: 'center'
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3.5,
          snapAlign: 'center'
        },
        // 1024 and up
        1024: {
          itemsToShow: 1,
          snapAlign: 'start'
        }
      }
    }
  },
  mounted () {
    this.SliderDrink()
  },
  methods: {
    async SliderDrink () {
      const res = await apiService.getSlider()
      const drinks = await res.json()
      this.data = drinks.drinks.slice(0, 5)
    }
  }
}
</script>
<style>
.carousel {
  width: 50%;
  margin: 0 auto;
}
.carousel__track, .carousel__slide{
  height: 100%;
}
.carousel__item, .carousel__item > img{
  width: 100%;
  height: 100%;
}
.carousel__item > img{
  object-fit: contain;
}
</style>
