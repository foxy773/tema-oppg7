<template>
  <div class="order" v-if="checkIfLoaded">
    <CarShow :selectedModel="filterShowCar" />
    <OrderMenu class="menu" :selectedModel="filterCars" />
  </div>
</template>

<script>
import OrderMenu from "../components/OrderMenu.vue";
import CarShow from "../components/CarShow.vue";
/* import ColorSelectionVue from '../components/ColorSelection.vue'; */

export default {
  components: {
    OrderMenu,
    CarShow
  },

  data(){
    return {
      currentCars: null,
      selectedModel: null,
      selectedColor: null,
      /* selectedCar: null */
    }
  },

    async created(){
      
    },

    async mounted() {

    },

    computed: {
      checkIfLoaded() {
			  return this.$store.getters.getLoadedState
		  },

      cars() {
        return this.$store.getters.getCars
      },

      filterCars() {
        const allCars = this.cars
        const slug = this.getSlug()
        console.log(allCars, "allCars")
        const car = allCars.find(car => car.slug.current === slug);
        console.log(car, "carf")
        return car
      },

      filterShowCar() {
        const car = this.filterCars
        const models = this.filterCars.typesOfCars
        console.log(models)
        console.log(car, "carsss")
        const color = this.getSelectedColor
        console.log(color, "color")
        return models.find(model => model.color.color.colorName === color)
      },

      getSelectedColor() {
        return this.$store.getters.getSelectedColor
      }

    },

    methods: {

      getSlug() {
			  return this.$route.params.carPageSlug
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