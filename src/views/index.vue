<template>
  <div id="index">
    <v-app-bar color="transparent" :class="barClass" dark app elevate-on-scroll>
      <v-btn absolute color="transparent" elevation="0"><v-img src="../assets/brand.png"></v-img></v-btn>
      <v-spacer></v-spacer>
      <!-- <v-btn text dark>Home</v-btn> -->
      <v-menu open-on-hover offset-y v-for="b in bar" :key="b.title">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text dark v-bind="attrs" v-on="on">
            {{b.title}} <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in b.list" :key="item.title"
          @click="windowOpen(item)">
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
    </v-app-bar>
    <!-- header -->
    <section class="theme-linear">
      <v-parallax dark height="700" src="../assets/dedicated.png">
        <v-row align="center" justify="center" class="text-center">
          <v-col cols="auto">
            <div class="mb-10">
              <div class="text-h3">CID Indexing & Content Routing</div>
              <div class="text-h6 mt-3">Contact the Web3 data assets via CID.</div>
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
          <v-col v-for="m in matrices" :key="m.title" :cols="12/matrices.length">
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
        :title="s.title" :text="s.text" :list="s.list" :btn="s.btn" :img="s.img"
        :headerClass="headerClass" :textClass="textClass" :iconClass="iconClass"></c-selection>
      </section>
    </div>

    <v-fab-transition>
      <v-btn v-if="barClass!='transparent'" class="indigo" dark fab fixed bottom right
      @click="$vuetify.goTo('#index')">
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-fab-transition>

    <footer class="grey darken-4 grey--text text--lighten-3 py-5">
      <section class="auto-margin">
        <!-- <v-row align="center" justify="center" class="text-center mt-2 mb-3">
          <v-col cols="2" v-for="c in contactUs" :key="c.link">
            <div>
              <v-btn color="indigo" class="icon-background-rect" dark icon x-large>
                <a :href="c.link" target="_blank">
                  <v-icon large>{{c.icon}}</v-icon>
                </a>
              </v-btn>
            </div>
            <div class="grey--text text--lighten-2 text-h6 py-3">{{c.title}}</div>
          </v-col>
        </v-row> -->
        <v-row justify="space-between">
          <v-col cols="4">
            <div class="my-5">
              <v-btn color="black" large elevation="0"><v-img src="../assets/brand.png"></v-img></v-btn>
            </div>
            <div class="my-5">
              Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.
            </div>
            <div class="my-5">
              <v-btn dark v-for="c in contactUs" :key="c.link" icon>
                <a :href="c.link" target="_blank">
                  <v-icon>{{c.icon}}</v-icon>
                </a>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="2" v-for="f in footerLinks" :key="f.title">
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
          <!-- <v-col cols="auto">
            <v-btn dark v-for="c in contactUs" :key="c.link" icon>
              <a :href="c.link" target="_blank">
                <v-icon>{{c.icon}}</v-icon>
              </a>
            </v-btn>
          </v-col> -->
        </v-row>
      </section>
    </footer>
  </div>
</template>

<style scoped>
</style>

<script>
import {required} from '@/assets/validation'
import CSelection from '@/components/Section'
export default {
  name: "App",
  components: {
    CSelection
  },
  created() {
    window.addEventListener('scroll', this.setBarTheme)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.setBarTheme)
  },
  data: () => ({
    barClass: "transparent",
    headerClass: "text-h4 my-5",
    textClass: "grey--text text--darken-2 my-4",
    iconClass: "indigo--text text-body-1",

    // title: global.config.title || 'TimeRose',
    // subtitle: global.config.subtitle || 'Indexing the dataverse',
    cid: global.config.cid || 'bafybeigvgzoolc3drupxhlevdp2ugqcrbcsqfmcek2zxiw5wctk3xjpjwy',
    rules: [
      required
    ],

    bar: [
      {
        title: 'Demos',
        list: [
          {title: 'demo1', url: ''},
          {title: 'demo2', url: ''},
          {title: 'demo3', url: ''}
        ]
      },
      {
        title: 'Blogs',
        list: [
          {title: 'blog1', url: ''},
          {title: 'blog2', url: ''},
          {title: 'blog3', url: ''}
        ]
      }
    ],

    matrices: [
      {
        icon: 'mdi-altimeter',
        title: 'Indexed CIDs',
        text: [
          '4.87B total (30 days)',
          '1.35B last week'
        ]
      },
      {
        icon: 'mdi-server',
        title: 'Index Providers',
        text: [
          '178',
          'Provider Coverage: 30%'
        ]
      },
      {
        icon: 'mdi-desktop-tower',
        title: 'Indexer Nodes',
        text: [
          '4 currently (Production)',
          'PL, KenLabs, PiKNiK, SXX'
        ]
      },
      {
        icon: 'mdi-chart-donut',
        title: 'Indexer Uptime',
        text: [
          '99.99%'
        ]
      }
    ],

    // services: [
    //   {icon: 'mdi-home', title: 'Domain Name', text: 'Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.'},
    //   {icon: 'mdi-home', title: 'Cloud Hosting', text: 'Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.'},
    //   {icon: 'mdi-home', title: 'Shared Hosting', text: 'It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.'},
    //   {icon: 'mdi-home', title: 'VPS Hosting', text: 'Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.'},
    //   {icon: 'mdi-home', title: 'Reseller Hosting', text: 'Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.'},
    //   {icon: 'mdi-home', title: 'Web Hosting', text: 'It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.'}
    // ],

    sections: [
      {
        title: "About the indexer",
        text: [
          "An indexer is a network node that stores mappings of content multihahses to provider data records.",
          "A client that wants to know where a piece of information is stored can query the indexer, using the CID or multihash of the content, and receive a provider record that tells where the client can retrieve the content and how to retrieve it."
        ],
        img: require('../assets/vps.png'),
        list: [
          'Fully Responsive',
          'Multiple Layouts',
          'Suits Your Style'
        ],
        btn: 'get started'
      },
      {
        title: 'Get best plan for more power with cloud Hosting',
        text: [
          'You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.'
        ],
        img: require('../assets/1.png'),
        list: [
          'Digital Marketing Solutions for Tomorrow',
          'Our Talented & Experienced Marketing Agency',
          'Create your own skin to match your brand'
        ],
        btn: 'get started'
      },
      {
        title: "Powerful Server & Web Hosting Plateform",
        text: [
          "You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website."
        ],
        img: require('../assets/2.png'),
        list: [
          'Digital Marketing Solutions for Tomorrow',
          'Our Talented & Experienced Marketing Agency',
          'Create your own skin to match your brand'
        ],
        btn: 'get started'
      },
    ],
    contactUs: [
      {
        icon: 'mdi-slack',
        title: 'Slack',
        link: 'https://kenlabs.slack.com'
      },
      {
        icon: 'mdi-github',
        title: 'Github',
        link: 'https://github.com/kenlabs'
      }
    ],
    footerLinks: [
      {
        title: "Company",
        list: [
          {
            title: 'About Us',
            url: 'http://kencloud.com'
          },
          {
            title: 'Services',
            url: ''
          }
        ]
      },
      {
        title: 'Useful Links',
        list: [
          {
            title: 'title1',
            url: ''
          },
          {
            title: 'title2',
            url: ''
          }
        ]
      }
    ]
  }),
  computed: {
    // from config
    defaultCid() {
      return global.config.defaultCid || 'bafybeigvgzoolc3drupxhlevdp2ugqcrbcsqfmcek2zxiw5wctk3xjpjwy'
    },
    inputLable() {
      return global.config.placeholder || 'Contact the Web3 data assets via CID'
    }
  },
  methods: {
    setBarTheme() {
      let scroll = document.documentElement.scrollTop || document.body.scrollTop
      if(scroll<100) {
        this.barClass = "transparent"
      }
      else {
        this.barClass = "theme-linear"
      }
    },
    contact() {
      if (!this.$refs.cid.validate()) return 
      this.$router.push(`/cid/${this.cid}`)
    },
    routeTo(item) {
      if (item.path.split('/')[1] == this.path) return
      this.$router.push(item.path)
    },
    windowOpen(item) {
      window.open(item.url, 'blank')
    }
  }
};
</script>
<style scoped>
.header-bg{
  background: url('../assets/dedicated.png') center center;
}
.auto-margin {
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}
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
.theme-linear{
  background: linear-gradient(to left, #614092 0%, #2443ac 100%)
}
</style>
