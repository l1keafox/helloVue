<template>

  <h2 v-for="(name,index) in names" :key="name">{{index}} {{name}}</h2>
  <h2 v-for="person in fullNames" :key="person.first"> {{person.first}} {{person.last}} </h2>
  <br />
  <div v-for="actor in actors" :key="actor.name"> 
    <h2>{{actor.name}} </h2>
    <h3 v-for="movie in actor.movies" :key="movie"> {{movie}} </h3>
  </div>

  <h2 v-for="(value,key,index) in myInfo" :key="value" >{{index}}  {{key}} {{ value }}</h2>
  <hr/>
  <template v-for="name in names" :key="name"> 
    <h2> {{name}} </h2>
    <hr/>
  </template>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      names: ['Bruce','Clark','Diana'],
      fullNames:[
        {first:'Bruce',last:'Wayne'},
        {first:'Clark',last:'Kent'},
        {first:'Princess',last:'Diana'},
      ],
      actors: [
        {
          name: 'Christian Bale',
          movies: ['Batman', 'The Prestige']
        },
        {
          name: 'Di Caprio',
          movies: ['Titanic', 'Inception']
        },
      ],

      myInfo: {
        name: "Raymond",
        channel: "Full-stack",
        course: "vue"
      }
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
