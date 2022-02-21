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
          labels: ["1일", "2일", "3일", "4일", "5일", "6일", "7일", "8일", "9일", "10일"],
          datasets: [
            {
              label: "천원단위",
              data: [561, 348, 482, 398, 456, 241, 221, 150, 318, 298, 0 ],
              backgroundColor: "rgba(71, 183,132,.5)",
              borderColor: "#47b784",
              borderWidth: 3,
              tension:0,
              clip:0,
            }
          ]
        },
        options: {
          layout:{
            padding:{
              left:20,
              right:20,
              top:20,
              bottom:20,
            },
          },
          responsive:true,
          maintainAspectRatio:false,
          scales: {
            yAxes: [{
                stacked: true
            }],
            xAxes: [{
                stacked: true
            }]
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