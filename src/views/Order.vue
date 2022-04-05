<template>
  <div class="order">
    <OrderMenu />
  </div>
</template>

<script>
import OrderMenu from "../components/OrderMenu.vue";

export default {
  components: {
    OrderMenu
  }
}
</script>

<style>
.order {
    height: 100%;
}

</style>