<template>
  <div class="memberList">
    <div class="subHeader">
      <div class="left">
        <h3>회원목록</h3>
      </div>
    </div> <!-- sub-head -->

    <div class="contents">
      <SearchOpt />

      <div class="box dataTable">
        <div class="box-head">
          <h4>목록</h4>
          <div class="btns">
            <v-btn text @click="$refs.couponModal.handle(true)">
              쿠폰발급
            </v-btn>
            <v-btn text>
              회원탈퇴
            </v-btn>
          </div>
        </div>
        <div class="box-content">
          <div class="tableArea">
            <v-data-table
              v-model="selected"
              :headers="headers"
              :items="memberData"
              item-key="name"
              hide-default-footer
              :single-select="singleSelect"
              show-select
            >
              <template v-slot:item.userName="{item}">
                <a @click="$router.push('memberDetail')">
                  {{item.userName}}
                </a>
              </template>
            </v-data-table>
            <Pager />
          </div>
        </div>
      </div>
    </div>
    <CouponModal ref="couponModal"/>
  </div>
</template>

<script>
import Pager from '@/components/pager.vue';
import SearchOpt from '@/components/searchOpt.vue'
import CouponModal from '@/components/modal/coupon.vue';

export default {
  components:{
    SearchOpt, Pager, CouponModal
  },
  data(){
    return{
      singleSelect:false,
      selected: [],
      headers: [
        { text: '회원번호',sortable: false, value: 'memberNum' },
        { text: '회원명',sortable: false, value: 'userName' },
        { text: '카카오아이디',sortable: false, value: 'kakaoID' },
        { text: '전화번호',sortable: false, value: 'phone' },
        { text: '대표주소',sortable: false, value: 'address' },
        { text: '총주문수',sortable: false, value: 'totalNum' },
        { text: '총주문금액',sortable: false, value: 'totalPrice' },
        { text: '쿠폰',sortable: false, value: 'coupon' },
      ],
      memberData: [
        {
          memberNum:102830,
          userName:'박수민',
          kakaoID:'fermintz@gmail.com',
          phone:'010-8525-4561',
          address:'부산시 북구 구남언덕로 15 3층',
          totalNum:'3 건',
          totalPrice:'98,500 원',
          coupon:'3'
        },
        {
          memberNum:123310,
          userName:'김민선',
          kakaoID:'fermintz@gmail.com',
          phone:'010-8525-4561',
          address:'부산시 북구 구남언덕로 15 3층',
          totalNum:'3 건',
          totalPrice:'98,500 원',
          coupon:'3'
        }
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