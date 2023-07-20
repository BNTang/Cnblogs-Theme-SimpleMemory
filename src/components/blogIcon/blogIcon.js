/**
 * UPDATES AND DOCS AT: https://github.com/BNTang
 * https://www.cnblogs.com/BNTang/
 * @author: BNTang, 303158131@qq.com
 * @Date 2022-08-25 15:19
 * ----------------------------------------------
 * @describe: 网站图标处理
 */
export default function main() {
    let shortcutIcon = $('link[rel="shortcut icon"]');
    if ( $.__config.info.blogIcon && shortcutIcon.length) shortcutIcon.attr('href', $.__config.info.blogIcon);
    if ( $.__config.info.blogIcon && !shortcutIcon.length) {
        let linkObject  = document.createElement('link');
        linkObject.rel  = "shortcut icon";
        linkObject.href = $.__config.info.blogIcon;
        document.getElementsByTagName("head")[0].appendChild(linkObject);
    }
}