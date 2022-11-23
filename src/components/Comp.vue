<template>
    <div>
        <input type="text" placeholder="first Name" v-model="fName"/>
        <input type="text" placeholder="last Name" v-model="lName"/>
        <h2>OPtions full name is {{fullName}}</h2>

        <input type="text" placeholder="first Name" v-model="refFirstName"/>
        <input type="text" placeholder="first Name" v-model="refLastName"/>
        <h2>Compitsion full name is {{refFullName}}</h2>
        <input type="text" placeholder="first Name" v-model="reactiveFirstName"/>
        <input type="text" placeholder="first Name" v-model="reactiveLastName"/>
        <h2>Reactive full name is {{reactiveFullName}}</h2>

    </div>
</template>

<script>
import {ref,computed, reactive, toRefs} from 'vue'
    export default {
        name:"CompVue",
        data(){
            return {
                fName:'',
                lName:''
            }
        },
        setup(){
            const refFirstName = ref('')
            const refLastName = ref('')
            const state = reactive({
                reactiveFirstName:'',
                reactiveLastName:''
            });
            const refFullName = computed(function(){
                return `${refFirstName.value} ${refLastName.value}`;
            })
            const reactiveFullName = computed(function(){
                return `${state.reactiveFirstName} ${state.reactiveLastName}`;
            })
            return{
                refFirstName,
                refLastName,
                refFullName,
                ...toRefs(state),
                reactiveFullName
            }
        },
        computed: {
            fullName(){
                return `${this.fName} ${this.lName}`
            }
        }
    }
</script>

<style scoped>

</style>