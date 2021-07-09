<template>
  <v-dialog
    v-model="visible"
    width="unset"
  >
    <div class="modal checking">
      <div class="modal-head">
        <h3>검수하기</h3>
        <v-btn icon @click="visible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="modal-cont">

            <dl class="basket user-basket">
              <dt>
                <h4>주문상품 정보</h4>
              </dt>
              <dd>
                <ul>
                  <li class="product-item">
                    <span class="name">운동화(세무부분포함) <label>2,500 원</label></span>
                    <span class="amount">1 개</span>
                    <span class="price">6,500 원</span>
                  </li>
                  <li class="product-item">
                    <span class="name">와이셔츠 <label>2,000 원</label></span>
                    <span class="amount">3 개</span>
                    <span class="price">6,000 원</span>
                  </li>
                </ul>
              </dd>
            </dl>

            <dl class="basket checking-basket">
              <dt>
                <h4>검수된 상품</h4>
              </dt>
              <dd>
                <li class="checking-item">
                  <span class="name">운동화(세무부분포함) <label>2,500 원</label></span>
                  <span class="amount">
                    <v-btn text>
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                    <label>1</label>
                    <v-btn text>
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </span>
                  <span class="price">6,500 원</span>
                  <span class="del">
                    <v-btn icon><v-icon>mdi-close</v-icon></v-btn>
                  </span>
                </li>
                <li class="checking-item">
                  <span class="name">와이셔츠 <label>2,000 원</label></span>
                  <span class="amount">
                    <v-btn text>
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                    <label>3</label>
                    <v-btn text>
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </span>
                  <span class="price">6,000 원</span>
                  <span class="del">
                    <v-btn icon><v-icon>mdi-close</v-icon></v-btn>
                  </span>
                </li>
                <li class="checking-item">
                  <span class="name">와이셔츠 <label>2,000 원</label></span>
                  <span class="amount">
                    <v-btn text>
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                    <label>3</label>
                    <v-btn text>
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </span>
                  <span class="price">6,000 원</span>
                  <span class="del">
                    <v-btn icon><v-icon>mdi-close</v-icon></v-btn>
                  </span>
                </li>
                <li class="checking-item">
                  <span class="name">와이셔츠 <label>2,000 원</label></span>
                  <span class="amount">
                    <v-btn text>
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                    <label>3</label>
                    <v-btn text>
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </span>
                  <span class="price">6,000 원</span>
                  <span class="del">
                    <v-btn icon><v-icon>mdi-close</v-icon></v-btn>
                  </span>
                </li>
              </dd>
            </dl>

            <dl class="product-list">
              <dt>
                <h4>상품선택</h4>
                <div class="search-box">
                  <v-icon>mdi-magnify</v-icon>
                  <input type="text" placeholder="상품명 검색">
                </div>
              </dt>
              <dd>
                <div class="tabs">
                  <v-btn 
                    text 
                    v-for="(item,index) in goodsCate" 
                    :key="index"
                    :class="{active:tabActive === index}"
                    @click="tabActive = index"
                  >
                    {{item}}
                  </v-btn>
                </div>
                <div class="tab-cont">
                  <div class="goods-item" v-for="item in 20" :key="item">
                    <span class="name">와이셔츠 <label>2,500 원</label></span>
                    <v-btn icon>
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                 
                  </div>
                </div>
              </dd>
            </dl>

      </div>
      <div class="modal-footer">
        <v-btn text @click="visible = false">취소</v-btn>
        <v-btn text @click="visible = false">확인(완료)</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false,
      tabActive:0,
      goodsCate:[
        '사장님전용','명품관','물빨래','상의','상의외투','하의','침구류','커튼/러그'
      ],
    }
  },
  methods:{
    handle(value){
      this.visible = value
    }
  }  
}
</script>

<style lang="scss" scoped>
.modal{
  width:980px;
  position: relative;
  background:#fff;
 
  .modal-head{
    position:sticky;
    top:0px;
    height:60px;
    border-bottom:1px solid #e2e2e2;
    padding:15px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;;
    z-index:2;
    
    h3{
      font-size:18px;
    }
  }

  .modal-cont{
    padding:25px;
    
    dl{
      margin-bottom:30px;
      dt{
        display:flex;
        justify-content: space-between;
        align-items: flex-end;

        h4{
        font-size:16px;
        font-weight:500;
        }
      }
      dd{
        margin-top:10px;
        background:#fff;
      }
    }
    dl:last-child{
      margin-bottom:0px;
    }

    .basket{
      dd{
        padding:15px;
        border:1px solid #e2e2e2;

        li{
          display:flex;
          align-items: center;
          margin-bottom:8px;

          span.name{
            flex:1;
            label{
              margin-left:5px;
              color:#888;
              font-size:12px;
            }
          }
          span.amount{
            text-align:center;
          }
          span.price{
            text-align:right;
            width:100px;
            font-weight:bold;
          }
          span.del{
            margin-left:20px;
            .v-btn{
              width:20px;
              height:20px;
              background:#e2e2e2;
            }
            .v-icon{
              font-size:14px;
            }
          }
        }
        li:last-child{
          margin-bottom:0px;
        }
        
      }
    }

    .checking-basket{
      li{
        span.amount{
          display:flex;
          align-items: center;

          label{
            display:flex;
            justify-content: center;
            align-items: center;
            width:30px;
            background:#f2f2f2;
            height:20px;
            font-size:12px;
            margin:0 5px;
          }
          .v-btn{
            border:1px solid #c2c2c2;
            min-width:20px;
            padding:0px;
            height:20px;
            .v-icon{
              font-size:18px;
            }
          }
        }
      }
    }

    .product-list{
      dt{
        .search-box{
          input{
            width:200px;
            padding:0 5px;
            border-bottom:1px solid #c2c2c2;
            outline:none;
          }
          .v-icon{
            font-size:18px;
            margin-right:5px;
          }
        }
      }
      dd{
        display:flex;
        border:1px solid #e2e2e2;
        min-height:100%;

        .tabs{
          width:150px;
          display:Flex;
          flex-direction: column;
          background:#f2f2f2;

          .v-btn{
            position: relative;
            height:40px;
            min-height:40px;
            font-size:12px;
          }
          .v-btn.active{
            background:#fff;
          }
          .v-btn.active:after{
            content:'';
            position: absolute;
            bottom:0;
            left:0;
            width:2px;
            height:100%;
            background:#d22828;
          }
        }

        .tab-cont{
          flex:1;
          padding:20px;
          max-height:400px;
          overflow-y:auto;

          .goods-item{
            display:flex;
            align-items: center;
            border:1px solid #e2e2e2;
            padding:10px;
            margin-bottom:10px;

            span.name{
              flex:1;
              label{
                font-size:12px;
                margin-left:5px;
              }
            }
            .v-btn{
              width:24px;
              height:24px;
              background:#e2e2e2;
              margin-left:20px;

              .v-icon{font-size:18px;}
            }
          }
          .goods-item:last-child{
            margin-bottom:0px;
          }
        }

      }
    }
  }

  .modal-footer{
    position:sticky;
    width:100%;
    bottom:0px;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    border-top:1px solid #e2e2e2;
    height:60px;
    padding:0 15px;
    background:#fff;
    z-index:2;
    
    .v-btn{
      background:#fff;
      min-height:36px;
      padding:0px 20px;
      border-radius:5px;
      margin-left:10px;
      border:1px solid #c2c2c2;
    }

    .v-btn:last-child{
      border:0;
      background:#292929;
      color:#fff;
    }
  }
}
</style>