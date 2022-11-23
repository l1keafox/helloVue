<template>
    <div>
        <h2> Options- {{o_firstName}}</h2>
        <h2> Comp - {{c_firstName}}</h2>
        <h3> {{greet}}</h3>
    </div>
</template>

<script>
import{ ref } from 'vue';
    export default {
        name:"DataVue",
        setup(){
            // ref is a function reactive/reuseable object that is holding this internal value.
            // Comp is a lot more like react and using ref like useState.

            const thisName = ref('Raymond'); 
            thisName.value = "Diana";
            const greet = `Hello ${thisName.value}`
            console.log('thisName',thisName);
            return {
                c_firstName : thisName,
                greet
            }
        },  
        data(){
            return{
                o_firstName:'Bruce'
            }
        }
    }
</script>

<style scoped>

</style>