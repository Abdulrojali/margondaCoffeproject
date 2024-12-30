<template>
    <div class="container">
            <inputloginComponents></inputloginComponents>
    </div>
</template>
<script>
import inputloginComponents from '../../components/inputloginComponents.vue'
export default{
    components:{
        inputloginComponents
    }
}
</script>
<style scoped>
.container{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
} 
</style>