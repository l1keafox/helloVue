<template>
  <h2> {{name}} </h2>
  <div>
    <button  @click="changeName($event),increment(1,$event)" >      Change Name    </button>
  </div>
  <h2> {{ count }} </h2>
  <div> 
    <button @click="increment(2,$event)">Add</button>
    <button @click="decremnt(2)">Subtract</button>
    <button @click="increment(5,$event)">Add 5</button>
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
    changeName(event){
      this.name = 'batman'
      console.log(event)
    },
    increment(num,event) {
      this.count+=num;
      console.log(event,"INC");
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
