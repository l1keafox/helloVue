<template>
    <div>

    </div>
</template>

<script>
import{
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted
}from 'vue'
    export default {
        name:"LifeCycleC",
        setup(){
            onBeforeMount(()=>{
                console.log('lifeCycleC on before onBeforeMount');
            })
            onMounted(()=>{
                console.log('lifeCycleC on before onMounted');
            })

            onBeforeUpdate(()=>{
                console.log('lifeCycleC on before onBeforeUpdate');
            })
            onUpdated(()=>{
                console.log('lifeCycleC on before onUpdated');
            })

            onBeforeUnmount(()=>{
                console.log('lifeCycleC on before onBeforeUnmount');
            })
            onUnmounted(()=>{
                console.log('lifeCycleC on before onUnmounted');
            })
        }
    }
</script>

<style scoped>

</style>