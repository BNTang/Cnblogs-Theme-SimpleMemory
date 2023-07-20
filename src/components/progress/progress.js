/**
 * UPDATES AND DOCS AT: https://github.com/BNTang
 * https://www.cnblogs.com/BNTang/
 * @author: BNTang, 303158131@qq.com
 * @Date 2022-08-25 15:23
 * ----------------------------------------------
 * @describe: 头部进度条处理
 */

export default function main() {
    $.__tools.dynamicLoadingJs($.__config.default.toprogress).then(r => {
        $('#blog-news').prepend('<div id="progressBar"></div>');
        let progressBar = ToProgress && new window.ToProgress( $.__config.progressBar, '#progressBar');

        // 添加事件监听
        $.__event.scroll.handle.push(() => {
            progressBar.setProgress( $.__tools.getScrollPercent());
        });
    }).catch(e => console.log('toprogress.js', e))
}