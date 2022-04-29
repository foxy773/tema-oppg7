<template>
    <div class="order-menu">
        <div class="order-menu__car-name">
            <h1>{{ selectedCar.carName }}</h1>
        </div>
        <div class="order-menu__car-specs" v-if="this.getSelectedModel">
            <ul class="car-specs__list">
                <li class="list__spec">
                    <p><span class="counter">{{ this.getSelectedModel.models.carRange }}</span><span>km</span></p>
                    <p>Range</p>
                </li>
                <li class="list__spec">
                    <p><span class="counter">{{ this.getSelectedModel.models.carTopSpeed }}</span><span>km/h</span></p>
                    <p>Top Speed</p>
                </li>
                <li class="list__spec">
                    <p><span class="counter" >{{ this.getSelectedModel.models.carTorque }}</span><span>s</span></p>
                    <p>0-100 km/h</p>
                </li>
            </ul>
        </div>
      <div class="order-menu__car-type">
          <CarModelSelection />
      </div>
          <div class="order-menu__car-color">
              <div class="car-color__title">
                  <h2>Paints</h2>
              </div>
                  <ColorSelection :colors="getColors" />
      </div>
      <!-- <div class="order-menu__car-features">
          <div class="car-features__title">
              <h2>Extras</h2>
              </div>

            <ul class="car-features__selection">
                <li class="selection__item">
                    <button class="item__button">test1</button>
                </li>
                <li class="selection__item">
                    <button class="item__button">test2</button>
                </li>
                <li class="selection__item">
                    <button class="item__button">test3</button>
                </li>
            </ul>
      </div> -->
      <div class="order-menu__checkout">
          <button class="checkout__button">
              Checkout
          </button>
      </div>
  </div>
</template>

<script>
import ColorSelection from "./../components/ColorSelection.vue"
import CarModelSelection from "./CarModelSelection.vue"

export default {
    components: {
        ColorSelection,
        CarModelSelection
    },

    props: {
	    selectedCar: {
            type: Object
        }
	},

    data() {
		return {
		
		}
	},

    created() {
        
    },

    mounted() {
        
    },

    computed: {
        getColors() {
            let models = this.selectedCar.typesOfCars
            console.log(models, "models")
            const allColors = this.getAllColors
            const test = allColors.map((color => color.colorName))
            console.log(test)
            console.log(allColors, "allColors")

            const result = models.filter((value, index) => {
                const _value = JSON.stringify(value.color.color.colorName);
                return index === models.findIndex(obj => {
                    return JSON.stringify(obj.color.color.colorName) === _value
                })
                
            })
            const finalResult = result.map((models => models.color.color))
            return finalResult
        },

        getAllColors() {
            return this.$store.getters.getAllColors
        },

        getSelectedModel() {
            return this.$store.getters.getSelectedModel
        }
    },

    methods: {
        /* setUpCounters() {
            const counters = document.querySelectorAll(".counter")
            const speed = 350
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute("data-target")
                    const count = +counter.innerText;
                    const increment = (target / speed);

                    if (count < target) {
                        counter.innerText = (count + increment).toFixed(2)
                        setTimeout(updateCount, 1)
                    } else {
                        counter.innerText = target
                    }
                }
                updateCount()
            })
        }, */
    }
}
</script>

<style scoped>
.order-menu {
    height: 100%;
    max-height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    overflow-y: scroll;
}

.order-menu__checkout {
    width: 100%;
    height: 21rem;
    display: flex;
    flex-direction: column;
    padding: 0 0 4rem 0;
    align-items: center;
}

.checkout__button {
    width: 50%;
    height: 3rem;
    border-radius: 2rem;
    font-size: 1rem;
    font-weight: bold;
    background: var(--highlight);
}

.checkout__button:hover {
    background: var(--background);
    color: var(--foreground);
    border: 0.25rem dashed var(--highlight);
}

.order-menu__car-type {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 0 4rem 0;
}

 .car-features__selection {
    height: 11rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.selection__item {
    list-style: none;
    width: 100%;
    height: 3rem;
}

.order-menu__car-specs {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.car-specs__list {
    width: 100%;
    display: flex;
    list-style: none;
    justify-content: space-between;
}

.list__spec {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    text-align: center;
    font-size: 1.5rem;
}

.list__spec > p:nth-child(2) {
    font-size: 0.8rem;
    opacity: 0.8;
}

.list__spec p:nth-child(2) span {
    font-size: 1rem;
}

.item__button {
    width: 100%;
    height: 100%;
    border: none;
    background: var(--foreground);
    color: var(--background);
    text-decoration: none;
    font-family: var(--font-family);
    font-size: 1rem;
    font-style: bolder;
}

.item__button:hover {
    border: 0.25rem dashed var(--highlight);
    background: var(--background);
    color: var(--highlight);
}

.car-color__title, .order-menu__car-name, .car-features__title {
    padding: 1rem 0;
    align-self: center;
}

.order-menu__car-color, .order-menu__car-features {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 0 4rem 0;
}

.selection__item > img {
    width: 100%;
    height: 100%;
}

</style>