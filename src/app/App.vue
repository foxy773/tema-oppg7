<template>

		<Header />
		<RouterView />

</template>
<script>
import Header from './../components/Header.vue';
import sanityClient from "@sanity/client";

const sanity = sanityClient({
	projectId: "7q56kn2q",
	dataset: "production",
	apiVersion: "2022-03-30",
	useCDN: false
})

const path = "./../../public/groq/query.groq";
const groq = await fetch(path);
const query = await groq.text();

const params = "";

export default {
	components: {
		Header
	},
	data() {
		return {
			allData: [],
			cars: [],
			colors: {},
			carTypes: {}
		}
	},

	mounted() {
		
	},

	created() {
		console.log("created")
		this.fetchDataAndStore()
	},

	methods: {
		async fetchDataAndStore() {
			this.allData = await sanity.fetch(query, params);
			console.log(this.cars)
			this.sendDataToStore()
		},

		async sendDataToStore() {
			this.$store.state.cars.cars = await this.allData.cars
			this.$store.state.carTypes.carTypes = this.allData
			console.log(this.$store.state.cars.cars)
		}
	}
}
</script>

<style>
	@import '../style/reset.css';
	@import '../style/variables.css';
	@import '../style/fonts.css';
	@import '../style/style.css';
</style>
