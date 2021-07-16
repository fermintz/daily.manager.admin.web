<template>
  <div class="eventWrite">
    <div class="subHeader">
      <div class="left">
        <v-btn text @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h3>게시글등록</h3>
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
}
 

  

</style>
