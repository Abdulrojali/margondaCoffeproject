<script>
import {RouterLink} from 'vue-router'
export default{
  data(){
    return{
        navigasiData:[
            {name:'login',path:'/home/login'},
            {name:'registers',path:'/home/registers'},
        ]
    }
  }
}
</script>
<template>
  <nav>
    <a href="" class="logo">margonda Coffe</a>
    <ul>
      <li v-for="(data,index) in navigasiData" :key="index">
        <RouterLink
        :to="data.path"
        class="list"
        >
          {{ data.name }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
nav{
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
a{
  text-decoration: none;
  color: black;
  font-size: 1.2em;
  font-weight: 700;
}
ul{
  display: flex;
  gap: 30px;
  list-style-type: none;
}
.list{
  font-size: 1em;
  font-weight: 200;
}
</style>