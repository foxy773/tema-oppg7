<template>
	<div class="car-show" >
        <img class="show__image" :src="selectedModel.carImage.asset.url" alt="">
	</div>
</template>

<script>
export default {

    props: {
	    selectedModel: Object
	},
    data(){
        return {
            loaded: true/* ,
            carObject: this.car */
        }
    },

    mounted() {
        /* this.checkPropForData() */
    },

    computed: {
        checkPropForData() {
            
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