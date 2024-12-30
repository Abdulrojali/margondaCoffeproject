<template>
    <div class='container'>
        <a>margonda coffe</a>
        <div class='links'>
            <p 
             v-for="(data,index) in dataRoute" :key='index'
            @click='anchorRouteDashboard(data.route)'>{{data.name}}</p>
        </div>
        <a @click='logoutAccounts'>logout</a>
    </div>
</template>

<script>
export default{
    data(){
        return{
            dataRoute:[
                {name:'home',route:'/dashboard/halamanUtama'},
                {name:'menu',route:'/dashboard/menu'},
                {name:'transaksi',route:'/dashboard/transaksi'},
            ]
        }
    },
    methods:{
        anchorRouteDashboard(data){
            if(data){
                this.$router.push(data)
            }
        },
        logoutAccounts(e){
            e.preventDefault()
            this.$router.push('/home/login')
        }
    }
}
</script>

<style scoped>
*{
    padding:0;
}
.container{
    padding:15px 20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    background: #6f4e37;
    color: #fff;
}
a{
    text-decoration:none;
    font-size:1.5em;
    font-weight:800;
    text-transform:capitalize;
}
.links{
    display:flex;
    flex-direction:column;
    gap:30px;
}
.links p{
    font-size:1em;
    font-weight:500;
    cursor:pointer;
}
.links p:hover{
    opacity:0.8em;
    bottom:30px;
}
</style>