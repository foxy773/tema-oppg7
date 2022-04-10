<template>
	<ul class="car-color__selection">
        <li class="selection__item" :class="{colorSelected: selected}" v-for="color in colorArray" id="color-selected"><img :src="color.colorImage.asset.url" alt=""></li>
    </ul>
</template>

<script>
export default {
    props: {
	    colorArray: Array,
	},

	data() {
		return {
			
		}
	},
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

/* #color-selected {
    border: 0.2rem solid white
} */
</style>