<template>
  <div :class="{product_item:true, add:state == 'add', del:state == 'del', cha:state == 'cha'}">
    <div class="state_box" v-if="state">
      <span v-if="state == 'add'">추가됨</span>
      <span v-if="state == 'del'">삭제됨</span>
      <span v-if="state == 'cha'">변경됨</span>
    </div>
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
      <v-btn text>
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <span>1</span> 
      <v-btn text>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
    <div class="end_price">
      2,500 원
    </div>
    <div class="del_btn">
      <v-btn icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props:['state'],
}
</script>

<style lang="scss" scoped>
.product_item{
  display:flex;
  align-items: center;
  margin-bottom:10px;
  border:1px solid #e2e2e2;
  padding:15px;

  .state_box{
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right:20px;
    width:70px;
    
    span{
      display:flex;
      justify-content: center;
      align-items: center;
      padding:0 5px;
      font-size:12px;
      height:24px;
      border:1px solid #292929;
      border-radius:5px;
    }
    span.add{
    border:1px solid #FF0158;
    color:#FF0158;
    }
    span.chainge{
      border:1px solid #2C8EF1;
      color:#2C8EF1;
    }
  }

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
    .v-btn{
      min-width:30px;
      height:30px;
      border:1px solid #e2e2e2;
      padding:0px;
      border-radius:5px;
      .v-icon{
        font-size:14px;
      }
    }
  }

  .end_price{
    width:120px;
    font-family:'Roboto';
    text-align:right;
    font-weight:500;
    font-size:14px;
  }

  .end_price:after{
    margin-left:5px;
    font-size:12px;
  }

  .del_btn{
    margin-left:20px;
    .v-btn{
      width:30px;
      height:30px;
      background:#e2e2e2;

      .v-icon{
        font-size:18px;
      }
    }
  }


  &.add{
    .state_box{
      span{
        color:#FF0158;
        border:1px solid #FF0158;
      }
    }
  }

  &.del{
    border:0px;
    background:#f2f2f2;

    .del_btn{
      display:none;
    }
  }

  &.cha{
    .state_box{
      span{
        color:#2C8EF1;
        border:1px solid #2C8EF1;
      }
    }
  }



}
</style>