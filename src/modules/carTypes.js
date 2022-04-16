export default {
    state() {
        return {
            carTypes: [
                /* {
                    name: "Tempest",
                    slug: "tempest"
                },
                {
                    name: "Fameux",
                    slug: "fameux"
                } */
            ]
        }
    },

    getters: {
        getCarTypes(state) {
            return state.carTypes
        }
    }
}