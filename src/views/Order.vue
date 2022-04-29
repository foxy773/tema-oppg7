<template>
  <div class="order" v-if="checkIfLoaded">
    <CarShow :selectedModel="filterShowCar" />
    <OrderMenu class="menu" :selectedCar="filterCars" :selectedModel="filterShowCar" />
    <div class="order__price-window" v-if="getSelectedModel">
      <h2>Total Price</h2>
      <p>${{ this.calculateTotalPrice }}</p>
    </div>
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
      /* currentCars: null,
      selectedModel: null,
      selectedColor: null,
      selectedCar: null */
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

      getSelectedCar() {
        return this.$store.getters.getSelectedCar
      },

      filterCars() {
        const allCars = this.cars
        const slug = this.getSlug()
        console.log(allCars, "allCars")
        const car = allCars.find(car => car.slug.current === slug);
        console.log(car, "carf")
        this.$store.dispatch("addSelectedCar", car)
        return car
      },

      filterShowCar() {
        const models = this.filterCars.typesOfCars
        const color = this.getSelectedColor
        const selectedModel = this.getSelectedModelName
        const model = models.find(model => model.color.color.colorName === color && model.models.modelTypes.cartypename === selectedModel )
        this.$store.dispatch("changeModel", model)
        console.log(model, "moooodel")
        console.log(selectedModel, "selectedModel")
        return model
      },

      getSelectedColor() {
        return this.$store.getters.getSelectedColor
      },

      getSelectedModel() {
        return this.$store.getters.getSelectedModel
      },

      getSelectedModelName() {
        return this.$store.getters.getSelectedModelName
      },

      calculateTotalPrice() {
        console.log(this.getSelectedModel, "dfdsf")
        const total = this.getSelectedModel.models.carTypePrice + this.getSelectedModel.color.colorPrice
        return total.toLocaleString('en-US')
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
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.order__price-window {
  width: 20rem;
  height: 6rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  align-items: center;
  justify-content: space-around;
  background: var(--foreground);
  padding: 1rem 2rem;
  border-radius: 0 1rem 0 0;
}

.order__price-window {
  font-weight: 500;
}

.order__price-window > * {
  justify-content: space-between;
  color: var(--background);
}

/* .menu {
  display: flex;
    align-self: center;
    justify-self: right;
} */

</style>