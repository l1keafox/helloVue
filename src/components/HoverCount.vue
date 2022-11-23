<template>
    <div>
        <h2 @mouseover="addCount"> Clicked {{count}} times</h2>
    </div>
</template>

<script>
import CounterMixin from "./../mixins/counter";
    export default {
        name:"HoverCount",
        mixins: [CounterMixin]

    }
</script>

<style scoped>

</style>