<template>
    <section id="contact" class="contact">
        <div class="container">
            <h2>Hubungi Kami</h2>
            <form>
                <input type="text" placeholder="Nama" required>
                <input type="email" placeholder="Email" required>
                <textarea placeholder="Pesan Anda" rows="4" required></textarea>
                <button type="submit" class="btn">Kirim</button>
            </form>
        </div>
    </section>
</template>

<style scoped>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
.contact {
    padding: 50px 20px;
    height: 100vh;
}
.contact h2 {
    margin-bottom: 20px;
    text-align: center;
}
.contact form {
    max-width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.contact form input, 
.contact form textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
.contact form .btn {
    background: #6f4e37;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.contact form .btn:hover {
    background: #56392d;
}
</style>