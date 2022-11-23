<template>
    <div>
        <h2> Child A Comp</h2>
        <ChildBVue/>
    </div>  
</template>

<script>
import ChildBVue from './ChildB.vue';
    export default {
        name:"ChildA",
        components:{
            ChildBVue
        }
    }
</script>

<style scoped>

</style>