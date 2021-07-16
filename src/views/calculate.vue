<template>
  <div class="calculate">
    <div class="subHeader">
      <div class="left">
        <h3>정산관리</h3>
      </div>
    </div> <!-- sub-head -->

    <div class="contents">
      <div class="tabs">
        <v-btn text 
          v-for="(item,index) in tabs"
          :key="index"
          :class="{active: tabActive === index}"
          @click="tabActive = index"
        >
          {{item}}
        </v-btn>
      </div>

      <div class="tab_contenes" v-show="tabActive === 0">
        <SearchOpt />

        <div class="box dataTable">
          <div class="box-head">
            <h4>목록</h4>
          </div>
          <div class="box-content">
            <div class="tableArea">
              <v-data-table
                :headers="headers"
                :items="calcData"
                item-key="name"
                hide-default-footer
              >
                <template v-slot:item.shopName="{item}">
                  <a @click="$router.push('partnerDetail')">
                    {{item.shopName}}
                  </a>
                </template>

                <template v-slot:item.btns>
                  <div class="calcBox">
                    <v-btn text @click="$refs.calculateModal.handle(true)">정산하기</v-btn>
                  </div>
                </template>
              </v-data-table>

              <Pager />
            </div>
          </div>
        </div>
      </div> <!--- tab-content1 -->

      <div class="tab_contenes" v-show="tabActive === 1">
        <SearchOpt />

        <div class="box dataTable">
          <div class="box-head">
            <h4>목록</h4>
          </div>
          <div class="box-content">
            <div class="tableArea">
              <v-data-table
                :headers="headers2"
                :items="calcData2"
                item-key="name"
                hide-default-footer
              >
                <template v-slot:item.shopName="{item}">
                  <a @click="$router.push('partnerDetail')">
                    {{item.shopName}}
                  </a>
                </template>

                <template v-slot:item.btns>
                  <div class="calcBox">
                    <v-btn text @click="$refs.calculateModal.handle(true)">정산하기</v-btn>
                  </div>
                </template>
              </v-data-table>

              <Pager />
            </div>
          </div>
        </div>
      </div>
    </div>

    <CalculateModal ref="calculateModal"/>
  </div>
</template>

<script>
// - 이벤트제목
// - 간략한내용
// - 이벤트 상세페이지 주소 (워드프레스주소) // 
// - 발급수량 (예: 최대100개 / 잔여수량 알수있음)
// - 할인금액
// - 중복발급개수: 3(최대발급수량)
// - 이벤트 노출 시작/종료일 //   
// - 이벤트 적용 대상기간 (사용기간)
// - 쿠폰 발급기간 (발급받을 수 있는 기간)

import CalculateModal from '@/components/calculate/calculateModal'
import SearchOpt from '@/components/searchOpt.vue'

export default {
  components:{
    SearchOpt, CalculateModal
  },
  data(){
    return{
      tabs:['정산대기목록','정산완료목록'],
      tabActive:0,
      headers: [
        { text: '세탁소명',sortable: false, value: 'shopName',},
        { text: '정산기준일', sortable: false, value: 'calcDate', },
        { text: '세탁이용금액',sortable: false, value: 'sales',},
        { text: '세탁건수',sortable: false, value: 'salesNum'},
        { text: '추가결제내역',sortable: true, value: 'addPrice', },
        { text: '총 정산금액', sortable: false, value: 'totalPrice'},
        { text: '정산하기', sortable: false, value: 'btns'},
                
      ],
      calcData: [
        {
          shopName:'백양세탁소',
          calcDate:'2021.05.01 ~ 2021.05.30',
          sales:'1,345,000 원',
          salesNum:'103 건',
          addPrice:'178,000 원',
          totalPrice:'1,560,000 원',
          btns:'',
        },
        {
          shopName:'백양세탁소',
          calcDate:'2021.05.01 ~ 2021.05.30',
          sales:'1,345,000 원',
          salesNum:'103 건',
          addPrice:'178,000 원',
          totalPrice:'1,560,000 원',
          btns:'',
        }
      ],

      headers2:[
        { text: '정산상태',sortable: false, value: 'calcState',},
        { text: '세탁소명',sortable: false, value: 'shopName',},
        { text: '정산기준일', sortable: false, value: 'calcDate', },
        { text: '세탁이용금액',sortable: false, value: 'sales',},
        { text: '세탁건수',sortable: false, value: 'salesNum'},
        { text: '추가결제내역',sortable: true, value: 'addPrice', },
        { text: '총 정산금액', sortable: false, value: 'totalPrice'},
        { text: '정산메모', sortable: false, value: 'calcMemo'},
      ],
      calcData2:[
        {
          calcState:'정산완료',
          shopName:'백양세탁소',
          calcDate:'2021.05.01 ~ 2021.05.30',
          sales:'1,345,000 원',
          salesNum:'103 건',
          addPrice:'178,000 원',
          totalPrice:'1,560,000 원',
          calcMemo:'-'
        }
      ],
      
    }
  },
  
}
</script>

<style lang="scss" scoped>
.tabs{
    display:flex;
    align-items: flex-end;
    border-bottom:1px solid #292929;
    margin-bottom:20px;

    .v-btn{
      position: relative;
      border:1px solid #e2e2e2;
      border-left:0px;
      border-bottom:0;
      height:45px;
      min-width:150px;
      background:#f2f2f2;
      color:#888;
    }

    .v-btn:first-child{
      border-left:1px solid #e2e2e2;
    }

    .v-btn.active{
      border-left:1px solid #292929;
      border-color:#292929;
      background:#F5F6F9;
      color:#292929;
      font-weight:500;
      height:50px;
    }
    .v-btn.active:after{
      content:'';
      position: absolute;
      bottom:-1px;
      width:100%;
      height:1px;
      background: #F5F6F9;
    }
  }

  .calcBox{
    display:flex;
    align-items: center;;
    input{
      border:1px solid #e2e2e2;
      height:32px;
      padding:0 10px;
    }
    .v-btn{
      height:32px;
      background:#292929;
      color:#fff;
      font-size:12px;
    }
  }
</style>