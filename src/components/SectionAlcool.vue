<template>
  <router-link to="/drinksAlcool">
    <figure>
      <img :src="poster" :alt="title">
      <div class="title">
        <h3>{{title}}</h3>
      </div>
    </figure>
  </router-link>
</template>
<script>
export default {
  name: 'SectionAlcool',
  props: ['id', 'title', 'poster', 'ingredient']
}
</script>
<style scoped>
a{
  width: 400px;
  height: 400px;
}
figure, img{
  width: 100%;
  height: 100%;
}
img{
  object-fit: cover;
  object-position: center center;
  border: 3px solid #fff;
}
.title{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
h3{
  position: absolute;
  bottom: 180px;
  font-size: 25px;
  color: #ffff;
}

/* Media querry */
@media screen and (max-width: 800px){
  img{
    object-fit: contain;
  }
}
@media screen and (max-width:530px){
  a{
  width: 300px;
  height: 300px;
  }
  h3{
    bottom: 140px;
  }
}
</style>
