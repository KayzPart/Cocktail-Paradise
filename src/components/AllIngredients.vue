<template>
  <section class="boxs_ingredients">
    <div class="ingredient">
      <figure>
        <img :src="'https://www.thecocktaildb.com/images/ingredients/'+ title + '-Medium.png'" :alt="title">
      </figure>
      <div class="title_ingredients">
        <h3>{{ title }}</h3>
      {{id}}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AllIngredients',
  props: ['id', 'title']
}
</script>
<style scoped>
.boxs_ingredients{
  width: 350px;
  height: 400px;
  padding-top: 40px;
  margin-top: 15px;
  z-index: 5;
  background-color: #d9d9d94d;
}
.ingredient{
  width: 100%;
  height: 100%;
}
.ingredient > figure {
  width: 70%;
  height: 70%;
  margin: 0 auto;
  padding-bottom: 30px;
}
.ingredient img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.title_ingredients{
  background-color: #56b1b9b2;
  width: 70%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
}
.title_ingredients h3{
  font-size: 20px;
  color: #ffff;
}
@media screen and (max-width: 400px){
  .boxs_ingredients{
    width: 250px;
    height: 300px;
    padding-top: 20px;
  }
  .ingredient > figure {
  width: 80%;
  padding-bottom: 20px;
}
}
</style>
