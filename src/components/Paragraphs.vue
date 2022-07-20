<template>
  <div>
    <v-card v-for="(c, i) in chapters" :key="i + c.header" elevation="0" width="100%">
      <v-divider></v-divider>
      <v-card-title>{{ c.header }}</v-card-title>
      <v-card-text v-for="(p, j) in c.paragraphs" :key="i + c.header + j">
        {{ p }}
      </v-card-text>
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
};
</script>

<style scoped>
</style>