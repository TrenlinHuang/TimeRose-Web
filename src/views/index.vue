<template>
  <div id="index">
    <v-app-bar color="transparent" :class="barClass" dark app elevate-on-scroll>
      <v-spacer></v-spacer>
      <v-row class="auto-margin" align="stretch">
        <v-btn absolute color="transparent" elevation="0" @click="routeTo('/home')">
          <v-img width="100" :src="load(logo)"></v-img>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text dark @click="routeTo('/home')">Home</v-btn>
        <v-menu open-on-click open-on-hover offset-y v-for="b in bar" :key="b.title" :nudge-left="b.type=='list'?0:100*Math.min((b.list||[]).length, 4)">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-if="b.type!=='btn'" text dark v-bind="attrs" v-on="on">
              {{b.title}} <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
            <v-btn v-else text dark @click="windowOpen(b)">
              {{b.title}}
            </v-btn>
          </template>
          <v-list v-if="b.type==='list'">
            <v-list-item v-for="item in b.list" :key="item.title"
            @click="windowOpen(item)">
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
          </v-list>
          <v-sheet v-else-if="['card', 'iframe'].includes(b.type)" :style="`max-width: ${cardColsCompute(b.list).rowWidth}px;`" class="pa-4">
            <v-row>
            <v-col class="pa-2" :cols="cardColsCompute(b.list).cols" v-for="item in b.list" :key="item.title">
              <v-card @click="windowOpen(item)" elevation="0" class="text-center">
                <v-sheet v-if="b.type === 'card'" elevation="5" class="rounded">
                  <v-img :height="`${cardColsCompute(b.list).cardHeight}px`" :src="load(item.cover)" class="rounded"></v-img>
                </v-sheet>
                <div v-else-if="b.type === 'iframe'" :height="`${cardColsCompute(b.list).cardHeight}px`" v-html="item.iframe"></div>
                <v-card-subtitle class="black--text pt-2">{{item.title}}</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          </v-sheet>
        </v-menu>
        <v-spacer></v-spacer>
      </v-row>
      <v-spacer></v-spacer>
    </v-app-bar>
    
    <router-view/>

    <v-fab-transition>
      <v-btn v-if="barClass!=='transparent'" class="indigo" dark fab fixed bottom right
      @click="$vuetify.goTo('#index')">
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: "index",
  created() {
    window.addEventListener('scroll', this.setBarTheme)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.setBarTheme)
  },
  data: () => ({
    barClass: "transparent",
  }),
  computed: {
    logo() {
      return global.config.logo
    },
    // from config
    bar() {
      return global.config.bar || []
    }
  },
  methods: {
    cardColsCompute(list) {
      let cardWidth = 200
      list = list || []
      let params = {
        cardHeight: cardWidth/2,
        rowWidth: 4 * cardWidth,
        cols: 3,
        offestLeft: 100*4
      }
      if(list.length < 4) {
        params.rowWidth = list.length * cardWidth,
        params.cols = 12 / list.length
      }
      return params
    },
    load(p) {
      if(p.startsWith('http')) return p
      return require('../'+p)
    },
    setBarTheme() {
      let scroll = document.documentElement.scrollTop || document.body.scrollTop
      if(scroll<100) {
        this.barClass = "transparent"
      }
      else {
        this.barClass = "theme-linear"
      }
    },
    routeTo(path) {
      if(this.$route.path == path) return
      this.$router.push(path)
    },
    windowOpen(item) {
      window.open(item.url, 'blank')
    }
  }
};
</script>
<style scoped>
</style>
