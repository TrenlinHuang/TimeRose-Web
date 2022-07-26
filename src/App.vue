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
  font-family: "Nunito", sans-serif;
}
</style>