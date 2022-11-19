<template>
  <div>{{greet}} {{ name }}, </div>
  <div v-html="channel"></div>
  <div v-html="hack"> </div>
  <div v-bind:id="headingId"> heading</div>
  <button v-bind:disabled="isDisabled" >Bind</button>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      greet: "Ahoy",
      name: "William",
      channel:"<b>Codevolution</b>",
      headingId: "heading",
      isDisabled: false,
      hack: `<a href="#" onclick="alert('You have been hacked!')"> win a prize<a/>`
    }
  }
}
</script>

<style>
#heading{
  font-size: 10rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
