<template>
  <div> 
    <pre>
      {{ JSON.stringify(formValues,null,2) }}
    </pre>
  </div>
  <form >
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="formValues.name">
    </div>
    <div>
      <label for="profile">Profile Sumary</label>
      <textarea name="" id="profile" cols="30" rows="10" v-model="formValues.profileSummary"></textarea>
    </div>
    <div>
      <label for="country">Country </label>
      <select name="" id="country" v-model="formValues.country">
        <option value="">Select a Country</option>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>

    <button> Enter Info </button>

  </form>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      formValues: {
        name: '',
        profileSummary: '',
        country: ''
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
  margin-top: 60px;
}

</style>
