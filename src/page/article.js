/**
 * UPDATES AND DOCS AT: https://github.com/BNTang
 * https://www.cnblogs.com/BNTang/
 * @author: BNTang, 303158131@qq.com
 * @Date 2022-08-25 15:26
 * ----------------------------------------------
 * @describe: 文章页处理
 */
import comArticle from "./common/com-article";
import imgBox from "../components/imgBox/imgBox";
await $.__tools.dynamicLoadingJs($.__config.default.iconfont).catch(e => console.error('iconfont.js', e))

export default function main() {

    /**
     * 文章页公共处理
     */
    (() => {
        comArticle();
    })();

    /**
     * 代码高亮处理
     */
    (() => {
        // 异步处理防止影响loading结束
        import(/* webpackChunkName: "article-code" */  /* webpackPrefetch: true */ '../components/code/code').then(module => {
            const code = module.default;
            code();
        });
    })();

    /**
     * 图片灯箱处理
     */
    (() => {
        imgBox();
    })();
}