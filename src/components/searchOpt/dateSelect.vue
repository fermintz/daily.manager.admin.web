<template>
  <dl>
    <dt>조회기간 선택</dt>
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
      <div class="quick_days">
        <v-btn text>7일</v-btn>
        <v-btn text>15일</v-btn>
        <v-btn text>1개월</v-btn>
      </div>
    </dd>
  </dl>
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
    },
  },
}
</script>

<style lang="scss" scoped>
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
.quick_days{
  border:1px solid #e2e2e2;
  margin-left:10px;
  
  .v-btn{
    font-size:12px;
    height:33px;
    border-right:1px solid #e2e2e2;
  }
  .v-btn:last-child{
    border-right:0px;
  }
}
</style>