<template>
  <div>
    <div style="width: 1000px; margin: auto" class="mt-10">
      <c-paragraphs :chapters="indexers"></c-paragraphs>
    </div>
  </div>
</template>

<script>
import CParagraphs from "@/components/Paragraphs.vue";
export default {
  name: "indexer",
  components: {
    CParagraphs,
  },
  data() {
    return {};
  },
  computed: {
    indexers() {
      return global.config.indexerDesc || [];
    },
  },
};
</script>

<style scoped>
</style>