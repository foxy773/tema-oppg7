<template>
    <div class="order-menu">
        <div class="order-menu__car-name">
            <h1>{{ car.carName }}</h1>
        </div>
        <div class="order-menu__car-specs">
            <ul class="car-specs__list">
                <li class="list__spec">
                    <p>{{car.typesOfCars[0].models.carRange}}<span>km</span></p>
                    <p>Range</p>
                </li>
                <li class="list__spec">
                    <p>{{car.typesOfCars[0].models.carTopSpeed}}<span>km/h</span></p>
                    <p>Top Speed</p>
                </li>
                <li class="list__spec">
                    <p>{{car.typesOfCars[0].models.carTorque}}<span>s</span></p>
                    <p>0-100 km/h</p>
                </li>
            </ul>
        </div>
      <div class="order-menu__car-type">
          <CarTypeSelection  />
      </div>
          <div class="order-menu__car-color">
              <div class="car-color__title">
                  <h2>Paints</h2>
              </div>
                  <ColorSelection :colors="colors" />
      </div>
      <div class="order-menu__car-features">
          <div class="car-features__title">
              <h2>Extras</h2>
              </div>

            <ul class="car-features__selection">
              <li class="selection__item"><button class="item__button">test1</button></li>
              <li class="selection__item"><button class="item__button">test2</button></li>
              <li class="selection__item"><button class="item__button">test3</button></li>
            </ul>
      </div>
  </div>
</template>

<script>
import ColorSelection from "./../components/ColorSelection.vue"
import CarTypeSelection from "./../components/CarTypeSelection.vue"

export default {
    components: {
        ColorSelection,
        CarTypeSelection
    },

    props: {
	    car: {
            type: Object
        }
	},

    data() {
		return {
			colors: []
		}
	},

    created() {
        this.getColors()
    },

    methods: {
        getColors() {
            const models = this.car.typesOfCars
            let colors = this.colors
            models.forEach((model)=> {
                colors.push(model.color.color)
                console.log(colors, "colors")
            })
        }
    }
}
</script>

<style>
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

.order-menu__car-type {
    width: 100%;
    padding: 0 0 4rem 0;
}

.car-type__selection, .car-features__selection {
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
    text-align: center;
    font-size: 1.5rem;
}

.list__spec > p:nth-child(2) {
    font-size: 0.8rem;
    opacity: 0.8;
}

.list__spec p span {
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