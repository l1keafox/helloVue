<template>
    <div>
        <button @click="getPosts" class="border-2 border-yellow-500 p-3 w-96 bg-slate-400"> Post List </button>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name:'PostList',
        data(){
            return {
                posts:[],
            }
        },
        methods:{
            async getPosts(){
                let result = await axios.get('https://jsonplaceholder.typicode.com/posts');
                console.log(result);
            }
        }
    }
</script>

<style scoped>

</style>