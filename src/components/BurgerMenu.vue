<template>
    <modale :revele="revele" :toggleModale="toggleModale"></modale>
    <div id="content-burger">
      <div v-on:click="toggleModale" id="burger-menu" :class="['container', { 'open': revele }]"></div>
    </div>
</template>

<script>
import ModaleMenu from './NavMenu'

export default {
  name: 'BurgerMenu',
  data () {
    return {
      revele: false
    }
  },
  components: {
    modale: ModaleMenu
  },
  methods: {
    toggleModale: function () {
      this.revele = !this.revele
    }
  }
}
</script>

<style>
/* Burger Menu */
#content-burger {
  cursor: pointer;
  height: 80px;
  width: 80px;
  padding: 5px;
  position: relative;
  bottom: 60%;
  left: 90%;
}

#burger-menu {
  display: inline-block;
  position: relative;
  top: 10px;
  left: 10px;
  width: 100%;
  height: 10px;
  border-radius: 10px;
  background-color: #8D5E1D;
}

#burger-menu::before,
#burger-menu::after {
  content: "";
  width: 100%;
  height: 10px;
  border-radius: 10px;
  background-color: #8D5E1D;
  display: inline-block;
  position: absolute;
  transform-origin: center;
  transition: all 0.2s ease;
}

#burger-menu::before {
  top: -20px;
}

#burger-menu::after {
  top: 20px;
}

#burger-menu.open{
  height: 0;
}

#burger-menu.open::before {
  transform: rotate(45deg);
  top: 0;
}

#burger-menu.open::after {
  transform: rotate(-45deg);
  top: 0;
}
</style>
