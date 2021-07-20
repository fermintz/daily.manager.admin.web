<template>
  <div class="partnerDetail">
    <div class="subHeader">
      <div class="left">
        <v-btn text @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h3>장전동 컴퓨터세탁 상세정보</h3>
      </div>

      <div class="sub-head-btns">
        <div class="btns btns-1">
          <v-btn text class="finish">수정완료</v-btn>
        </div>
      </div>
    </div> <!-- sub-head -->

    <div class="contents">
      <div class="tabs">
        <v-btn text 
          v-for="(item,index) in tabs"
          :key="index"
          :class="{active: tabActive === index}"
          @click="tabActive = index"
        >
          {{item}}
        </v-btn>
      </div>
      <div class="tab_contenes" v-show="tabActive === 0">
        <AreaSearch />
        <Account />
        <PartnerInfo />
      </div>

      <div class="tab_contenes" v-show="tabActive === 1">
        <ProductOpt />
      </div>

      <div class="tab_contenes" v-show="tabActive === 2">
        <SearchOpt>
          <DateSelect />
        </SearchOpt>
        <SalesChart />
      </div>

      <div class="tab_contenes" v-show="tabActive === 3">
        <SearchOpt>
          <DateSelect />
          <Keyword />
        </SearchOpt>
        <CalcList />
      </div>
      
    </div> <!-- contents -->
  </div>
</template>

<script>
import AreaSearch from '@/components/areaSearch.vue'
import Account from '@/components/partner/account.vue'
import PartnerInfo from '@/components/partner/partnerInfo.vue'
import ProductOpt from '@/components/partner/productOpt.vue'
import SalesChart from '@/components/partner/salesChart.vue'
import SearchOpt from '@/components/searchOpt/searchOpt.vue'
import DateSelect from '@/components/searchOpt/dateSelect.vue'
import Keyword from '@/components/searchOpt/keyword.vue'
import CalcList from '@/components/partner/calcList.vue'

export default {
  components:{
    AreaSearch, Account, PartnerInfo, ProductOpt, SalesChart, SearchOpt, CalcList, DateSelect, Keyword
  },
  data(){
    return{
      tabActive:0,
      tabs:['세탁소정보','상품관리','매출정보','정산내역'],
    }
  },
}
</script>

<style lang="scss" scoped>
.partnerDetail{
  .tabs{
    display:flex;
    align-items: flex-end;
    border-bottom:1px solid #292929;
    margin-bottom:20px;

    .v-btn{
      position: relative;
      border:1px solid #e2e2e2;
      border-left:0px;
      border-bottom:0;
      height:45px;
      min-width:150px;
      background:#f2f2f2;
      color:#888;
    }

    .v-btn:first-child{
      border-left:1px solid #e2e2e2;
    }

    .v-btn.active{
      border-left:1px solid #292929;
      border-color:#292929;
      background:#F5F6F9;
      color:#292929;
      font-weight:500;
      height:50px;
    }
    .v-btn.active:after{
      content:'';
      position: absolute;
      bottom:-1px;
      width:100%;
      height:1px;
      background: #F5F6F9;
    }
  }
}
</style>