<template>

		<Header v-if="checkIfLoaded" />
		<RouterView v-if="checkIfLoaded" />
		<div v-if="!checkIfLoaded">LOADING</div>

</template>
<script>
import Header from './../components/Header.vue';
/* import mainMixin from "../mixins/mainMixin.js"; */
import sanity from "../sanity.js"
import query from "../groq/query.groq?raw";

export default {
	components: {
		Header
	},

/* 	mixins: [mainMixin], */

	data() {
		return {
			
		}
	},

	computed: {
		checkIfLoaded() {
			return this.$store.getters.getLoadedState
		}

		/* checkIfData() {
			const store = this.$store.getters.getCars
			if (store.toString().length = 0) {
				this.loaded = true
			}
		} */
		
	},

	mounted() {
		
	},

	async created() {
		const sanityData = await sanity.fetch(query);

		this.$store.dispatch("setUpData", sanityData)
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
