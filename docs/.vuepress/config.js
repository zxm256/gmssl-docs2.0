module.exports = {
    title: 'GmSSL-Docs',
    description: 'GmSSL说明文档',
    base: "/gmssl-docs2.0/",
    themeConfig: {
        nav: [
            {
                text: '使用指南',
                link: '/guide/'
            },
            {
                text: '多语言支持',
                link: '/multilanguage/',
                items: [
                    {
                        text: 'Java',
                        link: '/multilanguage/java.html'
                    },
                    {
                        text: 'Python',
                        link: '/multilanguage/python.html'
                    },
                    {
                        text: 'PHP',
                        link: '/multilanguage/php.html'
                    },
                    {
                        text: 'Go',
                        link: '/multilanguage/go.html'
                    }
                ]
            },
            {
                text: '国密算法接口',
                link: '/crypto/',
                items: [
                    {
                        text: '分组密码',
                        items: [
                            {
                                text: 'SM4',
                                link: '/crypto/block/sm4.html'
                            },
                        ]
                    },
                    {
                        text: '公钥密码',
                        items: [
                            {
                                text: 'SM2',
                                link: '/crypto/public/sm2.html'
                            },
                        ]
                    },
                    {
                        text: '流密码',
                        items: [
                            {
                                text: 'ZUC',
                                link: '/crypto/stream/zuc.html'
                            },
                        ]
                    },
                ]
            },
            { text: 'Github', link: 'https://github.com/guanzhi' },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '使用指南',   // 必要的
                    path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ''
                    ]
                },
                {
                    title: '命令行工具',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        '/guide/command-tools',
                        '/guide/command-tools-examples'
                    ]
                }
            ],
            '/multilanguage/': [
                {
                    title: '多语言支持',   // 必要的
                    path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        '',
                        '/multilanguage/java',
                        '/multilanguage/python',
                        '/multilanguage/php',
                        '/multilanguage/go',
                    ]
                }
            ]
        },
        smoothScroll: true
    }
}