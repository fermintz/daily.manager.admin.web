<template>
  <div class="box userOrderList">
    <div class="table_area">
      <v-data-table
        :headers="headers"
        :items="addressData"
        item-key="name"
        hide-default-footer
      >
        <template v-slot:item.state="{item}">
          <span class="state">{{item.state}}</span>
        </template>
        <template v-slot:item.orderNum="{item}">
          <span class="orderNum" @click="$router.push('orderDetail')">
            {{item.orderNum}}
          </span>
        </template>
        <template v-slot:item.rider="{item}">
          <span class="name">{{item.rider.name}}</span>
          <span class="phone">{{item.rider.phone}}</span>
        </template>
        <template v-slot:item.shop="{item}">
          <span class="name">{{item.shop.name}}</span>
          <span class="phone">{{item.shop.phone}}</span>
        </template>
      </v-data-table>

      <Pager />
    </div>
  </div>
</template>


<script>
import Pager from '@/components/pager.vue';


export default {
  components:{
    Pager
  },
  data(){
    return{
      headers: [
        { text: '발급날짜',sortable: false, value: 'makeDate' },
        { text: '쿠폰명',sortable: false, value: 'couponName' },
        { text: '할인금액',sortable: false, value: 'salePrice' },
        { text: '이용가능기간',sortable: false, value: 'useDate' },
        { text: '최소주문금액',sortable: false, value: 'minOrderPrice' },
      ],
      addressData: [
        {
          makeDate:'2021.07.01 12:34:56',
          couponName:'신규회원 세일쿠폰',
          salePrice:5000,
          useDate:'2021년 7월 1일 ~ 2021년 12월 31일',
          minOrderPrice:30000,
        },
      ],
    }
  },
  
}
</script>

<style lang="scss" scoped>
.box{
  padding:20px;
}
.table_area{
  span{
    display:block;
  }

  span.state{
    display:inline-block;
    height:24px;
    line-height:22px;
    padding:0 10px;;
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

.datePicker{
  .v-btn{
    border-radius:3px;

  }
  .v-btn:last-child{
    color:#2C9CD4
  }
}

</style>