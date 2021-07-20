<template>
  <canvas id="lineChart" width="400" height="400">

  </canvas>
</template>


<script>
import Chart from 'chart.js';

export default { 
  data(){
    return{
      chartData:{
        type: "line",
        data: {
          labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
          datasets: [
            {
              label: "Number of Moons",
              data: [0, 0, 1, 2, 79, 82, 27, 14],
              backgroundColor: "rgba(54,73,93,.5)",
              borderColor: "#36495d",
              borderWidth: 3
            },
            {
              label: "Planetary Mass",
              data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
              backgroundColor: "rgba(71, 183,132,.5)",
              borderColor: "#47b784",
              borderWidth: 3
            }
          ]
        },
        options: {
            scales: {
                y: {
                    stacked: true
                }
            }
        }
      }
    }
  },

  methods:{
    createChart(){
      const ctx = document.getElementById('lineChart').getContext('2d');
      new Chart(ctx, {
        type: this.chartData.type,
        data: this.chartData.data,
        options: this.chartData.options
      })

    }
  },
  mounted(){
    this.createChart()
  } 
}
</script>