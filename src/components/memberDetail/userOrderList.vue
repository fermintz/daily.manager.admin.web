<template>
  <div class="userOrderList">

    <SearchOpt />

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
import SearchOpt from '@/components/searchOpt.vue';

export default {
  components:{
    Pager, SearchOpt
  },
  data(){
    return{
      headers: [
        { text: '주문상태',sortable: false, value: 'state' },
        { text: '주문번호', align: 'start', sortable: false, value: 'orderNum'},
        { text: '주문일시',sortable: false, value: 'orderDate' },
        { text: '주문장소', sortable: false, value: 'address'},
        { text: '결제금액', sortable: false, value: 'orderPrice'},
        { text: '배송담당', sortable: false, value: 'rider' },
        { text: '세탁소', sortable: false, value: 'shop' },
      ],
      addressData: [
        {
          state:'수거완료',
          orderNum:'08978896986',
          orderDate:'2021.05.14 13:13:45',
          address:'부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호',
          orderPrice:27000,
          rider:{name:'김용희', phone:'010-8479-6489'},
          shop:{name:'푸르미세탁소',phone:'051-515-4567'},
        },
        {
          state:'배달완료',
          orderNum:'08978896213',
          orderDate:'2021.05.6 12:48:07',
          address:'부산광역시 북구 구남언덕로 15 3층',
          orderPrice:27000,
          rider:{name:'김용희', phone:'010-8479-6489'},
          shop:{name:'푸르미세탁소',phone:'051-515-4567'},
        },
      ],
    }
  },
  
}
</script>

<style lang="scss" scoped>
.box.searchOpt{
  box-shadow: none;
}

.table_area{
  margin-top:40px;
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