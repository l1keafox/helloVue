<template>
    <div class="card" >
        <slot> Default Content </slot>
    </div>
</template>

<script>
    export default {
        name:"CardVue",
        
    }
</script>

<style scoped>
.card {
    box-shadow: 0 4px 8px 0 rgba(200, 200, 200, 0.2);
    transition: 0.3s;
    padding: 16px;
    margin-bottom:20px;
    width: 200px;
    background-color: antiquewhite;
    color:black
}

.card:hover{
    box-shadow: 0 8px 16px 0 rgba(200, 200, 200, 0.2);
}

</style>