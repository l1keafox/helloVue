/*
Mixin are conflict prone
Every option in mixin can have issues,

Reusablity is limited, no parameters to change it's logic.

*/

export default {
    data(){
        return{
            count:0
        }
    },
    methods:{
        addCount(){
            this.count++;
        }
    }
}