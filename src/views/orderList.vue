<template>
  <div class="orderList">
    <div class="subHeader">
      <div class="left">
        <h3>주문조회</h3>
      </div>
    </div> <!-- sub-head -->

    <div class="contents">
      <SearchOpt />

      <div class="box dataTable">
        <div class="box-head">
          <h4>주문목록</h4>
        </div>
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
              <template v-slot:item.pickupInfo="{item}">
                <span class="pickupDate">
                  {{item.pickupInfo.date}}
                </span>
                <span class="pickupTime">
                  {{item.pickupInfo.time}}
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
      </div>
    </div>
  </div>
</template>

<script>
import Pager from '@/components/pager.vue';
import SearchOpt from '@/components/searchOpt.vue'

export default {
  components:{
    SearchOpt, Pager
  },
  data(){
    return{
      headers: [
        { text: '주문상태',sortable: false, value: 'state' },
        { text: '주문정보',sortable: true, value: 'orderInfo' },
        { text: '수거일시', sortable: false, value: 'pickupInfo' },
        { text: '수거/배달장소', sortable: false, value: 'address'},
        { text: '결제금액', sortable: false, value: 'orderPrice'},
        { text: '배송담당', sortable: false, value: 'rider' },
        { text: '세탁소', sortable: false, value: 'shop' },
      ],
      addressData: [
        {
          state:'수거완료',
          orderInfo:{
            number:89191653123,
            date:'2021-07-18 21:56:18',
          },
          pickupInfo:{
            date:'2021-07-15',
            time:'오전'
          },
          address:'부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호',
          orderPrice:27000,
          rider:{name:'김용희', phone:'010-8479-6489'},
          shop:{name:'푸르미세탁소',phone:'051-515-4567'},
        },
        {
          state:'배달완료',
          orderInfo:{
            number:89191651894,
            date:'2021-07-14 12:34:12',
          },
          pickupInfo:{
            date:'2021-07-12',
            time:'오후'
          },
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
.orderList{


  .dataTable{
    margin-top:20px;
  }

  .tableArea{ 
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
}
</style>