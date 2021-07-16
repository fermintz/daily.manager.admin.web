<template>
  <div class="eventWrite">
    <div class="subHeader">
      <div class="left">
        <v-btn text @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h3>이벤트등록</h3>
      </div>

      <div class="sub-head-btns">
        <div class="btns btns-1">
          <v-btn text class="finish">등록완료</v-btn>
        </div>
      </div>
    </div>
    <!-- sub-head -->

    <div class="contents">
      <div class="form_wrap">
        <div class="box couponForm">
          <div class="box-head">
            <h4>쿠폰설정</h4>
          </div>
          <div class="box-content">
            <dl>
              <dt>쿠폰명</dt>
              <dd>
                <input type="text" v-model="couponName"/>
              </dd>
            </dl>
            <dl class="priceInput">
              <dt>할인금액</dt>
              <dd>
                <input type="text" v-model="couponPrice"/>
                <span>원 할인</span>
              </dd>
            </dl>
            
            <div class="divider" />

            <dl>
              <dt>쿠폰이미지</dt>
              <dd>
                <div class="inline">
                  <input type="file" />
                  <span>(500px x 500px 사이즈)</span>
                </div>
             
                <div class="coupon_review">
                  <div class="coupon_info">
                    <div class="price">
                      <strong>{{couponPrice}}</strong>
                      <label>원</label>
                    </div>
                    <div class="name">
                      {{couponName}}
                    </div>
                  </div>
                  <div class="minPrice">
                    최소이용금액: {{minPrice}} 원
                  </div>
                  <div class="dday">
                    D-30
                  </div>
                  <div class="coupon_thum">
                    <img src="https://source.unsplash.com/random">
                  </div>
                </div>
                
              </dd>
            </dl>

            <div class="divider" />

            <dl class="dateSelect">
              <dt>발급기간</dt>
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
                        v-model="dateRangeText"
                        v-bind="attrs"
                        v-on="on"
                      />
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
            <dl class="dateSelect">
              <dt>이용기간</dt>
              <dd>
                <div class="calendarBtn">
                  <v-menu
                    ref="menu2"
                    v-model="date_menu2"
                    :close-on-content-click="false"
                    :return-value.sync="dates2"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon>mdi-calendar</v-icon>
                      <input
                        type="text"
                        v-model="dateRangeText2"
                        v-bind="attrs"
                        v-on="on"
                      />
                    </template>
                    <v-date-picker
                      v-model="dates2"
                      range
                      locale="ko"
                      :day-format="dayFormatChange"
                      class="datePicker"
                    >
                      <v-spacer />
                      <v-btn text @click="date_menu2 = false">취소</v-btn>
                      <v-btn text @click="$refs.menu2.save(dates2)">확인</v-btn>
                    </v-date-picker>
                  </v-menu>
                </div>
              </dd>
            </dl>

            <dl class="priceInput">
              <dt>최소주문금액</dt>
              <dd>
                <div class="inline">
                  <input type="text" v-model="minPrice"/>
                  <span>원 이하 쿠폰사용불가</span>
                </div>
              </dd>
            </dl>
            <dl class="make_number">
              <dt>쿠폰 발행수량</dt>
              <dd>
                <div class="inline">
                  <input type="text"/>
                  <span>개</span>
                  <div class="check">
                    <input type="checkbox">
                    <label>무제한</label>
                  </div>
                </div>
              </dd>
            </dl>

            <dl class="make_number">
              <dt>다운로드제한</dt>
              <dd>
                <div class="inline">
                  <input type="text" />
                  <span>회</span>
                  <span>(1인당 발행수량)</span>
                </div>
              </dd>
            </dl>

            <div class="divider" />

            <dl class="standard">
              <dt>발급기준</dt>
              <dd>
                <div class="inline">
                  <div class="radio-box">
                    <input type="radio" name="use">
                    <label>사용함</label>
                  </div>
                  <div class="radio-box">
                    <input type="radio" name="use">
                    <label>사용안함</label>
                  </div>
                </div>
                <div class="inline day">
                  <input type="text" />
                  <span>일 동안 사용 금액이</span> 
                </div>
                <div class="inline price">
                  <input type="text" placeholder="금액입력"/>
                  <span>원 이상 되는 사용자에게 발급</span> 
                </div>
              </dd>
            </dl>
          </div>
          <!-- box-content -->
        </div>
        <!-- box -->

        <div class="boardWrite box">
          <div class="box-head">
            <h4>게시글 설정</h4>
          </div>
          <div class="box-content">
            <dl>
              <dt>제목</dt>
              <dd>
                <input type="text" />
              </dd>
            </dl>
            <dl>
              <dt>요약</dt>
              <dd>
                <input type="text" />
              </dd>
            </dl>
            <dl class="dateSelect">
              <dt>노출기간</dt>
              <dd>
                <div class="calendarBtn">
                  <v-menu
                    ref="menu3"
                    v-model="date_menu3"
                    :close-on-content-click="false"
                    :return-value.sync="dates3"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon>mdi-calendar</v-icon>
                      <input
                        type="text"
                        v-model="dateRangeText3"
                        v-bind="attrs"
                        v-on="on"
                      />
                    </template>
                    <v-date-picker
                      v-model="dates3"
                      range
                      locale="ko"
                      :day-format="dayFormatChange"
                      class="datePicker"
                    >
                      <v-spacer />
                      <v-btn text @click="date_menu3 = false">취소</v-btn>
                      <v-btn text @click="$refs.menu3.save(dates3)">확인</v-btn>
                    </v-date-picker>
                  </v-menu>
                </div>
              </dd>
            </dl>
            <div class="divider" />
            <dl>
              <dt>이벤트 썸네일</dt>
              <dd>
                <div class="inline">
                  <input type="file" />
                  <span>(기준 1080px x 420px 사이즈)</span>
                </div>
                <div class="event_thum">
                  <img src="https://source.unsplash.com/random">
                </div>
              </dd>
            </dl>
            

            <div class="divider" />

            <div class="editer">에디터 자리</div>
          </div>
        </div>
      </div>
      
      <div class="box review">
        <div class="box-content">
          본문 미리보기
        </div>
      </div>
      
    </div> <!-- contents -->
  </div>
</template>

<script>
// 이용횟수제한 몇회(기간 설정...일간으로 설정) - 실제결제가 일어나 주문건에 대해,,,,
// 최소주문금액 설정
// 최소이용금액 설정(3개월내 주문한 금액이 얼마이상..../ 기간설정 ) - 실제결제가 일어난 주문건에 대해,,,,,
// 발행이미지 등록
// 유통기한

export default {
  components: {},
  data() {
    return {
      couponName:'쿠폰명을 입력해주세요',
      couponPrice:5000,
      minPrice:5000,
      editor: null,
      date_menu: false,
      dates: ["2021-07-01", "2021-07-02"],
      date_menu2: false,
      dates2: ["2021-07-01", "2021-07-02"],
      date_menu3: false,
      dates3: ["2021-07-01", "2021-07-02"],
    }
  },

  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
    dateRangeText2() {
      return this.dates2.join(" ~ ");
    },
    dateRangeText3() {
      return this.dates2.join(" ~ ");
    },
  },
  methods: {
    dayFormatChange(value) {
      let day = value.substr(8, 2).replace(/(^0+)/, "");
      return day;
    },
  },
};
</script>

<style lang="scss" scoped>
.eventWrite {

  .contents{
    display:flex;
  }

  .form_wrap{
    flex:1;
  }

  .box.review{
    position:sticky;
    top:130px;
    width:360px;
    margin-left:20px;
    max-height:720px;
    min-height:720px;

    .box-content{
      padding:10px;
      overflow-y:auto;
    }
  }

  .event_thum{
    width:360px;
    height:140px;
    border:1px solid #e2e2e2;
    border-radius:10px;
    overflow:hidden;
    margin-top:20px;
    
    img{
      width:100%;
      display:block;
    }
  }

  .coupon_review{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width:360px;
    height:140px;
    padding:20px;
    border:1px solid #e2e2e2;
    position: relative;
    margin-top:20px;
    border-radius:10px;

    .coupon_info{
      .price{
        strong{font-size:24px;color:#0CA0E2}
        label{
          font-size:12px;
          margin-left:5px;
        }
      }
    }
    .minPrice{
      font-size:12px;
      color:#888;
    }

    .dday{
      position: absolute;
      top:15px;
      right:15px;
      z-index:3;
      color:#fff;
      background:#d22828;
      padding:0 10px;
      border-radius:100px;
    }

    .coupon_thum{
      position:absolute;
      top:50%;
      right:20px;
      margin-top:-50px;
      width:100px;
      height:100px;
      overflow:hidden;

      img{width:100%;}
    }
  }
  dl {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    dt {
      width: 150px;
    }
    
    dd {
      flex:1;

      .inline{
        display:flex;
        align-items: center;
        margin-bottom:10px;
      }
      .inline:last-child{
        margin-bottom:0px;
      }

      input[type=text] {
        border: 1px solid #c2c2c2;
        width: 100%;
        height: 32px;
        padding: 0 10px;
      }

      span{
        margin-left:10px;
        font-size:13px;
        color:#888;
      }

      .check{
        display:flex;
        align-items: center;
        margin-left:20px;
        background:#F1E7E7;
        height:32px;
        padding:0 10px;
        border-radius:5px;

        input[type="checkbox"]{
          width:14px;
          height:14px;
        }
        label{
          margin-left:5px;
          color:#292929;
        }
      }

      .radio-box{
        display:flex;
        align-items: center;
        margin-right:10px;
        background:#F1E7E7;
        height:32px;
        padding:0 10px;
        border-radius:5px;

        label{
          margin-left:5px;
        }
      }

      
    }
  }

  .divider {
    height: 1px;
    background: #e2e2e2;
    margin: 30px 0;
  }

  dl.dateSelect {
    dd {
      .calendarBtn {
        display: flex;
        align-items: center;
        width: 252px;
        border: 1px solid #c2c2c2;
        overflow: hidden;
        input {
          flex: 1;
          width: 100%;
          height: 32px;
          padding: 0 25px;
          outline: none;
          text-align: center;
          border: 0px;
        }
        .v-icon {
          width: 32px;
          height: 32px;
          font-size: 18px;
          background: #f2f2f2;
        }
      }
    }
  }

  dl.make_number{
    dd{
      input[type="text"]{
        width:60px;
        text-align:center;
      }
    }
  }

  dl.standard{
    dd{
      .day{
        input[type="text"]{
          width:60px;
          text-align:center;
        }
      }
      .price{
        input[type="text"]{
          width:200px;
        }
      } 
    }
  }

  dl.priceInput {
    dd {
      input[type="text"] {
        width: 200px;
      }
    }
  }
}


  

</style>
