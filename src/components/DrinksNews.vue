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
  name: 'DrinksNews',
  props: ['id', 'title', 'poster']
}
</script>
<style scoped>
  figure, img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  img{
    object-fit: cover;
    object-position: center center;
    border: 3px solid #fff;
    position: relative;
  }
  .title{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  h3{
    position: absolute;
    bottom: 100px;
    /* bottom: 150px; */
    color: #ffffff;
    font-size: 25px;
    /* text-shadow: 1px 1px 0 #FFF3AA, 1px -1px 0 #FFF3AA, -1px 1px 0 #FFF3AA, -1px -1px 0 #FFF3AA, 1px 0px 0 #FFF3AA, 0px -1px 0 #FFF3AA, 1px 1px 1px rgba(255,243,170,0); */
  }
  h3::after{
    content: "";
    position: absolute;
    bottom: 15px;
    margin-left: 2px;
    background-image: url(../assets/option-de-commentaire-de-bulles.png);
    background-size: cover;
    width: 20px;
    height: 20px;
  }

  /* Media query */
  @media screen and (max-width: 1020px){
    h3{
      font-size: 20px;
      bottom: 90px;
    }
  }
  @media screen and (max-width: 900px){
    h3{
      font-size: 15px;
    }
  }
  @media screen and (max-width: 420px){
    h3{
      bottom: 65px;
    }
    h3:after{
      width: 15px;
      height: 15px;
      margin-left: 0;
    }
  }
</style>
