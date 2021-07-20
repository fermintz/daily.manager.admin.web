<template>
  <div class="partnerList">
    <div class="subHeader">
      <div class="left">
        <h3>세탁소목록</h3>
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
              <template v-slot:item.shop="{item}">
                <span class="shop" 
                  @click="$router.push('partnerDetail')"
                >
                  {{item.shop}}
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
        { text: '세탁소명',sortable: false, value: 'shop'},
        { text: '연락처',sortable: false, value: 'phone'},
        { text: '주소',sortable: false, value: 'address'},
        { text: '대표자명',sortable: false, value: 'ceo'},
        { text: '휴무요일',sortable: false, value: 'closeDay'},
        { text: '월평균매출',sortable: false, value: 'monthSales'},
      ],
      addressData: [
        {
          shop:'장전동 컴퓨터세탁',
          phone:'051-336-3307',
          address:'부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호',
          ceo:'박수민',
          closeDay:['월요일','화요일'],
          monthSales:3456120,
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.partnerList{
  .dataTable{
    margin-top:20px;
 
    .tableArea{ 
      span.shop{
        text-decoration: underline;
        cursor: pointer;
      }
      span.shop:hover{
        color:#08B882;
      }
    }
  }
}
</style>