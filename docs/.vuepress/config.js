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
    'flowchart', // Docs: https://flowchart.vuepress.ulivz.com
    ['code-copy', {
      successText: '复制成功'
    }]
  ],
  markdown: {
    toc: { includeLevel: [1, 2, 3, 4, 5, 6] },
  },
  themeConfig: {
    nav: [
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      { text: 'GitHub', link: 'https://github.com/AgilityJin', icon: 'reco-github' },
    ],
    valineConfig: {
      appId: process.env.APP_COMMENTS_ID,// your appId
      appKey: process.env.APP_COMMENTS_KEY, // your appKey
    },
    author: 'Agility',
    // 备案
    record: '赣ICP备17013449号-1',
    recordLink: 'http://www.beian.miit.gov.cn',
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
        title: '江湖客栈',
        desc: '本人独立开发的一款包含 首页 后端管理系统 后端服务器的网游代练产品, \n Nuxt + Vuetify + Nest + TypeORM + Redis',
        // logo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597861143184&di=90dd7e13aa8129c0332a36649ed5fa6d&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D266814527%2C3437462030%26fm%3D214%26gp%3D0.jpg",
        link: 'https://www.jianghukezhan.vip/'
      },
    ],
    sidebar: 'auto', //在所有页面中启用自动生成侧栏
    blogConfig: {
      category: {
        location: 1,
      },
      tag: {
        location: 2,
      }
    }
  }
}
