<template>
    <div>
        <h3>Parent Compoent {{name}}</h3>
        <h3>Parent Compoent count {{count}}</h3>
        <h3>Parent Compoent hero {{first}} {{last}}</h3>

        <button @click="addCount"> add Count</button>
        <ChildAVue/>
    </div>
</template>

<script>
import {provide, ref, reactive, toRefs} from 'vue'
import ChildAVue from './ChildA.vue';
    export default {
        name:"ProvideInject",
        components:{
            ChildAVue
        },
        setup(){
            
            provide('c_userName',"coder");

            const count = ref(0);
            function addCount(){
                count.value++;
            }

            const state = reactive({
                first:"Bruce",
                last:"Wayne",
            })
            provide('c_count',count);
            provide('c_hero',state);
            provide('add_count',addCount)
            return{
                count,
                ...toRefs(state),
                addCount
            }
        },
        data(){
            return{
                name:'Raymond'
            }
        },
        provide(){
            return{
                userName:this.name
            }
        }
    }
</script>

<style scoped>

</style>