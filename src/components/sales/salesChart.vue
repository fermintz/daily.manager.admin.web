<template>
  <div class="box salesChart">
    <div class="box-head">
      <div class="chartTabs">
        <v-btn
          text
          v-for="(item, index) in ['일간매출', '월간매출']"
          :key="index"
          :class="{active:chartTabActive === index}"
          @click="chartTabActive = index"
          >{{ item }}
        </v-btn>
      </div>
    </div>
    <div class="box-content">
      <div class="chart">
 
      </div>

      <v-data-table>
        
      </v-data-table>
    </div>
  </div>
</template>

<script>


export default {
  components:{
 
  },
  mounted(){
    this.fillChartData()
  },
  data() {
    return {
      chartData: null,
      options:{
        responsive: true,
        lineTension: 1,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              padding: 25,
            }
          }]
        }
      },
      chartTabActive: 0,
    };
  },
  methods:{
    fillChartData(){
      this.chartData = {
        labels: ['월', '화','수','목','금','토','일'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.box.salesChart {
  .box-head{
    padding:0;
  }

  .chartTabs {
    .v-btn {
      width:150px;
      min-height: 46px;
    }
    .v-btn.active:after {
      content: "";
      position: absolute;
      bottom: 0px;
      height: 2px;
      width: 100%;
      background: #2C9CD4;
    }
  }
  
  .chart{
    width:100%;
  }
}
</style>
