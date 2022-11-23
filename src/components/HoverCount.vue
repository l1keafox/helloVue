<template>
  <div>
    <h2 @mouseover="addCount">Hovered {{ count }} times</h2>
  </div>
</template>

<script>
// import CounterMixin from "./../mixins/counter";
import useCounter from "../composables/useCounter";
export default {
  name: "HoverCount",
  setup() {
    const { count, addCount } = useCounter();
    return {
      count,
      addCount,
    };
  },

  // mixins: [CounterMixin]
};
</script>

<style scoped></style>
