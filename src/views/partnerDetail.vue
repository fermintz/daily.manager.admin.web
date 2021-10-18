<template>
  <div class="partnerDetail">
    <div class="subHeader">
      <div class="left">
        <v-btn text @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h3>장전동 컴퓨터세탁 상세정보</h3>
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

        <div class="page_btns">
          <v-btn text>
            <v-icon>mdi-check</v-icon>
            <label>세탁소정보 변경완료</label>
          </v-btn>
        </div>

        <AreaSearch />
        <Account />
        <PartnerInfo />

        <div class="page_btns">
          <v-btn text>
            <v-icon>mdi-check</v-icon>
            <label>세탁소정보 변경완료</label>
          </v-btn>
        </div>
      </div>

      <div class="tab_contenes" v-show="tabActive === 1">
        <div class="page_btns">
          <v-btn text>
            <v-icon>mdi-check</v-icon>
            <label>상품관리 변경완료</label>
          </v-btn>
        </div>

        <div class="box categoryOpt">
          <div class="box-head">
            <h4>카테고리 추가</h4>  
          </div>
          <div class="box-content">
            <dl>
              <dt>
                카테고리명
              </dt>
              <dd>
                <input type="text">
                <span>최대 6자</span>
              </dd>
            </dl>
            <div class="box_btns">
              <v-btn text>카테고리 추가하기</v-btn>
            </div>
          </div>
        </div>
        <ProductOpt />

        <div class="page_btns">
          <v-btn text>
            <v-icon>mdi-check</v-icon>
            <label>상품관리 변경완료</label>
          </v-btn>
        </div>
      </div>

      <div class="tab_contenes" v-show="tabActive === 2">
        <div class="box dataTable">
          <div class="box-content">
            <div class="tableArea">
              <v-data-table
                :headers="headers"
                :items="addressData"
                item-key="name"
                hide-default-footer
              >
                <template v-slot:item.state="{item}">
                  <span class="state">{{item.state}}</span>
                </template>
                
                <template v-slot:item.orderInfo="{item}">
                  <span class="orderNum" @click="$router.push('orderDetail')">
                    {{item.orderInfo.number}}
                  </span>
                  <span class="orderDate">
                    {{item.orderInfo.date}}
                  </span>
                </template>
                
                <template v-slot:item.userInfo="{item}">
                  <span class="name" @click="$router.push('memberDetail')">
                    {{item.userInfo.name}}
                  </span>
                  <span class="phone">{{item.userInfo.phone}}</span>
                </template>

                <template v-slot:item.pickupInfo="{item}">
                  <span class="pickupDate">
                    {{item.pickupInfo.date}}
                  </span>
                  <span class="pickupTime">
                    {{item.pickupInfo.week}}
                  </span>
                </template>
                <template v-slot:item.rider="{item}">
                  <span class="name">{{item.rider.name}}</span>
                  <span class="phone">{{item.rider.phone}}</span>
                </template>

              </v-data-table>

              <Pager />
            </div>
          </div>
        </div> <!-- box -->

        
      </div>

      <div class="tab_contenes" v-show="tabActive === 3">
        <SearchOpt>
        <DateSelect />
        </SearchOpt>
        <SalesChart />
      </div>

      <div class="tab_contenes" v-show="tabActive === 4">
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
import Pager from '@/components/pager.vue';

export default {
  components:{
    AreaSearch, 
    Account, 
    PartnerInfo, 
    ProductOpt, 
    SalesChart, 
    SearchOpt, 
    CalcList, 
    DateSelect, 
    Keyword,
    Pager
  },
  data(){
    return{
      tabActive:0,
      tabs:['세탁소정보','상품관리','입고관리','매출정보','정산내역'],
      headers: [
        { text: '주문상태',sortable: false, value: 'state', width:120,  },
        { text: '주문번호/일시',sortable: true, value: 'orderInfo' },
        { text: '주문자정보',sortable: true, value: 'userInfo'},
        { text: '수거일시', sortable: false, value: 'pickupInfo' },
        { text: '수거/배달장소', sortable: false, value: 'address'},
        { text: '결제금액', sortable: false, value: 'orderPrice'},
        { text: '배송담당', sortable: false, value: 'rider' },

      ],
      addressData: [
        {
          state:'수거완료',
          orderInfo:{
            number:89191653123,
            date:'2021-07-18 21:56:18',
          },
          userInfo:{
            name:'박수민',
            phone:'010-8525-4561'
          },
          pickupInfo:{
            date:'2021-07-15',
            week:'목요일'
          },
          address:'부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호',
          orderPrice:27000,
          rider:{name:'김용희', phone:'010-8479-6489'},

        },
        {
          state:'배달완료',
          orderInfo:{
            number:89191651894,
            date:'2021-07-14 12:34:12',
          },
          userInfo:{
            name:'박수민',
            phone:'010-8525-4561'
          },
          pickupInfo:{
            date:'2021-07-12',
            week:'월요일'
          },
          address:'부산광역시 북구 구남언덕로 15 3층',
          orderPrice:27000,
          rider:{name:'김용희', phone:'010-8479-6489'},

        },
      ],
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

  .tableArea{ 
    span{
      display:block;
    }

    span.state{
      display:flex;
      align-items: center;
      justify-content: center;
      width:70px;
      height:24px;
      border:1px solid #292929;
      border-radius:5px;
      font-size:12px;
      font-family:'SCDream';
      color:#292929;
    }

    span.orderNum{
      text-decoration: underline;
      cursor: pointer;
    }
    span.orderNum:hover{
      color:#292929;
      font-weight:500;
    }

    span.name{
      text-decoration: underline;
      cursor: pointer;
    }
    span.name:hover{
      color:#292929;
      font-weight:500;
    }
    span.phone{
      font-size:13px;
      margin-top:2px;
    }
  }

  .categoryOpt{
    .box-content{
      dl{
        display:flex;
        align-items: center;
        margin-bottom:15px;
        dt{
          width:120px;
        }
        dd{
          input[type="text"]{
            border:1px solid #c2c2c2;
            height:34px;
            width:200px;
            padding:0 5px;
          }
          span{
            margin-left:10px;
            font-size:12px;
            color:#898989;
          }
        }
      }

      .box_btns{
        text-align:Center;
        .v-btn{
          background:#292929;
          color:#fff;
          height:34px;
          font-size:12px;
        }
      }
    }
  }
}
</style>