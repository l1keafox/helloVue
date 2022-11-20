<template>
  <h2> {{name}} </h2>
  <div>
    <button  v-on:mouseover="name = 'batman'" >
      Change Name
    </button>
  </div>
  <h2> {{ count }} </h2>
  <div> 
    <button v-on:click="increment(2)">Add</button>
    <button v-on:click="decremnt(2)">Subtract</button>
    <button v-on:click="increment(5)">Add 5</button>
    <button v-on:click="decremnt(5)">Subtract 5</button>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      name: 'Raymond',
      count: 0
    }
  },
  methods: {
    changeName(){
      this.name = 'batman'
    },
    increment(num) {
      this.count+=num;
    },
    decremnt(num) {
      this.count-=num;
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
