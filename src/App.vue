<template>
  <div class="flex justify-center">
    <form class="flex flex-col bg-slate-300 font-mono m-2 p-3" @submit.prevent="submitForm">
      <div class="container flex flex-col justify-center items-left p-2">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          v-model.trim.lazy="formValues.name"
          class="bg-slate-100 border-2 border-sky-500"
        />
      </div>
      <div class="container flex flex-col justify-center items-cenleftter p-2">
        <label for="profile">Profile Sumary</label>
        <textarea
          name=""
          id="profile"
          cols="30"
          rows="10"
          v-model="formValues.profileSummary"
          class="bg-slate-100 border-2 border-sky-500"
        ></textarea>
      </div>
      <div class="container flex flex-col justify-center items-left p-2">
        <label for="country">Country </label>
        <select
          name=""
          id="country"
          v-model="formValues.country"
          class="bg-slate-100 border-2 border-sky-500"
        >
          <option value="">Select a Country</option>
          <option value="india">India</option>
          <option value="korea">Korea</option>
          <option value="vietnam">Vietnam</option>
          <option value="singapore">Singapore</option>
        </select>
      </div>

      <div class="container flex flex-col justify-center items-left p-2">
        <label for="job-location">Job location </label>
        <select
          name=""
          id="job-location"
          multiple
          v-model="formValues.jobLocation"
          class="bg-slate-100 border-2 border-sky-500"
        >
          <option value="india">India</option>
          <option value="vietnam">Vietnam</option>
          <option value="singapore">Singapore</option>
        </select>
      </div>

      <div class="container flex justify-left items-left p-2">
        <input
          type="checkbox"
          id="remote"
          v-model="formValues.remote"
          true-value="yes"
          false-value="no"
        />
        <label for="remote">Open for remote work</label>
      </div>

      <div class="container flex-col flex justify-left items-left p-2">
        <label for="" class="text-center pb-3 font-bold">Skill Set</label>
        <div class="flex justify-between px-20">
          <label for="html">HTML</label>
          <input type="checkbox" id="html" value="html" v-model="formValues.skillSet" />
        </div>
        <div class="flex justify-between px-20">
          <label for="css">CSS</label>
          <input type="checkbox" id="css" value="css"  v-model="formValues.skillSet"  />
        </div>
        <div class="flex justify-between px-20">
          <label for="javascript">Javascript</label>
          <input type="checkbox" id="javascript" value="javascript"  v-model="formValues.skillSet" />
        </div>
      </div>

      <div class="container flex-col flex justify-left items-left p-2">
        <label for="" class="text-center pb-3 font-bold">Years of Xp</label>
        <div class="flex justify-between px-20">
          <label for="0-2">0-2</label>
          <input type="radio" id="0-2" value="0-2" v-model="formValues.yearsOfXp" />
        </div>
        <div class="flex justify-between px-20">
          <label for="3-5">3-5</label>
          <input type="radio" id="3-5" value="3-5" v-model="formValues.yearsOfXp" />
        </div>
        <div class="flex justify-between px-20">
          <label for="5+">5+</label>
          <input type="radio" id="5+" value="5+" v-model="formValues.yearsOfXp" />
        </div>
      </div>

      <div class="container flex-col flex justify-left items-left p-2">
        <label for ="age">Age</label>
        <input @keyup.enter="submitForm" type="number" id="age"  v-model.number="formValues.age"/>
      </div>

      <div class="container flex justify-center items-center p-2">
        <button
          class="container flex flex-col bg-slate-100 border-2 border-green-500 hover:bg-slate-400 justify-center items-center w-3/4"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  <div class="flex justify-center text-right">
    <pre>
      {{ JSON.stringify(formValues, null, 2) }}
    </pre>
  </div>

</template>

<script>
export default {
  name: "App",
  data() {
    return {
      formValues: {
        name: "",
        profileSummary: "",
        country: "",
        jobLocation: [],
        remote: "no",
        skillSet: [],
        yearsOfXp: '',
        age:0
      },
    };
  },
  methods: {
    submitForm(){
      console.log(this.formValues);
      console.log( this.formValues.name.trim());
    },
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
