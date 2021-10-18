<template>
  <div class="request_detail">
    <Message ref="message" title="검수완료" text="검수완료처리를 진행하시겠습니까?" />
    <AddProduct ref="addProduct"/>

    <div class="subHeader">
      <div class="left">
        <v-btn text @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h3>검수하기</h3>
      </div>
    </div> <!-- sub-head -->

    <div class="contents">
      <div class="left">
        <div class="box user_product">
          <div class="box-head">
            <h4>주문목록</h4>
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
            <div class="btns">
              <v-btn text @click="$refs.addProduct.handle(true)">상품추가</v-btn>
            </div>
          </div>
          <div class="box-content">
            <div class="list">
              <ProductCheckItem v-for="item in 5" :key="item"/>
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
      </div>
      <div class="right">
        <div class="box order_info">
          <div class="cont">
            <dl>
              <dt>주문번호</dt>
              <dd>51684</dd>
            </dl>
            <dl>
              <dt>주문자</dt>
              <dd>박수민</dd>
            </dl>
            <dl>
              <dt>주문자 연락처</dt>
              <dd>010-8525-4561</dd>
            </dl>
          </div>
        </div>
        <div class="box order_info">
          <div class="cont">
            <dl>
              <dt>세탁소</dt>
              <dd>백양세탁소</dd>
            </dl>
            <dl>
              <dt>연락처</dt>
              <dd>051-546-1856</dd>
            </dl>
          </div>
        </div>
        <div class="box price_total">
          <dl>
            <dt>상품검수차액</dt>
            <dd>2,500 원</dd>
          </dl>
          <div class="divider" /> 
          <dl class="last_total">
            <dt>합계</dt>
            <dd>7,500</dd>
          </dl>
          <v-btn text @click="$refs.message.handle(true)">
            검수완료
          </v-btn>
        </div>
      </div>
     
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/product_item'
import ProductCheckItem from '@/components/product_check_item'
import AddProduct from '@/components/modal/addProduct'
import Message from '@/components/modal/message'

export default {
  components:{
    ProductItem, ProductCheckItem, AddProduct, Message
  },
}
</script>

<style lang="scss" scoped>
.request_detail{
  .contents{
    display:flex;
    .left{
      flex:1;
    }
    .right{
      width:400px;
      margin-left:20px;
    }
  }

  .divider{
    height:1px;
    margin:20px 0;
    background:#e2e2e2;
  }

  .user_product{
    .box-content{
      display:flex;
      
      .list{
        flex:1;
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

  .order_info{
    
    .top{
      padding:20px;
      border-bottom:1px solid #e2e2e2;
      h2{
        font-size:20px;
      }
      .date{
        margin-top:5px;
        color:#898989;
      }
    }

    .cont{
      padding:20px;
      dl{
        display:flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom:12px;
        dt{
          font-size:12px;
          color:#898989;
        }
      }
      dl:last-child{
        margin-bottom:0;
      }

      dl.shop_message{
        flex-direction: column;
        align-items: flex-start;
        dd{
          font-size:13px;
          margin-top:10px;
          padding:15px;
          background:#f2f2f2;
        }
      }

      .photos{
        margin-top:20px;
        .row{
          margin:-5px;
          padding:0px;
        }
        .col{
          padding:5px;
          margin:0px;
        }

        .photo{
          position: relative;
          display:flex;
          justify-content: center;
          align-items: center;
          overflow:hidden;

          img{
            position:absolute;
            width:150%;
          }
        }
        .photo:after{
          content:'';
          display:block;
          padding-bottom:100%;
        }
      }
    }
    
  }

  .price_total{
    padding:20px;
    dl{
      display:flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom:12px;

      dt{
        font-size:12px;
        color:#898989;
      }
      dd{
        font-weight:500;
      }
    }
    dl.last_total{
      dd{
        font-size:24px;
        font-weight:500;
        color:#de0059;
      }
      dd:after{
        content:'원';
        font-size:14px;
        margin-left:5px;
      }
    }
    

    .v-btn{
      width:100%;
      height:45px;
      background:#292929;
      color:#fff;
      margin-top:20px;
    }
  }
  
}
</style>