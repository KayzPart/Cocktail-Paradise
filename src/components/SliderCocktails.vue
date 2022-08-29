<template>
  <div class="body-cocktail">
    <Carousel :settings='settings' :breakpoints='breakpoints' :autoplay="3000">
      <Slide v-for='slide in 5' :key='slide'>
        <div class='carousel__item'>{{ slide }}
          <img :src="data.strDrinkThumb" :alt="data.strDrink">
        </div>
      </Slide>

      <template #addons>
        <Pagination />
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
  name: 'SliderCocktails',
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
      this.data = drinks.drinks[0]
    }
  }
}
</script>
<style>
.carousel__next {
  right: 2%;
}
.carousel__prev {
  left: 2%;
}
</style>
