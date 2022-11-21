<template>
  <Greet fofo="bruce" hero="Batman"/>
  <Greet fofo="Ray"  hero="Father"/>
  <Greet fofo="Williams"  hero="Son"/>
  <Greet :fofo="name"  :hero="channel"/>
</template>

<script>
import Greet from './components/Greet.vue';
export default {
  
  name: "App",
  components:{
    Greet
  },
  data() {
    
    return {
      name:"evee",
      channel:"mother"
    };
  },
  methods: {
    // Will always be changed in the UI.
  },
  computed:{
    // computed is cached, and doesn't always get called when UI.
    // Filtering sorting here is best! Prevent Vue from recalcuating update doesn't concern table data.
    // Best to use when compose new data from existing data.
    // Also used to reduce the length of a var - 
    // Deeply nested property to bind it.

  },
  watch: { // This is like useEffect
    // Generic way to react to reac tto data changes.
    // Not recommend to use computed as a watcher.
    // This will return the new value, and old value always
    // Use watches to check to favorable vaue to know if you ready to perfomr an action.
    // Common use case, call an api in response to data change.
    // Use transitions, because it gives you the start and end state!

    // Immediate tag is mount?
    // Immediate and Deep
    // Watchers will not look at deeply nested properties. 
    movieList:{
      handler(newValue){
        console.log(' Updated list :', newValue);
      },
    },
    volume(newValue,oldValue){
      if(newValue === 16 && newValue > oldValue){
        alert(
          'DO NOT LISTEN TO HIGH VOLUME!'
        )
      }

      if(this.volume > 20) this.volume = 20;
    },
    movie: {
      handler(newValue){
        console.log('calling api with ',newValue);
      },
      immediate:true // On page load
    },
    movieInfo: {
      handler(newValue) {
        console.log(`Calling api with movie title = ${newValue.title} and actor = ${newValue.actor}`);
      },
      deep:true
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
