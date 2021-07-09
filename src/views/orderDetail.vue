<template>
  <div class="order-detail">
    <DetailHead />    

    <div class="contents">
      <v-row>
        <v-col cols="9">
          <StateHistory />
          <UserInfo />
          <UserMessage />
          <UserProduct />
          <CheckProduct />
          <MemoBox />
        </v-col>
        <v-col cols="3">
          <LaundryShop />

          <div class="history-tabs box">
            <div class="tab-head">
              <v-btn 
                text 
                v-for="(item, index) in ['결제히스토리','작업히스토리']" 
                :key="index"
                @click="historyTabActive = index"
              >
                {{item}}
              </v-btn>
            </div>

            <PaymentHistory v-show="historyTabActive === 0"/>
            <WorkHistory  v-show="historyTabActive === 1" />
            
          </div>
          
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import LaundryShop from '@/components/orderDetail/laundryShop.vue'
import UserInfo from '@/components/orderDetail/userInfo.vue'
import UserMessage from '@/components/orderDetail/userMessage.vue'
import UserProduct from '@/components/orderDetail/userProduct.vue'
import CheckProduct from '@/components/orderDetail/checkProduct.vue'
import StateHistory from '@/components/orderDetail/stateHistory.vue'
import PaymentHistory from '@/components/orderDetail/payment-history.vue'
import WorkHistory from '@/components/orderDetail/workHistory.vue'
import MemoBox from '@/components/orderDetail/memoBox.vue'
import DetailHead from '@/components/orderDetail/detailHead.vue'

export default {
  components:{
    DetailHead,
    LaundryShop, 
    UserInfo, 
    UserMessage, 
    UserProduct, 
    CheckProduct, 
    StateHistory, 
    PaymentHistory, 
    WorkHistory,
    MemoBox,
  },

  data(){
    return{
      historyTabActive:0,
    }
  }
}
</script>

<style lang="scss" scoped>
.order-detail{
  .box{
    margin-bottom:15px;
  }

  .history-tabs{
    .tab-head{
      display:Flex;
      align-items: center;
      border-bottom:1px solid #e2e2e2;

      .v-btn{
        flex:1;
        border-radius:0px;
        height:50px;
      }
    }  
  }

}
</style>
