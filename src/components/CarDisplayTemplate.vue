<template>
	<video v-if="getSlug() === 'tempest'" autoplay muted loop id="background-video">
  		<source src="videos/car_homepage.mp4" type="video/mp4">
	</video>
	<video  v-else autoplay muted loop id="background-video">
  		<source src="videos/Fameux-lowq.mp4" type="video/mp4">
	</video>
	<!-- <img class="background-image" src="images/background_car.png" alt=""> -->
	<div class="car-container" v-for="icar in car">
		<h1 class="car-container__name">{{ icar.carName }}</h1>

		<div class="car-container__info">
			<router-link v-if="icar.available" :to="{path: 'order'}"> <button class="car-container__order-button">Order Now</button> </router-link>
			<h2 v-else>Coming soon</h2>
			<div class="car-container__specs">
				<div class="specs__container" v-for="specs in icar.carFeatures">
					<img :src="`${specs.feature.featureIcon.asset.url}`" class="container__image" alt="">
					<div class="container__info">
					<p>{{ specs.topSpecPerf }}</p>
					<p>{{ specs.carFeatureName }}</p>
					</div>
				</div>

				<!-- <div class="specs__container">
					<img src="images/distance.png" class="container__image" alt="">
					<div class="container__info">
					<p>489 km</p>
					<p>Range (WLTP)</p>
					</div>
				</div> -->
				<!-- <div class="specs__torque">
					<p>489 km</p>
					<p>Range (WLTP)</p>
				</div> -->

				<!-- <div class="specs__container">
					<img src="images/car-repair.png" class="container__image" alt="">
					<div class="container__info">
					<p>AWD</p>
					<p>Duel Motor</p>
					</div>
				</div> -->
				<!-- <div class="specs__torque">

					<p>AWD</p>
					<p>Duel Motor</p>
				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
	    car: Array
	},

	data() {
		return {
			loaded: false
		}
	},

	async created() {
		
	},

	methods: {
		getSlug() {
			return this.$route.params.carPageSlug
		}
	},

	mounted() {
		
	}
}
</script>
<style scoped>
	

	.car-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}

	.car-container__info {
		width: 60%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}


	.car-container__name {
		color: var(--foreground);
	}

	.car-container__order-button {
		border: none;
		width: 14rem;
		/* font-family: robo; */
		font-size: 1.2rem;
		font-style: normal;
		text-decoration: none;
		color: var(--foreground);
		background: transparent;
		outline: 0.3rem solid var(--foreground);
		border-radius: 1rem;
		padding: 1rem 2rem;
	}

	.car-container__order-button:hover {
		background: var(--foreground);
		color: var(--background);
		outline: none;
	}

	.car-container__specs {
		display: flex;
		width: 100%;
		height: 10rem;
		padding: 1rem;
		align-items: center;
		justify-content: center;
	}

	.specs__container {
		display: flex;
		justify-content: center;
		height: 50%;
		width: 50%;
	}

	.container__info {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.container__image {
		height: 100%;
		width: auto;
		padding: 0.5rem;
	}

	.container__info p:nth-child(2) {
		padding: 0.3rem 0 0 0;
		font-size: 0.8rem;
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

