<template>
  <div class="order">
    <CarShow :car="car" />
    <OrderMenu class="menu" :car="car" />
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
      cars: null,
      car: null,
      selectedCar: null
    }
  },

    async created(){
      this.carsFromStore()
    },

    computed: {
      
    },

    methods: {
      getSlug() {
			  return this.$route.params.carPageSlug
		  },

      carsFromStore() {
				this.cars = this.$store.getters.getCars
        this.filterCarsFromStore()
			},

      filterCarsFromStore() {
        const cars = this.cars
        const slug = this.getSlug()
        const car = cars.find(car => car.slug.current === slug);
        console.log(car, "carf")
        this.car = car
      },

      selectDefaultCar() {
        
      }
    }
}    
</script>

<style scoped>
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