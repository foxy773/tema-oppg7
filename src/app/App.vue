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

const query = `{
  "cars": * [_type=="cars"]{
  available,
  slug {
 current
  },

  carName,
  modelYear,
  price,
  typesOfCars[]{
    carTypeName,
    color {
    color -> {
    colorName,
    colorImage {
    asset -> {
    url
  }
  }
  }
  },
models {
  modelTypes -> {
  cartypename
}
},
carImage {
  asset -> {
  url
}
}
  },
carFeatures[]{
  carFeatureName,
  feature -> {
  featureIcon {
  asset -> {
  url
}
}
},
  topSpecPerf
}
  
},
 "colors": * [_type=="colors"]{
   colorName,
   colorImage {
   asset -> {
   url
 },
 },

 },
"cartypes": * [_type=="cartypes"]{
  cartypename
}
}


`;

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
		this.fetchDataAndStore()
	},

	created() {

	},

	methods: {
		async fetchDataAndStore() {
			this.allData = await sanity.fetch(query, params);
			console.log(this.cars)
			this.sendDataToStore()
		},

		sendDataToStore() {
			this.$store.state.cars.cars = this.allData.cars
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
