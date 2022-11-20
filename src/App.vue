<template>
  <h2 :id="headingId">heading </h2>
  <button :disabled="isDisabled"> Bind</button>
  <h2 class="underline"> underline text</h2>
  <h2 class="underline" :class="status"> Status</h2>
  <h2 :class = "isPromoted && 'prompted'"> Promoted Movie </h2>
  <h2 :class="isSoldout ? 'sold-out' : 'new'"> Soldout? movie</h2> 
  <h2 v-bind:class="['new','prompted']"> Newly promoted Moive</h2>
  <h2 :class="[isPromoted && 'prompted', isSoldout ? 'sold-out' : 'new' ]"> Array conditional movie</h2>

  <h2 :class="{
    prompted: isPromoted,
    new: !isSoldout,
    'sold-out': isSoldout
  }"> Object conditional movie</h2>

  <h2 v-bind:style="{
    color: highlightcolor,
    'font-size':headerSize,
    fontSize:headerSize,
    padding: '2px'
  }"> Inline style </h2>

  <h2 :style="headerStyleObject"> Style Object </h2>
  <div :style="[baseStyleObject,successStyleObject]">sucess style</div> 
  <div :style="[baseStyleObject,dangerStyleObject]"> Danger Style </div>
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
      isSoldout: true,
      highlightcolor: 'orange',
      headerSize: '50px',
      headerStyleObject: {
        fontSize:'20px',
        color: 'purple',
        padding: '20px'
      },
      baseStyleObject:{
        fontSize: '50px',
        padding: '10px'
      },
      successStyleObject:{
        color: 'green',
        backgroundColor: 'lightgreen',
        border:'1px solid green',
        padding: '20px'
      },
      dangerStyleObject: {
        color: 'darkred',
        backgroundColor:'red',
        border:'1px solid darkred'
      }
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
