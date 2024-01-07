import {defineConfig} from 'vitepress'
import AutoNav from 'vite-plugin-vitepress-auto-nav'

export default defineConfig({
    head: [
        ['link', {rel: 'manifest', href: '/pwa/manifest.json'}],
        ['link', {rel: 'icon', href: '/NoGeekAvatar.png'}],
        ['script', {src: '/js/rewrite.js'}],
    ],

    title: '不止极客',
    description: '不止极客   大学生',
    lang: 'zh-cmn-Hans',
    base: '/nogeek.cn-template',
    // 忽略解析部分md文件（默认忽略node_modules），仅打包后生效，被忽略的文件不影响被其他文件导入
    srcExclude: ['**/(README|TODO).md', '(.vitepress|public|images|.guthub|components|snippets|else-exclude|sh)/**/*.md'],
    lastUpdated: true,
    markdown: {
        lineNumbers: true,
        defaultHighlightLang: 'js',
    },
    vite: {
        plugins: [
            AutoNav({
                itemsSetting: {
                    '生财有术' : {collapsed: true},
                    'nogeekcnAd.md': {title: '倾力推荐：不止极客付费会员'},
                    '401': {hide: true}
                },
            }),
        ],
    },
    themeConfig: {
        logo: '/NoGeekAvatar.png',
        outline: 'deep',
        outlineTitle: '目录',
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2023-present <a href="http://nogeek.cn" target="_blank" style="color: #337ab7; text-decoration: underline">noGeek.cn</a>'
        },
        docFooter: {
            prev: '上一篇',
            next: '下一篇',
        },
        darkModeSwitchLabel: '切换主题',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
        langMenuLabel: '切换语言',
        lastUpdatedText: '更新时间',
        externalLinkIcon: true,
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索文档',
                    },
                    modal: {
                        displayDetails: '显示详情',
                        noResultsText: '未找到相关结果',
                        resetButtonTitle: '清除',
                        footer: {
                            closeText: '关闭',
                            selectText: '选择',
                            navigateText: '切换',
                        },
                    },
                },
            },
        },
    },

    transformPageData(pageData) {
        pageData.frontmatter.head ??= []
        pageData.frontmatter.head.push([
            'meta',
            {
                name: 'og:type',
                content: 'website'
            }
        ]);
        pageData.frontmatter.head.push([
            'meta',
            {
                name: 'og:site_name',
                content: '不止极客'
            }
        ]);
        pageData.frontmatter.head.push([
            'meta',
            {
                name: 'og:image',
                content: '/NoGeekAvatar.png'
            }
        ]);
        pageData.frontmatter.head.push([
            'meta',
            {
                name: 'twitter:image',
                content: '/NoGeekAvatar.png'
            }
        ]);
        pageData.frontmatter.head.push([
            'meta',
            {
                name: 'og:title',
                content:
                    pageData.frontmatter.layout === 'home'
                        ? `不止极客`
                        : `${pageData.title} | 不止极客`
            }
        ]);

        // 百度搜索
        pageData.frontmatter.head.push([
            'meta',
            {
                name: 'baidu-site-verification',
                content: 'codeva-KnuOQ2rJUF'
            }
        ]);
        // bing 搜索
        pageData.frontmatter.head.push([
            'meta',
            {
                name: 'msvalidate.01',
                content: '9F2D57CFC59E8031212A166878638B15'
            }
        ]);
    }
})
