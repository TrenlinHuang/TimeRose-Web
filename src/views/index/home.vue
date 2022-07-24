<template>
  <div>
      <v-row justify="center" align="center" style="width: 100%; height: 300px">
        <v-col cols="5">
          <v-text-field color="black" :label="inputLable" v-model="cid" ref="cid"
          :rules="rules"></v-text-field>
        </v-col>
        <v-col cols="auto">
          <v-btn color="black" @click="contact" text icon circle>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <div style="width: 1000px; margin: auto">
        <c-paragraphs :chapters="homeDesc"></c-paragraphs>
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
    }
  }
};
</script>

<style scoped>
</style>