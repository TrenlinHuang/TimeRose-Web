<template>
  <div>
      <v-row justify="center" align="center" style="width: 100%; height: 300px">
        <v-col cols="5">
          <v-text-field :label="inputLable" v-model="cid"></v-text-field>
        </v-col>
        <v-col cols="auto">
          <v-btn color="black" @click="contact" text icon circle>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <div style="width: 1000px; margin: auto">
        <c-paragraphs :chapters="desc"></c-paragraphs>
      </div>
  </div>
</template>

<script>
import CParagraphs from "@/components/Paragraphs.vue"
export default {
  name: "",
  components: {
    CParagraphs
  },
  data() {
    return {
      cid: ''
    };
  },
  created() {
    this.cid = global.config.defaultCid || 'bafybeigvgzoolc3drupxhlevdp2ugqcrbcsqfmcek2zxiw5wctk3xjpjwy'
  },
  methods: {
    contact() {
      this.$router.push(`/cid/${this.cid}`)
    }
  },
  computed: {
    // from config
    inputLable() {
      return global.config.placeholder || 'Contact the Web3 data assets via CID'
    },
    desc() {
      return global.config.desc || []
    }
  }
};
</script>

<style scoped>
</style>