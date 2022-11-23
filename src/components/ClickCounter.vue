<template>
  <div>
    <button @click="addCount"> Clicked {{ count }} times</button>
  </div>
</template>

<script>
// import CounterMixin from "./../mixins/counter";
import useCounter from '../composables/useCounter';
export default {
  name: "ClickCounter",
  setup(){
    const {count, addCount } = useCounter(5,5);
    return {
      count,
      addCount
    }
  },
  // mixins: [CounterMixin],
};
</script>

<style scoped></style>
