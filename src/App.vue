<template>
  <div class = "flex flex-col justify-center items-center pt-10">
    <NameListVue>
        <template v-slot:default="slotProps">
          {{slotProps.firstName}} {{slotProps.lastName}}
        </template>
    </NameListVue>

    <NameListVue>
      <template v-slot:default="slotProps">
        {{slotProps.lastName}} {{slotProps.firstName}}
      </template>
    </NameListVue>

    <NameListVue>
      <template v-slot:default="slotProps">
        {{slotProps.firstName}}
      </template>
    </NameListVue>

  </div>
</template>

<script>
import NameListVue from './components/NameList.vue';
export default {
  name: "App",

  components:{
    NameListVue
  },

  data() {
    // Variables like states from react, but
    return {
      name:''
    };
  },
  provide(){
    return {
      
    }
  },
  methods: {
    // Will always be changed in the UI.
    // Highest cost updating.
    closePopup(name){
      this.showPopup = false;
      console.log(name);
    }
  },
  computed:{
    // computed is cached, and doesn't always get called when UI.
    // Filtering sorting here is best! Prevent Vue from recalcuating update doesn't concern table data.
    // Best to use when compose new data from existing data.
    // Also used to reduce the length of a var - 
    // Deeply nested property, bind it to access.

  },
  watch: { // This is like useEffect
    // Generic way to react to data changes.
    // Not recommend to use computed as a watcher.
    // This will return the new value, and old value always
    // Use watches to check to favorable value to know if you ready to perfomr an action.
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
  color: #c0c0c0;
}
body{
  background-color: rgb(20, 20, 20)
}

</style>
