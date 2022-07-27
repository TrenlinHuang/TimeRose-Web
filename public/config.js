let config = {
  title: "TimeRose",
  subtitle: "Indexing the dataverse",
  indexer: [
    {
      text: "KEN Labs",
      url: "http://18.118.207.252:3000"
    },
    {
      text: "PiKNiK",
      url: "http://filecoin-indexer.piknik.com:3000"
    },
    {
      text: "SXX",
      url: "http://filecoin-indexer.sxxfuture.com:33004"
    },
    {
      text: "Protocol Labs",
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
  ],
  indexerDesc: [
    {
      header: "Production:",
      // color: 'linear-gradient(to right bottom, green, black)',
      // dark: true,
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
  ]
}

;((global, undefined) => { "use strict";
  global.config = config
})(this)
