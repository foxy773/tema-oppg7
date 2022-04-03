<template>
	<video autoplay muted loop id="background-video" v-if="!loaded">
  		<source src="videos/car_homepage.mp4" type="video/mp4">
	</video>
	<img class="background-image" v-else src="images/background_car.png" alt="">
	<Header />
	<div class="car-container">
		<h1 class="car-container__name">Tempest</h1>

		<div class="car-container__info">
			<button class="car-container__order-button">Order Now</button>
			<div class="car-container__specs">
				<div class="specs__torque">
					<p>3.8 s</p>
					<p>0-100 kmh</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Header from "./../components/Header.vue";

export default {
	data() {
		return {
			loaded: false
		}
	},

	async created() {
		this.checkIfVideoLoaded()
	},

	methods: {
		checkIfVideoLoaded() {
			
		}
	},

	mounted() {
		
	}
}
</script>
<style>
	

	.car-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}

	/* .car-container__info {} */


	.car-container__name {
		color: var(--foreground);
	}

	.car-container__order-button {
		width: 14rem;
		/* font-family: robo; */
		font-size: 1.2rem;
		font-style: normal;

		color: var(--foreground);
		background: transparent;
		outline: 0.3rem solid var(--foreground);
		border-radius: 1rem;
	}

	.car-container__specs {
		height: 100%;
	}

	#background-video {
		position: fixed;
		right: 0;
		bottom: 0;
		min-width: 100%;
		min-height: 100%;
		z-index: -1;
	}
</style>

