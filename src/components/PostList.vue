<template>
    <div>
        <button @click="getPosts" class="border-2 border-yellow-500 p-3 w-96 bg-slate-400"> Post List </button>
        <h3 v-if="errorMsg">{{errorMsg}} </h3>
        <div v-for="post in posts" :key="post.id">
            <h1 class="font-bold"> {{post.id}} {{post.title}}</h1>
            <p> {{post.body}} </p>
            <hr/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name:'PostList',
        data(){
            return {
                posts:[],
                errorMsg:''
            }
        },
        methods:{
            async getPosts(){
                try{
                    let result = await axios.get('https://jsonplaceholder.typicode.com/postsxx');
                    this.posts = result.data;
                }catch(err){
                    this.errorMsg = err;
                }
            }
        }
    }
</script>

<style scoped>

</style>