<template>
  <div class="request">
    <div class="subHeader">
      <div class="left">
        <h3>결제요청관리</h3>
      </div>
    </div> <!-- sub-head -->

    <div class="contents">

      <div class="tabs">
        <div class="head">
          <div 
            class="btn" 
            v-for="(item,index) in tabs" 
            :key="index" v-ripple
            :class="{active:tabActive === index}"
            @click="tabActive = index"
          >
            <strong>{{item.name}}</strong>
            <span>{{item.number}}</span>
          </div>
        </div>
      </div>

      <div class="box dataTable">
        <div class="box-content">
          <div class="tableArea">
            <v-data-table
              :headers="headers"
              :items="memberData"
              item-key="name"
              hide-default-footer
            >
              <template v-slot:item.state="{item}">
                <div class="state" >
                  <span :class="{request:item.stateId === 0 ,ready:item.stateId === 1, complete:item.stateId === 2}">{{item.state}}</span>
                </div>
              </template>
              <template v-slot:item.orderNumber="{item}">
                <div class="order-number" @click="$router.push('requestDetail')">
                  {{item.orderNumber}}
                </div>
              </template>
              <template v-slot:item.images="{item}">
                
                <div class="images" v-if="item.images">
                  <div 
                    class="image-item" 
                    @click="$refs.photoViewer.handle(true)"
                    v-for="item in 1" :key="item"
                  >
                    <img :src="item.images">
                  </div>
                </div>

                <div class="no-item" v-else>
                  사진이 등록되지 않았습니다.
                </div>

              </template>
            </v-data-table>
            <Pager />
          </div>
        </div>
      </div>
    </div>

    <PhotoViewer ref="photoViewer" />
  </div>

</template>

<script>
import PhotoViewer from '@/components/modal/photoViewer';
import Pager from '@/components/pager.vue';

export default {
  components:{
    Pager, PhotoViewer
  },
  data(){
    return{
      tabActive:0,
      tabs:[
        {
          name:'전체',
          number:14
        },
        {
          name:'추가결제중',
          number:10
        },
        {
          name:'요청검수',
          number:3
        },
        {
          name:'결제완료',
          number:1
        },
      ],
       headers: [
        { text: '요청상태',sortable: false, value: 'state', },
        { text: '주문번호',sortable: false, value: 'orderNumber' },
        { text: '요청일시',sortable: false, value: 'date' },
        { text: '요청파트너',sortable: false, value: 'partner' },
        { text: '주문자',sortable: false, value: 'user' },
        { text: '주문자_전화번호',sortable: false, value: 'userPhone' },
        { text: '요청내용',sortable: false, value: 'text', width:360},
        { text: '이미지',sortable: false, value: 'images', width:360},

      ],
      memberData: [
        {
          stateId:0,
          state:'요청검수',
          orderNumber:'38221G-DDGC',
          date:'2022.01.05 13:36',
          partner:'월드크리닝 덕포지사',
          user:'박수민',
          userPhone:'부산시 북구 구남언덕로 15 3층',
          text:'Lorem ipsum dolor sit amet, consectetur ',
          images:'https://picsum.photos/200/300',
        },
         {
          stateId:1,
          state:'추가결제중',
          orderNumber:'38221G-DDGC',
          date:'2022.01.05 13:36',
          partner:'월드크리닝 덕포지사',
          user:'박수민',
          userPhone:'부산시 북구 구남언덕로 15 3층',
          text:'Illum atque esse dolor accusantium necessitatibus ',
          images:null,
        },
        {
          stateId:2,
          state:'결제완료',
          orderNumber:'38221G-DDGC',
          date:'2022.01.05 13:36',
          partner:'월드크리닝 덕포지사',
          user:'박수민',
          userPhone:'부산시 북구 구남언덕로 15 3층',
          text:'요청내용이 없습니다. ',
          images:null,
        },

      ],
    }
  }
}
</script>

<style lang="scss" scoped src="./requestList.scss" />
