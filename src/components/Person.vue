<template>
    <div>
        <input type="text" placeholder="first name" v-model="firstName">
        <input type="text" placeholder="last name" v-model="lastName">
        <PersonGreetingVue :firstName="firstName" :lastName="lastName"/>
    </div>

</template>

<script>
import{ref} from 'vue'
import PersonGreetingVue from './PersonGreeting.vue';
    export default {
        name:"PersonVue",
        components:{
            PersonGreetingVue
        },
        setup(){
            const firstName = ref('');
            const lastName = ref('');
            return{
                firstName,
                lastName
            }
        }
    }
</script>

<style scoped>

</style>