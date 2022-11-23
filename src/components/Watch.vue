<template>
    <div>
        <input type="text" placeholder="Name" v-model="name">
        <input type="text" placeholder="firstName" v-model="firstName">
        <input type="text" placeholder="lastName" v-model="lastName">
    </div>
</template>

<script>
import {ref,watch} from 'vue'
    export default {
        name:"WatchVue",
        setup(){
            const firstName = ref('');  
            const lastName = ref('Wayne')

            // Watch function accepts lots of data.
            watch([firstName,lastName], (newValues, oldValues)=>{
                console.log('first name old value',oldValues[0])
                console.log('first name new value',oldValues[0])
                console.log('last name old value',oldValues[1])
                console.log('laste name new value',oldValues[1])
            },{
                immediate:true
            })
            return {
                firstName,
                lastName
            }
        },  
        data(){
            return {
                name:''
            }
        },
        watch: {
            name(newValye,oldValue){
                console.log("Old",oldValue)
                console.log("new",newValye)
            }
        }
    }
</script>

<style scoped>

</style>