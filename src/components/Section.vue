<template>
  <div>
    <v-row align="center" v-if="reverse">
      <v-col cols="7">
        <div :class="headerClass">{{title}}</div>
        <div :class="textClass">{{subtitle}}</div>
        <div :class="textClass" v-for="item in list" :key="item">
          <v-icon :class="iconClass">mdi-check-circle-outline</v-icon> {{item}}
        </div>
        <div class="my-5">
          <v-btn dark large outlined color="indigo">
            {{btn}}
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <v-img :src="img" width="400"></v-img>
      </v-col>
    </v-row>

    <v-row align="center" v-else>
      <v-col cols="auto">
        <v-img :src="img" width="400"></v-img>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="7">
        <div :class="headerClass">{{title}}</div>
        <div :class="textClass">{{subtitle}}</div>
        <div :class="textClass" v-for="item in list" :key="item">
          <v-icon :class="iconClass">mdi-check-circle-outline</v-icon> {{item}}
        </div>
        <div class="my-5">
          <v-btn dark large outlined color="indigo">
            {{btn}}
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    reverse: Boolean,

    title: String,
    subtitle: String,
    list: Array,
    btn: String,
    img: String,

    headerClass: String,
    textClass: String,
    iconClass: String
  }
}
</script>

<style scoped>
</style>