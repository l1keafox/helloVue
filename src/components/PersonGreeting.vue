<template>
    <div>
        Hello {{fullName}}
    </div>
    <button @click="sendEvent"> Call heroes</button>
</template>

<script>
import {computed} from 'vue'
    export default {
        name:"PersonGreeting",
        props:['firstName','lastName'],
        emits:['callHero'],
        setup(props,context){
            const fullName = computed(()=>{
                return `${props.firstName}  ${props.lastName}`
            } )
            function sendEvent(){
                // how to emit custom event. this.$emit() , but this doesn't work.
                context.emit('callHero',fullName.value)
            }
            return {
                fullName,
                sendEvent
            }
        },
        computed:{
            // fullName(){
            //     return `${this.firstName}  ${this.lastName}`
            // }
        }
    }
</script>

<style scoped>

</style>