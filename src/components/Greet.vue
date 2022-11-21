<template>
    <div>
        <h2 >Hello {{fofo}} {{hero}}</h2>
    </div>
</template>

<script>
    export default {
        name:"GreetMe",
        props: ['fofo','hero']
    }
</script>

<style scoped>

</style>