<template>
    <div>
        <h2> {{first}} {{last}}</h2>
    </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
    export default {
        name:"DemoTwo",
        setup(){
            const state = reactive({
                first:"ray",
                last:"lewis"
            })
            setTimeout(() => {
                state.first = "Bruce";
                state.last = "Wayneee";
                console.log(state);
            }, 1000);
            
            return toRefs(state)
        },
        data(){
            return{
                fname:'Bruce',
                lname:'Wayne'
            }
        }
    }
</script>

<style scoped>

</style>