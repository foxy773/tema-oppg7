<template>
  <div class="order-menu">
      <div class="order-menu__car-name">
          <h1>Tempest</h1>
      </div>
      <div class="order-menu__car-type">
          <ul class="car-type__selection">
              <li class="selection__item">
                  <button class="item__button">Standard</button>
              </li>
              <li>
                  <button class="item__button">Performance</button>
              </li>
              <li class="selection__item">
                  <button class="item__button">Luxury</button>
              </li>
          </ul>
      </div>
          <div class="order-menu__car-color">
              <div class="car-color__title">
                  <h2>Color</h2>
              </div>
              <ul class="car-color__selection">
                  <li class="selection__item"><img src="" alt=""></li>  <!--Black-->
                  <li class="selection__item"><img src="" alt=""></li>  <!--White-->
                  <li class="selection__item"><img src="" alt=""></li>  <!--Blue-->
                  <li class="selection__item"><img src="" alt=""></li>  <!--Red-->
              </ul>
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
export default {

}
</script>

<style>
.order-menu {
    height: 100%;
}

</style>