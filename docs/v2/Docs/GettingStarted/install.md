# 安装配置

!> 本文为v2版本的安装配置教程，请核对使用版本！

!> 本主题需要JS权限，没有的请先申请权限。

## 关于博客园后台

进入管理后台：[管理后台](https://i.cnblogs.com/Configure.aspx)

### 设置

设置页面：

!> 侧边栏设置的时候格式要记得选Html

<img src="https://cdn.jsdelivr.net/gh/wangyang0210/pic/imgs/project/cnblogs/install_01.png width="750" />

本主题当前页面所涉及的配置有：

- 博客皮肤
- 代码高亮
- 页面定制CSS代码
- 禁用模板默认CSS
- 博客侧边栏公告
- 页脚Html代码

### 选项

?> 可控制博客园现有的一些控件展示 | 若不想展示去除选中即可

选项页面：

<img src="https://cdn.jsdelivr.net/gh/wangyang0210/pic/imgs/project/cnblogs/install_07.png" width="750" />

本主题当前页面所涉及的配置有：

- 控件显示设置/公告 [#86](https://github.com/BNDong/Cnblogs-Theme-SimpleMemory/issues/86)

## 获取需要使用的版本

进入主题仓库：[GitHub](https://github.com/wangyang0210/cnblogs-theme)

切换版本：

![install_05](https://cdn.jsdelivr.net/gh/wangyang0210/pic/imgs/project/cnblogs/install_05.png)

## 博客设置

### 设置博客皮肤

博客皮肤：```SimpleMemory```

![install_02](https://cdn.jsdelivr.net/gh/wangyang0210/pic/imgs/project/cnblogs/install_02.png)

### 设置代码高亮

!> 主题已集成代码高亮,建议直接禁用

![install_02](https://cdn.jsdelivr.net/gh/wangyang0210/pic/imgs/project/cnblogs/install_08.png)

### 设置页面定制CSS代码

CSS代码位置：```/dist/simple-memory.css``` 拷贝此文件代码至页面定制CSS代码文本框处。

![install_03](https://cdn.jsdelivr.net/gh/wangyang0210/pic/imgs/project/cnblogs/install_03.png)

### 禁用模板默认CSS

选中页面定制CSS代码文本框下面的禁用模板默认CSS。

### 设置博客侧边栏公告

在侧边栏HTML代码中设置以下代码：

```html
// TODO 这里干掉 只需要引入js文件
<script type="text/javascript">
    window.cnblogsConfig = {
      info: {
        name: 'userName', // 用户名 || 不配置默认取博客园名称
        startDate: '2021-01-01', // 入园时间，年-月-日。入园时间查看方法：鼠标停留园龄时间上，会显示入园时间
        avatar: 'http://xxxx.png', // 用户头像
      },
    }
</script>
<script src="https://cdn.jsdelivr.net/gh/wangyang0210/cnblogs-theme@v2.2.4/dist/simple-memory.js" defer></script>
```

详细配置参考相关[文档](https://wangyang0210.github.io/cnblogs-theme/v2/#/Docs/Customization/config) 。

### 开启公告控件

博客设置 --> 控件显示设置 --> 勾选公告

配置完成保存即可成功应用博皮！

---
!> 版本 >= 2.1.8 支持npm包CDN加速

CDN`jsdelivr`的URL,详细规则参考[官方网站](https://www.jsdelivr.com/) 
CDN`unpkg`的URL, 详细规则参考[官方网站](https://www.unpkg.com/)
