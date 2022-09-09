<template>
  <div class="search_sections">
    <input class="input_search" @input="search = $event.target.value" placeholder="Recherchez votre cocktail">
    <div class="content-cocktail" v-if="data != null">
      <p>
        Voici votre cocktail ! 😁
      </p>
      <div class="box_sizing">
        <AllDrinks v-for="item in data" :key="item.idDrink" :id="item.idDrink" :title="item.strDrink"
        :poster="item.strDrinkThumb" :ingredient="item.strIngredient"></AllDrinks>
      </div>
    </div>
    <div v-else class="search_not_result">
      <p>Aucun cocktail trouver ! 🙄</p>
    </div>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService.js'
import AllDrinks from '@/components/AllDrinks.vue'
const apiService = new ApiService()

export default {
  name: 'SearchCocktail',
  components: {
    AllDrinks
  },
  data () {
    return {
      data: null,
      search: 'code'
    }
  },
  BeforeMount () {
    this.searchCocktail(this.search)
  },
  watch: {
    search () {
      this.searchCocktail(this.search)
    }
  },
  methods: {
    async searchCocktail (search) {
      const res = await apiService.getSearchCocktail(search)
      const cocktail = await res.json()
      this.data = cocktail.drinks
    }
  }
}
</script>

<style scoped>
.input_search{
  width: 400px;
  height: 30px;
  border-radius: 10px;
  border: none;
  margin: 20px;
}
.search_sections{
  text-align: center;
}
.search_not_result > p{
  font-size: 20px;
  text-align: center;
  color: rgb(0, 0, 0);
}
.input_search::placeholder{
  text-align: center;
  font-size: 18px;
}
.cocktail{
  display: flex;
  justify-content: space-around;
  /* flex-wrap: wrap; */
}
.ingredients > p{
  font-size: 20px;
  text-align: center;
}
</style>
