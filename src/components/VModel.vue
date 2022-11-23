<template>
    <div>
        <input type="text" placeholder="First Name" v-model="fName">
        <input type="text" placeholder="First Name" v-model="lName" />

        <input type="text" placeholder="Hero Name" v-model="heroName" />
        <input type="text" placeholder="First Name" v-model="first" />
        <input type="text" placeholder="Last Name" v-model="last" />
    </div>
</template>

<script>
import {ref,reactive,toRefs} from 'vue'
    export default {
        name:"VModel",
        setup(){
            const heroName = ref('');
            const state = reactive({
                first:"",
                last:""
            })
            return{
                heroName,
                ...toRefs(state)
            }
        },
        data(){
            return{
                fname:'',
                lname:''
            }
        }
    }
</script>

<style scoped>

</style>