<template>
     <div class="login-container">
        <h1>Login</h1>
        <form>
            <div class="input-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" v-model="username" required>
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" v-model="password" required>
            </div>
            <button class="btn-login" @click='submitLogin'>Login</button>
            <br>
            <br>
            <p>belum punya accounts ? <a href="" @click="registers">create Accounts</a></p>
            
        </form>
    </div>
</template>

<script>
export default{
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        registers(e){
            e.preventDefault()
            this.$router.push('/registers')
        },
        submitLogin(){
            if(this.username && this.password){
                this.$router.push('/dashboard/halamanUtama')
            }
            else{
                alert('tolong isi username dan password')
                window.location.reload()
            }
        }
    }
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f3f4f6;
}

.login-container {
    width: 25%;
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 0.1em solid gray;
    width: 100%;
    max-width: 400px;
    text-align: center;
}

h1 {
    margin-bottom: 1rem;
    color: #333;
}

.input-group {
    margin-bottom: 1rem;
    text-align: left;
}

label {
    display: block;
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 0.5rem;
}

input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;
}

input:focus {
    border-color: #007bff;
}

.btn-login {
    width: 100%;
    padding: 0.8rem;
    background: #007bff;
    color: #fff;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn-login:hover {
    background-color: #0056b3;
}

</style>