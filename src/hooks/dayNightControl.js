/**
 * UPDATES AND DOCS AT: https://github.com/BNTang
 * https://www.cnblogs.com/BNTang/
 * @author: BNTang, 303158131@qq.com
 * @Date 2022-08-25 15:26
 * ----------------------------------------------
 * @describe: 日夜间模式切换时
 */

export default function main(type) {
    if (typeof $.__config.hooks.dayNightControl === "function")
        $.__config.hooks.dayNightControl(type);
}