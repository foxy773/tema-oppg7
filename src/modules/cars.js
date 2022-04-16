export default {
    state() {
        return {
            cars: [
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
        getCars(state) {
            return state.cars
        }
    }
}