export default {
	state() {
		 return {
			CustomizedCar: {
				color: "Black",
				model: null
			}
		 }
	},

	getters: {
		getCustomizedCar(state) {
			return state.CustomizedCar
		}
	},

	mutations: {
		changeColor (state, color) {
			state.CustomizedCar.color = color
		},

		changeModel (state, model) {
			state.model = model
		}
	 }/* ,

	 action: {
		changeColor (state, color) {
			state.color = color
		}
	 } */
}