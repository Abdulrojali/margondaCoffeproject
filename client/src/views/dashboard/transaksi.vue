<template>
  <div class="content">
    <div class="transaction">
      <h1>Transaksi</h1>
      <form @submit.prevent="submitTransaction">
        <div>
          <label for="coffee">Nama Menu:</label>
          <select v-model="selectedCoffee" id="coffee" required>
            <option v-for="coffee in coffeeList" :key="coffee.id" :value="coffee.name">
              {{ coffee.name }} - Rp{{ coffee.price }}
            </option>
          </select>
        </div>
        <div>
          <label for="quantity">Jumlah:</label>
          <input type="number" v-model="quantity" id="quantity" min="1" required />
        </div>
        <button type="submit">Bayar</button>
      </form>
      <div v-if="totalCost">
        <h3>Total: Rp{{ totalCost }}</h3>
      </div>
    </div>
    <div class="listOrder">
      <div class="contentOrder"
      v-for="(data,index) in dataOrderCoffe" :key="index">
      <h1>{{ data.namaUserOrder }}</h1>
      <b>{{ data.nameKopi }}</b>
      <b>{{ data.price }}</b>
      <p>{{ data.total }}</p>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        coffeeList: [
          { id: 1, name: "Latte", price: 20000 },
          { id: 2, name: "Americano", price: 18000 },
          { id: 3, name: "Cappuccino", price: 25000 },
        ],
        dataOrderCoffe:[
          {nameKopi:'latee',price:300000,total:'2',namaUserOrder:'budi'},
          {nameKopi:'americano',price:50000,total:'5',namaUserOrder:'ridho'},
          {nameKopi:'latee',price:450000,total:'4',namaUserOrder:'ahmad'},
        ],
        selectedCoffee: "",
        quantity: 1,
        totalCost: null,
      };
    },
    methods: {
      submitTransaction() {
        const coffee = this.coffeeList.find(c => c.name === this.selectedCoffee);
        this.totalCost = coffee.price * this.quantity;
      },
    },
  };
  </script>
  
  <style>
  .content{
    width:100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    padding: 20px 0;
  }
  .transaction{
    padding: 20px;
    box-shadow: 0 0 2px 1px black;
  }
  .listOrder{
    width:80%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .contentOrder{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    box-shadow: 0 0 2px 1px gray;
  }
  </style>
  