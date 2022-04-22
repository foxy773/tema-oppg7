<template>
  <div class="order" v-if="loaded">
    <CarShow :selectedModel="updateCar" />
    <OrderMenu class="menu" :car="currentCars" />
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
      loaded: false,
      allCars: null,
      currentCars: null,
      selectedModel: null,
      selectedColor: null,
      /* selectedCar: null */
    }
  },

  watch: {
    selectedModel(newColor, oldColor) {
      if (newColor !== oldColor) {
        this.getAllData()
      }
    }
  },

    async created(){
      
    },

    async mounted() {
     await this.getAllData()
    },

    computed: {
      /* updateData() {
        return this.filterShowCar()
      }, */

      /* car() {
        return this.filterAllCarsFromStore()
      },

      selectedModel() {
        return this.filterShowCar()
      }, */

      getColor() {
        this.selectedColor = this.$store.getters.getCustomizedCar.color
      },

      updateCar() {
        return this.filterShowCar()
      }

      /* allCarsFromStore() {
				return this.$store.getters.getCars
			} */
    },

    methods: {
      async getAllData() {
        this.allCars = await this.$store.getters.getCars
        this.currentCars = this.filterAllCarsFromStore()
        this.selectedColor = await this.$store.getters.getCustomizedCar.color
        this.selectedModel = this.filterShowCar()
        this.loaded = true
      },

      filterAllCarsFromStore() {
        const allCars = this.allCars
        const slug = this.getSlug()
        console.log(allCars, "allCars")
        const car = allCars.find(car => car.slug.current === slug);
        console.log(car, "carf")
        return car
      },

      filterShowCar() {
        const car = this.currentCars
        const models = car.typesOfCars
        console.log(models)
        console.log(car, "carsss")
        const color = this.selectedColor
        console.log(color, "color")
        return models.find(model => model.color.color.colorName === color)
      },

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