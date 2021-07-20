<template>
  <div class="box">
    <div class="box-head">
      <h4>정산내역</h4>
    </div>
    <div class="box-content">
      <div class="data_table">
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="tableData"
          item-key="name"
          hide-default-footer
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
</template>

<script>
export default {
  data(){
    return{
      headers: [
        { text: '날짜',sortable: false, value: 'day' },
        { text: '요일',sortable: false, value: 'weekText' },
        { text: '세탁건수',sortable: false, value: 'orderNum' },
        { text: '세탁금액',sortable: false, value: 'orderPrice' },
        { text: '추가세탁금액',sortable: false, value: 'addPrice' },
        { text: '취소금액',sortable: false, value: 'canclePrice' },
        { text: '총 매출',sortable: false, value: 'totalPrice' },
      ],
      tableData: [
        {
          day:'2021-07-01',
          weekText:'목요일',
          orderNum:12,
          orderPrice:'345,000 원',
          addPrice:'54,000 원',
          canclePrice:'-5,000 원',
          totalPrice:'394,000 원'
        },
        {
          day:'2021-07-01',
          weekText:'목요일',
          orderNum:12,
          orderPrice:'345,000 원',
          addPrice:'54,000 원',
          canclePrice:'-5,000 원',
          totalPrice:'394,000 원'
        },
      ],
    }
  }
}
</script>