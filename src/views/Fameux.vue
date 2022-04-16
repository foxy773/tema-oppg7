<template>
	<!-- <video autoplay muted loop id="background-video">
  		<source src="videos/Fameux-lowq.mp4" type="video/mp4">
	</video>
	 <img class="background-image" src="images/background_car.png" alt="">
	<div class="car-container">
		<h1 class="car-container__name">Tempest</h1>

		<div class="car-container__info">
			<router-link :to="{path: 'order'}"> <button class="car-container__order-button">Order Now</button> </router-link>
			<div class="car-container__specs">
				<div class="specs__torque">
					<p>3.8 s</p>
					<p>0-100 kmh</p>
				</div>
				<div class="specs__torque">
					<p>489 km</p>
					<p>Range (WLTP)</p>
				</div>
				<div class="specs__torque">
					<p>AWD</p>
					<p>Duel Motor</p>
				</div>
			</div>
		</div>
	</div> -->
</template>

<script>
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
		width: 40rem;
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
		height: 100%;
		padding: 4rem;
		justify-content: space-between;
	}

	.specs__torque {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.specs__torque p:nth-child(2) {
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

