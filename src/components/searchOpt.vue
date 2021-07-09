<template>
  <div class="box searchOpt">
      <dl class="date_opt">
        <dt>조회기간</dt>
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
      <dl class="select_opt">
        <dt>주문상태</dt>
        <dd>
          <div class="selectBox">
            <select>
              <option>전체</option>
              <option>주문예약</option>
              <option>수거대기</option>
              <option>세탁입고</option>
              <option>검수대기</option>
              <option>세탁대기</option>
              <option>결제대기</option>
              <option>세탁중</option>
              <option>출고대기</option>
              <option>세탁출고</option>
              <option>배송대기</option>
              <option>배송완료</option>
              <option>환불완료</option>
              <option>주문취소</option>
            </select>
            <span>
              ▼
            </span>
          </div>
        </dd>
      </dl>

      <dl class="keyword">
        <dt>키워드검색</dt>
        <dd>
          <div class="selectBox">
            <select>
              <option>전화번호</option>
              <option>사용자이름</option>
              <option>기사이름</option>
              <option>세탁소이름</option>
            </select>
            <span>
              ▼
            </span>
          </div>
          <input type="text" placeholder="키워드를 입력해주세요">
        </dd>
      </dl>

      <div class="btns">
        <v-btn text>검색하기</v-btn>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      date_menu:false,
      dates: ['2021-07-01', '2021-07-02'],
    }
  },
  computed:{
    dateRangeText () {
      return this.dates.join(' ~ ')
    },
  },
  methods:{
    dayFormatChange(value){
      let day = value.substr(8,2).replace(/(^0+)/,"")
      return(day)
    }
  },
}
</script>

<style lang="scss" scoped>
.searchOpt{
  border:1px solid #e2e2e2;
  dl{
    display:flex;
    align-items: center;
    border-bottom:1px solid #e2e2e2;
    height:56px;
    dt{
      width:150px;
      padding:0 20px;
      font-family:'SCDream';
      font-size:12px;
    }
    dd{
      flex:1;
      display:flex;
      align-items: center;
    }
  }
  dl:last-child{
    border-bottom:0px;
  }
  
  dl.date_opt{
    .calendarBtn{
      border:1px solid #e2e2e2;
      overflow:hidden;
      input{
        height:32px;
        padding:0 25px;
        outline: none;
        text-align:center;
      }
      .v-icon{
        width:32px;
        height:32px;
        font-size:18px;
        background:#f2f2f2;
      }
    }
    span{
      margin:0 10px;
    }
  }

  .selectBox{
    position: relative;
    display:flex;
    align-items: center;

    span{ 
      display:flex;
      justify-content: center;
      align-items: center;
      width:32px;
      height:32px;
      border-left:1px solid #e2e2e2;
      position: absolute;
      right:0px;
      background:#fff;
      font-size:9px;
    }

    select{
      position: relative;
      width:240px;
      height:32px;
      border:1px solid #e2e2e2;
      padding:0 5px;
      z-index:1;
      outline: none;;
    }

    select:hover{
      border-color:#292929;
      cursor: pointer;
    }
  }


  .keyword{
    dd{
      .selectBox{
        width:160px;
      }
      input{
        width:240px;
        margin-left:10px;
        height:32px;
        border:1px solid #e2e2e2;
        padding:0 10px;
      }
    }
  }

  .btns{
    display:flex;
    justify-content: center;;
    padding:10px;
    .v-btn{

      height:32px;
      background:#292929;
      color:#fff;
      font-size:12px;
      font-weight:normal;
    }
  }
}
</style>