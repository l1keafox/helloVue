<template>
    <div>
        <input type="text" ref="inputRef"/>
        <PostListVue ref="postListRef"/>
    </div>
</template>

<script>
import PostListVue from './PostList.vue';
    export default {
        name:'TemplateRef',
        components:{
            PostListVue
        },
        mounted(){
             this.$refs.inputRef.focus()
             console.log(this.$refs.postListRef)
        }
    }
</script>

<style scoped>
input{
    background-color: aquamarine;
    border: 1px solid yellow;
}
</style>