<template>
  <router-link :to="{ name: 'drink', params: { id: id } }">
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
  name: 'DrinksPopular',
  props: ['id', 'title', 'poster']
}
</script>
<style scoped>
  figure, img{
    width: 100%;
    height: 100%;
  }

  img{
    object-fit: cover;
    object-position: top center;
    border: 3px solid #FFF;
    position: relative;
  }
  .title{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3{
    position: absolute;
    bottom: 150px;
    color: #ffffff;
    font-size: 35px;
    text-shadow: 1px 1px 0 #FFF3AA, 1px -1px 0 #FFF3AA, -1px 1px 0 #FFF3AA, -1px -1px 0 #FFF3AA, 1px 0px 0 #FFF3AA, 0px -1px 0 #FFF3AA, 1px 1px 1px rgba(255,243,170,0);
  }
  h3::after{
    content: "";
    position: absolute;
    bottom: 20px;
    margin-left: 2px;
    background-image: url(../assets/option-de-commentaire-de-bulles.png);
    background-size: cover;
    width: 30px;
    height: 30px;
  }

/* Media query */
@media screen and (max-width: 1185px){
  h3{
    font-size: 30px;
  }
}
@media screen and (max-width: 990px){
  h3{
    font-size: 25px;
  }
  h3:after{
    width: 25px;
    height: 25px;
    bottom: 15px;
  }
}
@media screen and (max-width: 660px){
  h3{
    font-size: 20px;
  }
  h3:after{
    width: 20px;
    height: 20px;
    bottom: 10px;
  }
}
@media screen and (max-width: 530px){
  h3{
    bottom: 90px;
    font-size: 15px;
    text-shadow: initial;
  }
  h3:after{
    width: 15px;
    height: 15px;
  }
}
@media screen and (max-width: 420px){
  h3{
    font-size: 13px;
  }
  h3:after{
    width: 10px;
    height: 10px;
  }
}

</style>
