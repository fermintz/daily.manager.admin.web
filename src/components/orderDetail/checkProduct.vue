<template>
   <div class="box checkProduct">
    <div class="box-head">
      <h4>검수완료 상품정보</h4>
      <div class="btns">
        <v-btn text @click="$refs.addPayment.handle(true)">추가결제요청</v-btn>
        <v-btn text>상품추가</v-btn>
        <v-btn text>검수 전체삭제</v-btn>
        <v-btn text class="save">변경완료</v-btn>
      </div>
    </div>
    <div class="product-list">
      <ul>
        <li>
          <div class="item">
            <label>운동화(세무부분포함)</label>
            <span>2,500원</span>
          </div>
          <div class="amount">
            <v-btn text>
              <v-icon>mdi-minus</v-icon>
            </v-btn>
            <span>2</span>
            <v-btn text>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>
          <div class="price">
            6,500원
          </div>
          <div class="del">
            <v-btn icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </li>
        <li>
          <div class="item">
            <label>와이셔츠</label>
            <span>2,000원</span>
          </div>
          <div class="amount">
            <v-btn text>
              <v-icon>mdi-minus</v-icon>
            </v-btn>
            <span>2</span>
            <v-btn text>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>
          <div class="price">
            6,000원
          </div>
          <div class="del">
            <v-btn icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </li>
        <li>
          <div class="item">
            <label>티셔츠</label>
            <span>2,000원</span>
          </div>
          <div class="amount">
            <v-btn text>
              <v-icon>mdi-minus</v-icon>
            </v-btn>
            <span>2</span>
            <v-btn text>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>
          <div class="price">
            2,000원
          </div>
          <div class="del">
            <v-btn icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </li>
      </ul>

      <div class="total">
        <dl class="sum">
          <dt>총 주문금액</dt>
          <dd>12,500원</dd>
        </dl>
        <dl class="result">
          <dt>검수차액</dt>
          <dd>4,000원</dd>
        </dl>
      </div>
    </div>

    <AddPayment ref="addPayment"/>
  </div>
</template>

<script>
import AddPayment from '@/components/modal/addPayment.vue'

export default {
  components:{AddPayment},
}
</script>

<style lang="scss" scoped>
.checkProduct{
  .box-head{
    .btns{
      .v-btn.save{
        background:#494949;
        color:#fff;
        border:0px;
      }
    }
  }
}

.product-list{
  display:Flex;
  padding:0px;

  ul{
    flex:1;
    padding:20px;

    li{
      display:flex;
      align-items: center;
      margin-bottom:10px;

      .item{
        flex:1;
        display:flex;
        span{margin-left:10px;color:#888;font-size:12px;}
      }

      .amount{
        display:flex;
        align-items: center;
        span{
          display:block;
          width:30px;
          text-align:center;
          background:#f2f2f2;
          margin:0 5px;
        }
        .v-btn{
          min-width:30px;
          height:20px;
          padding:0px;
          border:1px solid #c2c2c2;
          .v-icon{
            font-size:18px;
          }
        }
      }
      .price{
        width:150px;
        text-align:right;
      }
      .del{
        .v-btn{
          margin-left:20px;
          border-radius:100px;
          background:#e2e2e2;
          width:20px;
          height:20px;
          .v-icon{
            font-size:14px;
          }
        }
      }
    }
    li:last-child{
      margin-bottom:0px;
    }
  }
}

.total{
  width:360px;
  border-left:1px solid #e2e2e2;
  padding:20px;
  background: #FFF8F8;

  dl{
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:10px;

    dt{color:#888;font-size:12px;}

    dd{
      font-weight:500;
    }
  }
  dl.result{
    dd{
      color:#d22828;
    }
  }
  dl:last-child{
    margin-bottom:0px;
  }
}
</style>