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
			selectedColor: {color: null},
			selectedModel: null,
			selectedModelName: null
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
		},

		selectedCar(state, data) {
			state.selectedCar = data
		},

		changeModel(state, data) {
			state.selectedModel = data
		},

		changeModelName(state, data) {
			state.selectedModelName = data
		}


	},

	actions: {
		setUpData({commit}, data) {
			commit("importData", data)
			commit("loadedSwitch")
		},

		changeColor({commit}, data) {
			commit("changeColor", data)
		},

		changeModel({commit}, data) {
			commit("changeModel", data)
		},

		changeModelName({commit}, data) {
			commit("changeModelName", data)
		},

		addSelectedCar({commit}, data) {
			commit("selectedCar", data)
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
		},

		getSelectedModel(state) {
			return state.selectedModel
		},

		getSelectedCar(state) {
			return state.selectedCar
		},

		getSelectedCarModels(state) {
			return state.selectedCar.typesOfCars
		},

		getAllColors(state) {
			return state.content.colors
		},

		getSelectedModelName(state) {
			return state.selectedModelName
		}

		/* getAllColorNames(state) {
			return state.content.colors.colorName
		} */

	},

	mounted() {
		
	},

	created() {
		
	},

	
};
