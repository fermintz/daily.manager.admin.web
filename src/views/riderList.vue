<template>
  <div class="riderList">
    <div class="subHeader">
      <div class="left">
        <h3>라이더목록</h3>
      </div>
    </div> <!-- sub-head -->

    <div class="contents">
      <SearchOpt>
        <Keyword />
      </SearchOpt>

      <div class="box dataTable">
        <div class="box-head">
          <h4>목록</h4>
        </div>
        <div class="box-content">
          <div class="tableArea">
            <v-data-table
              :headers="headers"
              :items="addressData"
              item-key="name"
              hide-default-footer
            >
              <template v-slot:item.area="{item}">
                <span class="area" v-for="area in item.area" :key="area">
                  {{area}}
                </span>
              </template>
            </v-data-table>

            <Pager />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pager from '@/components/pager.vue';
import SearchOpt from '@/components/searchOpt/searchOpt.vue'
import Keyword from '@/components/searchOpt/keyword.vue'

export default {
  components:{
    SearchOpt, Pager, Keyword
  },
  data(){
    return{
      headers: [
        { text: '아이디',sortable: false, value: 'id',width:150 },
        { text: '비밀번호',sortable: false, value: 'pass',width:150 },
        { text: '이름',sortable: false, value: 'name',width:120},
        { text: '전화번호',sortable: true, value: 'phone',width:150, },
        { text: '상태메세지', sortable: false, value: 'message',width:350 },
        { text: '담당구역', sortable: false, value: 'area'},
      ],
      addressData: [
        {
          id:'dailyWash01',
          pass:'12341234',
          name:'김용희',
          phone:'010-1234-1243',
          message:'오늘도 열심히 하겠습니다',
          area:['부산 > 사상구 > 전체','부산 > 북구 > 전체','부산 > 금정구 > 전체', '부산 > 해운대구 > 전체', '부산 > 수영구 > 전체', '부산 > 동래구 > 전체', '부산 > 동구 > 전체']          
        },
        {
          id:'dailyWash01',
          pass:'12341234',
          name:'박수민',
          phone:'010-8525-4561',
          message:'안녕하세요 신속하고 정확하게 배송해드리겠습니다',
         area:['부산 > 사상구 > 전체','부산 > 북구 > 전체','부산 > 금정구 > 전체']    
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.riderList{
  .dataTable{
    margin-top:20px;
 
    .tableArea{ 
      span.area{
        display:inline-block;
        padding:0 10px;
        height:24px;
        line-height:24px;
        background:#F1E7E7;
        margin:3px 0;
        margin-right:6px;
        font-size:12px;
        border-radius:3px;
      }
    }
  }
}
</style>