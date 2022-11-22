<template>
    <div>
        Why Is this Article hERe?
        <h2> {{title}}</h2>
        <h3> Likes: {{likes}}</h3>
        <h2> PUlished - {{ isPublished? 'yes' : 'No' }} {{isPublished}}</h2>
    </div>
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