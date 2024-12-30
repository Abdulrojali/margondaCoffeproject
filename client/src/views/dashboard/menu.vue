<template>
  <section id="menu" class="menu">
       <div class="container">
           <h2>Menu Kopi Kami</h2>
           <div class="menu-list">
               <div class="menu-item">
                   <img src="../../assets/espresso.jpg" alt="">
                   <h3>Espresso</h3>
                   <p>Minuman kopi murni yang kuat dan kaya rasa.</p>
                   <span>Rp 20.000</span>
                   <br>
                   <br>
                   <br>
                   <button @click="buyCoffe">buy</button>
               </div>
               <div class="menu-item">
                   <img src="../../assets/latte.jpg" alt="">
                   <h3>Latte</h3>
                   <p>Kombinasi sempurna antara kopi dan susu.</p>
                   <span>Rp 25.000</span>
                   <br>
                   <br>
                   <br>
                   <button @click="buyCoffe">buy</button>
               </div>
               <div class="menu-item">
                   <img src="../../assets/capuccino.jpg" alt="">
                   <h3>Cappuccino</h3>
                   <p>Rasa kopi klasik dengan foam susu yang lembut.</p>
                   <span>Rp 25.000</span>
                   <br>
                   <br>
                   <br>
                   <button @click="buyCoffe">buy</button>
               </div>
               <div class="menu-item">
                   <img src="../../assets/americano.jpg" alt="">
                   <h3>Americano</h3>
                   <p>Espresso dengan tambahan air panas, ringan dan nikmat.</p>
                   <span>Rp 18.000</span>
                   <br>
                   <br>
                   <br>
                   <button @click="buyCoffe">buy</button>
               </div>
           </div>
       </div>
   </section>
</template>
<script>
export default{
   methods:{
       buyCoffe(){
           alert('buy coffe')
       }
   }
}
</script>

<style scoped>
*{
   padding:0;
   margin:0;
   box-sizing: border-box;
}
.menu {
   padding: 50px 20px;
   background: #f4f4f4;
   text-align: center;
}
.menu h2 {
   margin-bottom: 30px;
}
.menu-list {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   gap: 20px;
}
.menu-item {
   cursor: pointer;
   background: #fff;
   padding: 20px;
   border: 1px solid #ddd;
   border-radius: 5px;
}
.menu-item:hover{
   opacity: .8;
   margin-top: 30px;
}
.menu-item h3 {
   margin: 0 0 10px;
}
.menu-item p {
   margin: 0 0 10px;
   font-size: 0.9rem;
   color: #555;
}
.menu-item span {
   font-weight: bold;
   color: #6f4e37;
}
.menu-item img{
   height: 150px;
   width:100%;
}
button{
   padding: 10px 15px;
   background: #6f4e37;
   color: #fff;
   border-radius: 5px;
   border: none;
   cursor: pointer;
}
button:hover{
   opacity: .8;
}
</style>