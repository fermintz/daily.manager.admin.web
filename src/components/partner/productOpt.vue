<template>
  <div class="box productOpt">
    <div class="box-head">
      <h4>상품설정</h4>
    </div>
    <div class="box-content">
      <div class="row-inner">
        <div class="cate">
          <Draggable v-model="category">
            <transition-group>
              <div
                class="cate_item"
                v-for="(item, index) in category" 
                :key="index"
                :class="{active:cateActive === index}"
                @click="cateActive = index"
                v-ripple
              >
                <span class="icon">
                  <v-icon>mdi-drag</v-icon>
                </span>
                <span class="name">{{item}}</span>
                <v-btn icon>
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </div>
            </transition-group>
          </Draggable>
        </div>
        

        <div class="product">
          <div class="top">
            <h4>
              사장님전용
            </h4>
            <div class="right">
              <dl class="show">
                <dt>해당 카테고리 노출여부</dt>
                <dd>
                  <input type="radio" name="show">
                  <span>노출함</span>
                </dd>
                <dd>
                  <input type="radio" name="show">
                  <span>노출안함</span>
                </dd>
              </dl>
              <v-btn text @click="goodsAdd">
                <v-icon>mdi-plus</v-icon>
                <label>상품추가</label>
              </v-btn>
            </div>
            
          </div> <!-- top -->

          <div class="list">
            <Draggable>
              <transition-group>
                <div class="list_item" v-for="(item, index) in goods" :key="index">
                  <div class="left">
                    <v-icon>mdi-drag</v-icon>
                  </div>
                  <div class="right">
                    <div class="item_top">
                      <v-btn class="add" text @click="itemOptionHandle(index)">
                        <span>더보기</span>
                        <v-icon>mdi-chevron-down</v-icon>
                      </v-btn>
                      <ul>
                        <li>
                          <dl class="goods_name">
                            <dt>상품명</dt>
                            <dd><input type="text" placeholder="상품명을 입력해주세요"></dd>
                          </dl>
                        </li>
                        
                        <li>
                          <dl class="price">
                            <dt>정상가</dt>
                            <dd><input type="number" value="0"></dd>
                          </dl>
                          <dl class="price">
                            <dt>세탁소가</dt>
                            <dd><input type="number" value="0"></dd>
                          </dl>
                          <dl class="price">
                            <dt>할인가</dt>
                            <dd><input type="number" value="0"></dd>
                          </dl>
                        </li>
                      </ul>
                    </div>
                    <div class="item_bottom" v-show="item.option">
                      <ul>
                        <li>
                          <dl class="show_select">
                            <dt>노출여부</dt>
                            <dd>
                              <div class="radio_item">
                                <input type="radio" name="show">
                                <label>노출함</label>
                              </div>
                              <div class="radio_item">
                                <input type="radio" name="show">
                                <label>노출안함</label>
                              </div>
                            </dd>
                          </dl>
                        </li>
                        <li>
                          <dl class="goods_sub">
                            <dt>상품설명</dt>
                            <dd><input type="text" placeholder="상품에 관한 설명을 입력해주세요"></dd>
                          </dl>
                        </li>
                        <li>
                          <dl class="goods_link">
                            <dt>상세링크</dt>
                            <dd><input type="text"  placeholder="상품을 설명한 상세링크를 입력해주세요"></dd>
                          </dl>
                        </li>
                        <li>
                          <dl class="event_date">
                            <dt>할인일정</dt>
                            <dd>
                              <div class="calendarBtn">
                                <v-menu
                                  ref="menu"
                                  v-model="date_menu"
                                  :close-on-content-click="false"
                                  :return-value.sync="dates"
                                  transition="scale-transition"
                                  offset-y
                                  min-width="auto"
                                >
                                  <template v-slot:activator="{on,attrs}">
                                    <v-icon>mdi-calendar</v-icon>
                                    <input 
                                      type="text" 
                                      v-model="dateRangeText"
                                      v-bind="attrs"
                                      v-on="on"
                                    >
                                  </template>
                                  <v-date-picker
                                    v-model="dates"
                                    range
                                    locale="ko"
                                    :day-format="dayFormatChange"
                                    class="datePicker"
                                  >
                                    <v-spacer />
                                    <v-btn text @click="date_menu = false">취소</v-btn>
                                    <v-btn text @click="$refs.menu.save(dates)">확인</v-btn>
                                  </v-date-picker>
                                </v-menu>
                              </div>
                            </dd>
                          </dl>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <v-btn text class="del" @click="goodsRemove(index)">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </div>
              </transition-group>
            </Draggable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'

export default {
  components:{
    Draggable, 
  },
  data(){
    return{
      date_menu:false,
      dates: ['2021-07-01', '2021-07-02'],
      cataShow:0,
      cateActive:0,
      category:[
        '사장님전용','명품전용','상의','상의외투','하의','침구류','커튼/러그','신반류/기타'
      ],
      goods:[
        {
          option:false
        },
      ],
    }
  },

  methods:{
    itemOptionHandle(index){
      const goodsCopy = this.goods;
      goodsCopy[index].option = !goodsCopy[index].option
    },
    goodsRemove(index){
      const goodsCopy = this.goods;
      goodsCopy.splice(index, 1)
      this.goods = goodsCopy
    },
    goodsAdd(){
      const goodsCopy = this.goods;
      goodsCopy.push({options:true})
      this.goods = goodsCopy
    },
    dayFormatChange(value){
      let day = value.substr(8,2).replace(/(^0+)/,"")
      return(day)
    }
  },

  computed:{
    dateRangeText () {
      return this.dates.join(' ~ ')
    },
  },
}
</script>

<style lang="scss" scoped>

.v-data-table > .v-data-table__wrapper > table > tbody > tr > td, .v-data-table > .v-data-table__wrapper > table > thead > tr > td, .v-data-table > .v-data-table__wrapper > table > tfoot > tr > td:first-child{
  padding:0;
}

.productOpt{
  .row-inner{
    display:flex;
  }

  .cate{
    width:300px;
    margin-right:30px;

    .cate_item{
      display:flex;
      align-items: center;
      justify-content: space-between;
      border:1px solid #e2e2e2;
      margin-bottom:10px;
      height:50px;

      span.icon{
        margin-left:5px;
        margin-right:5px;
      }
      span.name{
        flex:1;
        font-size:14px;
        font-family:'SCDream';
      }
      .v-btn{
        width:20px;
        height:20px;
        background:#e2e2e2;
        margin-right:10px;
        .v-icon{
          font-size:14px;
        }
      }
    }
    .cate_item:hover{
      cursor: pointer;
    }

    .cate_item.active{
      border-color:#2C9CD4;
      color:#2C9CD4;
    }
   
  }

  .product{
    background:#f8f8f8;
    flex:1;
    border:1px solid #e2e2e2;
    padding:20px;

    .top{
      display:flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom:15px;
  
      h4{
        font-size:20px;
      }

      .right{
        display:flex;
        align-items: center;

        .show{
          display:flex;
          align-items: center;
          font-size:14px;
          margin-right:30px;

          dd{
            display:flex;
            align-items: center;
            margin-left:30px;
            span{
              margin-left:5px;
            }
          }
        }

        .v-btn{
          font-size:12px;
          border-radius:5px;
          background:#292929;
          color:#fff;

          .v-icon{
            font-size:18px;
            color:#fff;
            margin-right:5px;
          }
        }
      }
    } /* top */

    .list{
      min-height:700px;

      .list_item{
        position: relative;
        border:1px solid #e2e2e2;
        background:#fff;
        display:flex;
        margin-bottom:15px;
        min-height:100px;

        .left{
          width:50px;
          display:flex;
          align-items: center;
          justify-content: center;
        }

        .right{
          flex:1;
          .item_top{
            position:relative
          }
          .item_bottom{
            border-top:1px solid #e2e2e2;
          }

          ul{
            flex:1;
            border-left:1px solid #e2e2e2;
            padding:20px;

            li{
              display:flex;
              align-items: center;
              margin-bottom:15px;
              
              dl{
                flex:1;
                display:flex;
                align-items: center;
                dt{
                  width:90px;
                }
                dd{
                  display:flex;
                  align-items: center;
                  flex:1;

                  input[type="text"], input[type="number"]{
                    border:1px solid #c2c2c2;
                    height:34px;
                    padding:0 5px;
                  }
                }
              }
              dl.goods_name{
                input{
                  width:70%;
                }
              }
              dl.goods_link, dl.goods_sub{
                input{
                  width:100%;
                }
              }
              dl.price{
                flex:none;
                margin-right:60px;
                input{
                  width:120px;
                }
              }
              dl.show_select{
                .radio_item{
                  display:flex;
                  align-items: center;;
                  margin-right:30px;
                  input[type="radio"]{
                    margin-right:10px;
                  }
                }
              }
              dl.event_date{
                .calendarBtn{
                  border:1px solid #e2e2e2;
                  overflow:hidden;
                  input{
                    height:32px;
                    padding:0 25px;
                    outline: none;
                    text-align:center;
                    border:0px;
                  }
                  .v-icon{
                    width:32px;
                    height:32px;
                    font-size:18px;
                    background:#f2f2f2;
                  }
                }
              }           
            }
            
            li:last-child{
              margin-bottom:0px;
            }
          }
        }

        .v-btn.add{
          position: absolute;
          bottom:15px;
          right:10px;
          padding:0px 10px;
          border-radius:5px;
          height:30px;

          span{
            font-size:12px;
            color:#D20059;
          }
          .v-icon{
            font-size:18px;
            margin-left:5px;
            color:#D20059
          }
        }

        .v-btn.del{
          background:#aaa;
          color:#fff;
          min-width:30px;
          height:30px;
          border-radius:5px;
          padding:0;
          position: absolute;
          right:15px;
          top:15px;
          .v-icon{
            font-size:18px;
          }
        }
      } /* list-item */
    }
  }
}
</style>