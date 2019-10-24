<template>
    <div class="shareboard" id="shareboard-top">
		<div class="box" v-for="(portFolio, i) in portFolioes" v-bind:key="i" @click="showPortfolio(portFolio)" >
			<h3 class="title">{{portFolio.User.title}}</h3>
			<RadarChart :quality="getQuality(portFolio)" class="radarchart" />
			<p class="description">{{portFolio.User.introduce}}</p>
			<div class="bottom">
				<img :src="getMostLang(portFolio)" class="lang_icon" alt="js">
				<img class="profile-image" :src="portFolio.User.image"/>
			</div>
		</div>
    </div>
</template>

<script>
	import RadarChart from "./RadarChart.vue";
    export default {
        name: 'shareboard',
		components: {
			RadarChart
		},
		mounted(){
			
		},
		computed:{
			portFolioes: function() {
				let portfolioes = this.$store.state.PortFolioes;
				let filterLangs = this.$store.state.selected_languages;
				
				if (filterLangs.length == 0) {
					return portfolioes;
				}
				
				let result = [];
				
				for (let portfolio of portfolioes) {
					let langs = portfolio.User.skills.used_languages;
					
					let found = this.include(filterLangs, langs);
					if (found) {
						result.push(portfolio);
					}
				}
				
				return result;
			},
			getQuality() {
				return (portfolio) => {
					let projects = portfolio.Projects;
					let length = projects.length;

					if (length == 0) {
						return {
							dry: 0,
							coupling: 0,
							cohension: 0,
							standard: 0,
							complexity: 0
						}	
					}

					let dry = 0;
					let coupling = 0;
					let cohension = 0;
					let standard = 0;
					let complexity = 0;

					for (let project of projects) {
						dry += project.quality.dry;
						coupling += project.quality.coupling;
						cohension += project.quality.cohension;
						standard += project.quality.standard;
						complexity += project.quality.complexity;
					}

					return {
						dry: dry/length,
						coupling: coupling/length,
						cohension: cohension/length,
						standard: standard/length,
						complexity: complexity/length
					}
				}
			}
		},
        methods :{
			include: function(filteredArr, arr) {
				return arr.filter(function(elem) {
					return filteredArr.indexOf(elem.title) > -1;
				}).length == filteredArr.length;
			},
			showPortfolio: function(portfolio) {	
				this.$store.commit("showBigModal", {
					option: "showportfolio",
					data: portfolio
				});
			},
			getMostLang: function(portfolio){
				let mostLang = portfolio.User.skills.used_languages.
									sort(function(a, b) {
										return b.used - a.used
									});
				let langImg = "/assets/lang_icons/" + mostLang[0].value + "_lang.svg";
				
				return langImg;
			},
            scrollShareboardTop:function() {

                var shareboard = document.getElementById("shareboard-top");

                var scrollTopValue = shareboard.scrollTop;

                var shareboardAnimation = setInterval(function() {
                    if(shareboard.scrollTop <= 0) {
                        shareboard.scrollTop = 0;
                        clearInterval(shareboardAnimation);
                        return;
                    }
                    else {
                        shareboard.scrollTop -= (scrollTopValue / 10);
                    }
                }, 25);

                this.data();
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .shareboard{
		display:flex;
		justify-content:left;
		width:100%;
        height:calc(100vh - 128px);
        background-color:rgba(52,152,219,0.2);
        padding: 8px 120px;
        overflow: auto;
		flex-flow: row wrap;
		align-content: flex-start;
    }
    .box{
		flex:none;
        display:flex;
        flex-flow:column;
        position: relative;
		align-items: center;
        height: 480px;
        width: 320px;
        margin:12px;
        background-color:white;
        box-shadow:0 2px 12px rgba(0,0,0,0.12);
    }
    .title {
		text-align: center;
		padding:16px;
        font-size: 16px;
        font-weight:bold;
		width: 100%;
		margin:0;
		border-bottom:1px solid #bbb;
    }
	.description {
		font-size: 14px;
		color: #666;
		text-overflow: ellipsis;
		height: 64px;
		width: 100%;
		padding: 16px;
		  white-space: nowrap;
		  overflow: hidden;
		  margin: 0;
	}
	.bottom {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 1;
		border-top:1px solid #bbb;
		display: flex;
		width: 100%;
		height: 64px;
	}
	
	
    .lang_icon{
		position: absolute;
		left: 8px;
		bottom: 8px;
        height:48px;
        width:48px;
		border-radius:50%;
		border:2px solid rgb(52,152,219);
    }
	
    .profile-image{
		position: absolute;
		right: 8px;
		bottom: 8px;
		height:48px;
		width:48px;
        border-radius:50%;
        border:2px solid rgb(52,152,219);
        background-color:rgb(52,152,219);
    }
	
    .topbtn{
        border-radius:50%;
        border:8px solid rgb(52,152,219);
        background-color:rgb(52,152,219);
        width:8vh;
        height:8vh;
        position:fixed;
        bottom:24px;
        right:32px;
    }
    .topbtn-image{
        min-width:64px;
        min-height:64px;
    }

	.radarchart {
		width: 280px;
	}
</style>