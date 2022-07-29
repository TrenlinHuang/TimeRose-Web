<template>
  <div class="box">
    <section class="theme-linear">
      <v-parallax dark height="700" src="../../assets/dedicated.png">
        <v-row align="center" justify="center" class="text-center">
          <v-col cols="auto">
            <div class="mb-10">
              <div class="text-h3">{{header}}</div>
              <div class="text-h6 mt-3" style="width: 800px">{{subheader}}</div>
            </div>
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 10 : 2" light width="800" class="py-3 px-5" style="border-radius: 10px">
                <v-row justify="center" align="center">
                  <v-col cols="9">
                    <v-text-field color="indigo" :label="inputLable" v-model="cid" ref="cid"
                    :rules="rules"></v-text-field>
                  </v-col>
                  <v-col cols="auto">
                    <v-btn @click="contact" color="indigo" rounded outlined>
                      <v-icon left>mdi-magnify</v-icon> contact
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-parallax>
    </section>

    <!-- metrices -->
    <div class="grey lighten-5">
      <section class="auto-margin py-10">
        <v-row align="stretch">
          <v-col v-for="m in metrics" :key="m.title" :cols="12/metrics.length">
            <v-row>
              <v-col cols="auto" class="pr-0">
                <v-card-title class="px-0">
                  <v-icon color="indigo" class="icon-background-circle">{{m.icon}}</v-icon>
                </v-card-title>
              </v-col>
              <v-col class="pl-0">
                <v-card elevation="0" color="transparent">
                  <v-card-title>
                    {{m.title}}
                  </v-card-title>
                  <v-card-text>
                    <div v-for="t in m.text" :key="t">{{t}}</div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            
          </v-col>
        </v-row>
      </section>
    </div>

    <!-- 做了但没用上的组件 -->
    <!-- <section class="auto-margin py-10">
      <v-row align="center">
        <v-col cols="7">
          <div :class="headerClass">
            Cloud Hosting Services
          </div>
          <div :class="textClass">
            Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="2">
          <v-btn dark large outlined color="indigo">
            See More
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <div class="auto-margin">
        <v-row align="stretch">
          <v-col cols="4" v-for="(item, i) in services" :key="item.text + i">
            <v-card elevation="0" style="height: 100%;" color="transparent">
              <v-card-title>{{item.title}}</v-card-title>
              <v-card-text>{{item.text}}</v-card-text>
              <v-card-actions>
                <v-btn text color="indigo">
                  <span style="text-transform:none;">Read more</span>
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </section> -->

    <!-- intro -->
    <div>
      <section class="auto-margin py-10" v-for="(s, i) in sections" :key="s.title">
        <c-selection :reverse="i%2==0"
        :title="s.title" :text="s.text" :list="s.list" :btns="s.btns" :img="load(s.img)"
        :headerClass="headerClass" :textClass="textClass" :iconClass="iconClass"></c-selection>
      </section>
    </div>

    <!-- news -->
    <div class="grey lighten-5">
      <section class="auto-margin py-10">
        <div :class="`${headerClass} text-center pb-5`">Latest News</div>
        <v-row align="stretch" class="mb-10">
          <v-col cols="4" v-for="n in news" :key="n.title">
            <v-card @click="windowOpen(n)" height="100%">
              <v-img :src="load(n.cover)" height="230px"></v-img>
              <v-card-title>{{n.title}}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </section>
    </div>

    <footer class="grey darken-4 grey--text text--lighten-3 py-5">
      <section class="auto-margin">
        <v-row justify="space-between">
          <v-col cols="4">
            <div class="my-5">
              <v-btn color="white" large elevation="0">
                <v-img width="100" :src="load(logo)"></v-img>
              </v-btn>
            </div>
            <div class="my-5">
              {{briefIntro}}
            </div>
            <div class="my-5">
              <v-btn dark v-for="c in contactInfo" :key="c.url" class="mr-2" color="black"
              @click="windowOpen(c)" style="text-transform: none;" elevation="0">
                <!-- <a :href="c.url" target="_blank"> -->
                  <v-icon left>{{c.icon}}</v-icon> {{c.title}}
                <!-- </a> -->
              </v-btn>
            </div>
          </v-col>
          <v-col cols="3" v-for="f in footerLinks" :key="f.title">
            <v-card dark color="transparent" elevation="0">
              <v-card-title>{{f.title}}</v-card-title>
              <v-list dense color="transparent">
                <v-list-item v-for="s in f.list" :key="f.title+s.title" @click="windowOpen(s)">
                  <!-- <v-btn text style="text-transform: none; text-align: left" elevation="0" block> -->
                    <v-icon left small>mdi-chevron-right</v-icon> {{s.title}} 
                  <!-- </v-btn> -->
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
        <v-divider dark></v-divider>
        <v-row align="center" class="mt-3">
          <v-col>
            © 2022 KEN labs
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </section>
    </footer>
  </div>
</template>

<script>
import {required} from '@/assets/validation'
import CSelection from '@/components/Section'
export default {
  name: "home",
  components: {
    CSelection
  },
  data() {
    return {
      headerClass: "text-h4 my-5",
      textClass: "grey--text text--darken-2 my-4",
      iconClass: "indigo--text text-body-1",

      // title: global.config.title || 'TimeRose',
      // subtitle: global.config.subtitle || 'Indexing the dataverse',
      cid: global.config.cid || 'bafybeigvgzoolc3drupxhlevdp2ugqcrbcsqfmcek2zxiw5wctk3xjpjwy',
      rules: [
        required
      ],

      // 未使用组件的数据
      // services: [
      //   {icon: 'mdi-home', title: 'Domain Name', text: 'Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.'},
      //   {icon: 'mdi-home', title: 'Cloud Hosting', text: 'Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.'},
      //   {icon: 'mdi-home', title: 'Shared Hosting', text: 'It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.'},
      //   {icon: 'mdi-home', title: 'VPS Hosting', text: 'Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.'},
      //   {icon: 'mdi-home', title: 'Reseller Hosting', text: 'Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.'},
      //   {icon: 'mdi-home', title: 'Web Hosting', text: 'It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.'}
      // ],

    };
  },
  created() {
    this.cid = this.defaultCid
  },
  computed: {
    // from config
    logo() {
      return global.config.logo
    },
    header() {
      return global.config.header || ''
    },
    subheader() {
      return global.config.subheader || ''
    },
    defaultCid() {
      return global.config.defaultCid || 'bafybeigvgzoolc3drupxhlevdp2ugqcrbcsqfmcek2zxiw5wctk3xjpjwy'
    },
    inputLable() {
      return global.config.placeholder || 'Contact the Web3 data assets via CID'
    },
    metrics() {
      return global.config.metrics || []
    },
    sections() {
      return global.config.sections || []
    },
    news() {
      return global.config.news || []
    },
    briefIntro() {
      return global.config.briefIntro || ''
    },
    contactInfo() {
      return global.config.contactInfo || []
    },
    footerLinks() {
      return global.config.footerLinks || []
    }
  },
  methods: {
    load(p) {
      if(p.startsWith('http')) {
        return p
      }
      return require('../../'+p)
    },
    contact() {
      if (!this.$refs.cid.validate()) return 
      this.$router.push(`/cid/${this.cid}`)
    },
    windowOpen(item) {
      window.open(item.url, 'blank')
    }
  }
};
</script>

<style scoped>
*{
  word-break: keep-all
}
/* .header-bg{
  background: url('../../assets/dedicated.png') center center;
} */
.expand:hover{
  transition: all .3s;
  transform: scale(1.1);
}
.icon-background-circle{
  padding: 10px;
  border-radius: 30px;
  background: rgba(47, 85, 212, 0.1)
}
.icon-background-rect{
  padding: 20px;
  border-radius: 5px;
  background: rgba(47, 85, 212, 0.1)
}
a{
  text-decoration: none;
  color: white !important;
}
</style>