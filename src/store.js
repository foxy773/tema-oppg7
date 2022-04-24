/* import cars from "./modules/cars.js";
import carTypes from "./modules/carTypes.js";
import customizedCar from "./modules/customizedCar.js" */

export default {
	
	/* modules: {
		cars,
		carTypes,
		customizedCar
	}, */

	state() {
		return {
			loaded: false,
			content: [],
			cars: [],
			selectedCar: [],
			selectedColor: {color: null}
		};
	},

	mutations: {
		importData(state, data) {
			state.content = data
			state.cars = data.cars
		},

		loadedSwitch(state) {
			state.loaded = !state.loaded
		},

		changeColor(state, data) {
			state.selectedColor.color = data
		}

	},

	actions: {
		setUpData({commit}, data) {
			commit("importData", data)
			commit("loadedSwitch")
		},

		changeColor({commit}, data) {
			commit("changeColor", data)
		}
	},

	getters: {
		getEverything(state) {
			return state.content
		},

		getCars(state) {
			return state.cars
		},

		getLoadedState(state) {
			return state.loaded
		},

		getSelectedColor(state) {
			return state.selectedColor.color
		},

		getSelectedColorLength(state) {
			return state.selectedColor.color.length
		}

	},

	mounted() {
		
	},

	created() {
		
	},

	
};
