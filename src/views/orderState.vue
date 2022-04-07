<template>
  <div class="orderState">
    <div class="contents">
      <div class="page-top">
        <span>{{new Date()|moment("YYYY" + "년 " + "MM" + "월 " + "DD" + "일 " + "dddd")}}</span>
        <dl>
          <dt>오늘 총 주문건</dt>
          <dd>891</dd>
        </dl>
      </div>

      <v-row class="shop-list">
        <v-col cols="12" md="6" v-for="items in 3" :key="items">
          <div class="box shop-item">
            <div class="top">
              <div class="shop-info">
                <strong>데일리세탁 부산점</strong>
                <span>부산 북구 구남언덕로 15</span>
              </div>
              <v-btn icon>
                <v-icon>mdi-map</v-icon>
              </v-btn>
            </div>

            <div class="divider" />

            <div class="bottom">
              <dl
                v-for="item in ['수거요청', '수거중', '출고대기', '배송대기']"
                :key="item"
              >
                <dt>{{ item }}</dt>
                <dd>14</dd>
              </dl>
            </div>
          </div>
        </v-col>
      </v-row>

      <div class="divider" />

      <v-row>
        <v-col cols="9">
          <div class="box dayOrderChart">
            <div class="box-head">
              <h4>가입자추이</h4>
            </div>
            <div class="box-content">
              <LineChart />
            </div>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="box memeber-state">
            <dl class="yesterday">
              <dt>어제 회원수</dt>
              <dd>15,580</dd>
            </dl>
            <div class="divider"></div>
            <dl class="today">
              <dt>오늘 회원수</dt>
              <dd>15,980</dd>
            </dl>
            <div class="member-counter">
              <div class="member-counter-item">
                <label>오늘 가입자 수</label>
                <span>10</span>
              </div>
              <!-- <div class="member-counter-item">
                <label>탈퇴 수</label>
                <span>2</span>
              </div> -->
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import LineChart from "@/components/chart/lineChart.vue";

export default {
  components: { LineChart },
  data(){
    return{
      tabActive:0,
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.orderState {
  .row {
    margin: -10px;
    padding: 0px;
    .col-12 {
      padding: 10px;
    }
  }
}

.divider {
  height: 1px;
  background: #e2e2e2;
  margin: 30px 0;
}

.box{
  border-radius:10px;
}

.page-top {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e9eaec;
  margin-bottom: 20px;
  border-radius:10px;

  span {
    font-size: 18px;
    font-weight: 500;
  }

  dl {
    display: flex;
    align-items: center;
    dt {
      margin-right: 20px;
    }
    dd {
      display: flex;
      align-items: center;
      font-size: 24px;
      font-weight: 500;
    }
    dd:after {
      content: "건";
      font-size: 16px;
      margin-left: 5px;
    }
  }
}

.shop-list {
  .box {
    margin-bottom: 0px;
  }
}

.shop-item {
  padding: 20px;

  .divider {
    margin: 20px 0;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .shop-info {
      strong {
        display: block;
        font-size: 18px;
        font-weight: 500;
      }
      span {
        color: #898989;
        display: block;
      }
    }

    .v-btn {
      width: 50px;
      height: 50px;
      background: #f2f2f2;
    }
  }

  .bottom {
    display: flex;
    dl {
      flex: 1;
      text-align: center;
      border-right: 1px solid #e2e2e2;
      margin-right: 10px;

      &:last-child {
        border-right: 0;
        margin-right: 0;
      }
      dt {
        font-size: 13px;
        color: #898989;
      }
      dd {
        font-family: "Roboto";
        font-size: 24px;
        font-weight: 600;
      }
    }
  }
}

.dayOrderChart {
  .box-head{
    height:56px;
  }
  .box-content{
    height:400px;
  }
}

.memeber-state {
  padding: 20px;

  .divider {
    margin: 20px 0;
  }

  dl {
    dd {
      text-align: right;
      font-size: 24px;
      font-weight: 500;
      font-family: "Roboto", "SCDream";
    }
    dd:after {
      content: "명";
      font-size: 14px;
      margin-left: 5px;
    }
  }

  .today{
    dd{
      color:#de0059;
    }
  }

  .member-counter {
    display: flex;
    align-items: center;
    background: #f2f2f2;
    margin-top: 20px;
    padding: 15px;
    border-radius: 5px;

    .member-counter-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
      border-right: 1px solid #c2c2c2;
      padding-right: 20px;
      margin-right: 20px;

      label {
        font-weight: 400;
        color: #898989;
      }
      span {
        font-weight: 500;
        font-size: 18px;
      }

      &:last-child {
        border-right: 0;
        padding-right: 0;
        margin-right: 0;
      }
    }
  }
}
</style>
