<template>
  <div>
    <!-- header -->
    <section class="theme-linear">
      <v-parallax dark height="700" src="../../assets/dedicated.png">
        <v-row align="center" justify="center" class="text-center">
          <v-col cols="auto">
            <div class="mb-10">
              <div class="text-h3">{{header}}</div>
              <div class="text-h6 mt-3" style="width: 800px">{{subheader}}</div>
            </div>
          </v-col>
        </v-row>
      </v-parallax>
    </section>
    
    <!-- 搜索栏 -->
    <section class="auto-margin mt-10">
      <v-row justify="center" align="center">
        <!-- <v-spacer></v-spacer> -->
        <v-col cols="4">
          <v-text-field color="black" :label="inputLable" v-model="cid"
          :rules="rules" ref="cid"></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-select label="Production Indexers" v-model="selectedURLs" multiple
          item-text="text" item-value="url" :items="indexers"></v-select>
        </v-col>
        <v-col cols="auto">
          <v-btn color="black" @click="getCidWithValidation" text icon circle :loading="chan>0">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn color="black" icon :disabled="result.ProviderResults.length==0 || chan>0">
            <v-icon @click="exportData">mdi-cloud-download</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </section>
    
    <!-- 结果列表 -->
    <div class="auto-margin">
      <div v-for="base in baseURLs" :key="base">
        <v-row align-self="stretch" v-for="(r, index) in listedProviders[base]" :key="base+index" class="my-10">
          <v-card elevation="0" width="100%">
            <v-card-title>
              {{ provider(r).id }}
            </v-card-title>
            <v-card-text>
              <div v-for="(p, i) in protocols(r.protocols)" :key="base+i + p">
                <div class="black--text">{{ p.protocol }}</div>
                <li v-for="(d, i) in p.data" :key="base+d + i">{{ d }}</li>
              </div>
            </v-card-text>
            <v-card-text>
              <div class="black--text">Multiaddrs:</div>
              <li v-for="addr in provider(r).addrs" :key="base+addr">
                {{ addr }}
              </li>
            </v-card-text>
            <v-card-text>
              <div class="black--text">source:</div>
              <span v-if="indexerMap[base] != undefined">{{indexerMap[base].text}} - </span>
              <span>{{base}}</span>
            </v-card-text>
            <v-divider></v-divider>
          </v-card>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import {required} from '@/assets/validation'
import axios from "axios";
import { popProtocol, toContext, base64ToBytesArr } from "@/assets/cid.contact.js"
export default {
  name: "",
  data: () => ({
    scrolled: false,
    cid: '',
    selectedURLs: [],
    rules: [
      required
    ],
    lastCid: '',
    loading: false,
    result: {
      Multihash: "",
      ProviderResults: [],
    },
    listMap: {},
    chan: 0,
  }),
  created() {
    this.$set(this, 'selectedURLs', this.baseURLs)
    window.addEventListener('scroll', this.setScrolled)
  },
  mounted() {
    let {cid} = this.$route.params
    if(cid) {
      this.cid = cid
      this.getCid()
    }
    else {
      this.cid = this.defaultCid
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.setScrolled)
  },
  computed: {
    // from config
    header() {
      return global.config.header || ''
    },
    subheader() {
      return global.config.subheader || ''
    },
    defaultCid() {
      return global.config.defaultCid || 'bafybeigvgzoolc3drupxhlevdp2ugqcrbcsqfmcek2zxiw5wctk3xjpjwy'
    },
    multihash() {
      return this.result.Multihash;
    },
    providerResults() {
      return this.result.ProviderResults;
    },
    // from config
    inputLable() {
      return global.config.placeholder || 'Contact the Web3 data assets via CID'
    },
    indexers() {
      if(global.config.indexer instanceof Array) {
        return global.config.indexer
      }
      return []
    },
    indexerMap() {
      let map = {}
      for (const indexer of this.indexers) {
        map[indexer.url] = indexer
      }
      return map
    },
    baseURLs() {
      return this.indexers.map(u => u.url)
    },
    listedProviders() {
      let indexers = {}
      for (const indexer in this.listMap) {
        indexers[indexer] = Object.keys(this.listMap[indexer]).map((p) => this.listMap[indexer][p])
      }
      return indexers
    },
  },
  methods: {
    setScrolled() {
      let scroll = document.documentElement.scrollTop || document.body.scrollTop
      if(scroll<100) {
        this.scrolled = false
      }
      else {
        this.scrolled = true
      }
    },
    ////////// request //////////
    getCidWithValidation() {
      if (!this.$refs.cid.validate()) return
      this.getCid()
    },
    getCid() {
      this.clearResult()
      this.chan += this.selectedURLs.length
      for (const base of this.selectedURLs) {
        this.$set(this.listMap, base, {})
        this.contact(base)
      }
    },

    // finder server: /cid{cid}
    contact(base) {
      let lastCid = this.cid
      axios
        .get(base+`/cid/${this.cid}`)
        .then(({ data }) => {
          // this.officalHTML(data)
          this.setResult(base, data.MultihashResults[0]);
          this.lastCid = lastCid
        })
        .catch(({response}) => {
          console.log(response)
          if (response.status == 404) {
            this.$notify({
              color: "warning",
              text: "No results for this query",
              show: true
            })
            throw "No results for this query";
          } else if (response.status == 400) {
            this.$notify({
              color: "red",
              text: "Bad request - check that the CID is correct",
              show: true
            })
            throw "Bad request - check that the CID is correct";
          } else {
            throw Error(response.statusText);
          }
        })
        .finally(() => {
          this.chan--
        })
    },
    clearResult() {
      this.result.Multihash = ""
      this.$set(this.result, 'ProviderResults', [])
      this.$set(this, 'listMap', {})
    },
    setResult(base, { Multihash, ProviderResults }) {
      this.result.Multihash = Multihash;
      this.$set(this.result, "ProviderResults", ProviderResults);
      for (const r of ProviderResults) {
        this.resolveToListMap(base, r);
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
    resolveToListMap(base, { Provider, Metadata }) {
      let mdBytes = base64ToBytesArr(Metadata);
      while (mdBytes.length > 0) {
        let next = popProtocol(mdBytes);
        let name = next[0];
        mdBytes = next[1];
        let ctx = toContext(name, mdBytes);
        if (this.listMap[base][Provider.ID] == undefined) {
          this.$set(this.listMap[base], Provider.ID, { Provider, protocols: {} });
        }
        if (this.listMap[base][Provider.ID].protocols[name] == undefined) {
          this.listMap[base][Provider.ID].protocols[name] = [];
        }
        if (ctx[0] != "") {
          this.listMap[base][Provider.ID].protocols[name].push(ctx[0]);
        }
        mdBytes = ctx[1];
      }
    },
    // 数据导出到json文件

    exportData() {
      this.createAndDownloadFile(this.lastCid+'.json', JSON.stringify(this.listedProviders))
    },
    createAndDownloadFile(fileName, content) {
      var aTag = document.createElement('a');
      var blob = new Blob([content]);
      aTag.download = fileName;
      aTag.href = URL.createObjectURL(blob);
      aTag.click();
      URL.revokeObjectURL(blob);
    }
  }
};
</script>

<style scoped>
</style>