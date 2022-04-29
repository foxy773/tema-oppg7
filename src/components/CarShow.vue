<template>
	<div class="car-show" >
        <img v-if="this.getSelectedModel" class="show__image" :src="selectedModel.carImage.asset.url" alt="">
        <h2 v-else>Loading car...</h2>
	</div>
</template>

<script>
export default {

    props: {
	    selectedModel: Object
	},
    data(){
        return {
            loaded: false
        }
    },

    mounted() {
        /* console.log(selectedModel, "selectedModel") */
    },

    computed: {
        getColor() {
            return this.$store.getters.getSelectedColor
        },

        getSelectedModel() {
            return this.$store.getters.getSelectedModel //change
        },

        checkMenuLoaded() {
            if (this.getColor === null || this.getColor === undefined) {
                return false
            } else {
                return true
            }
        }
    },

    methods: {
       
    }

}
</script>

<style scoped>
	.car-show {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
       /*  padding: 1rem 1rem 10rem 0rem; */
    }

    .show__image {
        width: 100%;
        height: auto;
    }
</style>