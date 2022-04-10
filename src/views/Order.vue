<template>
  <div class="order">
    <CarShow />
    <OrderMenu class="menu" :colorArray="colors" :carTypesArray="carTypes"/>
  </div>
</template>

<script>
import OrderMenu from "../components/OrderMenu.vue";
import CarShow from "../components/CarShow.vue";

export default {
  components: {
    OrderMenu,
    CarShow
  },

  data(){
    return {
      access_token: null,
      colors: null,
      carTypes: null,
      cars: null
    }
  },

    async created(){
      this.fetchCarData()
    },

    methods: {
      async fetchCarData() {
		    const access_token = "";
        const API = `https://7q56kn2q.api.sanity.io/v2021-10-21/data/query/production?query=%7B%0A%20%20%22cars%22%3A%20*%20%5B_type%3D%3D%22cars%22%5D%7B%0A%20%20available%2C%0A%20%20carImage%20%7B%0A%20%20asset%20-%3E%20%7B%0A%20%20url%0A%7D%2C%0A%7D%2C%0A%20%20color%20-%3E%20%7B%0A%20%20colorName%2C%0A%20%20colorImage%20%7B%0A%20%20%20%20asset%20-%3E%20%7B%0A%20%20%20%20url%0A%20%20%7D%2C%0A%20%20%7D%2C%0A%7D%2C%0A%20%20carName%2C%0A%20%20modelYear%2C%0A%20%20price%0A%0A%20%20%0A%7D%2C%0A%20%22colors%22%3A%20*%20%5B_type%3D%3D%22colors%22%5D%7B%0A%20%20%20colorName%2C%0A%20%20%20colorImage%20%7B%0A%20%20%20asset%20-%3E%20%7B%0A%20%20%20url%0A%20%7D%2C%0A%20%7D%2C%0A%0A%20%7D%2C%0A%22cartypes%22%3A%20*%20%5B_type%3D%3D%22cartypes%22%5D%7B%0A%20%20cartypename%0A%7D%0A%7D%0A%0A%0A`;
        const options = {
          headers:{
            "Content-Type": "application/json",
            "response-Type": "application/json",
            /* "Authorization": access_token, */
          },
          /* mode: "no-cors", */
          referrerPolicy: "no-referrer"
        };
        const res = await fetch(API, options);
        const results = await res.json();
        const final = results.result
        this.colors = final.colors
        this.carTypes = final.cartypes
        console.log(this.carTypes)
      }
    }
}    
</script>

<style>
.order {
    height: 100%;
    width: 100%;
    display: flex;
    overflow: hidden;
}

/* .menu {
  display: flex;
    align-self: center;
    justify-self: right;
} */

</style>