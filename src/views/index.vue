<template>
  <div>
    <v-app-bar app class="header" dark height="150px">
      <v-row class="">
        <v-col cols="auto">
          <v-btn large text dark class="logo-btn text-h4 mt-0" @click="$router.replace('/')">
            <v-avatar size="35" tile left class="mr-2"><img style="width:30px; height:35px" src="../assets/logo.png"/></v-avatar>
            {{title}}
          </v-btn>
        </v-col>
        <v-col class="text-h5 pb-4" cols="auto" align-self="end">
          {{subtitle}}
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <template v-slot:extension>
        <v-tabs>
          <v-spacer></v-spacer>
          <v-tab v-for="(item, i) in menu" :key="i"
          @click="$router.push(item.path)">
            <v-icon>{{item.icon}}</v-icon>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view/>  
    </v-main>

    <v-footer app color="rgba(255,255,255,0.9)">
      <div class="text-center pa-4" style="width: 100%;">
        Copyright © <a class="ken-labs" href="http://kencloud.com" target="blank">KEN Labs</a>
      </div>
    </v-footer>
  </div>
</template>

<style scoped>
.header {
  background: linear-gradient(to left, black, rgb(88, 0, 0));
}
.logo-btn {
  text-transform: none;
}
.ken-labs {
  transition: all .1s;
  padding: 5px 5px;
  color: black !important;
  font-weight: bold;
  border-radius: 20px;
  text-decoration-line: underline;
}
.ken-labs:hover {
  background: linear-gradient(to left, rgb(27, 0, 0), rgb(124, 0, 0));
  color: white !important;
  padding: 5px 10px;
}
</style>

<script>
export default {
  name: "App",
  created() {
    // this.contact();
  },
  data: () => ({
    title: global.config.title || 'TimeRose',
    subtitle: global.config.subtitle || 'Indexing the dataverse',
    cid: global.config.cid || 'bafybeigvgzoolc3drupxhlevdp2ugqcrbcsqfmcek2zxiw5wctk3xjpjwy',
  }),
  computed: {
    menu() {
      return [
        {icon: 'mdi-home', path: '/home'},
        {icon: 'mdi-chart-line-variant', path: '/chart'},
        {icon: 'mdi-format-list-bulleted', path: '/indexer'}
      ]
    }
  }
};
</script>
