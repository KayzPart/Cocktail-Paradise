<template>
  <footer>
      <div class="section_footer">
        <p>
          Site vitrine développer par <a href="https://www.tiffany-flore.fr/" target="_blank">Tiffany Flore</a>
        </p>
        <p>
          Site utilisant l'API de <a href="https://www.thecocktaildb.com/api.php" target="_blank">The Cocktail Db</a>
        </p>
      </div>
      <div class="section_footer">
        <router-link to="/">
          <figure>
            <img src="../assets/cocktail_logo.png" alt="">
          </figure>
        </router-link>
        <p>Copyright © 2022 by <a href="https://www.tiffany-flore.fr/" target="_blank">Tiffany Flore</a> - All Rights Reserved</p>
      </div>
      <div class="section_footer">
        <div class="reseaux">
          <p>Retrouvez-moi sur les réseaux :</p>
          <div class="logo">
            <a href="https://www.linkedin.com/in/tiffany-flore" target="_blank">
              <figure>
                <img src="../assets/linkedin.png" alt="logo-linkedin">
              </figure>
            </a>
            <a href="https://github.com/KayzPart" target="_blank">
              <figure>
                <img src="../assets/github.png" alt="logo-github">
              </figure>
            </a>
          </div>
        </div>
        <div class="contact">
          <p>Mes supports de contact :</p>
          <div class="logo">
            <a href="mailto:tiffany.flore.codeur@gmail.com" target="_blank">
              <figure>
                <img src="../assets/enveloppe-blanche.png" alt="logo-enveloppe">
              </figure>
            </a>
            <a href="tel:0778793785" target="_blank">
              <figure>
                <img src="../assets/tel-blanc.png" alt="logo-telephone">
              </figure>
            </a>
          </div>
        </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterView'
}
</script>
<style scoped>
footer{
  padding-bottom: 20px;
  background-color: #f1a241e8;
  display: flex;
}
.section_footer:nth-child(1){
  display: flex;
  flex-direction: column;
  align-self: end;
}
.section_footer:nth-child(1) p{
  padding: 5px;
}
.section_footer:nth-child(1) p, .section_footer:nth-child(1) a, .section_footer:nth-child(2) p, .section_footer:nth-child(2) a{
  color: #ffff;
  font-size: 18px;
}
.section_footer:nth-child(1) a, .section_footer:nth-child(2) a{
  font-weight: bold;
  color: #56b1b9;
}
.section_footer:nth-child(1) a:hover, .section_footer:nth-child(2) a:hover{
  color: #2c7c83;
}
.section_footer:nth-child(2){
  width: 400px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section_footer:nth-child(2) > a{
  width: 100%;
  height: 100%;
}
figure, img{
  width: 100%;
  height: 100%;
}
img{
  object-fit: contain;
}
.section_footer:nth-child(3){
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
}

.reseaux, .contact{
  padding: 20px;
}
.reseaux p, .contact p{
  color: #ffff;
  font-size: 18px;
  margin-bottom: 10px;
}
.logo{
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-around;
}
.logo figure, .logo img{
  width: 100%;
  height: 100%;
}

/* Media Query */
@media screen and (max-width: 900px){
  footer{
    flex-direction: column-reverse;
  }
  .section_footer:nth-child(3){
    flex-direction: row;
  }
  .section_footer:nth-child(1){
    align-self: center;
  }
  .section_footer:nth-child(2){
    margin-bottom: 20px;
  }
  .section_footer:nth-child(2) > a {
    width: 300px;
    height: 150px;
  }
  .reseaux{
    margin-right: 20px;
  }
}
@media screen and (max-width: 480px){
  .logo{
    height: 20px;
  }
  .section_footer:nth-child(2){
    height: 50%;
    margin-bottom: 0;
  }
  .section_footer:nth-child(2) > a{
    height: 100px;
  }
  .section_footer:nth-child(1){
    flex-direction: row;
  }
  .section_footer:nth-child(1) p, .section_footer:nth-child(2) p, .section_footer:nth-child(1) a, .section_footer:nth-child(2) a, .reseaux p, .contact p{
    font-size: 14px;
  }
}
@media screen and (max-width: 400px){
  .section_footer:nth-child(1){
    flex-direction: column;
  }
  .section_footer:nth-child(2){
    width: 100%;
  }
  .reseaux, .contact {
    padding: 10px;
  }
}
</style>
