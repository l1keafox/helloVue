<template>
  <div class="flex flex-col justify-center items-center">
  <h2>Fullname - {{firstName}} {{lastName}} </h2>
  <h2> Computed Fullname - {{fullName}}</h2>
  <button @click="changeFullName">  Change Fullname</button>


  <h2> Totals - {{ items.reduce((total,curr) => (total=total+curr.price),0) }}</h2>
  <button @click="items.push({id:items.length+1, title:'keyboard',price:50 } )"> BTM </button>
  <h3> Total Computed {{calculateTotal}}</h3>
  <h2> Method Total - {{getTotal() }} </h2>
  <input type="text" v-model="country">

  <template v-for="item in items" :key="item.id"> 
    <h2 v-if="item.price > 100" >{{item.title}} $$ {{item.price}}</h2>
  </template>

  <h2 v-for="item in expensiveItems" :key="item.id"> 
    {{item.title}} :: ? {{item.price}}
  </h2>

</div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      firstName: 'Bruce',
      lastName: 'Wayne',
      items:[
        {
          id:1,
          title: 'TV',
          price:100
        },
        {
          id:2,
          title: 'Phone',
          price:200
        },
        {
          id:3,
          title: 'Laptop',
          price:300
        },
      ],
      country:''
    };
  },
  methods: {
    // Will always be changed in the UI.
    getTotal(){
      console.log('gettotal method');
      return this.items.reduce((total,curr) => (total=total+curr.price),0)
    },
    changeFullName(){
      this.fullName = "Johan Lee"
    }
  },
  computed:{
    // computed is cached, and doesn't always get called when UI.
    // Filtering sorting here is best! Prevent Vue from recalcuating update doesn't concern table data.
    fullName:{
      get(){
        return `${this.firstName} ${this.lastName}`
      },
      set(value){
        const names = value.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
      }
    },
    calculateTotal(){
      console.log("get total calcuated")
      return this.items.reduce((total,curr) => (total=total+curr.price),0)
    },
    expensiveItems(){
      return this.items.filter(e=>e.price > 100);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
