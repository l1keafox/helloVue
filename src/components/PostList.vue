<template>
    <div>
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
        async created() {
            this.getPosts();
        },
        methods:{
            async getPosts(){
                try{
                    let result = await axios.get('https://jsonplaceholder.typicode.com/posts');
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