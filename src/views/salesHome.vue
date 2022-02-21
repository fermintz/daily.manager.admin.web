<template>
  <div class="salesHome">
     <div class="subHeader">
      <div class="left">
        <h3>일자별 매출통계</h3>
      </div>
    </div> <!-- sub-head -->

    <div class="contents">
      <div class="box horizontal">
        <dl class="contrySelect">
          <dt>지역선택</dt>
          <dd>
            <div class="selectArea">
              <v-autocomplete
                v-model="areaSelect"
                :items="area"
                dense
                hide-details
                class="selectBox"
              />
            </div>
          </dd>
        </dl>
        <dl>
          <dt>조회기간 선택</dt>
          <dd>
             <div class="calendarBtn">
              <v-menu
                ref="menu"
                v-model="date_menu"
                :close-on-content-click="false"
                :return-value.sync="dates"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{on,attrs}">
                  <v-icon>mdi-calendar</v-icon>
                  <input 
                    type="text" 
                    v-model="dateRangeText"
                    v-bind="attrs"
                    v-on="on"
                  >
                </template>
                <v-date-picker
                  v-model="dates"
                  range
                  locale="ko"
                  :day-format="dayFormatChange"
                  class="datePicker"
                >
                  <v-spacer />
                  <v-btn text @click="date_menu = false">취소</v-btn>
                  <v-btn text @click="$refs.menu.save(dates)">확인</v-btn>
                </v-date-picker>
              </v-menu>
            </div>
            <div class="quick_days">
              <v-btn text>7일</v-btn>
              <v-btn text>15일</v-btn>
              <v-btn text>1개월</v-btn>
              <v-btn text>3개월</v-btn>
            </div>
          </dd>
        </dl>
        <dl class="btns">
          <dd>
            <v-btn text>
              검색하기
            </v-btn>
          </dd>
        </dl>
      </div> <!-- box- -->

      <div class="box">
        <div class="box-head">
          <h4>매출 조회결과</h4>
        </div>
        <div class="box-content">
          <div class="sales_summary">
            <dl>
              <dt>
                <strong>총 매출금액</strong>
                <span>2021-07-01 ~ 07-10</span>
              </dt>
              <dd>
                <span>321건</span>
                <strong>15,621,000</strong>
              </dd>
            </dl>
            <dl>
              <dt>
                <strong>최대 매출금액</strong>
                <span>2021-07-01</span>
              </dt>
              <dd>
                <strong>561,500</strong>
              </dd>
            </dl>
            <dl>
              <dt>
                <strong>최소 매출금액</strong>
                <span>2021-07-09</span>
              </dt>
              <dd>
                <strong>268,000</strong>
              </dd>
            </dl>
          </div>

          <div class="chart">
            <LineChart />
          </div>

          <div class="data_table">
            <v-data-table
              v-model="selected"
              :headers="headers"
              :items="memberData"
              item-key="name"
              hide-default-footer
            >
              <template v-slot:item.userName="{item}">
                <a @click="$router.push('memberDetail')">
                  {{item.userName}}
                </a>
              </template>
            </v-data-table>
            <Pager />
          </div>
        </div>  <!-- box --> 
      </div>
    </div>
  </div>
</template>

<script>
import Pager from '@/components/pager.vue';
import LineChart from '@/components/chart/lineChart.vue'

export default {
  components:{
    Pager, LineChart
  },
  data(){
    return{
      area:['전체','서울','부산'],
      areaSelect:'전체',
      date_menu:false,
      dates: ['2021-07-01', '2021-07-10'],

      headers: [
        { text: '일자',sortable: false, value: 'date' },
        { text: '주문금액',sortable: false, value: 'orderPrice' },
        { text: '추가금액',sortable: false, value: 'addPrice' },
        { text: '할인금액',sortable: false, value: 'salePrice' },
        { text: '배송비',sortable: false, value: 'delivery' },
        { text: '총주문수',sortable: false, value: 'totalNumber' },
        { text: '총주문금액',sortable: false, value: 'totalPrice' },
        
      ],
      memberData: [
        {
          date:'2021-07-01',
          orderPrice:'435,000 원',
          addPrice:'85,000 원',
          salePrice:'24,000 원',
          delivery:'65,000 원',
          totalNumber:'51 건',
          totalPrice:'561,500 원',
        },
        {
          date:'2021-07-02',
          orderPrice:'398,000 원',
          addPrice:'55,000 원',
          salePrice:'32,000 원',
          delivery:'87,000 원',
          totalNumber:'48 건',
          totalPrice:'348,500 원',
        },
        {
          date:'2021-07-03',
          orderPrice:'423,000 원',
          addPrice:'40,000 원',
          salePrice:'15,000 원',
          delivery:'67,000 원',
          totalNumber:'42 건',
          totalPrice:'482,000 원',
        },
        {
          date:'2021-07-04',
          orderPrice:'328,000 원',
          addPrice:'49,000 원',
          salePrice:'10,000 원',
          delivery:'72,000 원',
          totalNumber:'38 건',
          totalPrice:'398,500 원',
        },
        {
          date:'2021-07-05',
          orderPrice:'385,000 원',
          addPrice:'65,000 원',
          salePrice:'50,000 원',
          delivery:'68,000 원',
          totalNumber:'56 건',
          totalPrice:'456,500 원',
        },

      ],
    }
  },
  computed:{
    dateRangeText () {
      return this.dates.join(' ~ ')
    },
  },
  methods:{
    dayFormatChange(value){
      let day = value.substr(8,2).replace(/(^0+)/,"")
      return(day)
    },
  },
}
</script>

<style lang="scss" scoped>
.salesHome{
  .selectArea{
    width:200px;
  }
  .calendarBtn{
    border:1px solid #e2e2e2;
    overflow:hidden;
    input{
      height:32px;
      padding:0 25px;
      outline: none;
      text-align:center;
    }
    .v-icon{
      width:32px;
      height:32px;
      font-size:18px;
      background:#f2f2f2;
    }
  }
  .quick_days{
    border:1px solid #e2e2e2;
    margin-left:10px;
    
    .v-btn{
      font-size:12px;
      height:33px;
      border-right:1px solid #e2e2e2;
    }
    .v-btn:last-child{
      border-right:0px;
    }
  }

  .btns{
    dd{
      justify-content: center;

      .v-btn{
        width:100px;
        background:#292929;
        color:#fff;
        font-size:12px;
      }
    }
  }

  .sales_summary{
    display:flex;
    
    dl{
      flex:1;
      border:1px solid #e2e2e2;
      margin-right:10px;
      padding:15px;
      
      dt{
        display:flex;
        flex-direction: column;
        strong{
          font-size:16px;
          font-family:'SCDream';
          font-weight:500;
        }
        span{color:#888;}
      }
      dd{
        position: relative;
        text-align:right;
        
        span{
          position: absolute;
          left:0px;
          bottom:0px;
          font-size:14px;
          font-weight:bold;
        }
        strong{
          font-size:24px;
          font-family:'Roboto';
          font-weight:600;
        }
        strong:after{
          content:'원';
          font-size:14px;
          font-weight:normal;
          margin-left:5px;
        }
      }
    }
    dl:first-child{
      dd{
        strong{
          color:#d22828;
        }
      }
    }
    dl:last-child{
      margin-right:0px;
    }
  }

  .chart{
    margin-top:15px;
    border:1px solid #e2e2e2;
    height:500px;

  }

  .data_table{
    margin-top:15px;
  }
}

</style>