# 介绍

本文档是对预约、外事等vue2.0开发的系统的技术总结和细节介绍，以方便开发人员快速入手。系统的UI风格进行过统一的设计，你可以从管理人员界面的样子来分辨是否是vue2.0开发的项目。

## 使用到的技术

**核心技术**

* [vue@2](https://v2.vuejs.org/)
* [vueRouter@3](https://v3.router.vuejs.org/)
* [vuex@3](https://v3.vuex.vuejs.org/zh/)

**接口调用**

* [apollo](https://apollo.vuejs.org/)
* [axios](http://www.axios-js.com/)

**UI库**

* [ElementUI@2](https://element.eleme.cn/)
* [vant@2](https://vant-contrib.gitee.io/vant/v2)

**登录**

* [vuex-oidc](https://github.com/perarnborg/vuex-oidc)

**多语言**

* [vue-i18n](https://vue-i18n.intlify.dev/)

**css预编译**

* [saas](https://www.sass.hk/)

**excel相关**

* [xlsx](https://docs.sheetjs.com/)

**微应用**

* [qiankun.js](https://qiankun.umijs.org/zh/)


## 界面构成

### 管理人员界面

所有系统都包含管理人员界面，正常情况下，路由的命名都是以'/manage/'开头。管理人员界面的开发参考了开源项目：[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)。

### 用户界面（pc）

用户界面的路由命名都是'/pc/'或'/public/'开头，但各个系统的UI设计各不相同，并且销量好的系统基本都有多主题的需求。

### 用户界面（移动端）

移动端的路由命名都是'/mobile/'开头，由于移动端的特殊性，移动端页面承担的功能基本都不太复杂。

由于预约系统面向的使用群体的特殊性，预约系统的用户界面是所有系统中最为复杂的，所以后续对用户界面的说明都是基于预约系统。
