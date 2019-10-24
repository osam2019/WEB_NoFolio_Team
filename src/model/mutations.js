export default {
	setAcheivementAddVisible(state, value){
		state.Acheivements.add_visible = value;
	},
	setCareerAddVisible(state, value){
		state.Careers.add_visible = value;
	},
	setMenubookVisible(state, value){
		state.Menubook.visible = value;
	},
	scrollPageTo(state, value){
		state.Page.scrollTo = value;
	},
	showBigModal(state, payload) {
		for(let key in state.BigModal) {
			if(key !== "visible")
				state.BigModal[key].visible = false;
		}
		state.BigModal.visible = true;
		
		if(payload.option) {
			state.BigModal[payload.option].visible = true;
			state.BigModal[payload.option].data = payload.data;
		}
	},
	closeBigModal(state) {
		for(let key in state.BigModal) {
			if(key === "visible")
				state.BigModal[key] = false;
			else
				state.BigModal[key].visible = false;
		}
	},
	showModal(state, option) {
		for(let key in state.Modal) {
			if(key !== "visible")
				state.Modal[key].visible = false;
		}
		state.Modal.visible = true;
		if(option)
			state.Modal[option].visible = true;
	},
	closeModal(state) {
		for(let key in state.Modal) {
			if(key === "visible")
				state.Modal[key] = false;
			else
				state.Modal[key].visible = false;
		}
	},
	login(state){
		state.User.logined = true;
	},
	logout(state){
		state.User.logined = false;
	},
	clearProfile(state) {
		let user = state.EmptyUser;
		
		state.User.title = user.title;
		state.User.image = user.image;
		state.User.introduce = user.introduce;
		
		let profile = user.profile;
		
		state.User.profile.name = profile.name;
		state.User.profile.birth = profile.birth;
		state.User.profile.email = profile.email;
		state.User.profile.github = profile.github;
		
		state.User.acheivements = user.acheivements;
		state.User.careers = user.careers;
		state.User.skills = user.skills;
		
		state.Projects = "";
	},
	setProfile(state, json){
		let user = json.User;
		
		state.User.title = user.title;
		state.User.image = user.image;
		state.User.introduce = user.introduce;
		
		let profile = user.profile;
		
		state.User.profile.name = profile.name;
		state.User.profile.birth = profile.birth;
		state.User.profile.email = profile.email;
		state.User.profile.github = profile.github;
		
		state.User.acheivements = user.acheivements;
		state.User.careers = user.careers;
		state.User.skills = user.skills;
		
		let projects = json.Projects;
		
		state.Projects = projects;
	},
	createProject(state, project) {
		state.Projects.push({
			title: project.title,
			thumbnail: "사진",
			summary: "작성해주세요.",
			skills: "작성해주세요.",
			learned: "작성해주세요.",
			used_languages:project.used_languages,
			quality:project.quality
		});
	},
	setPortfolioes(state, portfolioes){
		state.PortFolioes = portfolioes.PortFolioes;
	}
};