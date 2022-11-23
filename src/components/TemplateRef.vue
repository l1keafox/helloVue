<template>
    <div>
        <input type="text" ref="inputRef">
    </div>
</template>

<script>
import {ref,onMounted} from 'vue'
    export default {
        name:'TemplateRef',
        components:{
        },
        setup(){
            const inputRef = ref(null);
            onMounted(() => {
                inputRef.value.focus();
            });
            return{
                inputRef
            }
        },  
        // mounted(){
        //     this.$refs.inputRef.focus()
        // }
    }
</script>

<style scoped>
input{
    background-color: aquamarine;
    border: 1px solid yellow;
}
</style>