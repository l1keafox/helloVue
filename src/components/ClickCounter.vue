<template>
  <div>
    <Button @click="addCount"> Clicked {{ count }} times</Button>
  </div>
</template>

<script>
import CounterMixin from "./../mixins/counter";

export default {
  name: "ClickCounter",
  mixins: [CounterMixin]
};
</script>

<style scoped></style>
