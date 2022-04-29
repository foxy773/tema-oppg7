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
    <p v-if="getSelectedModel"  class="color-text">{{ this.paintPrice }}</p>
</template>

<script scoped>
export default {
    data() {
        return {
            colorSelected: "Black"
        }
    },

    props: {
	    colors: Array
	},

    mounted() {
        console.log(this.colors, "colors in color")
    },

    created() {
        this.selectColor(this.colorSelected)
    },

    computed: {
        getSelectedModel() {
            return this.$store.getters.getSelectedModel
        },

        paintPrice() {
            const colorName = this.colorSelected
            const colorPrice = this.getSelectedModel.color.colorPrice
            const colorNamePrice = `${colorName} - $${colorPrice}`
            return colorNamePrice
        }
    },

    methods: {
         selectColor(color) {
            this.colorSelected = color;
            this.$store.dispatch("changeColor", this.colorSelected)
        }
    }

    
}
</script>

<style scoped>
.car-color__selection {
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style:none ;
    padding: 0 0 1rem 0
}

.selection__item {
    width: 3.5rem;
    height: 3.5rem;
    border: 0.25rem solid white;
}

.selection__item img {
    width: auto;
    height: 100%;
    user-select: none;
}

.selection__item:hover {
    border: 0.25rem dashed var(--highlight);
}

.selection__item--selected {
    width: 3.5rem;
    height: 3.5rem;
    border: 0.25rem solid var(--highlight);
}

.color-text {
    align-self: center;
}

.selection__item--selected img{
    width: auto;
    height: 100%;
    user-select: none;
}
</style>