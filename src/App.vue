<template>
  <h1 v-once>{{name}}</h1>
  <button @click="name= 'batman'">Change Name</button>

  <h2 v-pre>{{name}}</h2>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name:'boss'
    };
  },
  methods: {
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#formDiv {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
