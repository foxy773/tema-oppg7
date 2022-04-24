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
        
    },

    created() {
        this.selectColor(this.colorSelected)
    },

    computed: {
        /* storeColor() {
            this.$store.dispatch("changeColor", this.colorSelected)
            console.log(this.colorSelected)
        } */
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

.selection__item--selected img{
    width: auto;
    height: 100%;
    user-select: none;
}
</style>