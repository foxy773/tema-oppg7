<template>
    <ul class="car-type__selection">
        <div class="car-type__title">
            <h2>Models</h2>
        </div>
            <li class="selection__item"
            v-for="model in filterCarModels">
            <button @click="selectModel(model.cartypename)"
            :class="{
            'item__button': modelSelected !== model.cartypename,
            'item__button--selected': modelSelected === model.cartypename
            }"> {{ model.cartypename }} </button>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            modelSelected: "Standard"
        }
    },

    props: {
        
	},

    created() {
       
    },

    mounted() {
        this.selectModel(this.modelSelected)
    },

    computed: {
        filterCarModels() {
            let models = this.getSelectedCarModels
            console.log(models, "models")

            const result = models.filter((value, index) => {
                const _value = JSON.stringify(value.models.modelTypes.cartypename);
                return index === models.findIndex(obj => {
                    return JSON.stringify(obj.models.modelTypes.cartypename) === _value
                }) 
            })
            const finalResult = result.map((models => models.models.modelTypes))
            return finalResult
        },


        getSelectedCarModels() {
            return this.$store.getters.getSelectedCarModels
        }
    },

    methods: {
         selectModel(model) {
            this.modelSelected = model;
            this.$store.dispatch("changeModelName", model)
        }
    }
}
</script>

<style scoped>


.car-type__selection {
    /* height: 15rem; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style:none ;
}

.car-type__title {
    padding: 1rem 0;
    align-self: center;
}

.selection__item {
    width: 100%;
    height: 3rem;
    padding: 0.3rem 0;
}

.car-type__selection {
    padding: 1rem 0;
    align-self: center;
}

.selection__item--selected {
    width: 3.5rem;
    height: 3.5rem;
    border: 0.25rem solid var(--highlight);
}

.item__button {
    width: 100%;
    height: 100%;
    border: none;
    background: var(--foreground);
    color: var(--background);
    text-decoration: none;
    font-family: var(--font-family);
    font-size: 1rem;
    font-style: bolder;
}

.item__button:hover {
    border: 0.25rem dashed var(--highlight);
    background: var(--background);
    color: var(--highlight);
}
.item__button--selected {
    width: 100%;
    height: 100%;

    font-family: var(--font-family);
    font-size: 1rem;
    font-style: bolder;
    border: 0.25rem solid var(--highlight);
    background: var(--background);
    color: var(--highlight);
}
</style>