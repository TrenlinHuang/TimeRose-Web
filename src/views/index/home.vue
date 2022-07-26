<template>
  <div class="box">
    <v-parallax dark height="500" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F518idc.cn%2Fuserfiles%2Fimages%2F20200424074607-1367795520.JPG&refer=http%3A%2F%2F518idc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661334702&t=e5b90a800a948ffe9f83c0025c9af83d">
      <v-row justify="center" align="center">
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <v-card light width="1000" color="white" class="py-3 px-5" style="border-radius: 10px">
            <v-row justify="center" align="center">
              <v-col cols="7">
                <v-text-field :label="inputLable" v-model="cid" ref="cid"
                :rules="rules"></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-select label="indexer"></v-select>
              </v-col>
              <v-col cols="auto">
                <v-btn @click="contact" color="primary" rounded outlined>
                  <v-icon left>mdi-magnify</v-icon> contact
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-parallax>
    <div style="padding: 80px 20%;">
      <v-row align="center">
        <v-col cols="5">
          <v-img src="../../assets/1.png"></v-img>
        </v-col>
        <v-col>
          <c-paragraphs :chapters="homeDesc"></c-paragraphs>
        </v-col>
      </v-row>
    </div>
    <div class="grey lighten-4">
      <div style="padding: 80px 20%;">
        <c-paragraphs :chapters="indexerDesc"></c-paragraphs>
      </div>
    </div>
  </div>
</template>

<script>
import {required} from '@/assets/validation'
import CParagraphs from "@/components/Paragraphs.vue"
export default {
  name: "",
  components: {
    CParagraphs
  },
  data() {
    return {
      cid: '',
      rules: [
        required
      ]
    };
  },
  created() {
    this.cid = this.defaultCid
  },
  methods: {
    contact() {
      if (!this.$refs.cid.validate()) return 
      this.$router.push(`/cid/${this.cid}`)
    }
  },
  computed: {
    // from config
    defaultCid() {
      return global.config.defaultCid || 'bafybeigvgzoolc3drupxhlevdp2ugqcrbcsqfmcek2zxiw5wctk3xjpjwy'
    },
    inputLable() {
      return global.config.placeholder || 'Contact the Web3 data assets via CID'
    },
    homeDesc() {
      return global.config.homeDesc || []
    },
    indexerDesc() {
      return global.config.indexerDesc || [];
    },
  }
};
</script>

<style scoped>
.box {
}
</style>