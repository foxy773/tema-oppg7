<template>

		<Header v-if="checkIfLoaded" />
		<RouterView v-if="checkIfLoaded" />
		<div class="pulse" v-if="!checkIfLoaded">
         <h2>LOADING...</h2>
      </div>
		<!-- <div v-if="!checkIfLoaded">LOADING</div> -->

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

.pulse {
   display: flex;
   top: 50%;
   left: 50%;
   width: 95px;
   height: 52.8px;
   color: #e5ff00;
   --c: radial-gradient(farthest-side,currentColor 96%,#0000);
   background: var(--c) 100% 100% /30% 60%,
          var(--c) 70%  0    /50% 100%,
          var(--c) 0    100% /36% 68%,
          var(--c) 27%  18%  /26% 40%,
          linear-gradient(currentColor 0 0) bottom/67% 58%;
   background-repeat: no-repeat;
   position: absolute;
}

.pulse > *{
   padding: 5rem 0 0 0;
}

.pulse:after {
   content: "";
   position: absolute;
   inset: 0;
   background: inherit;
   opacity: 0.4;
   animation: pulse-hjvm54 0.8s infinite;
}

@keyframes pulse-hjvm54 {
   to {
      transform: scale(1.8);
      opacity: 0;
   }
}
</style>
