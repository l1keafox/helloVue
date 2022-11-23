<template>
    <div>
        <h2> {{name }}</h2>
        <button @click="setName"> Change Name </button>

        <h2> {{count}}</h2>
        <button @click="addCount"> AddCount </button>
    </div>
</template>

<script>
import {ref} from 'vue';
    export default {
        name:"MethodVue",
        setup(){
            const count = ref(0)
            function addCount(){
                count.value++;
            }
            return {
                count,
                addCount
            }
        },
        data(){
            return{
                name:"raymond"
            }
        },
        methods:{
            setName(){
                this.name = "william"
            }
        }
    }
</script>

<style scoped>

</style>