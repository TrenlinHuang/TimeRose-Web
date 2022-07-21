<template>
  <div>
    <v-row justify="center" align="center" style="width: 100%; height: 150px">
      <v-spacer></v-spacer>
      <v-col cols="4">
        <v-text-field :label="inputLable" v-model="cid"></v-text-field>
      </v-col>
      <v-col cols="auto">
        <v-btn color="black" @click="contact" text icon circle :loading="loading">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <!-- <div>{{listedProviders}}</div> -->
    <div style="width: 1000px; margin: auto">
      <!-- {{listedProviders}} -->
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
              {{base}}
            </v-card-text>
            <v-divider></v-divider>
          </v-card>
        </v-row>
      </div>
      <!-- <div>{{listMap}}</div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { popProtocol, toContext, base64ToBytesArr } from "@/assets/cid.contact.js"
export default {
  name: "",
  data: () => ({
    cid: '',
    loading: false,
    result: {
      Multihash: "",
      ProviderResults: [],
    },
    listMap: {},
  }),
  created() {
    let {cid} = this.$route.params
    this.cid = cid
  },
  beforeMount() {
    if(this.cid) {
      this.getCid()
    }
  },
  computed: {
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
    baseURLs() {
      return global.config.baseURL || []
    },
    listedProviders() {
      let indexers = {}
      for (const indexer in this.listMap) {
        // console.log(indexer, Object.keys(this.listMap[indexer]))
        indexers[indexer] = Object.keys(this.listMap[indexer]).map((p) => this.listMap[indexer][p])
      }
      // console.log(this.listMap, indexers)
      return indexers
    },
  },
  methods: {
    ////////// request //////////
    // finder server: /cid{cid}
    getCid() {
      for (const base of this.baseURLs) {
        this.$set(this.listMap, base, {})
        this.contact(base)
      }
    },

    contact(base) {
      this.loading = true
      axios
        .get(base+`/cid/${this.cid}`)
        .then(({ data }) => {
          // this.officalHTML(data)
          this.setResult(base, data.MultihashResults[0]);
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
          this.loading = false
        })
    },
    clearResult() {
      this.result.Multihash = ""
      this.$set(this.result, 'ProviderResults', [])
      this.$set(this, 'listMap', [])
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
  }
};
</script>

<style scoped>
</style>