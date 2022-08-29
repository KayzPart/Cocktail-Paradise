<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>

    <div class="modale card">
      <!--<div v-on:click="toggleModale" class="btn-modale">X</div>-->
      <nav id="main-nav">
        Rechercher par
        <ul>
          <li>
            <router-link to="/drinksAlcool">
              <figure>
                <img src="../assets/verre.png" alt="">
              </figure>
              Recette cocktail avec alcool
            </router-link>
          </li>
          <li>
            <router-link to="/drinksNotAlcool">
              <figure>
                <img src="../assets/verre.png" alt="">
              </figure>
              Recette cocktail sans alcool
            </router-link>
          </li>
          <li>
            <a href="">
              <figure>
                <img src="../assets/categorie.png" alt="">
              </figure>
              Catégories
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img src="../assets/ingredients.png" alt="">
              </figure>
              Ingrédients
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img src="../assets/verre-deau.png" alt="">
              </figure>
              Verres
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img src="../assets/biere.png" alt="">
              </figure>
              Champagne
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import AllDrinks from '@/components/AllDrinks.vue'
import ApiService from '@/services/ApiService.js'
export default {
  name: 'ModaleMenu',
  components: AllDrinks,
  props: ['revele', 'toggleModale']
}
</script>

<style scoped>
.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  /* left: 0; */
  right: 20%;z-index: 8;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modale {
  background: #f1a241ce;
  width: 500px;
  color: #333;
  padding: 50px;
  position: fixed;
  top: 5%;
}

/* .btn-modale {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  transition: color .15s;
  font-size: 40px;
} */
#main-nav, #main-nav a{
  color: #ffff;
  font-size: 30px;
}
#main-nav li {
  padding: 10px 0;
}
#main-nav a {
  display: flex;
  align-items: center;
  text-decoration: none;
}
#main-nav ul li {
  list-style: none;
}
#main-nav figure{
  margin-right: 15px;
  width: 50px;
  height: 50px;
}
#main-nav img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 860px){
  .modale{
    padding: 20px;
    width: 400px;
  }
  #main-nav, #main-nav a{
  font-size: 20px;
  }
  #main-nav figure{
    width: 35px;
    height: 35px;
  }
}
@media screen and (max-width: 700px){
  #main-nav, #main-nav a{
  font-size: 15px;
  }
  #main-nav figure{
    width: 25px;
    height: 25px;
  }
}
@media screen and (max-width: 650px){
  .modale{
    right: 2px;
    width: 300px;
  }
}
@media screen and (max-width: 550px){
  .modale{
    width: 200px;
    padding: 10px;
  }
}
</style>
