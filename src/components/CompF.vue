<template>
    <div>
        Comp F {{username}}
    </div>
</template>

<script>
export default {
    name:"CompF",
    setup () {
        

        return {}
    },
    inject:['username']
}
</script>

<style scoped>
    div{
        color: white
    }
</style>