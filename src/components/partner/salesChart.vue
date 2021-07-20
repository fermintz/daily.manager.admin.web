<template>
  <div class="box salesChart">
    <div class="box-head">
      <h4>매출확인</h4>
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
 
      </div>

      <div class="data_table">
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="tableData"
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
    </div>
  </div>
</template>

<script>
import Pager from '@/components/pager.vue';

export default {
  components:{
    Pager
  },
  mounted(){

  },
  data() {
    return {
      chartData: null,
      chartTabActive: 0,
      headers: [
        { text: '날짜',sortable: false, value: 'day' },
        { text: '요일',sortable: false, value: 'weekText' },
        { text: '세탁건수',sortable: false, value: 'orderNum' },
        { text: '세탁금액',sortable: false, value: 'orderPrice' },
        { text: '추가세탁금액',sortable: false, value: 'addPrice' },
        { text: '취소금액',sortable: false, value: 'canclePrice' },
        { text: '총 매출',sortable: false, value: 'totalPrice' },
      ],
      tableData: [
        {
          day:'2021-07-01',
          weekText:'목요일',
          orderNum:12,
          orderPrice:'345,000 원',
          addPrice:'54,000 원',
          canclePrice:'-5,000 원',
          totalPrice:'394,000 원'
        },
      ],
    };
  },
  methods:{

  },
};
</script>

<style lang="scss" scoped>
.box.salesChart {
  .chart{
    width:100%;
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
    min-height:400px;
    background:#f8f8f8;
  }

  .data_table{
    margin-top:15px;
  }
</style>
