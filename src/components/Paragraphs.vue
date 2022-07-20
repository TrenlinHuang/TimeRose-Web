<template>
  <div>
    <v-card outlined elevation="0" class="mb-10" v-for="(c, i) in chapters" :key="i + c.header" width="100%">
      <!-- <v-divider></v-divider> -->
      <v-card-title>{{ c.header }}</v-card-title>
      <p class="black--text mx-4" v-for="(p, j) in c.paragraphs" :key="i + c.header + j">
        <span v-if="instanceofArray(p)">
          <span v-for="(m,k) in p" :key="i + c.header + j + k"
          :style="`${m.bold==true?'font-weight: bold;':''}`">
          <!-- {{m.url}} -->
            <a v-if="m.url!=undefined" :href="m.url" target="blank">{{m.text}}</a>
            <span v-else-if="m.text!=undefined">{{m.text}}</span>
            <span v-else>{{m}}</span>
          </span>
        </span>
        <span v-else>{{p}}</span>
      </p>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    chapters: Array
  },
  data() {
    return {};
  },
  methods: {
    instanceofArray: p => p instanceof Array
  }
};
</script>

<style scoped>
a{
  /* text-decoration-line: underline;
  text-decoration-color: black; */
  text-decoration-line: underline;
  color: black !important;
}
</style>