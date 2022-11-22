<template>
        Why Is this Article hERe?
        <h2 v-bind="$attrs"> {{title}}</h2>
        <h3> Likes: {{likes}}</h3>
        <h2> Published - {{ isPublished? 'yes' : 'No' }} {{isPublished}}</h2>
</template>

<script>
    export default {
        name:"ArticleComponent",
        props: {
            title: {
                type:String,
                required:true,
                default: "Article default title"
            },
            likes: Number,
            isPublished:Boolean
        },
    }
</script>

<style scoped>

</style>