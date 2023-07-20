/**
 * UPDATES AND DOCS AT: https://github.com/BNTang
 * https://www.cnblogs.com/BNTang/
 * @author: BNTang, 303158131@qq.com
 * @Date 2022-08-25 15:25
 * ----------------------------------------------
 * @describe: code 渲染开始前
 */

export default function main() {
    if (typeof $.__config.hooks.beforeCode === "function")
        $.__config.hooks.beforeCode();
}