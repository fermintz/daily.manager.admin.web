<template>
  <div 
    class="add_product"
    :class="{active:addProduct}"
  >
    <div class="head">
      <div class="top">
        <h2>상품추가</h2>
        <v-btn icon @click="addProduct = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="input_box">
        <input type="text" placeholder="검색할 단어를 입력해주세요">
        <v-icon>mdi-magnify</v-icon>
      </div>
    </div>
    <div class="tabs">
      <v-btn 
        text 
        v-for="(item, index) in tabs" 
        :key="index"
        :class="{active:tabActive === index}"
        @click="tabActive = index"
      >
        {{item}}
      </v-btn>
    </div>
    <div class="search_result" v-show="tabActive === 0">
      
      <div class="goods_list">
        <div class="no-data">
          위 검색창에서 검색을 진행해 주세요
        </div>
      </div>
    </div>
    <div class="goods_selector" v-show="tabActive === 1">
      <div class="category">
        <ul>
          <li
            v-for="(item, index) in category" :key="index"
            :class="{active:categoryActive === index}"
            @click="categoryActive = index"
          >{{item}}</li>
        </ul>
      </div>
      <div class="goods_list">
        <div class="goods_item" v-for="item in 20" :key="item">
          <span>병원가운/유니폼류(상하의)</span>
          <v-btn icon>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      addProduct:false,
      tabActive:1,
      tabs:['검색결과','직접선택'],
      categoryActive:0,
      category:[
        '사장님전용','명품관','상의','상의외투','하의','침구류','커튼/러그','신발류/기타'
      ],
    }
  },
  methods:{
    handle(value){
      this.addProduct = value
    }
  }
}
</script>

<style lang="scss" scoped>
.add_product{
  position: fixed;
  top:0px;
  right:-420px;
  width:420px;
  z-index:11;
  background:#fff;
  border-left:1px solid #e2e2e2;
  transition:right 0.5s;
  overflow-y:auto;
  height:100%;
  box-shadow: -5px 0px 20px rgba(0,0,0,0.05);  
  scroll-behavior: smooth;

  .head{
    padding:20px;
    border-bottom:1px solid #e2e2e2;
    background:#fff;
    z-index:10;

    .top{
      display:flex;
      align-items: center;
      justify-content: space-between;
    }

    .input_box{
      position: relative;
      display:flex;
      align-items: center;
      margin-top:20px;
      

      .v-btn{
        position: absolute;
        right:0px;
        top:0px;
      }
      
      input{
        flex:1;
        height:40px;
        padding:0 40px 0 10px;
        background:#fff;
        outline: none;
        border:1px solid #c2c2c2;
      }

      input:focus{
        border:1px solid #292929;
      }

      .v-icon{
        width:40px;
        position: absolute;
        right:0px;
      }
    }
  } /* head */

  .tabs{
    display:flex;
    align-items: center;
    border-bottom:1px solid #e2e2e2;

    .v-btn{
      flex:1;
      height:50px;
      border-radius:0;
    }

    .v-btn.active{
      color:#de0059
    }
    .v-btn.active:after{
      content:'';
      display:block;
      width:100%;
      height:2px;
      position: absolute;
      bottom:0;
      left:0;
      background:#de0059
    }
  }

  .search_resulit{
    height:100%;
    min-height:100%;
    background:#fff;
  }

  .goods_selector{

    .category{
      padding:10px;
      border-bottom:1px solid #e2e2e2;
      background:#f2f2f2;
      ul{
        display:flex;
        flex-wrap:wrap;

        li{
          display:flex;
          align-items: center;
          justify-content: center;
          width:25%;
          padding:10px;
          height:34px;
          font-size:12px;
          border-radius:5px;
          font-family:'gulim'
        }

        li:hover{
          cursor: pointer;
        }

        li.active{
          background:#292929;
          color:#fff;
        }
      }
    }
  }

  .goods_list{
    padding:20px;
    overflow-y:auto;
    scroll-behavior: smooth;

    .no-data{
      text-align:center;
      background:#f8f8f8;
      border-radius:5px;
      padding:10px;
      color:#898989;
    }

    .goods_item{
      display:flex;
      align-items: center;
      justify-content: space-between;
      border:1px solid #e2e2e2;
      padding:0 15px;
      height:50px;
      border-radius:5px;
      margin-bottom:10px;

      .v-btn{
        width:30px;
        height:30px;
        background:#e2e2e2;
      }
    }
    .goods_item:last-child{
      margin-bottom:0px;
    }
  }
} /* addProduct */

.add_product.active{
  right:0px;
  transition:right 0.3s;
}

.add_product::-webkit-scrollbar{
  width:5px;
  background:#e2e2e2;
  
}
.add_product::-webkit-scrollbar-thumb{
  background:#c2c2c2;
}
</style>