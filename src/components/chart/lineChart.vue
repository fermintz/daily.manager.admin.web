<template>
  <canvas id="lineChart" />

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
              label: "서울",
              data: [561, 348, 482, 398, 456, 241, 221, 150, 318, 298, 0 ],
              backgroundColor: "rgba(255,255,255,0)",
              borderColor: "#47b784",
              borderWidth: 3,
              tension:0,
              clip:0,
            },
            {
              label: "부산",
              data: [115, 264, 415, 187, 321, 174, 421, 512, 164, 297, 0 ],
              backgroundColor: "rgba(255,255,255,0.1)",
              borderColor: "#de0059",
              borderWidth: 3,
              tension:0,
              clip:0,
            }
          ]
        },
        options: {
          layout:{
            padding:{
              left:0,
              right:0,
              top:0,
              bottom:0,
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