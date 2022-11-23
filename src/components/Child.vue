<template>
    <div>
        Child VUe
    </div>
</template>

<script>
    export default {
        name:"ChildVue",
        beforeCreate(){
            console.log('Child BeforeCreate()')
        },
        created(){
            console.log('Child created()')
        },
        beforeMount(){
            console.log('Child beforeMount()')
        },
        mounted(){
            console.log('Child mounted()')
        },
        beforeUpdate(){
            console.log('Child beforeUpdate()')
        },
        updated(){
            console.log('Child updated()')
        },
        beforeUnmount(){
            console.log('Child beforeUnmount()')
        },
        unmounted(){
            console.log('Child unmounted()')
        }
    }
</script>

<style scoped>

</style>