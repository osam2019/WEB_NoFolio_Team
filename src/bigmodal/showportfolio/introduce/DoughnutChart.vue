<script>
  //Importing Line class from the vue-chartjs wrapper
  import {Doughnut} from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default { 
    extends: Doughnut,
	props: ["languages"],
    computed: {
        datacollection: function() {
			var labels = [];
			var backgroundColor = [];
			var data = [];
			
			for(let language of this.languages) {
				labels.push(language.title);
				backgroundColor.push("rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")");
				data.push(language.used);
			}
			
			return {
				//Data to be represented on x-axis
				labels: labels,
				datasets: [
					{
						label: 'Data One',
						backgroundColor: backgroundColor,
						pointBackgroundColor: 'white',
						borderWidth: 1,
						pointBorderColor: '#249EBF',
						//Data to be represented on y-axis
						data: data
					}
				],
				options: {
					maintainAspectRatio: false
				}
			};
		}
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
		this.renderChart(this.datacollection, this.options);
    	setInterval(() => {
			this.update();
		}, 10000);
	},
	methods: {
		update(){
			this.renderChart(this.datacollection, this.options)
		}
	}
  }
</script>
