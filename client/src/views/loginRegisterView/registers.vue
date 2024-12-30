<template>
    <div class="container">
        <registersComponents></registersComponents>
    </div>

</template>

<script>
import registersComponents from '@/components/registersComponents.vue';
export default{
    components:{
        registersComponents
    }
}
</script>

<style scoped>
.container{
    width:100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
}
</style>