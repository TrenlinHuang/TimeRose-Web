<template>
  <v-app>
    <router-view/>
    <v-snackbar :color="snackbar.color" v-model="snackbar.show">{{snackbar.text}}</v-snackbar>
  </v-app>
</template>

<script>
import Vue from 'vue'
export default {
  created() {
    Vue.prototype.$notify = this.notify
  },
  data: () => ({
    snackbar: {
      show: false,
      text: '',
      color: ''
    }
  }),
  methods: {
    notify({color, text ,show}) {
      this.snackbar.color = color
      this.snackbar.text = text
      this.snackbar.show = show
    }
  }
}
</script>
<style>
body {
  min-width: 1100px;
  font-family: "Nunito", sans-serif;
}
.theme-linear{
  background: linear-gradient(to left, #614092 0%, #2443ac 100%)
}
.auto-margin {
  max-width: 1100px;
  min-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}
</style>