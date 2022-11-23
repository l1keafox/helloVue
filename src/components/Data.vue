<template>
    <div>
        <h2> Options- {{o_firstName}}</h2>
        <h2> Options - {{o_firstName}} {{o_lastName}} {{o_heroName}}</h2>
        <hr/>
        <h2> Comp - {{firstName}}</h2>
        <h3> {{greet}}</h3>
        <hr/>
        <h2> Options - {{firstName}} {{lastName}} {{heroName}}</h2>
        <h3> {{greetHero}}</h3>
        <hr/>
        <h2> Reactive {{state.first}} {{state.last}} {{state.hero}}</h2>
        <h2> {{reactiveGreet}}</h2>
    </div>
</template>

<script>
import{ ref,reactive } from 'vue';
    export default {
        name:"DataVue",
        setup(){
            // ref is a function reactive/reuseable object that is holding this internal value.
            // Comp is a lot more like react and using ref like useState.

            const state = reactive({
                first:"ray",
                last:"lewis",
                hero:"father"
            }); // Accpets object

            const firstName = ref('Raymond'); 
            const lastName = ref('Lewis');
            const heroName = ref('Father');
            const greet = `Hello ${firstName.value}`
            const greetHero = `Hello ${firstName.value} ${lastName.value} ${heroName.value}`
            const reactiveGreet = `Hello ${state.first} ${state.last} ${state.hero} `;
            return {
                firstName,
                lastName,
                heroName,
                greet,
                greetHero,
                state,
                reactiveGreet
            }
        },  
        data(){
            return{
                o_firstName:'Bruce',
                o_lastName:'Wayne',
                o_heroName:'Batman'
            }
        }
    }
</script>

<style scoped>

</style>