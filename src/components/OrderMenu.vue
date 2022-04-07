<template>
  <div class="order-menu">
      <div class="order-menu__car-name">
          <h1>Tempest</h1>
      </div>
      <div class="order-menu__car-type">
          <ul class="car-type__selection">
              <li class="selection__item car-type">
                  <button class="item__button">Standard</button>
              </li>
              <li class="selection__item car-type">
                  <button class="item__button">Performance</button>
              </li>
              <li class="selection__item car-type">
                  <button class="item__button">Luxury</button>
              </li>
          </ul>
      </div>
          <div class="order-menu__car-color">
              <div class="car-color__title">
                  <h2>Color</h2>
              </div>
                  <ColorSelection :colorArray="colorArray" />
      </div>
      <div class="order-menu__car-features">
          <ul class="car-features__selection">
              <li class="selection__item"></li>
              <li class="selection__item"></li>
              <li class="selection__item"></li>
          </ul>
      </div>
  </div>
</template>

<script>
import ColorSelection from "./../components/ColorSelection.vue"

export default {
    components: {
        ColorSelection,
    },

    props: {
	    colorArray: Array,
	},
    data() {
        return {
            
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

}

.car-type__selection {
    width: 100%;
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
    border: 0.25rem dashed rgb(229, 255, 0);
    background: var(--background);
    color: rgb(229, 255, 0);
}

.car-color__title, .order-menu__car-name {
    padding: 1rem 0;
}

.car-color__title{
    align-self: center;
}

.order-menu__car-color {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.selection__item > img {
    width: 100%;
    height: 100%;
}

</style>