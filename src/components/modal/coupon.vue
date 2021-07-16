<template>
  <v-dialog v-model="visible" width="900">
    <div class="modal couponModal">
      <div class="modal-head">
        <h3>쿠폰발급하기</h3>

        <v-btn icon @click="visible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="modal-cont">
        <dl>
          <dt>발급방식</dt>
          <dd>
            <div class="selectBox">
              <select>
                <option>다운로드</option>
                <option>즉시발급</option>
              </select>
              <span> ▼ </span>
            </div>
          </dd>
        </dl>
        <dl class="couponName">
          <dt>쿠폰명</dt>
          <dd>
            <input type="text" />
          </dd>
        </dl>
        <dl class="datePicker">
          <dt>사용기간</dt>
          <dd>
            <div class="datePickerBox">
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
            <div class="quick_btns">
              <v-btn
                text
                v-for="(item, index) in ['3일', '15일', '1개월', '무제한']"
                :key="index"
              >
                {{ item }}
              </v-btn>
            </div>
          </dd>
        </dl>
        <dl class="datePicker">
          <dt>다운로드기간</dt>
          <dd>
            <div class="datePickerBox">
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
                  <v-btn text @click="$refs.menu2.save(dates)">확인</v-btn>
                </v-date-picker>
              </v-menu>
            </div>
            <div class="quick_btns">
              <v-btn
                text
                v-for="(item, index) in ['3일', '15일', '1개월', '무제한']"
                :key="index"
              >
                {{ item }}
              </v-btn>
            </div>
          </dd>
        </dl>
        <dl>
          <dt>할인금액</dt>
          <dd>
            <input type="number" />
          </dd>
        </dl>
        <dl>
          <dt>최소사용금액</dt>
          <dd>
            <input type="number" />
          </dd>
        </dl>
      </div>
      <div class="modal-footer">
        <v-btn text @click="visible = false">취소</v-btn>
        <v-btn text @click="visible = false">발급하기</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      date_menu: false,
      dates: ["2021-07-01", "2021-07-02"],
      date_menu2: false,
      dates2: ["2021-07-01", "2021-07-02"],
    };
  },
  methods: {
    handle(value) {
      this.visible = value;
    },
    dayFormatChange(value) {
      let day = value.substr(8, 2).replace(/(^0+)/, "");
      return day;
    },
  },
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
    dateRangeText2() {
      return this.dates2.join(" ~ ");
    },
  },
};
</script>

<style lang="scss" scoped>
.couponModal {
  dl {
    display: Flex;
    align-items: center;
    margin-bottom: 15px;

    dt {
      width: 150px;
    }
    dd {
      flex: 1;
      display: flex;
      align-items: center;

      input {
        width: 240px;
        border: 1px solid #e2e2e2;
        height: 32px;
        padding: 0 10px;
        outline: none;
      }
      select {
        width: 150px;
        border: 1px solid #e2e2e2;
        height: 32px;
        padding: 0 10px;
      }
    }
  }

  .selectBox {
    position: relative;
    display: flex;
    align-items: center;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-left: 1px solid #e2e2e2;
      position: absolute;
      right: 0px;
      background: #fff;
      font-size: 9px;
    }

    select {
      position: relative;
      width: 240px;
      height: 32px;
      border: 1px solid #e2e2e2;
      padding: 0 5px;
      z-index: 1;
      outline: none;
    }

    select:hover {
      border-color: #292929;
      cursor: pointer;
    }
  }

  dl.couponName {
    dd {
      input {
        width: 100%;
      }
    }
  }

  dl.datePicker {
    dd {
      .quick_btns {
        border: 1px solid #c2c2c2;
        margin-left: 10px;

        .v-btn {
          min-width: 60px;
          height: 32px;
          padding: 0 5px;
          font-size: 12px;
          border-right: 1px solid #e2e2e2;
        }

        .v-btn.active{
          background:#F2FBFF
        }

        .v-btn:last-child {
          border-right: 0px;
        }
      }
      .v-icon {
        width: 32px;
        font-size: 18px;
      }
      input {
        border: 0;
        width: auto;
      }
      .datePickerBox {
        width: 240px;
        display: inline-block;
        border: 1px solid #c2c2c2;
      }
    }
  }
}
</style>
