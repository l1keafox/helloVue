<template>
    <div>
        <h2> This is a popup</h2>
        <input type="text" v-model="name">
        <button @click="$emit('close',name )" type="submit">close popup</button>
    </div>
</template>

<script>
    export default {
        name:'PopUp',
        data(){
            return {
                name: ''
            }
        },
        emits:{
            close:(name) =>{
                if(!name){
                    return false
                }else {
                    return true
                }
            }
        }
    }
</script>

<style scoped>

</style>