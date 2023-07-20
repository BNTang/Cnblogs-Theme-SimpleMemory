/**
 * UPDATES AND DOCS AT: https://github.com/BNTang
 * https://www.cnblogs.com/BNTang/
 * @author: BNTang, 303158131@qq.com
 * @Date 2022-08-25 15:28
 * ----------------------------------------------
 * @describe: fetch封装
 */

export async function request(url = '', method = 'GET', data = {}) {
    let options = {
        method: method,
        mode: 'cors',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    }
    if(Object.keys(data).length) {
        options.body=JSON.stringify(data)
    }
    const response = await fetch(url, options)
    return response.json()
}