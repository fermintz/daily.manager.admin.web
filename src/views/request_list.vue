<template>
  <div class="request">
    <div class="subHeader">
      <div class="left">
        <h3>결제요청관리</h3>
      </div>
    </div> <!-- sub-head -->

    <div class="contents">

      <SearchOpt>
        <Keyword />
      </SearchOpt>

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
                <div class="state">
                  <span>{{item.state}}</span>
                </div>
              </template>
              <template v-slot:item.orderNumber="{item}">
                <div class="order-number" @click="$router.push('requestDetail')">
                  {{item.orderNumber}}
                </div>
              </template>
              <template v-slot:item.images="{item}">
                
                <div class="images">
                  {{item.images}}
                  <div 
                    class="image-item" 
                    @click="$refs.photoViewer.handle(true)"
                    v-for="item in 6" :key="item"
                  >
                    <img src="https://picsum.photos/200/300">
                  </div>
                </div>
              </template>
            </v-data-table>
            <Pager />
          </div>
        </div>
      </div>

      <div class="request_list">
        <!-- <div class="no_data">
          요청된 추가결제가 없습니다
        </div>
 
        <div class="request_item2">
          <div class="top">
            <div class="left">
              <div class="row_line">
                <div class="state">검토대기</div>
                <div class="shop">구리구리왕구리 완전 구리 세탁소</div>
              </div>
              <div class="detail">
                <dl>
                  <dt>요청일시</dt>
                  <dd>2021.11.11 08:13</dd>
                </dl>
                <dl class="orderNum">
                  <dt>주문번호</dt>
                  <dd>65184</dd>
                </dl>
                <dl class="user">
                  <dt>주문자</dt>
                  <dd>박수민</dd>
                </dl>
                <dl>
                  <dt>전화번호</dt>
                  <dd>010-8525-4561</dd>
                </dl>
              </div>
            </div>
            
            <div class="btns">
              <div class="btn" v-ripple @click="$router.push('requestDetail')">
                <label>요청검토</label>
                <v-icon>mdi-arrow-right-circle-outline</v-icon>
              </div>
            </div>

          </div>
          <div class="message">
            <div class="text">
              <span>요청내용</span>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam facilis perferendis repellendus cupiditate minus? Enim, est earum. Quas, maiores quasi earum eligendi sunt aperiam quam recusandae porro eum, expedita officiis.</p>
            </div>
            <div class="photos">
              <div 
                class="photo"
                v-for="item in 3"
                :key="item"
                @click="$refs.photoViewer.handle(true)"
              >
                <img src="https://source.unsplash.com/random" />
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>

    <PhotoViewer ref="photoViewer" />
  </div>

</template>

<script>
import PhotoViewer from '@/components/modal/photoViewer';
import SearchOpt from '@/components/searchOpt/searchOpt.vue'
import Keyword from '@/components/searchOpt/keyword.vue'
import Pager from '@/components/pager.vue';

export default {
  components:{
     SearchOpt, Pager, Keyword, PhotoViewer
  },
  data(){
    return{
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
          state:'결제완료',
          orderNumber:'38221G-DDGC',
          date:'2022.01.05 13:36',
          partner:'월드크리닝 덕포지사',
          user:'박수민',
          userPhone:'부산시 북구 구남언덕로 15 3층',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum atque esse dolor accusantium necessitatibus adipisci vel nobis, in, dolorem rem sequi assumenda, omnis explicabo nihil numquam aut aspernatur odit corporis.',
          images:null,
        },
         {
          state:'대기중',
          orderNumber:'38221G-DDGC',
          date:'2022.01.05 13:36',
          partner:'월드크리닝 덕포지사',
          user:'박수민',
          userPhone:'부산시 북구 구남언덕로 15 3층',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum atque esse dolor accusantium necessitatibus adipisci vel nobis, in, dolorem rem sequi assumenda, omnis explicabo nihil numquam aut aspernatur odit corporis.',
          images:null,
        },

      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.request{
  .tableArea{

    .state{
      span{
        display:inline-block;
        padding:5px;
        border:1px solid #c2c2c2;
        border-radius:5px;
      }
    }

    .order-number{
      font-weight:bold;
      text-decoration: underline;
      cursor: pointer;
    }

    .images{
      display:flex;
      flex-wrap: wrap;
      
      .image-item{
        display:flex;
        align-items: center;
        justify-content: center;
        overflow:hidden;
        border-radius:10px;
        width:70px;
        height:70px;
        margin:5px;
        cursor: pointer;

        img{
          width:100%;
        }
      }
    }
  }
}
</style>