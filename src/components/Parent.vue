<template>
    <div>
        Parnet Component
        <button @click="showChild = !showChild">Toggle CHild </button>
        <ChildVue v-if="showChild"/>
    </div>
</template>

<script>
import ChildVue from './Child.vue';
    export default {
        name:"ParentVue",
        data(){
            return{
                showChild:true
            }
        },
        components:{ChildVue},
        beforeCreate(){
            console.log('Parent BeforeCreate()')
        },
        created(){
            console.log('Parent created()')
        },
        beforeMount(){
            console.log('Parent beforeMount()')
        },
        mounted(){
            console.log('Parent mounted()')
        },
        beforeUpdate(){
            console.log('Parent beforeUpdate()')
        },
        updated(){
            console.log('Parent updated()')
        },
        beforeUnmount(){
            console.log('Parent beforeUnmount()')
        },
        unmounted(){
            console.log('Parent unmounted()')
        }        
    }
</script>

<style scoped>

</style>