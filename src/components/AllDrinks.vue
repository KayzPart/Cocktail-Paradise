<template>
  <h1>{{title}}</h1>
  <img :src="poster" :alt="title">
</template>

<script>
export default {
  name: 'AllDrinks',
  props: ['id', 'title', 'poster']
}
</script>
