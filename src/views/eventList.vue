<template>
  <div class="couponList">
    <div class="subHeader">
      <div class="left">
        <h3>쿠폰이벤트</h3>
      </div>

      <div class="sub-head-btns">
        <div class="btns btns-1">
          <v-btn 
            text
            class="finish"
            @click="$router.push('eventWrite')"
          
          >이벤트등록</v-btn>
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
              :items="couponData"
              item-key="name"
              hide-default-footer
            >
              <template v-slot:item.eventThum="{item}">
                <div class="eventThum">
                  <img :src="item.eventThum">
                </div>
              </template>
              <template v-slot:item.eventTitle="{item}">
                <a @click="$router.push('eventWrite')">
                  {{item.eventTitle}}
                </a>
              </template>
              <template v-slot:item.couponInfo="{item}">
                <div>
                  {{item.couponInfo.couponName}}
                </div>
                <div>
                  {{item.couponInfo.salePrice}}
                </div>
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
import CouponModal from '@/components/modal/coupon.vue'

export default {
  components:{
    SearchOpt, Pager, CouponModal
  },
  data(){
    return{
      headers: [
        { text: '이벤트썸네일',sortable: false, value: 'eventThum'},
        { text: '등록일',sortable: false, value: 'makeDate',},
        { text: '이벤트명', sortable: false, value: 'eventTitle', },
        { text: '노출기간',sortable: false, value: 'viewDate',},
        { text: '쿠폰명',sortable: true, value: 'couponName' },
        { text: '할인금액',sortable: true, align:'center', value: 'salePrice'},
        { text: '발급기간', sortable: false, value: 'whenDate'},
        { text: '이용기간', sortable: false, value: 'useData'},
        { text: '최소주문금액', sortable: false, align:'center',value: 'minOrderPrice'},
        { text: '쿠폰발행수량', sortable: false, align:'center',value: 'couponNumber'},
        { text: '다운로드제한', sortable: false, align:'center', value: 'downloadNumber'},
                
      ],
      couponData: [
        {
          eventThum:'https://source.unsplash.com/random',
          makeDate:'2021.05.14 12:34:55',
          eventTitle:'여름맞이 특별 SALE',
          viewDate:'2021.06.14 ~ 06.31',
          couponName:'여름맞이 세일쿠폰',
          salePrice:'5,000원',
          whenDate:'2021-07-05까지',
          useData:'2021-07-05까지',
          minOrderPrice:'3,000원',
          couponNumber:'9999개',
          downloadNumber:'1회'
        },
        {
          eventThum:'https://source.unsplash.com/random',
          makeDate:'2021.05.14 12:34:55',
          eventTitle:'여름맞이 특별 SALE',
          viewDate:'2021.06.14 ~ 06.31',
          couponName:'여름맞이 세일쿠폰',
          salePrice:'5,000원',
          whenDate:'2021-07-05까지',
          useData:'2021-07-05까지',
          minOrderPrice:'3,000원',
          couponNumber:'9999개',
          downloadNumber:'1회'
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

.eventThum{
  width:180px;
  height:70px;
  overflow:hidden;
  
  img{
    width:100%;
    display:block;
  }
}
</style>