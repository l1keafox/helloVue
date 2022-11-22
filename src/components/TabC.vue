<template>
    <div>
        Tab C Content
        <input type="text" v-model="name">
        
    </div>
</template>

// instance caching
<script>
    export default {
        name:'TabC',
        data(){
            return {
                name: ''
            }
        }
    }
</script>

<style scoped>

</style>