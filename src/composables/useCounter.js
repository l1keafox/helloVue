import {ref} from 'vue'

export default function useCounter(){
    const count = ref(0);
    function addCount(){
        count.value++;
    }
    return {
        count,
        addCount
    }
}