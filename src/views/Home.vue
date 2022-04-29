<template>
	<img id="background-image" src="images/bothCars.png">
	<div class="car-container">
		<h1 class="car-container__name">The peak of posh</h1>

		<div class="car-container__info">
			<div class="info__car" v-for="car in carsFromStore">
				<p>{{ car.carDescription }}</p>
			<router-link id="router-link" :to="`/${car.slug.current}`"> <button class="car-container__order-button">{{ car.carName }}</button></router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loaded: false
		}
	},

	computed: {
			carsFromStore() {
				return this.$store.getters.getCars
			},
		},

	async created() {
		
	},

	methods: {
		
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
		height: 30%;
		width: 60%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}


	.car-container__name {
		color: var(--foreground);
		background: rgba(0, 0, 0, 0.7);
		padding: 1rem 2rem;
		border-radius: 4rem;
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

	.info__car {
		height: 80%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1rem;
		align-items: center;
		text-align: center;
	}

	.info__car > p {
		padding: 1rem;
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


	#background-image {
		object-fit: cover;
		width: 100%;
		height: 100%;
		position: absolute;
		right: 0;
		bottom: 0;
		min-width: 100%;
		z-index: -1;
	}

	#router-link {
		display: inline-block;
		width: 14rem;
	}
</style>

