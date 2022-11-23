<template>
    <div>
        <h2> Child C Comp</h2>
        <h3> username - {{userName}}</h3>
        <h3> Compusername = {{what}}</h3>
        <h2> Count = {{childCount}}</h2>
        <h2> hoer = {{first}} {{last}}</h2>
        <button @click="addCount"> Add Count In child</button>
    </div>  
</template>

<script>
import {inject,toRefs} from 'vue'
    export default {
        name:"ChildC",
        inject:['userName'],
        setup(){
            let what = inject('c_userName',"Default user");
            const childCount = inject("c_count",0);
            const childHero = inject('c_hero',{})
            const addCount = inject( 'add_count' );
            return {
                what,
                childCount,
                addCount,
                ...toRefs( childHero)
            }
        },  
        components:{
        }
    }
</script>

<style scoped>

</style>