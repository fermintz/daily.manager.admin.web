<template>
  <v-navigation-drawer width="200" stateless class="drawer" v-model="drawer" app>
    <div class="nav">
      <dl v-for="(items, index) in menuItem" :key="index">
        <dt @click="[menuToggle(index), items.active = true]">
          <label>{{items.title}}</label>
          <span>
            <v-icon>
              {{items.active ? 'mdi-minus' : 'mdi-plus'}}
            </v-icon>
          </span>
        </dt>
        <dd :class="{active:items.active, menu2d:true}">
          <span v-for="(item, index) in items.menu2d" :key="index" @click="$router.push(item.routeName)">
            {{item.title}}
          </span>
        </dd>
      </dl>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data(){
    return{
      drawer:true,
      menuItem:[
          {
            title:'주문관리',
            active:true,
            menu2d:[
              {
                title:'주문조회',
                routeName:'/'
              },
              
            ]
          },
          {
            title:'이벤트관리',
            active:true,
            menu2d:[
              {
                title:'쿠폰관리',
              },
            ]
          },
          {
            title:'회원관리',
            active:true,
            menu2d:[
              {
                title:'회원목록',
                routeName:'memberList'
              },
            ]
          },
          {
            title:'라이더관리',
            active:true,
            menu2d:[
              {
                title:'라이더목록',
                routeName:'riderList'
              },
              {
                title:'라이더등록',
                routeName:'riderRegister',
              },
            ]
          },
          {
            title:'세탁소관리',
            active:true,
            menu2d:[
              {
                title:'세탁소목록',
                routeName:'partnerList'
              },
              {
                title:'세탁소등록',
                routeName:'partnerRegister'
              },
            ]
          },
          {
            title:'매출관리',
            active:true,
            menu2d:[
              {
                title:'전체매출',
              },
              {
                title:'정산관리',
              },
            ]
          }
        ],
      }
  }
}
</script>

<style lang="scss" scoped>
.drawer{
  z-index:1;
  padding-top:50px;

  .nav{

    dl{
      border-bottom:1px solid #e2e2e2;
      padding:15px;
      dt{
        display:flex;
        justify-content: space-between;
        align-items: center;

        label{
          font-size:12px;
          color:#898989;
          font-family:'gulim';
          letter-spacing:-0.4px;
        }

        label:hover{
          color:#292929;
          cursor: pointer;
        }

        span{
          display:flex;
          width:20px;
          height:20px;
          border:1px solid #e2e2e2;
          justify-content: center;
          align-items: center;

          .v-icon{
            font-size:14px;
          }
        }
      }

      dd{
        overflow:hidden;
        height:0px;
        padding-left:5px;
        transition: height 2s;
        
        span{
          display:block;
          font-size:14px;
          margin-bottom:6px;
          color:#292929;
        }

        span:hover{
          color:#2C9CD4;
          cursor: pointer;
        }

        span:last-child{
          margin-bottom:0px;
        }
      }
      dd.active{
        height:auto;
        margin-top:10px;
        display:block;
      }
    }
  }
}
</style>