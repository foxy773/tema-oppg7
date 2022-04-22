import sanity from "../sanity.js";

export default {
	methods: {
		async fetchDataAndStore(query, params) {
			this.allData = await sanity.fetch(query, params);
			console.log(this.cars)
			this.sendDataToStore()
		},

		async sendDataToStore() {
			this.$store.state.cars.cars = await this.allData.cars
			this.$store.state.carTypes.carTypes = await this.allData
			console.log(this.$store.state.cars.cars)
			this.loaded = true
		}
	}
}
