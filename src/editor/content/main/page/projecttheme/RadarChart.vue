<script>
  //Importing Radar class from the vue-chartjs wrapper
  import {Radar} from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default { 
    extends: Radar,
	props: ["quality"],
	data() {
		return {
			options: {
				legend: {
					display: false
				},
				scale: {
					ticks: {
						beginAtZero: true,
						max: 10,
						min: 0
					}
				}
			}
		};
	},
    computed: {
        datacollection: function() {
			var labels = Object.keys(this.quality);
			var backgroundColor = "rgba(243, 156, 18, 0.45)";
			var data = Object.values(this.quality);
			
			return {
				//Data to be represented on x-axis
				labels,
				datasets: [
					{
						backgroundColor,
						pointBackgroundColor: 'white',
						borderWidth: 1,
						pointBorderColor: '#249EBF',
						//Data to be represented on y-axis
						data
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
