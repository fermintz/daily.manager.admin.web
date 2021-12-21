<template>
  <v-dialog 
    v-model="visible"
    width="90%"
    height="100%"
  >
    <div class="reOrder">
      <div class="inner">
        <div class="left">
          <h1>재세탁등록(반품)</h1>
   
            <dl class="pickup date">
              <dt>픽업날짜</dt>
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
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon>mdi-calendar</v-icon>
                      <input
                        type="text"
                        v-model="dates"
                        v-bind="attrs"
                        v-on="on"
                      />
                    </template>
                    <v-date-picker
                      v-model="dates"
                      locale="ko"
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
            <dl class="pickup time">
              <dt>픽업시간</dt>
              <dd>
                <v-btn text class="active">08:30 ~ 12:00</v-btn>
                <v-btn text>14:00~18:00</v-btn>
                <v-btn text>18:00~20:00</v-btn>
              </dd>
            </dl>
       

          <dl class="address_selector">
            <dt>주소선택</dt>
            <dd>
              <v-autocomplete
                v-model="userAddressSelector"
                :items="userAddress"
                item-text="name"
                item-value="name"
                hide-details
                placeholder="주소를 선택해주세요"
                dense
              >
                <template v-slot:item="data">
                  <div class="p-3">
                    {{ data.item }}
                  </div>
                </template>
              </v-autocomplete>
            </dd>
          </dl>

          <div class="v-row">
            <dl class="message">
              <dt>수거/배송 전달사항</dt>
              <dd>
                <textarea placeholder="전달사항을 입력해주세요" />
              </dd>
            </dl>
            <dl class="message">
              <dt>세탁소 전달사항</dt>
              <dd>
                <textarea placeholder="전달사항을 입력해주세요" />
              </dd>
            </dl>
          </div>

          <dl class="selected_product">
            <dt>선택된 상품</dt>
            <dd class="no-data">
              <span>상품을 추가해주세요</span>
            </dd>
            <dd class="list">
              <div class="selected_item" v-for="item in 10" :key="item">
                <div class="cont">
                  <div class="item_info">
                    <span>옷이름</span>
                    <span>옷가격</span>
                  </div>
                  <div class="amount">
                    <v-btn text>
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                    <input type="text" value="0" disabled />
                    <v-btn text>
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </div>
                </div>
                <v-btn icon class="del">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </div>
            </dd>
          </dl>
        </div>
        <div class="right">
          <dl class="shop">
            <dt>세탁소선택</dt>
            <dd>
              <v-autocomplete
                v-model="shopSelected"
                :items="shop"
                item-text="name"
                item-value="name"
                hide-details
                placeholder="세탁소를 선택해주세요"
                dense
              >
                <template v-slot:item="data">
                  <div class="shop_item py-3">
                    <div style="font-size: 14px">
                      {{ data.item.name }}
                    </div>
                    <div style="font-size: 12px; color: #898989">
                      {{ data.item.address }}
                    </div>
                  </div>
                </template>
              </v-autocomplete>
            </dd>
          </dl>

          <dl class="product">
            <dt>상품목록</dt>
            <dd class="no-data">
              <span>세탁소를 먼저 선택해주세요</span>
            </dd>
            <dd class="list">
              <div class="tabs">
                <v-btn 
                  text 
                  v-for="(item, index) in cate" 
                  :key="index"
                  @click="setCate = index"
                  :class="{active:setCate === index}"
                >{{
                  item
                }}</v-btn>
              </div>
              <div class="tab_contents">
                <div class="product_item" v-for="goods in 30" :key="goods">
                  <div class="item_info">
                    <span class="name">명품 반팔티</span>
                    <span class="price">7,900 원</span>
                  </div>
                  <v-btn text class="add"> 추가하기 </v-btn>
                </div>
              </div>
            </dd>
          </dl>
        </div>
      </div>
      <!--inner -->
      <div class="bottom">
        <v-btn text class="btn cancle">취소</v-btn>
        <v-btn text class="btn complete">등록완료</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      setCate: 0,
      visible: true,
      date_menu: false,
      dates: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      cate: ["명품", "상의", "상의 외투", "하의", "신발", "기타"],
      userAddress: [
        "부산광역시 북구 구남언덕로 15",
        "부산광역시 강서구 대저 1동 2304-3 3층 페이오티",
      ],
      userAddressSelector: "",
      shop: [
        {
          name: "월드크리닝 덕포지사",
          address: "부산광역시 사상구 덕상로 1(덕포동) 월드크리닝 덕포지사",
        },
        {
          name: "자탁소(부산대연점)",
          address: "서울특별시 노원구 공릉로 34길 118, 201동 상가 104호",
        },
      ],
      shopSelected: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.reOrder {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;

  .inner {
    display: flex;
    width: 100%;
    dl {
      margin-bottom: 30px;
      dt {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 10px;
      }
    }
  }

  .left {
    flex: 1;
    height:100%;
    padding: 30px;
    h1 {
      margin-bottom: 30px;
      font-weight: 500;
    }
    .v-row {
      display: flex;
      align-items: center;
      dt {
        margin-bottom: 0;
      }
    }

    .pickup {
      display: flex;
      align-items: center;
      margin-right: 100px;

      dt {
        margin-right: 20px;
        margin-bottom:0;
      }
      dd {
        display: flex;
        align-items: center;
      }
    }
    .pickup:last-child {
      margin-right: 0;
    }
    .pickup.date {
      .calendarBtn {
        display: Flex;
        align-items: center;
        border-bottom: 1px solid #292929;
        overflow: hidden;
        input {
          width: 200px;
          height: 32px;
          outline: none;
        }
        .v-icon {
          font-size: 18px;
          margin-right: 15px;
        }
      }
      .quick_days {
        border: 1px solid #e2e2e2;
        margin-left: 10px;

        .v-btn {
          font-size: 12px;
          height: 33px;
          border-right: 1px solid #e2e2e2;
        }
        .v-btn:last-child {
          border-right: 0px;
        }
      }
    }
    .pickup.time {
      dd {
        .v-btn {
          background: #f2f2f2;
          height: 32px;
          margin-right: 5px;
          font-size: 12px;
        }
        .v-btn.active {
          color: #2c9cd4;
          border: 1px solid #2c9cd4;
          background: #fff;
        }
        .v-btn:last-child {
          border-right: 0;
        }
      }
    }
    .address_selector {
      select {
        border: 1px solid #e2e2e2;
        height: 40px;
        padding: 0 10px;
        width: 100%;
      }
    }
    .message {
      flex: 1;
      margin-right: 20px;
      dt {
        margin-bottom: 10px;
      }
      textarea {
        resize: none;
        width: 100%;
        border: 1px solid #e2e2e2;
        height: 80px;
        padding: 10px;
      }
    }
    .message:last-child {
      margin-right: 0;
    }

    .selected_product {
      dt {
        border-bottom: 1px solid #292929;
        padding-bottom: 10px;
        margin-bottom: 0;
      }
      dd.no-data{
        display:none;
        margin-top:15px;
        background:#f2f2f2;
        padding:10px;
      }
      dd.list {
        max-height: 200px;
        overflow-y:auto;
        padding-right: 15px;
        margin-top: 0;

        .selected_item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e2e2e2;
          background: #fff;
          height: 60px;

          .cont {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-right: 50px;

            .amount {
              input {
                width: 50px;
                height: 28px;
                background: #f2f2f2;
                text-align: center;
                margin: 0 5px;
                font-size: 12px;
              }
              .v-btn {
                border: 1px solid #e2e2e2;
                padding: 0px;
                min-width: 26px;
                height: 26px;

                .v-icon {
                  font-size: 16px;
                }
              }
            }
          }

          .del {
            width: 28px;
            height: 28px;
            background: #c2c2c2;
            .v-icon {
              font-size: 18px;
              color: #fff;
            }
          }
        }

        .selected_item:last-child {
          border-bottom: 0;
        }
      }
    }
  }

  .right {
    width: 600px;
    padding: 30px;
    border-left: 1px solid #e2e2e2;
    height:100%;

    .shop {
      .shop_item {
        span {
          display: block;
        }
      }
    }

    .product {
      height:50%;
      dt {
        padding-bottom: 10px;
        border-bottom: 1px solid #292929;
        margin-bottom:0px;
      }
      dd{
        margin-top:0px;
      }
      dd.no-data{
        margin-top:15px;
        background:#f2f2f2;
        padding:10px;
      }
      dd.list {
        display: flex;
        .tabs {
          display: flex;
          flex-direction: column;

          .v-btn {
            justify-content: flex-start;
            padding: 0 10px;
            min-width: 100px;
            height: 40px;
            font-size: 13px;
          }

          .v-btn.active {
            background: #2c9cd4;
            color: #fff;
          }
        }
        .tab_contents {
          flex: 1;
          border-left: 1px solid #e2e2e2;
          padding: 15px;
          max-height:430px;
          height:100%;
          overflow-y: auto;

          .product_item {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 10px;
            border-bottom: 1px solid #e2e2e2;
            .item_info {
              flex: 1;
              margin-right: 20px;
              span {
                display: block;
              }
              span.price {
                font-size: 12px;
                color: #898989;
              }
            }
            .v-btn {
              font-size: 12px;
              padding: 0px;
              min-width: 70px;
              height: 32px;
              border: 1px solid #d2d2d2;
            }
          }
        }

   
      }
    }


  }

  .bottom {

    width:100%;
    background:#fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #e2e2e2;
    padding: 15px;

    .btn {
      height: 40px;
      border: 1px solid #d2d2d2;
      margin-left: 10px;
      width: 150px;
    }
    .btn.complete {
      background: #292929;
      color: #fff;
      border: 0;
    }
  }
}
</style>
