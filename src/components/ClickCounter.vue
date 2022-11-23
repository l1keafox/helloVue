<template>
  <div>
    <button @click="addCount"> Clicked {{ count }} times</button>
  </div>
</template>

<script>
import CounterMixin from "./../mixins/counter";

export default {
  name: "ClickCounter",
  mixins: [CounterMixin],
  data(){
    return{
        count:100
    }
  }
};
</script>

<style scoped></style>
