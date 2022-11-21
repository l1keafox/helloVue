<template>
<div class = "flex flex-col justify-center items-center">
  <h2> Volume Tracker (0-20)</h2>
  <h3> current Volume: {{volume}}</h3>
  <div class="flex ">
    <button @click="volume+=2" class="bg-slate-400 border-2 border-sky-300 p-2 w-80"> Increase </button>
    <button @click="volume-=2" class="bg-slate-400 border-2 border-red-300 p-2 w-80 ml-2"> Decrease </button>
  </div>
</div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      volume:0
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
    
    volume(newValue,oldValue){
      if(newValue === 16 && newValue > oldValue){
        alert(
          'DO NOT LISTEN TO HIGH VOLUME!'
        )
      }

      if(this.volume > 20) this.volume = 20;
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
