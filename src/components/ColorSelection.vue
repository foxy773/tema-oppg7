<template>
	<ul class="car-color__selection">
        <li 
            v-for="color in colors"
            @click="selectColor(color.colorName)" 
            :id="color.colorName" 
            :class="{
                'selection__item': colorSelected !== color.colorName,
                'selection__item--selected': colorSelected === color.colorName 
            }">
                <img :src="color.colorImage.asset.url" alt="">
            </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            colorSelected: null
        }
    },

    props: {
	    colors: Array
	},

    mounted() {

    },

    created() {

    },

    computed: {
        

    },

    methods: {
        selectColor(color) {
            this.colorSelected = color
            /* console.log(e.target.id) */
        }
    }

    
}
</script>

<style scoped>
.car-color__selection {
    width: 100%;
    display: flex;
    justify-content: space-between
}

.car-color__selection > .selection__item {
    width: 3.5rem;
    height: 3.5rem;
    border: 0.25rem solid white;
}

.selection__item:hover {
    border: 0.25rem dashed var(--highlight);
}

.selection__item--selected {
    width: 3.5rem;
    height: 3.5rem;
    border: 0.2rem solid white
}
</style>