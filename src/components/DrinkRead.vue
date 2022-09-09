<template>
  <h1>{{ data.strDrink }}</h1>
  <article class="section_readCocktail">
    <div class="lookup">
      <figure>
        <img :src="data.strDrinkThumb" :alt="data.strDrink">
      </figure>
      <div class="instructions">
        <h2>Préparation</h2>
        <p>
          {{ data.strInstructions }}
        </p>
      </div>
    </div>
    <section class="content">
      <h2>Ingrédients</h2>
      <ul>
        <li v-for="(item, index) in dataIngredient" :key="index" v-on:click="ingredient">
          <div class="title_ingredient">
            <figure>
              <img :src="'https://www.thecocktaildb.com/images/ingredients/'+ item + '-Medium.png'" :alt="item">
            </figure>
          </div>
          <div class="display">
            <span>{{ dataMeasure[index] }}</span>
            <h4>{{ item }}</h4>
          </div>
        </li>
      </ul>
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
      dataMeasure: [],
      id: this.$route.params.id
      // Test carrousel
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
      const baseMeas = 'strMeasure'
      let nbr = 1
      let currentIng = baseIng + nbr
      let currentMeas = baseMeas + nbr
      while (drinks.drinks[0][currentIng] !== null & drinks.drinks[0][currentMeas] !== null) {
        nbr++
        this.dataIngredient.push(drinks.drinks[0][currentIng])
        currentIng = baseIng + nbr
        this.dataMeasure.push(drinks.drinks[0][currentMeas])
        currentMeas = baseMeas + nbr
      }
    }
  }
}
</script>
<style scoped>
  ul, li{
    text-decoration: none;
  }
p{
  font-size: 18px;
  text-align: center;
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
.section_readCocktail {
  background-color: #F7EDB4;
  width: 90%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
}
.section_readCocktail, .section_readCocktail figure{
  margin: 0 auto;
}
.lookup{
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgba(255, 255, 255, 0.479);
  padding: 20px;
  height: 100%;
  width: 50%;
  margin-right: 20px;
}
.lookup figure, .lookup img {
  width: 90%;
  height: 400px;
  border-radius: 10px;
}
.instructions{
  width: 80%;
  margin: 0 auto;
}

.content {
  background-color: #86C3B9;
  padding: 20px;
  width: 50%;
  height: 100%;
  border: 2px solid rgba(255, 255, 255, 0.479);
}
.content ul{
  margin: 0 auto;
  width: 100%;
}
.content ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content ul li .title_ingredient figure{
  width: 80px;
  height: 80px;
  margin: 10px;
}
.content ul li .title_ingredient figure img, .lookup figure img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.display{
  display: flex;
  margin-top: 10px;
}
.display h4{
  font-weight: 600;
  color: #fff;
  letter-spacing: 2px;
}
.display span{
  font-weight: 600;
  margin: 0 10px;
}
@media screen and (max-width: 1120px){
  .content ul li .title_ingredient figure{
  width: 70px;
  height: 70px;
  }
  .display{
    font-size: 14px;
  }
  p{
    font-size: 16px;
  }
}
@media screen and (max-width: 980px){
  .content ul li .title_ingredient figure{
  width: 60px;
  height: 60px;
  }
  .lookup figure{
    height: 300px;
  }
}
@media screen and (max-width: 850px){
  .section_readCocktail{
    flex-direction: column;
  }
  .lookup{
    margin-right: 0;
  }
  .lookup, .content{
    width: 100%;
  }
  .content ul{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .content ul li{
    flex-direction: column;
    margin: 10px;
  }
  .display{
    flex-direction: column;
    align-items: center;
  }
  .display span{
    margin-bottom: 10px;
  }
  .content ul li .title_ingredient figure{
    width: 80px;
    height: 80px;
  }
}
</style>
