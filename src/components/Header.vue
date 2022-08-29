<template>
    <header class="row-limit-size">
    <div id="background-header-filter">
      <section class="little_header">
        <router-link to="/">
          <figure>
            <img src="../assets/cocktail_logo.png" alt="">
          </figure>
        </router-link>
        <BurgerMenu></BurgerMenu>
      </section>
    </div>
  </header>
</template>

<script>
import BurgerMenu from '@/components/BurgerMenu.vue'
export default {
  name: 'HeaderView',
  components: {
    BurgerMenu
  }
}
</script>

<style scoped>
/* Header for all pages */
header {
  height: 100vh;
  background-image: url(../assets/backgroundHeader.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#background-header-filter {
  position: relative;
  height: 100%;
  background-color: #f1a2416e;
}
#background-header-filter::after{
  position: absolute;
  top: 50%;
  z-index: 1;
  /* content: ""; */
  background-image: url(../assets/palm_tree_body2.png);
  background-repeat: no-repeat;
  background-size: contain;
  height: 2550px;
  width: 2550px;
  transform: translateY(50%) rotate(-90deg);
}

.little_header {
  height: 150px;
  background-color: #f1A141;
  opacity: 0.85;
  width: 100%;
  position: fixed;
  z-index: 8;
}
.little_header > a{
  display: block;
  width: 300px;
  height: 150px;
}
.little_header figure{
  width: 100%;
  height: 100%;
}
.little_header figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 750px){
  .little_header > a {
    width: 200px;
  }
  .little_header figure img {
  object-fit: contain;
  }
}
@media screen and (max-width: 420px){
  .little_header > a {
    width: 150px;
  }
}
</style>
