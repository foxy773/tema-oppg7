<template>
	<div class="car-show">
        <img class="show__image" :src="`${car.showImage.asset.url}`" alt="">
	</div>
</template>

<script>
export default {

    props: {
	    car: Object
	}

}
</script>

<style>
	.car-show {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
       /*  padding: 1rem 1rem 10rem 0rem; */
    }

    .show__image {
        width: 100%;
        height: auto;
    }
</style>