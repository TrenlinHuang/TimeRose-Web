let config = {
  title: "TimeRose",
  subtitle: "Indexing the dataverse",
  indexer: [
    {
      text: "KEN Labs STI node",
      url: "http://18.118.207.252:3000"
    },
    {
      text: "PiKNiK Indexer Node",
      url: "http://filecoin-indexer.piknik.com:3000"
    },
    {
      text: "SXX Indexer Node",
      url: "http://filecoin-indexer.sxxfuture.com:33004"
    },
    {
      text: "Protocol Labs STI node",
      url: "https://cid.contact"
    }
  ],
  placeholder: "Contact the Web3 data assets via CID",
  defaultCid: "bafybeigvgzoolc3drupxhlevdp2ugqcrbcsqfmcek2zxiw5wctk3xjpjwy",
  homeDesc: [
    {
      header: "About",
      paragraphs: [
        "TimeRose currenlty is a instance of StoreTheIndex gateway to minimize latency in content routing and serivce discovery.",
        ["For now, it looks very much like: ", {text: "https://cid.contact/", url: "https://cid.contact/"}],
        "Timerose's original idea was to build a Web3 search engine as a gateway to resource discovery for dataverse base on IPFS and Filecoin. Due to the great difficulty of building semantic search (full-text indexing) based on content addressing network, this work is still on hold at present."
      ]
    },
    {
      header: "Roadmap",
      paragraphs: [
        [
          {bold: true, text: "Phase 1: "},
          "Run the instance and sharding node of StoreTheIndex"
        ],
        [
          {bold: true, text: "Phase 2: "},
          "Build subset of the index for Pando"
        ],
        [
          {bold: true, text: "Phase 3: "},
          "Build full text indexing for Pando"
        ],
        [
          {bold: true, text: "Phase 4: "},
          "Build service discovery on IPFS"
        ]
      ]
    }
  ]
}

;((global, undefined) => { "use strict";
  global.config = config
})(this)
