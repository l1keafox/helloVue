<template>
    <div>
        <input type="text" placeholder="Name" v-model="name">
        <input type="text" placeholder="firstName" v-model="firstName">
        <input type="text" placeholder="lastName" v-model="lastName">

        <input type="text" placeholder="reactive firstName" v-model="fName">
        <input type="text" placeholder="reactive lastName" v-model="lName">
        <input type="text" placeholder="reactive heroName" v-model="options.heroName">


    </div>
</template>

<script>
import {ref,watch,reactive,toRefs} from 'vue'
import _ from 'lodash';
    export default {
        name:"WatchVue",
        setup(){

            // Watcher notes

            // Some inherit complicated setup - where sometimes the old doesn't work unless you lodash cloneDeep, or
            // have an arrow function passing it, or need additional settings.
            const firstName = ref('');  
            const lastName = ref('Wayne')
            const state = reactive({
                fName:'',
                lName:'',
                options:{
                    heroName:''
                }
            })
            // Watch function accepts lots of data.
            watch([firstName,lastName], (newValues, oldValues)=>{
                console.log('first name old value',oldValues[0])
                console.log('first name new value',oldValues[0])
                console.log('last name old value',oldValues[1])
                console.log('laste name new value',oldValues[1])
            },{
                immediate:true
            })

            // watching invidual properties, 
            // _.cloneDeep are how to get a deep old/new stuff.
            watch(()=> _.cloneDeep(state.options),(newValue,oldValue)=>{
                 console.log('first name old value',oldValue)
                 console.log('first name new value',newValue)
            },{
                deep:true // This allows for deeper nested objects.
            });

            // watch(()=>{
            //     return { ...state }
            // },(newValue,oldValue)=>{
            //     // Old and new values are the same with watch.
            //     // reactive data object is the old/and new values are the same, intended value.
                
            //     // The ()=>{return {...state}} above setup the old value working with reactive
            //     console.log('first name old value',oldValue.fName)
            //     console.log('first name new value',newValue.fName)
            //     console.log('last name old value',oldValue.lName)
            //     console.log('laste name new value',newValue.lName)
            // })
            return {
                firstName,
                lastName,
                ...toRefs(state)
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