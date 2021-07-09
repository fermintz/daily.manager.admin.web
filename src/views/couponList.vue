<template>
  <div class="couponList">
    <div class="subHeader">
      <div class="left">
        <h3>쿠폰관리</h3>
      </div>

      <div class="sub-head-btns">
        <div class="btns btns-1">
          <v-btn text class="finish">쿠폰등록</v-btn>
        </div>
      </div>
    </div> <!-- sub-head -->

    <div class="contents">
      <SearchOpt />

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

    <CouponModal />
  </div>
</template>

<script>
import Pager from '@/components/pager.vue';
import SearchOpt from '@/components/searchOpt.vue'
import CouponModal from '@/components/modal/coupon.vue'

export default {
  components:{
    SearchOpt, Pager, CouponModal
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
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.box{
  margin-bottom:20px;
}
</style>