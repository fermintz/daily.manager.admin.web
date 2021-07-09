<template>
   <div class="box userProduct">

     <CheckingModal ref="checking"/>

    <div class="box-head">
      <h4>주문 상품정보</h4>
      <div class="btns">
        <v-btn 
          text
          @click="$refs.checking.handle(true)"
        >검수하기</v-btn>
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
            1개
          </div>
          <div class="price">
            6,500원
          </div>
        </li>
        <li>
          <div class="item">
            <label>와이셔츠</label>
            <span>2,000원</span>
          </div>
          <div class="amount">
            3개
          </div>
          <div class="price">
            6,000원
          </div>
        </li>
      </ul>

      <div class="total">
        <dl>
          <dt>총 합계</dt>
          <dd>12,500원</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import CheckingModal from '@/components/modal/checking.vue'

export default {
  components:{
    CheckingModal
  },  
}
</script>

<style lang="scss" scoped>
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
        width:50px;
        text-align:center
      }
      .price{
        width:150px;
        text-align:right;
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
  dl:last-child{
    margin-bottom:0px;
  }
}
</style>