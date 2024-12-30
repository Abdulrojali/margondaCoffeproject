<template>
   <navigasiLoginRegisters></navigasiLoginRegisters>
   <RouterView></RouterView>
</template>

<script>
import navigasiLoginRegisters from '../components/navigasiLoginRegisters.vue'
import {RouterView} from 'vue-router'
export default{
components:{
  navigasiLoginRegisters
}
}
</script>