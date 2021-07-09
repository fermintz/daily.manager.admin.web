<template>
  <div class="box area_search">
    <div class="box-head">
      <h4>담당구역 등록</h4>
    </div>
    <div class="box-content">
      <div class="cateSelect">
        <div class="selectItem">
          <v-autocomplete 
            v-model="citySelected"
            :items="city"
            dense
            outlined
            filled
            background-color="#fff"
            placeholder="시/군 선택"
            hide-details
          />
        </div>
        <div class="selectItem">
          <v-autocomplete 
            v-model="countySelected"
            :items="county"
            dense
            outlined
            filled
            background-color="#fff"
            placeholder="구/읍 선택"
            hide-details
          />
        </div>
      </div>
      <div class="areaCheck">
        <div class="checkItem" v-for="item in district" :key="item">
          <input type="checkbox">
          <label>{{item}}</label>
        </div>
      </div>
      <div class="btns">
        <v-btn text>
          등록
        </v-btn>
      </div>

      <div class="divider" />

      <div class="saveArea">
        <dl>
          <dt>
            등록된 구역
          </dt>
          <dd>
            <div class="saveAreaItem no-data">
              <label>등록된 담당구역이 없습니다</label>
            </div>
            <div class="saveAreaItem" v-for="item in 3" :key="item">
              <label>부산시 > 북구 > 구포2동</label>
              <v-btn icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
          </dd>
        </dl>
      </div>
    </div>
  </div> <!-- area_search -->
</template>

<script>
export default {
  data(){
    return{
      citySelected:null,
      countySelected:null,
      city:['서울','부산','제주','강원','경기'],
      county:['강서구','금정구','기장군','남구','동구','동래구','부산진구','사하구','서구','수영구','연제구','중구','해운대구','북구','사상구'],
      district:['강서구전체','가덕도동','가락동','강동동','구랑동','녹산동','놀차동','대저1동','대저2동','대항동','동선동','명지1동','명지2동','명지동','미음동','범방동','봉림동','생곡동','성북동','송정동','식만동','신호동','죽동동','죽림동','지사동','천성동','화전동'],
    }
  },
}
</script>

<style lang="scss" scoped>
.area_search{
    .cateSelect{
      display:flex;
      align-items: center;
      margin-bottom:15px;

      .selectItem{
        margin-right:10px;
      }
    }

    .areaCheck{
      border:1px solid #e2e2e2;
      padding:20px;
      display:flex;
      flex-wrap: wrap;

      .checkItem{
        display:flex;
        align-items: center;
        width:10%;
        margin-bottom:10px;

        input{
          width:16px;
          height:16px;
        }
        label{
          display:inline-block;
          font-size:13px;
          margin-left:6px;
        }
      }
    }

    .btns{
      display:flex;
      justify-content: center;;
      margin-top:20px;

      .v-btn{
        height:32px;
        background:#292929;
        color:#fff;
        font-size:12px;
        font-weight:normal;
      }
    }

    .divider{
      height:1px;
      background:#e2e2e2;
      margin:30px 0;
    }

    .saveArea{
      dl{
        display:flex;

        dt{
          padding-right:40px;
          border-right:1px solid #e2e2e2;
        }
        dd{
          flex:1;
          display:flex;
          align-items: center;
          flex-wrap: wrap;
          padding-left:40px;

          .saveAreaItem{
            display:flex;
            align-items: center;
            background: #F1E7E7;
            padding:0 10px;
            height:30px;
            margin-right:10px;
            margin-bottom:10px;
            border-radius:3px;

            label{
              font-size:13px;
            }

            .v-btn{
              width:18px;
              height:18px;
              background:#aaa;
              margin-left:15px;

              
              .v-icon{
                font-size:12px;
                color:#fff;
              }
            }
          }
        }
      }
    }
  }
</style>