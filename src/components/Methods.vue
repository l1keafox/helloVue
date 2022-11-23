<template>
    <div>
        <h2> {{name }}</h2>
        <button @click="setName"> Change Name </button>

        <h2> {{count}}</h2>
        <button @click="addCount"> AddCount </button>

        <h2> {{first}} {{last}}</h2>
        <button @click="changeHero"> Change Hero </button>
    </div>
</template>

<script>
import {ref, reactive, toRefs} from 'vue';
    export default {
        name:"MethodVue",
        setup(){
            const count = ref(0)
            const state = reactive({
                first:"bruce",
                last:"Wyane"
            })
            function addCount(){
                count.value++;
            }
            function changeHero(){
                state.first = "Calrk";
                state.last = "kent";
            }
            return {
                count,
                addCount,
                ...toRefs(state),
                changeHero
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