<template>
  <h2 :id="headingId">heading </h2>
  <button :disabled="isDisabled"> Bind</button>
  <h2 class="underline"> underline text</h2>
  <h2 class="underline" :class="status"> Status</h2>
  <h2 :class = "isPromoted && 'prompted'"> Promoted Movie </h2>
  <h2 :class="isSoldout ? 'sold-out' : 'new'"> Soldout? movie</h2> 
  <h2 :class="['new','prompted']"> Newly promoted Moive</h2>
  <h2 :class="[isPromoted && 'prompted', isSoldout ? 'sold-out' : 'new' ]"> Array conditional movie</h2>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      headingId: "heading",
      status: 'danger',
      isDisabled:false,
      isPromoted: true,
      isSoldout: true
    }
  }
}
</script>

<style>

.danger{
  background-color: red;
}
.success{
  background-color: green;
}
.underline {
  text-decoration: underline;
}
.prompted {
  font-style: italic;
}
.new {
  color: olivedrab;
}
.sold-out {
  color: red;
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
