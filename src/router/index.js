import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Base from "../components/layout/base.vue";
import OrderList from "../views/orderList.vue";
import OrderDetail from "../views/orderDetail.vue";
import MemberList from "../views/memberList.vue";
import MemberDetail from "../views/memberDetail.vue";
import RiderList from "../views/riderList.vue";
import RiderRegister from '../views/riderRegister.vue';
import PartnerList from '../views/partnerList.vue'
import PartnerRegister from '../views/partnerRegister.vue';
import PartnerDetail from '../views/partnerDetail.vue';
import CouponList from '../views/couponList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    name:'baseLayout',
    component: Base,
    children:[
      {
        path: "/home",
        name: "home",
        component: Home,
      },
      {
        path:"/",
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
        path: "/couponList",
        name: "couponList",
        component: CouponList,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
