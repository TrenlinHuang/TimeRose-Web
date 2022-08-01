let config = {
  // title: "TimeRose",
  // subtitle: "Indexing the dataverse",
  logo: "assets/logo.png",
  header: "CID Indexing & Content Routing",
  subheader: "The Indexer provides a content routing sub-system to identify which providers in the interplanetary network are able to provide what content.",
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

  bar: [
    {
      type: 'list',
      title: 'News',
      list: [
        {title: 'Introducing the Network Indexer', url: 'https://filecoin.io/blog/posts/introducing-the-network-indexer/'},
        {title: 'Providing Data to a network indexer', url: 'https://github.com/filecoin-project/storetheindex/blob/main/doc/ingest.md#providing-data-to-a-network-indexer'},
        {title: 'Creating an Index Provider', url: 'https://github.com/filecoin-project/storetheindex/blob/main/doc/creating-an-index-provider.md#creating-an-index-provider'},
        {title: 'indexer_about.md', url: 'https://github.com/filecoin-project/storetheindex/blob/main/doc/indexer_about.md#about-the-indexer'},
      ]
    },
    {
      type: 'card',
      title: 'Demos',
      list: [
        {title: 'Indexing and Interoperability on Filecoin and IPFS', url: 'https://youtu.be/y175X7mK6E8', cover:'https://i.ytimg.com/vi_webp/y175X7mK6E8/maxresdefault.webp'},
        {title: 'Network Indexer AMA', url: 'https://youtu.be/r-CD1wXQMIg', cover:'https://i1.ytimg.com/vi/r-CD1wXQMIg/hqdefault.jpg'},
        {title: 'Intro to IPFS and Filecoin', url: 'https://youtu.be/9hV5vnL81E4', cover:'https://i.ytimg.com/vi_webp/9hV5vnL81E4/maxresdefault.webp'},
        {title: 'Building Data Structures for Filecoin', url: 'https://youtu.be/_defE2nyNNo', cover:'https://i.ytimg.com/vi_webp/_defE2nyNNo/maxresdefault.webp'},
        //{title: 'Filecoin Storage Provider Summit Deep Dive', url: 'https://www.youtube.com/watch?v=Q9sFQ-sHkgo', cover:'https://i1.ytimg.com/vi/Q9sFQ-sHkgo/hqdefault.jpg'},
      ]
    },
    {
      title: "Docs",
      url: 'https://docs.cid.contact',
    }
  ],
  metrics: [
    {
      icon: 'mdi-altimeter',
      title: 'Indexed CIDs',
      text: [
        '4.87B total (30 days)',
        '1.35B last week'
      ]
    },
    {
      icon: 'mdi-server',
      title: 'Index Providers',
      text: [
        '178',
        'Provider Coverage: 30%'
      ]
    },
    {
      icon: 'mdi-desktop-tower',
      title: 'Indexer Nodes',
      text: [
        '4 currently (Production)',
        'PL, KenLabs, PiKNiK, SXX'
      ]
    },
    {
      icon: 'mdi-chart-donut',
      title: 'Indexer Uptime',
      text: [
        '99.99%'
      ]
    }
  ],
  sections: [
    {
      title: "About the indexer",
      text: [
        "An indexer is a network node that stores mappings of content multihahses to provider data records.",
        "A client that wants to know where a piece of information is stored can query the indexer, using the CID or multihash of the content, and receive a provider record that tells where the client can retrieve the content and how to retrieve it."
      ],
      img: 'assets/vps.png',
      list: [
        'Indexer Provider',
        'Content Discovery',
        'Advertisement'
      ],
      btns: [
        {text: 'read more', url: 'https://github.com/filecoin-project/storetheindex/blob/main/doc/indexer_about.md#about-the-indexer'},
        {text: 'watch now', url: 'https://www.youtube.com/watch?v=y175X7mK6E8'}
      ]
    },
    {
      title: 'Providing Data to a network indexer',
      text: [
        "Filecoin have lots of content being stored (through SPs), would be great to make them useful when people are looking for it, i.e. look up CID to know where to retrieve it. This requires content discoverability and content transferability.",
        "There are two parts to the ingestion / providing protocol used by store the index:"
      ],
      img: 'assets/1.png',
      list: [
        'Advertisements maintains an immutable authenticated data structure where providers describe what content they are have available.',
        'Announcements are a transient notification that the content on a provider has changed.'
      ],
      btns: [
        {text: 'read more', url: 'https://github.com/filecoin-project/storetheindex/blob/main/doc/ingest.md#providing-data-to-a-network-indexer'}
      ]
    },
    {
      title: "Creating an Index Provider",
      text: [
        "The Index Provider serves as the interface between the storage provider and the indexer. It can be used from within Lotus so that the publishing of new data happens automatically. But it can also happen separately.",
        "There are a couple players here:"
      ],
      img: 'assets/2.png',
      list: [
        'Filecoin Storage Provider – Hosts data for folks and proves it via the Filecoin Network Chain. Aka Storage Provider.',
        'Indexer (aka storetheindex) – A service that can answer the question: “Given this CID, who has a copy?“. This is little more than a lookup table.',
        'Index Provider – A service that runs alongside a Storage Provider and tells the Indexer what content this storage provider has.'
      ],
      btns: [
        {text: 'read more', url: 'https://github.com/filecoin-project/storetheindex/blob/main/doc/creating-an-index-provider.md#creating-an-index-provider'}
      ]
    },
  ],
  news: [
    {
      title: 'Introducing the Network Indexer',
      url: 'https://filecoin.io/blog/posts/introducing-the-network-indexer/',
      cover: 'assets/indexer.png'
    },
    {
      title: 'Indexing and Interoperability on Filecoin and IPFS',
      url: 'https://www.youtube.com/embed/y175X7mK6E8',
      cover: 'assets/introduce-indexer.jpeg'
    },
    {
      title: 'Filecoin Storage Provider Summit Deep Dive',
      url: 'https://www.youtube.com/watch?v=Q9sFQ-sHkgo',
      cover: 'assets/juan-summit.jpeg'
    }
  ],
  briefIntro: 'An indexer is a network node that stores mappings of content multihahses to provider data records.',
  contactInfo: [
    {
      icon: 'mdi-slack',
      title: 'Filecoin',
      url: 'https://filecoin.io/slack'
    },
    {
      icon: 'mdi-github',
      title: 'storetheindex',
      url: 'https://github.com/filecoin-project/storetheindex'
    }
  ],
  footerLinks: [
    {
      title: "Company",
      list: [
        {
          title: 'About Us',
          url: 'http://kencloud.com'
        }
      ]
    },
    {
      title: 'Useful Links',
      list: [
        {
          title: 'Indexer Node Design',
          url: 'https://www.notion.so/Indexer-Node-Design-fbd1e7d3110c4b1fb154b31f2585e6ff'
        },
        {
          title: 'StoreTheIndex Scaling Roadmap',
          url: 'https://www.notion.so/StoreTheIndex-Scaling-Roadmap-0a1cac761ed64b739d9bb8bef1fdc90f'
        },
        {
          title: 'Introducing Indexer to SP',
          url: 'https://www.notion.so/Introducing-Indexer-to-SP-90bf296794174a8281c121d4ce6747a0'
        }
      ]
    }
  ],
}

;((global, undefined) => { "use strict";
  global.config = config
})(this)
