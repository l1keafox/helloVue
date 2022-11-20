<template>
  <h2 v-if="num === 0 "> The number is zero {{num}}</h2>
  <h2 v-else-if="num < 0"> The number is negitive {{num}} </h2>
  <h2 v-else> The number is not zero {{num}}</h2>
  <template v-if="display">
    <h2> Raymond </h2>
    <h2> Code</h2>
    <h2> Vye</h2>
  </template>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      num: -1,
      display: false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
