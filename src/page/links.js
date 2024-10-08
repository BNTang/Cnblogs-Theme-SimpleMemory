/**
 * UPDATES AND DOCS AT: https://github.com/BNTang
 * https://www.cnblogs.com/BNTang/
 * @author: BNTang, 303158131@qq.com
 * @Date 2022-08-25 15:27
 * ----------------------------------------------
 * @describe: 友链页处理
 */
import comArticle from "./common/com-article";
import '../style/links.css';
import linksTemp from '../template/links.html';
import articleDirectory from "../components/articleDirectory/articleDirectory";

export default function main() {
    /**
     * 文章页公共处理
     */
    (() => {
        comArticle();
    })();

    /**
     * 添加友链
     */
    (() => {
        if ( $.__config.links.page.length) {

            import(/* webpackChunkName: "gf-blink" */ /* webpackPrefetch: true */ '../style/gf-blink.css');

            let postBody = $('#cnblogs_post_body'),
                html = '';

            $.each( $.__config.links.page, (i) => {
                let list = $.__config.links.page[i];
                if (list.title) html += '<h1 class="iconfont ' + list.icon + '" style="'+ list.style +'">' + list.title + '</h1>';

                html += '<div id="links-box">';

                $.each(list.links, (j) => {
                    let linksHtml = linksTemp,  data = list.links[j];

                    // 处理模版
                    linksHtml =  $.__tools.batchTempReplacement(linksHtml, [
                        ['avatar', typeof data.avatar !== 'undefined' ? data.avatar : ''],
                        ['name', typeof data.name !== 'undefined' ? data.name : ''],
                        ['introduction', typeof data.introduction !== 'undefined' ? data.introduction : ''],
                        ['url', typeof data.url !== 'undefined' ? data.url : ''],
                        ['icon', j % 3 === 0 ? 'icon-zhifeiji': (j % 3 === 1 ? 'icon-like-fill' : 'icon-flashlight-fill')]
                    ]);
                    html += linksHtml;
                });

                html += '</div>';
            })

            // 插入模版
            let articleSuffixFlg = $('.articleSuffix-flg');
            articleSuffixFlg.length ? articleSuffixFlg.before(html) : postBody.append(html);
        }
    })();

    /**
     * 设置文章目录
     */
    (() => {
        articleDirectory();
    })();
}