<template>
  <div class="product_item">
    <div class="goods_info">
      <div class="name">운동화(세무부분포함)</div>
      <div class="price">
        <div class="default">
          <label>정상가</label>
          <span>3,000 원</span>
        </div>
        <v-icon>mdi-arrow-right</v-icon>
        <div class="sale">
          <label>할인가</label>
          <span>2,500 원</span>
        </div>
      </div>
    </div>
    <div class="amount">
      <span>1</span>
    </div>
    <div class="end_price">
      2,500 원
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product_item{
  display:flex;
  align-items: center;
  margin-bottom:10px;
  border:1px solid #e2e2e2;
  padding:15px;

  .goods_info{
    flex:1;
    .name{
      font-size:14px;
    }
    .price{
      display:flex;
      align-items: center;
      margin-top:5px;

      >div{
        display:flex;
        align-items: center;
        label{
          margin-right:10px;
          font-size:12px;
          color:#898989;
        }
        span{
          display:flex;
          align-items:center;
          justify-content: center;
          background:#f2f2f2;
          padding:0 8px;
          height:20px;
          font-size:12px;
          border-radius:5px;
          font-family:'Roboto';
        }

      }
      div.sale{
        span{
          background:#F6F1F1
        }
      }

      .v-icon{
        font-size:18px;
        margin:0 10px;
        color:#c2c2c2;
      }         
    }
  }

  .amount{
    display:flex;
    align-items: center;
    span{
      display:flex;
      justify-content: center;
      align-items: center;
      width:50px;
      height:30px;
      background:#f2f2f2;
      border-radius:5px;
      margin:0 10px;
    }
    
  }
  .end_price{
    width:120px;
    font-family:'Roboto';
    text-align:right;
    font-weight:500;
    font-size:14px;
  }

}
</style>