let config = {
  // baseURL: 'http://18.118.207.252:3000'
  baseURL: 'https://cid.contact',
  placeholder: 'Contact the Web3 data assets via CID',
  desc: [
    {
      header: "About",
      paragraphs: [
        'TimeRose is ...'
      ]
    },
    {
      header: "Roadmap",
      paragraphs: [
        'v0 ...',
        'v1 ...'
      ]
    }
  ]
}

;((global, undefined) => { "use strict";
  global.config = config
})(this)