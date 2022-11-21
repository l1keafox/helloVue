<template>
  <div class="flex flex-col justify-center items-center">
  <h2>Fullname - {{firstName}} {{lastName}} </h2>
  <h2> Computed Fullname - {{fullName}}</h2>
  <h2> Totals - {{ items.reduce((total,curr) => (total=total+curr.price),0) }}</h2>
  <button @click="items.push({id:items.length+1, title:'keyboard',price:50 } )"> BTM </button>
  <h3> Total Computed {{calculateTotal}}</h3>
  <h2> {{items.map( e=> e )}} </h2>
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
          price:120
        },
        {
          id:3,
          title: 'Laptop',
          price:105
        },
      ]
    };
  },
  methods: {
  },
  computed:{
    fullName(){
      return `${this.firstName} ${this.lastName}`
    },
    calculateTotal(){
      return this.items.reduce((total,curr) => (total=total+curr.price),0)
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
