<template>
  <div class="order-detail">
    <DetailHead />    

    <div class="contents">
      
      <v-row>
        <v-col cols="9">
          <div class="detail_tabs">
            <div class="tab_head">
              <v-btn 
                text 
                v-for="(item, index) in ['주문정보','상품정보','주문히스토리']" 
                :key="index"
                @click="detailTab = index"
                :class="{active:detailTab === index}"
              >
                {{item}}
              </v-btn>
            </div>
            <div class="tab_contents" v-show="detailTab === 0">
              <StateHistory />
              <UserInfo />
              <UserMessage />
              <MemoBox />
            </div>
            <div class="tab_contents" v-show="detailTab === 1">
              <div class="box user_product">
                <div class="box-head">
                  <h4>주문목록</h4>
                  <div class="btns">
                    <v-btn text @click="$router.push('checking')">검수하기</v-btn>
                  </div>
                </div>
                <div class="box-content">
                  <div class="list">
                    <ProductItem v-for="item in 4" :key="item" />
                  </div>
                  <div class="divider-v" />
                  <div class="total">
                    <dl>
                      <dt>상품수</dt>
                      <dd>4개</dd>
                    </dl>
                    <dl>
                      <dt>상품합계</dt>
                      <dd>25,000 원</dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div class="box user_product check">
                <div class="box-head">
                  <h4>검수완료</h4>
                  
                </div>
                <div class="box-content">
                  <div class="list">
                    <ProductCheckItem state="add"/>
                    <ProductCheckItem state="cha"/>

                    <h5>삭제된 목록</h5>
                    <ProductCheckItem state="del"/>
                  </div>
                  <div class="divider-v"/>
                  <div class="total">
                    <dl>
                      <dt>상품수</dt>
                      <dd>5개</dd>
                    </dl>
                    <dl>
                      <dt>합계</dt>
                      <dd>34,000원</dd>
                    </dl>
                    <dl class="change">
                      <dt>변동차액</dt>
                      <dd>9,000원</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div> <!-- tab-1 -->

            <div class="tab_contents" v-show="detailTab === 2">
              <div class="box">
                <div class="box-content">
                  <OrderHistory />
                </div>
              </div>
            </div>
          </div>          
        </v-col>
        <v-col cols="3">
          <LaundryShop />

          <div class="history_tabs box">
            <div class="tab_head">
              <v-btn 
                text 
                v-for="(item, index) in ['결제히스토리','기사','세탁소']" 
                :key="index"
                @click="historyTabActive = index"
                :class="{active:historyTabActive === index}"
              >
                {{item}}
              </v-btn>
            </div>

            <PaymentHistory v-show="historyTabActive === 0"/>
            <WorkHistory  v-show="historyTabActive === 1" />
            <WorkHistory  v-show="historyTabActive === 2" />
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
import StateHistory from '@/components/orderDetail/stateHistory.vue'
import PaymentHistory from '@/components/orderDetail/payment-history.vue'
import WorkHistory from '@/components/orderDetail/workHistory.vue'
import MemoBox from '@/components/orderDetail/memoBox.vue'
import DetailHead from '@/components/orderDetail/detailHead.vue'
import ProductItem from '@/components/product_item'
import ProductCheckItem from '@/components/product_check_item'
import OrderHistory from '@/components/orderDetail/orderHistory'

export default {
  components:{
    DetailHead,
    LaundryShop, 
    UserInfo, 
    UserMessage, 
    StateHistory, 
    PaymentHistory, 
    WorkHistory,
    MemoBox,
    ProductItem,
    ProductCheckItem,
    OrderHistory,
  },

  data(){
    return{
      detailTab:0,
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

  .detail_tabs{
    .tab_head{
      display:flex;
      align-items: center;
      border-bottom:1px solid #292929;

      .v-btn{
        position: relative;
        bottom:-1px;
        border:1px solid #292929;
        border-left:0px;
        height:45px;
        width:150px;
        background:#eaeaea;
        color:#888;
      }

      .v-btn:first-child{
        border-left:1px solid #292929;
      }

      .v-btn.active{
        border-bottom:1px solid #F5F6F9;
        background:transparent;
        color:#292929;
      }
    }

    .tab_contents{
      margin-top:20px;
    }
  }

  .history_tabs{
    .tab_head{
      display:Flex;
      align-items: center;
      border-bottom:1px solid #e2e2e2;

      .v-btn{
        flex:1;
        border-radius:0px;
        height:50px;
      }

      .v-btn.active{
        color:#2C9CD4;
      }

      .v-btn.active:after{
        content:'';
        position: absolute;
        bottom:0px;
        width:100%;
        height:1px;
        background:#2C9CD4;
      }
    }
  }
}

.user_product{
    .box-content{
      display:flex;
      
      .list{
        flex:1;

        h5{
          font-size:14px;
          font-weight:400;
          margin-bottom:10px;
          margin-top:20px;
        }
      }

      .divider-v{
        width:1px;
        background:#e2e2e2;
        margin:0px 30px;
      }

      .total{
        width:250px;
        border-radius:5px;

        dl{
          background:#f8f8f8;
          display:flex;
          align-items: center;
          justify-content: space-between;
          padding:0 15px;
          height:40px;
          border-radius:5px;
          margin-bottom:10px;
          dt{
            font-size:12px;
            color:#898989;
          }
          dd{
            font-weight:500;
          }
        }

        dl.change{
          background:#F6F1F1;
        }
        
      }
    }
  } /* user_product */
</style>
