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
      return [
        {
          header: "Production:",
          paragraphs: [
            // ken labs
            [{bold: true, text: "KEN Labs STI node (Production)"}],
            "PeerID: 12D3KooWFT1xN5PsBGJP43q5CqVzSNXGWaFhKLxmDdF5e4jeVfdo",
            "Multiaddress: /ip4/18.118.207.252/tcp/3000",
            "-",
            [{bold: true, text: "PiKNiK Indexer Node (Production)"}],
            "PeerID: 12D3KooWSRx6PhUqXV26tKKFFcFg2yrqWkeBwKzN7pFMU379ASoP",
            "Multiaddress: /dns4/filecoin-indexer.piknik.com/tcp/3000",
            "-",
            [{bold: true, text: "SXX Indexer Node (Production)"}],
            "peerid: 12D3KooWSTYbrZrtw7FHxi3zkxahKt7oaV5kmHAdQkHXJ8CrvRp5",
            "finder multiaddress: /ip4/filecoin-indexer.sxxfuture.com/tcp/33004",
            "-",
            [
              { bold: true, text: "Protocol Labs STI node - " },
              { bold: true, url: "http://cid.contact", text: "Cid.Contact " },
              { bold: true, text: "(Production)" },
            ],
            "PeerID: 12D3KooWF6pJZpWhcFRbVxAi9Py4PMPgQF5vXuw9zQp3J5yRxa7y",
            "Multiaddress: /dns4/cid.contact/tcp/80",
            ["Web: ", { url: "http://cid.contact", text: "http://cid.contact"}],

          ],
        },
        {
          header: "Development:",
          paragraphs: [
            [{bold: true, text: "Protocol Labs STI node (development)"}],
            "PeerID: 12D3KooWC7kMRLFT2kqv5XkhD7cR2Nw2UbKE5rwWk11VCZ22undU",
            "Multiaddress: /ip4/18.116.210.184/3000",
            "-",
            [{bold: true, text: "Leeway Hertz Indexer Node (development)"}],
            "PeerID: 12D3KooWAJJ5SYm6P1qyFxyLTcDcDFtqykckWMLGVHtpfvMtgPkG",
            "Multiaddress:",
            `"Addresses": {`,
            `"Admin": "/ip4/127.0.0.1/tcp/3002",`,
            `"Finder": "/ip4/0.0.0.0/tcp/3000",`,
            `"Ingest": "/ip4/0.0.0.0/tcp/3001",`,
            `"P2PAddr": "/ip4/0.0.0.0/tcp/3003",`,
            `"NoResourceManager": false`,
            "}"
          ]
        }
      ];
    },
  },
};
</script>

<style scoped>
</style>