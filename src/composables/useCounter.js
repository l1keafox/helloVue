import {ref} from 'vue'

export default function useCounter(initCount = 0,stepSize = 1){
    const count = ref(initCount);
    function addCount(){
        count.value+=stepSize;
    }
    return {
        count,
        addCount
    }
}