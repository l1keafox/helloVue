<template>
  <div class="flex flex-col justify-center items-center pt-10">
    <CompVue />
  </div>
</template>

<script>
import CompVue from "./components/Comp";
export default {
  name: "App",

  components: {
    CompVue,
  },
  setup(){
    // Composition API
    // This is like a coding area that follows different rules and not for returning stuff, but 
    // this is a lot like react now, with ref/reaction and methods in here.
    // This requires import from vue for useing things.

    // ref - useState - not reference to element.
    // reactive - object ref.

  },  

  data() {
    // Variables like states from react, but
    return {};
  },
  provide() {
    return {};
  },
  methods: {
    // Will always be changed in the UI.
    // Highest cost updating.
    closePopup(name) {
      this.showPopup = false;
      console.log(name);
    },
  },
  computed: {
    // computed is cached, and doesn't always get called when UI.
    // Filtering sorting here is best! Prevent Vue from recalcuating update doesn't concern table data.
    // Best to use when compose new data from existing data.
    // Also used to reduce the length of a var -
    // Deeply nested property, bind it to access.
  },
  watch: {
    // This is like useEffect
    // Generic way to react to data changes.
    // Not recommend to use computed as a watcher.
    // This will return the new value, and old value always
    // Use watches to check to favorable value to know if you ready to perfomr an action.
    // Common use case, call an api in response to data change.
    // Use transitions, because it gives you the start and end state!

    // Immediate tag is mount?
    // Immediate and Deep
    // Watchers will not look at deeply nested properties.
    movieList: {
      handler(newValue) {
        console.log(" Updated list :", newValue);
      },
    },
    volume(newValue, oldValue) {
      if (newValue === 16 && newValue > oldValue) {
        alert("DO NOT LISTEN TO HIGH VOLUME!");
      }

      if (this.volume > 20) this.volume = 20;
    },
    movie: {
      handler(newValue) {
        console.log("calling api with ", newValue);
      },
      immediate: true, // On page load
    },
    movieInfo: {
      handler(newValue) {
        console.log(
          `Calling api with movie title = ${newValue.title} and actor = ${newValue.actor}`
        );
      },
      deep: true,
    },
  },
  beforeCreate() {
    console.log("App BeforeCreate()");
  },
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  activated(){},
  deactivated(){},

};
</script>

With Scoped the parent's componets styles will not leak into childs... But, a
childs root node wil be affected by parent's scoped. When using Slots - parents
styles will be used. regardless of scoped ****

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #c0c0c0;
}
body {
  background-color: rgb(20, 20, 20);
}
</style>
