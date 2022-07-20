<template>
  <v-app>
    <v-app-bar app class="header" extended dark>
      <v-toolbar-title>
        <v-btn large dark style="text-transform: none; background: rgba(255,255,255,0.1)" class="text-h6 mt-2" @click="clearResult">
          <v-avatar size="23" tile left class="mr-2"><img style="width:20px; height:23px" src="./assets/logo.png"/></v-avatar>
          TimeRose
        </v-btn>
      </v-toolbar-title>
      <template v-slot:extension v-if="extendAppBar">
        <v-row justify="center" align="baseline">
          <v-spacer></v-spacer>
          <v-col cols="3" class="pa-0 ma-0">
            <v-text-field color="red" width="60" label="cid" v-model="cid"></v-text-field>
          </v-col>
          <v-col cols="auto" class="pa-0 mx-2">
            <v-btn text icon :loading="loading" @click="contact">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </template>
    </v-app-bar>

    <v-main>
      <v-row justify="center" align="center" v-if="!extendAppBar" style="width: 100%; height: 300px">
        <v-col cols="5">
          <v-text-field :label="inputLable" v-model="cid"></v-text-field>
        </v-col>
        <v-col cols="auto">
          <v-btn color="black" @click="contact" text icon circle :loading="loading">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <div style="width: 1000px; margin: auto">
        <v-row align-self="stretch" v-for="(r, index) in listedProviders" :key="index" class="py-10">
          <v-card elevation="0" width="100%">
            <v-card-title>
              {{ provider(r).id }}
            </v-card-title>
            <v-card-text>
              <div v-for="(p, i) in protocols(r.protocols)" :key="i + p">
                <div class="black--text">{{ p.protocol }}</div>
                <li v-for="(d, i) in p.data" :key="d + i">{{ d }}</li>
              </div>
            </v-card-text>
            <v-card-subtitle>
              <div class="black--text">Multiaddrs:</div>
              <li v-for="addr in provider(r).addrs" :key="addr">
                {{ addr }}
              </li>
            </v-card-subtitle>
            <v-divider></v-divider>
          </v-card>
        </v-row>
      </div>

      <div style="width: 1000px; margin: auto">
        <v-card v-for="(d, i) in desc" :key="i+d.header" elevation="0" width="100%">
          <v-divider></v-divider>
          <v-card-title>{{d.header}}</v-card-title>
          <v-card-text v-for="(p, j) in d.paragraphs" :key="i+d.header+j">
            {{p}}
          </v-card-text>
        </v-card>
      </div>

      <v-snackbar :color="snackbar.color" v-model="snackbar.show">{{snackbar.text}}</v-snackbar>
    </v-main>

    <!-- footer -->
    <div v-if="extendAppBar" class="text-center pa-4" style="width: 100%;">
      Copyright © <a class="ken-labs" href="http://kencloud.com" target="blank">KEN Labs</a>
    </div>
    <v-footer app v-else color="transparent">
      <div class="text-center pa-4" style="width: 100%;">
        Copyright © <a class="ken-labs" href="http://kencloud.com" target="blank">KEN Labs</a>
      </div>
    </v-footer>
  </v-app>
</template>

<style scoped>
.header {
  background: linear-gradient(to left, black, rgb(88, 0, 0));
}
.ken-labs {
  text-decoration: none;
  transition: all .1s;
  padding: 5px 5px;
  color: black;
  font-weight: bold;
}
.ken-labs:hover {
  border-radius: 2px;
  background: linear-gradient(to left, black, rgb(109, 0, 0));
  color: white;
  padding: 5px 10px;
}
</style>

<script>
import { popProtocol, toContext, base64ToBytesArr } from "./assets/cid.contact.js"

import axios from "axios";
export default {
  name: "App",

  created() {
    // this.contact();
  },

  data: () => ({
    cid: "bafybeigvgzoolc3drupxhlevdp2ugqcrbcsqfmcek2zxiw5wctk3xjpjwy",
    loading: false,
    result: {
      Multihash: "",
      ProviderResults: [],
    },
    listMap: {}, // key: providerID, value: data of the Provider
    snackbar: {
      show: false,
      text: '',
      color: ''
    }
  }),
  computed: {
    extendAppBar() {
      return this.result.Multihash.length>0
    },
    multihash() {
      return this.result.Multihash;
    },
    providerResults() {
      return this.result.ProviderResults;
    },
    listedProviders() {
      return Object.keys(this.listMap).map((p) => this.listMap[p]);
    },
    // from config
    inputLable() {
      return global.config.placeholder || 'Contact the Web3 data assets via CID'
    },
    desc() {
      return global.config.desc || []
    }
  },
  methods: {
    ////////// request //////////
    // finder server: /cid{cid}
    contact() {
      this.loading = true
      axios
        .get(global.config.baseURL+`/cid/${this.cid}`)
        .then(({ data }) => {
          // this.officalHTML(data)
          this.setResult(data.MultihashResults[0]);
        })
        .catch(({response}) => {
          console.log(response)
          if (response.status == 404) {
            this.snackbar.color = "warning"
            this.snackbar.text = "No results for this query"
            this.snackbar.show = true
            throw "No results for this query";
          } else if (response.status == 400) {
            this.snackbar.color = "red"
            this.snackbar.text = "Bad request - check that the CID is correct"
            this.snackbar.show = true
            throw "Bad request - check that the CID is correct";
          } else {
            throw Error(response.statusText);
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
    clearResult() {
      this.result.Multihash = ""
      this.$set(this.result, 'ProviderResults', [])
      this.$set(this, 'listMap', {})
    },
    setResult({ Multihash, ProviderResults }) {
      this.result.Multihash = Multihash;
      this.$set(this.result, "ProviderResults", ProviderResults);
      for (const r of ProviderResults) {
        this.resolveToListMap(r);
      }
    },
    ////////// data format processing //////////
    provider(p) {
      p = p.Provider || {};
      return {
        id: p.ID || "",
        addrs: p.Addrs || [],
      };
    },
    // {} -> []
    protocols(p) {
      return Object.keys(p).map((k) => ({ protocol: k, data: p[k] }));
    },
    // map records with same providerID into its value by the same key
    resolveToListMap({ Provider, Metadata }) {
      let mdBytes = base64ToBytesArr(Metadata);
      while (mdBytes.length > 0) {
        let next = popProtocol(mdBytes);
        let name = next[0];
        mdBytes = next[1];
        let ctx = toContext(name, mdBytes);
        if (this.listMap[Provider.ID] == undefined) {
          this.$set(this.listMap, Provider.ID, { Provider, protocols: {} });
        }
        if (this.listMap[Provider.ID].protocols[name] == undefined) {
          this.listMap[Provider.ID].protocols[name] = [];
        }
        if (ctx[0] != "") {
          this.listMap[Provider.ID].protocols[name].push(ctx[0]);
        }
        mdBytes = ctx[1];
      }
    },

    //
  },
};
</script>
