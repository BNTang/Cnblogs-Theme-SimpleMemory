/**
 * UPDATES AND DOCS AT: https://github.com/BNTang
 * https://www.cnblogs.com/BNTang/
 * @author: BNTang, 303158131@qq.com
 * @Date 2022-09-04 19:36
 * ----------------------------------------------
 * @describe: 使用mo.js实现各种效果
 */

export default function main(options) {
    $.__tools.dynamicLoadingJs($.__config.default.mojs).then(() => {
        const burst = new mojs.Burst({
            left: 0, top: 0,
            ...options
        })
        burst.el.style.zIndex = 999999;
        document.addEventListener( 'click', function (e) {
            burst
                .tune({ x: e.pageX, y: e.pageY })
                .setSpeed(3)
                .replay()
        })
    }).catch(e => console.error('mo.js: ', e))
}