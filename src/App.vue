<template>
  <div> 
    <pre>
      {{ JSON.stringify(formValues,null,2) }}
    </pre>
  </div>
  <div class="flex justify-center items-center">
  <form class="flex flex-col bg-slate-300 font-mono w-1/3 m-2 p-3" >

    <div class="container flex flex-col justify-center items-center p-2">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="formValues.name" class="bg-slate-100 border-2 border-sky-500 w-1/2">
    </div>
    <div class="container flex flex-col justify-center items-center  p-2">
      <label for="profile">Profile Sumary</label>
      <textarea name="" id="profile" cols="30" rows="10" v-model="formValues.profileSummary" class="bg-slate-100 border-2 border-sky-500"></textarea>
    </div>
    <div class="container flex flex-col justify-center items-center p-2">
      <label for="country">Country </label>
      <select name="" id="country" v-model="formValues.country" class="bg-slate-100 border-2 border-sky-500">
        <option value="">Select a Country</option>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>

    <div class="container flex flex-col justify-center items-center p-2">
      <label for="job-location">Job location </label>
      <select name="" id="job-location" multiple v-model="formValues.jobLocation" class="bg-slate-100 border-2 border-sky-500 w-1/2">
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>

    <div class="container flex justify-center items-center p-2"> 
      <input type="checkbox" id="remote" v-model="formValues.remote">
      <label for="remote" >Open for remote work</label>
      
    </div>

    <div class="container flex justify-center items-center p-2"> 
      <button class="container flex flex-col bg-slate-100 border-2 border-green-500 justify-center items-center w-1/2"> Enter Info </button>
    </div>

  </form>
</div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      formValues: {
        name: '',
        profileSummary: '',
        country: '',
        jobLocation: [],
        remote: false
      }
    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#formDiv{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
