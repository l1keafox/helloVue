<template>
  <div>
    <form @submit.prevent="CreatePost">
      <div>
        <label for="userId"> Post User ID</label>
        <input type="text" id="userId" v-model="formData.userId" />
      </div>
      <div>
        <label for="title"> Post Title</label>
        <input type="text" id="title" v-model="formData.title" />
      </div>
      <div>
        <label for="body"> Post body</label>
        <input type="text" id="body" v-model="formData.body" />
      </div>
      <button>Create Post</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "CreatePost",
  data() {
    return {
      formData: {
        userId: "",
        title: "",
        body: "",
      },
    };
  },
  methods:{
    async CreatePost(){
        console.log( this.formData );
        let result = await axios.post('https://jsonplaceholder.typicode.com/posts',this.formData);
        console.log(result);
    }
  }
};
</script>

<style scoped>
input {
  background-color: aqua;
  border: 2px solid black;
}
</style>
