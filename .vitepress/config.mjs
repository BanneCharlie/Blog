import { defineConfig } from "vitepress";
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs"; // 改成自己的路径

export default defineConfig({
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  title: "CORSAIR | BLOG",
  description: "雨露润余春，椛开落满城。",
  //base:"/Blog/",
  markdown: {
    theme:'github-light',
    // 代码块显示行数
    lineNumbers: true,
  },
  themeConfig: {
    // 站点首页标题
    siteTitle: "CORSAIR",
    // 站点logo
    logo: "/logo.svg",

    // 导航栏
    nav: [
      { text: "Home", link: "/" },
      { text: "Vue", link: "/docs/FrontEnd/Vue3/1.Grammar" },
      { text: "Spring", link: "/docs/BackEnd/Spring/1.Info" },
      { text: "SpringMVC", link: "/docs/BackEnd/SpringMVC/1.Info" },
      { text: "Mybatis", link: "/docs/BackEnd/Mybatis/Mybatis" },

      { text: "Mysql", link: "/docs/BackEnd/Mysql/1.Info" },
      { text: "Redis", link: "/docs/BackEnd/Redis/1.Info" },

      {text: "RabbitMQ",link: "/docs/SpringCloudAlibaba/5.RabbitMQ/RabbitMQ"},

      { text: "Interview", link: "/docs/Interview/Interview" },
    ],

    // 右侧导航栏默认索引
    outline: [1, 6],

    // 通过插件自动生成,左边栏插件
    sidebar: {
      "/docs/FrontEnd/Vue3": set_sidebar("docs/FrontEnd/Vue3"),
      "/docs/BackEnd/Spring": set_sidebar("docs/BackEnd/Spring"),
      "/docs/BackEnd/Mybatis/Mybatis": set_sidebar("docs/BackEnd/Mybatis"),

      "/docs/BackEnd/Mysql": set_sidebar("docs/BackEnd/Mysql"),
      "/docs/BackEnd/Redis": set_sidebar("docs/BackEnd/Redis"),
      "/docs/Interview": set_sidebar("docs/Interview"),
      "/docs/SpringCloudAlibaba/5.RabbitMQ/RabbitMQ": set_sidebar("docs/SpringCloudAlibaba/5.RabbitMQ"),

      // 前端框架
      "/docs/FrontEnd": set_sidebar("docs/FrontEnd"),

      // 后端框架
      "/docs/BackEnd": set_sidebar("docs/BackEnd"),

      // 微服务的侧边栏
      "/docs/SpringCloudAlibaba": set_sidebar("docs/SpringCloudAlibaba"),

    },

    socialLinks: [
      { icon: "github", link: "https://github.com/BanneCharlie/Note.git" },
    ],

    footer: {
      copyright: "Copyright @ BANNE !",
    },

    // 设置搜索框
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    }, 
  },

});
