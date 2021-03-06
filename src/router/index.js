import Vue from "vue";
import VueRouter from "vue-router";
import Base from "../components/layout/base.vue";
import OrderList from "../views/orderList.vue";
import OrderDetail from "../views/orderDetail.vue";
import Checking from "../views/checking.vue"
import MemberList from "../views/memberList.vue";
import MemberDetail from "../views/memberDetail.vue";
import RiderList from "../views/riderList.vue";
import RiderRegister from '../views/riderRegister.vue';
import PartnerList from '../views/partnerList.vue'
import PartnerRegister from '../views/partnerRegister.vue';
import PartnerDetail from '../views/partnerDetail.vue';
import EventList from '../views/eventList.vue';
import EventWrite from '../views/eventWrite';
import BoardWrite from '../views/boardWrite';
import Calculate from '../views/calculate.vue'
import SalesHome from '../views/salesHome.vue';
import RequestDetail from '../views/request_detail.vue';
import Login from '../views/login.vue';
import Error from '../views/error.vue';

Vue.use(VueRouter);

const routes = [
  {
    path:"/login",
    name:'login',
    component: Login,
  },
  {
    path:"/error",
    name:'error',
    component: Error,
  },
  {
    path:"/",
    name:'baseLayout',
    component: Base,
    children:[
      {
        path:"/orderList",
        name:'orderList',
        component:OrderList,
      },
      {
        path: "/orderDetail",
        name: "orderDetail",
        component: OrderDetail,
      },
      {
        path: "/memberList",
        name: "memberList",
        component: MemberList,
      },
      {
        path: "/memberDetail",
        name: "memberDetail",
        component: MemberDetail,
      },
      {
        path: "/riderList",
        name: "riderList",
        component: RiderList,
      },
      {
        path: "/riderRegister",
        name: "riderRegister",
        component: RiderRegister,
      },
      {
        path: "/partnerList",
        name: "partnerList",
        component: PartnerList,
      },
      {
        path: "/partnerRegister",
        name: "partnerRegister",
        component: PartnerRegister,
      },
      {
        path: "/partnerDetail",
        name: "partnerDetail",
        component: PartnerDetail,
      },
      {
        path: "/eventList",
        name: "eventList",
        component: EventList,
      },
      {
        path: "/calculate",
        name: "calculate",
        component: Calculate,
      },
      {
        path: "/eventWrite",
        name: "eventWrite",
        component: EventWrite,
      },
      {
        path: "/boardWrite",
        name: "boardWrite",
        component: BoardWrite,
      },
      {
        path:"/salesHome",
        name:"salesHome",
        component:SalesHome,
      },
      {
        path:"/checking",
        name:"checking",
        component:Checking,
      },
      {
        path:"/requestList",
        name:"requestList",
        component:()=> import('@/views/requestList/requestList.vue'),
      },
      {
        path:"/requestDetail",
        name:"requestDetail",
        component:RequestDetail,
      },
      {
        path:"/",
        name:'orderState',
        component: ()=> import('@/views/orderState')
      }
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
