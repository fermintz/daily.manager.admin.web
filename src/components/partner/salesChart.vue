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

  },
  data() {
    return {
      chartData: null,
      chartTabActive: 0,
    };
  },
  methods:{

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
