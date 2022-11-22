<template>
    <div>
        <h2> This is a popup</h2>
        <button @click="$emit('close','Raymond' )" type="submit">close popup</button>
    </div>
</template>

<script>
    export default {
        name:'PopUp',
        emits:['close']
    }
</script>

<style scoped>

</style>