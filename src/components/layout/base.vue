<template>
  <v-app>

    <Header />

    <Drawer />

    <v-main app>
      <router-view />
    </v-main>

  </v-app>
</template>

<script>
import Drawer from '@/components/drawer.vue'
import Header from '@/components/header.vue'

export default {
  components:{
    Drawer, Header
  },
  data(){
    return{
    }
  },
  methods:{
    
  },
  mounted(){

  },
}
</script>
