console.log('Agility key: ', process.env.APP_COMMENTS_KEY);


module.exports = {
  theme: 'reco', // Docs: https://vuepress-theme-reco.recoluan.com
  title: 'Agility\'s blog',
  description: '乐于分享',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  plugins: [
    'flowchart' // Docs: https://flowchart.vuepress.ulivz.com
  ],
  themeConfig: {
    nav: [
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
    ],
    valineConfig: {
      appId: process.env.APP_COMMENTS_ID,// your appId
      appKey: process.env.APP_COMMENTS_KEY, // your appKey
    },
    author: 'Agility',
    // 备案
    // record: 'ICP 备案文案',
    // recordLink: 'ICP 备案指向链接',
    // cyberSecurityRecord: '公安部备案文案',
    // cyberSecurityLink: '公安部备案指向链接',
    // 项目开始时间，只填写年份
    startYear: '2020',
    // logo: 'img.png',
    // authorAvatar: 'img.ppng',
    type: 'blog',
    // 友情链接
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    sidebar: 'auto', //在所有页面中启用自动生成侧栏
  }
}