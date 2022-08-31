<template>
    <section class="boxs_ingredients">
      <div class="boxs_content">
        <figure>
          <img src="" alt="">
        </figure>
        <div class="title_ingredient">
          <img :src="'https://www.thecocktaildb.com/images/ingredients/'+ title + '-Medium.png'" :alt="title">
          <h3>{{ title }}</h3>
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
