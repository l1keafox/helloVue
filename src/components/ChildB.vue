<template>
    <div>
        <h2> Child B Comp</h2>
        <ChildCVue/>
    </div>  
</template>

<script>
import ChildCVue from './ChildC.vue';
    export default {
        name:"ChildB",
        components:{
            ChildCVue
        }
    }
</script>

<style scoped>

</style>