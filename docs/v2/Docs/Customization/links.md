# 友链

样式参考：[https://www.cnblogs.com/BNTang/p/16535757.html](https://www.cnblogs.com/BNTang/p/16535757.html)

## 配置方式

### 标识页面为友链页面

首先需要在页面源码中加入以下代码，来标识该页面为友链页面：

```html
<input id="linkListFlg" type="hidden" />
```

!> 注意：是添加到Html源码中，博客园文章的富文本编辑器和 Markdown 都有添加Html代码的方式！

#### 富文本编辑器

![reprinted_01](https://cdn.jsdelivr.net/gh/BNTang/pic/imgs/project/cnblogs/reprinted_01.png)

#### Markdown

直接拷贝到文本即可。

### 配置友链数据

友链的配置，可以参考其他[配置](https://BNTang.github.io/cnblogs-theme/v2/#/Docs/Customization/config?id=links-%e5%8f%8b%e6%83%85%e9%93%be%e6%8e%a5) 的方式。例如：

```javascript
window.cnblogsConfig = {
  links: {
            page: [
                {
                   title: '友情链接', // 标题
                   icon: 'icon-lianjie', // iconfont
                   style: 'color: #a78bfa;', 
                   links: [
                       {
                            name: '测试', // 昵称
                            introduction: 'IT技术类博客', // 简介
                            avatar: 'https://pic.cnblogs.com/face/1334215/20180504110551.png', // 头像
                            url: 'https://cnblogs.com/BNTang' // 友链地址
                       },
                       {
                            name: 'helloWorld', // 昵称
                            introduction: 'IT技术类博客', // 简介
                            avatar: 'https://pic.cnblogs.com/face/1334215/20180504110551.png', // 头像
                            url: 'https://cnblogs.com/BNTang' // 友链地址
                       },
                   ]
                },
                {
                   title: '网站',
                   icon: 'icon-website',
                   style: 'color: #a78bfa;',
                   links: [
                       {
                            name: '测试', // 昵称
                            introduction: 'IT技术类博客', // 简介
                            avatar: 'https://pic.cnblogs.com/face/1334215/20180504110551.png', // 头像
                            url: 'https://cnblogs.com/BNTang' // 友链地址
                       },
                       {
                            name: 'helloWorld', // 昵称
                            introduction: 'IT技术类博客', // 简介
                            avatar: 'https://pic.cnblogs.com/face/1334215/20180504110551.png', // 头像
                            url: 'https://cnblogs.com/BNTang' // 友链地址
                       },
                   ]
                },
            ],
    },
}
```

此配置可以单独出来。例如：

```javascript

    //  正常配置
    window.cnblogsConfig = {
      links: {},
    };

    // 友链配置
    window.cnblogsConfig.links.page = [
        {
            title: '友情链接',
            icon: 'icon-lianjie',
            style: 'color: #a78bfa;',
            links: [
                {
                    name: '测试', // 昵称
                    introduction: 'IT技术类博客', // 简介
                    avatar: 'https://pic.cnblogs.com/face/1334215/20180504110551.png', // 头像
                    url: 'https://cnblogs.com/BNTang' // 友链地址
                },
                {
                    name: 'helloWorld', // 昵称
                    introduction: 'IT技术类博客', // 简介
                    avatar: 'https://pic.cnblogs.com/face/1334215/20180504110551.png', // 头像
                    url: 'https://cnblogs.com/BNTang' // 友链地址
                },
            ]
        },
        {
            title: '网站',
            icon: 'icon-website',
            style: 'color: #a78bfa;',
            links: [
                {
                    name: '测试', // 昵称
                    introduction: 'IT技术类博客', // 简介
                    avatar: 'https://pic.cnblogs.com/face/1334215/20180504110551.png', // 头像
                    url: 'https://cnblogs.com/BNTang' // 友链地址
                },
                {
                    name: 'helloWorld', // 昵称
                    introduction: 'IT技术类博客', // 简介
                    avatar: 'https://pic.cnblogs.com/face/1334215/20180504110551.png', // 头像
                    url: 'https://cnblogs.com/BNTang' // 友链地址
                },
            ]
        },
    ];
```

?> 请按照此格式配置。

|**Key**|**Description**|
|:-----:|:-----:|
|**name**|昵称|
|**introduction**|简介|
|**avatar**|头像|
|**url**|友链地址|