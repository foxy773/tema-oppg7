<template>
	<CarDisplayTemplate :car="filterSlug()"/>
</template>

<script>
import CarDisplayTemplate from "../components/CarDisplayTemplate.vue"

export default {
	components: {
    	CarDisplayTemplate
  },
	data() {
		return {
			car: []
		}
	},

	async created() {
		this.filterSlug()
	},

	methods: {
		getSlug() {
			return this.$route.params.carPageSlug
		},

		filterSlug() {
			return this.$store.getters["getCars"].filter(slug => {
				return slug.slug.current === this.getSlug()
			})
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
		padding: 8rem;
		justify-content: space-between;

		background-color: black;
		opacity: 0.5;
		border-radius: 1rem;
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

