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
                <span>2021-07-01 ~ 07-21</span>
              </dt>
              <dd>
                <span>321건</span>
                <strong>15,621,000</strong>
              </dd>
            </dl>
            <dl>
              <dt>
                <strong>최대 매출금액</strong>
                <span>2021-07-14</span>
              </dt>
              <dd>
                <strong>3,489,000</strong>
              </dd>
            </dl>
            <dl>
              <dt>
                <strong>최소 매출금액</strong>
                <span>2021-07-11</span>
              </dt>
              <dd>
                <strong>1,768,000</strong>
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
      dates: ['2021-07-01', '2021-07-02'],

      headers: [
        { text: '회원번호',sortable: false, value: 'memberNum' },
        { text: '회원명',sortable: false, value: 'userName' },
        { text: '카카오아이디',sortable: false, value: 'kakaoID' },
        { text: '전화번호',sortable: false, value: 'phone' },
        { text: '대표주소',sortable: false, value: 'address' },
        { text: '총주문수',sortable: false, value: 'totalNum' },
        { text: '총주문금액',sortable: false, value: 'totalPrice' },
        { text: '쿠폰',sortable: false, value: 'coupon' },
      ],
      memberData: [
        {
          memberNum:102830,
          userName:'박수민',
          kakaoID:'fermintz@gmail.com',
          phone:'010-8525-4561',
          address:'부산시 북구 구남언덕로 15 3층',
          totalNum:'3 건',
          totalPrice:'98,500 원',
          coupon:'3'
        },
        {
          memberNum:123310,
          userName:'김민선',
          kakaoID:'fermintz@gmail.com',
          phone:'010-8525-4561',
          address:'부산시 북구 구남언덕로 15 3층',
          totalNum:'3 건',
          totalPrice:'98,500 원',
          coupon:'3'
        }
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
  }

  .data_table{
    margin-top:15px;
  }
}

</style>