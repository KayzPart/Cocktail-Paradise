<template>
  <div class="search_section">
    <input class="input_search" @input="search = $event.target.value" placeholder="Faites une recherche par ingrédients"/>
    <div class="ingredients" v-if="dataIngredient != null">
      <p>
        Nous avons trouvez votre ingrédient ! 😁
      </p>
        <AllIngredients v-for="item in dataIngredient" :key="item.idIngredient" :id="item.idIngredient"
        :title="item.strIngredient"></AllIngredients>
    </div>
    <div v-else class="search_not_result">
      <p>Aucun ingrédient trouver ! 🙄</p>
    </div>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService.js'
import AllIngredients from '@/components/AllIngredients.vue'
const apiService = new ApiService()

export default {
  name: 'SearchByIngredient',
  components: {
    AllIngredients
  },
  data () {
    return {
      dataIngredient: null,
      search: 'code'
    }
  },
  BeforeMount () {
    this.searchIngredients(this.search)
  },
  watch: {
    search () {
      this.searchIngredients(this.search)
    }
  },
  methods: {
    async searchIngredients (search) {
      const res = await apiService.getSearchByIngredient(search)
      const ingredient = await res.json()
      this.dataIngredient = ingredient.ingredients
    }
  }
}
</script>
<style>
.search_section{
  width: 450px;
  margin: 0 auto;
}
.input_search{
  width: 400px;
  height: 30px;
  border-radius: 10px;
  border: none;
  margin: 20px;
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
.ingredients{
  margin: 0 auto;
  width: 350px;
}
.ingredients > p{
  font-size: 20px;
  text-align: center;
}
</style>
