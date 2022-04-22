<template>

		<Header v-if="this.loaded" />
		<RouterView v-if="this.loaded" />
		<div v-else>LOADING</div>

</template>
<script>
import Header from './../components/Header.vue';
import mainMixin from "../mixins/mainMixin.js";
import query from "../groq/query.groq?raw";

export default {
	components: {
		Header
	},

	mixins: [mainMixin],

	data() {
		return {
			loaded: false,
			allData: [],
			cars: [],
			colors: {},
			carTypes: {}
		}
	},

	computed: {
		/* checkIfData() {
			const store = this.$store.getters.getCars
			if (store.toString().length = 0) {
				this.loaded = true
			}
		} */
		
	},

	mounted() {
		
	},

	created() {
		this.fetchDataAndStore(query);
		
	},

	methods: {
	}
}
</script>

<style>
	@import '../style/reset.css';
	@import '../style/variables.css';
	@import '../style/fonts.css';
	@import '../style/style.css';
</style>
