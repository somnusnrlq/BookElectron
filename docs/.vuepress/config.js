// https://www.vuepress.cn/theme/default-theme-config.html 配置说明
module.exports = {
  title: 'Electron笔记本记录',
  description: 'Electron笔记本记录,后面会发布成cs版本!',
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }]
  ],
  dest: './docs/.vuepress/dist',
  // 顶部导航
  themeConfig: {
    logo: '/logo.png',
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '文档',
        link: '/guide/'
      },
      {
        text: 'Google',
        link: 'https://google.com',
        target: '_blank'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/somnusnrlq/',
        target: '_blank'
      },
      // {
      //   text: 'Languages',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/language/japanese/' }
      //   ]
      // }
    ],
    // 侧边栏 以 / 结尾的路径将会被视为 */README.md
    sidebar: { 
      '/guide/': [{
          title: '基础',
          collapsable: false,
          children: genEssentialsSidebar('')
        },
        {
          title: '进阶',
          collapsable: false,
          children: genAdvancedSidebar('')
        }
      ]
    }
  },
  ga: '',
  evergreen: true,
}


function genEssentialsSidebar(type = '') {
  const mapArr = [
    '',
    '/basic/',
  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genAdvancedSidebar(type = '') {
  const mapArr = [
    '/guide/',

  ]
  return mapArr.map(i => {
    return type + i
  })
}