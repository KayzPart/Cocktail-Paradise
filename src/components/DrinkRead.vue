<template>
  <h1>{{ data.strDrink }}</h1>
  <article class="section_readCocktail">
    <figure>
      <img :src="data.strDrinkThumb" :alt="data.strDrink">
    </figure>
    <section class="content">
      <div class="instructions">
        <h2>Son histoire</h2>
        <p>
          {{ data.strInstructionsIT }}
        </p>
      </div>
      <h2>Ingrédients</h2>
      <div class="ingredients">
        <p v-for="item in dataIngredient" :key="item" class="ingredient_item">
          <img :src="'https://www.thecocktaildb.com/images/ingredients/'+ item + '-Medium.png'" :alt="item">
          {{ item }}
        </p>
      </div>
    </section>
  </article>
</template>

<script>
import ApiService from '@/services/ApiService.js'
const apiService = new ApiService()

export default {
  name: 'DrinkRead',
  data () {
    return {
      data: null,
      dataIngredient: [],
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
      const baseIng = 'strIngredient'
      let nbr = 1
      let currentIng = baseIng + nbr
      while (drinks.drinks[0][currentIng] !== null) {
        nbr++
        this.dataIngredient.push(drinks.drinks[0][currentIng])
        currentIng = baseIng + nbr
        console.log(currentIng)
        // console.log(drinks.drinks[0][currentIng])
      }
    }
  }
}
</script>
<style scoped>
.section_readCocktail {
  background-color: #F7EDB4;
  width: 80%;
  padding: 50px;
}
.section_readCocktail, .section_readCocktail figure{
  margin: 0 auto;
}
.section_readCocktail figure{
  margin-bottom: 50px;
}
.content {
  background-color: #86C3B9;
  padding: 20px 0;
}
p{
  font-size: 18px;
}
h1{
  font-size: 40px;
  text-align: center;
  margin: 20px 0;
}
h2{
  font-size: 30px;
  text-align: center;
  margin: 20px 0;
  color: #ffff;
}
figure,
img {
  width: 400px;
  height: 400px;
}

img {
  object-fit: cover;
}
.instructions{
  width: 80%;
  margin: 0 auto;
}
.ingredients{
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
}
.ingredients p{
  margin: 20px;
  padding: 20px;
}
.ingredient_item{
  width: 200px;
  height: 200px;
}
.ingredient_item img{
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 850px){
  .ingredient_item{
    width: 150px;
    height: 150px;
  }
  figure, img{
    width: 350px;
    height: 350px;
  }
}
@media screen and (max-width: 650px){
  figure, img{
    width: 300px;
    height: 300px;
  }
  .ingredient_item{
    width: 100px;
    height: 100px;
  }
}
@media screen and (max-width: 520px){
  p{
    font-size: 16px;
  }
  h1{
    font-size: 35px;
  }
  h2{
    font-size: 25px;
  }
  figure, img{
    width: 250px;
    height: 250px;
  }
  .ingredients p{
    margin: 0;
  }
  .section_readCocktail{
    width: 100%;
    padding: 20px;
  }
  .section_readCocktail figure{
     margin-bottom: 20px;
  }
}
</style>
