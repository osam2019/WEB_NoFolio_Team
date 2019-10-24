import axios from "axios";

export default {
	async loadProfile(store) {
		let result = await axios.get('/mockup/profile.json');
		let data = result.data;
		
		store.commit("setProfile", data);
	},
	
	async createProject(store, name) {
		store.commit("createProject", name);
	},
	
	async loadPortfolioes(store) {
		let result = await axios.get('/mockup/portfolio.json');
		let data = result.data;
		
		store.commit("setPortfolioes", data);
	}
};