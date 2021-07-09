<template>
  <div class="box productOpt">
    <div class="box-head">
      <h4>상품정보변경</h4>
    </div>
    <div class="box-content">
      <div class="tabs">
        <v-btn 
          text
          :class="{tab:true, active: cateActive === index}" 
          v-for="(item, index) in ProductCate" 
          :key="index"
          @click="cateActive = index"
        >
          {{item}}
        </v-btn>
      </div>
      <div class="tabContent">
        <div class="cateOpt">
          <dl>
            <dt>카테고리 노출여부</dt>
            <dd>
              <v-btn 
                text
                v-for="(item, index) in ['노출함', '노출안함']"
                :key="index"
                :class="{active:cataShow === index}"
                @click="cataShow = index"
              >
                {{item}}
              </v-btn>
            </dd>
          </dl>
        </div>

        <div class="goodsList">
          <v-data-table
            :headers="headers"
            :items="gooodsData"
            item-key="name"
            hide-default-footer
          >
            <template v-slot:item.show="{item}">
              <div class="show_opt">
                <v-switch v-model="item.show" color="#2C9CD4"/>
              </div>
            </template>
            <template v-slot:item.name="{item}">
              <div class="name">
                {{item.name}}
              </div>
            </template>
            <template v-slot:item.price="{item}">
              <div class="price_opt">
                <input type="text" :value="item.price">
                <span>원</span>
              </div>
            </template>
          </v-data-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      cataShow:0,
      cateActive:0,
      ProductCate:[
        '사장님전용','명품전용','상의','상의외투','하의','침구류','커튼/러그','신반류/기타'
      ],
      
      headers:[
        { text: '노출여부',sortable: false, value: 'show', align:'center',width:100 },
        { text: '상품명',sortable: false, value: 'name', width:300},
        { text: '부가설명',sortable: false, value: 'sub', },
        { text: '가격설정',sortable: false, value: 'price',width:200 },
      ],
      gooodsData:[
        {
          show:true,
          name:'흰색와이셔츠',
          sub:'일반적인 흰색 와이셔츠',
          price:1800,
        },
        {
          show:true,
          name:'흰색와이셔츠',
          sub:'일반적인 흰색 와이셔츠',
          price:1800,
        },
        {
          show:true,
          name:'흰색와이셔츠',
          sub:'일반적인 흰색 와이셔츠',
          price:1800,
        },
        {
          show:true,
          name:'흰색와이셔츠',
          sub:'일반적인 흰색 와이셔츠',
          price:1800,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>

.v-data-table > .v-data-table__wrapper > table > tbody > tr > td, .v-data-table > .v-data-table__wrapper > table > thead > tr > td, .v-data-table > .v-data-table__wrapper > table > tfoot > tr > td:first-child{
  padding:0;
}

.productOpt{
  .tabs{
    display:flex;
    align-items: flex-end;
    border-bottom:1px solid #292929;

    .tab{
      position: relative;
      display:flex;
      justify-content: center;
      align-items: center;
      height:40px;
      flex:1;
      border-top:1px solid #e2e2e2;
      color:#888;
      border-right:1px solid #e2e2e2;
      background:#f8f8f8;
    }

    .tab.active{
      color:#292929;
      background:#fff;
      border:1px solid #292929;
      border-bottom:0px;
    }

    .tab.active:after{
      content:'';
      position: absolute;
      bottom:-1px;
      left:0;
      width:100%;
      height:1px;
      border-bottom:1px solid #fff;
    }
  }

  .tabContent{
    display:flex;
    margin-top:30px;

    .cateOpt{
      border-right:1px solid #e2e2e2;
      padding-right:40px;

      dl{
        dt{
          font-size:14px;
          margin-bottom:15px;
        }
        dd{
          display:flex;
          flex-direction: column;

          .v-btn{
            width:180px;
            height:40px;
            border:1px solid #e2e2e2;
            color:#888;
            margin-bottom:10px;
          }

          .v-btn.active{
            border-color:#FF0158;
            color:#FF0158;
          }
        }
      }

    }
    .goodsList{
      flex:1;
      margin-left:40px;

      .name{
        font-size:14px;
      }
      .show_opt{
        display:flex;
        justify-content: center;
        align-items: center;
      }
      .price_opt{
        display:flex;
        align-items: center;
        position: relative;
        border-bottom:1px solid #292929;

        input{
          outline: none;;
          height:32px;
          font-size:14px;
        }
        span{
          position:absolute;
          right:0;
        }
      }
    }
  }
}
</style>