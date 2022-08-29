<template>
  <router-link :to="{ name: 'drink', params: {id: id} }">
    <section class="boxs_drinks">
      <div class="boxs_content">
        <figure>
          <img :src="poster" :alt="title">
        </figure>
        <div class="title_drinks">
          <h3>{{ title }}</h3>
        </div>
      </div>
    </section>
  </router-link>
</template>

<script>

export default {
  name: 'AllDrinks',
  props: ['id', 'title', 'poster']
}
</script>
<style scoped>
/* Section */
.boxs_drinks {
  width: 300px;
  height: 400px;
  padding-top: 40px;
  margin-top: 15px;
  background-color: #d9d9d94d;
  z-index: 5;
}
.boxs_content{
  /* position: absolute; */
  width: 100%;
  height: 100%;
}
.boxs_content>figure {
  width: 70%;
  height: 70%;
  margin: 0 auto;
  padding-bottom: 30px;
}

.boxs_content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.title_drinks{
  background-color: #56b1b9b2;
  width: 70%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
}
.title_drinks h3 {
  font-size: 20px;
  color: #ffff;
}
</style>
