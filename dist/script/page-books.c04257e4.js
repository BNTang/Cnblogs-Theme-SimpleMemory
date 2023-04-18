"use strict";(self.webpackChunkCnblogs_Theme_SimpleMemory=self.webpackChunkCnblogs_Theme_SimpleMemory||[]).push([["page-books"],{"./src/template/books.html":
/*!*********************************!*\
  !*** ./src/template/books.html ***!
  \*********************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n// Module\nvar code = "<div class=\\"book-card\\"> <div class=\\"content-wrapper\\"> <img src=\\"##cover##\\" alt=\\"\\" class=\\"book-card-img\\"> <div class=\\"card-content\\"> <div class=\\"book-name\\" title=\\"##name##\\">##name##</div> <div class=\\"rate\\"> <fieldset class=\\"rating book-rate\\"> ##scoreHtml## </fieldset> <span class=\\"book-voters card-vote\\"> ##infoHtml## </span> </div> </div> </div> <div class=\\"book-by\\"> <i class=\\"iconfont icon-book\\" title=\\"阅读时间\\" style=\\"display:##readDateStyle##\\"></i> ##readDate## <i class=\\"iconfont icon-schedule\\" title=\\"阅读进度\\" style=\\"display:##readPercentageStyle##\\"></i> ##readPercentage## </div> </div>";\n// Exports\n/* harmony default export */ __webpack_exports__["default"] = (code);\n\n//# sourceURL=webpack://Cnblogs-Theme-SimpleMemory/./src/template/books.html?')},"./src/style/books.css":
/*!*****************************!*\
  !*** ./src/style/books.css ***!
  \*****************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Cnblogs-Theme-SimpleMemory/./src/style/books.css?")},"./src/page/books.js":
/*!***************************!*\
  !*** ./src/page/books.js ***!
  \***************************/function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ main; }\n/* harmony export */ });\n/* harmony import */ var _style_books_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/books.css */ \"./src/style/books.css\");\n/* harmony import */ var _template_books_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../template/books.html */ \"./src/template/books.html\");\n/* harmony import */ var _components_articleDirectory_articleDirectory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/articleDirectory/articleDirectory */ \"./src/components/articleDirectory/articleDirectory.js\");\n/* harmony import */ var _common_comArticle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/comArticle */ \"./src/page/common/comArticle.js\");\n/**\r\n * UPDATES AND DOCS AT: https://github.com/BNDong\r\n * https://www.cnblogs.com/bndong/\r\n * @author: BNDong, dbnuo@foxmail.com\r\n * ----------------------------------------------\r\n * @describe: 书单页处理\r\n */\r\n\r\n\r\n\r\n\r\n\r\nfunction main(_) {\r\n    /**\r\n     * 文章页公共处理\r\n     */\r\n    (() => {\r\n        (0,_common_comArticle__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_);\r\n    })();\r\n\r\n    /**\r\n     * 书单页处理\r\n     */\r\n    (() => {\r\n        if (_.__config.bookList.length) {\r\n            let postBody = $('#cnblogs_post_body'),\r\n                html = '';\r\n            $.each(_.__config.bookList, (i) => {\r\n                let list = _.__config.bookList[i];\r\n                if (list.title) html += '<h1>' + list.title + '</h1>';\r\n\r\n                html += '<div class=\"book-cards\">';\r\n                $.each(list.books, (j) => {\r\n                    let cardHtml = _template_books_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"], books = list.books[j];\r\n\r\n                    // 评星\r\n                    let scoreHtml = '';\r\n                    if (typeof books.score !== 'undefined' && books.score > 0) {\r\n                        scoreHtml += '<i class=\"iconfont icon-pingjixingquanxing\"></i>'.repeat(parseInt(books.score));\r\n                        if (books.score > parseInt(books.score)) {\r\n                            scoreHtml += '<i class=\"iconfont icon-pingjixingbanxing\"></i>';\r\n                        }\r\n                        scoreHtml += '<i class=\"iconfont icon-pingjixingxiantiao\"></i>'.repeat(parseInt(5 - books.score));\r\n                    } else {\r\n                        scoreHtml += '<i class=\"iconfont icon-pingjixingxiantiao\"></i>'.repeat(5);\r\n                    }\r\n\r\n                    // 图书信息\r\n                    let infoHtml = '';\r\n                    if (typeof books.formerName !== 'undefined' && books.formerName)\r\n                        infoHtml += '<span title=\"' + books.formerName + '\">原　名：' + books.formerName + '</span><br>';\r\n\r\n                    if (typeof books.author !== 'undefined' && books.author)\r\n                        infoHtml += '<span title=\"' + books.author + '\">作　者：' + books.author + '</span><br>';\r\n\r\n                    if (typeof books.translator !== 'undefined' && books.translator)\r\n                        infoHtml += '<span title=\"' + books.translator + '\">译　者：' + books.translator + '</span><br>';\r\n\r\n                    if (typeof books.press !== 'undefined' && books.press)\r\n                        infoHtml += '<span title=\"' + books.press + '\">出版社：' + books.press + '</span><br>';\r\n\r\n                    if (typeof books.year !== 'undefined' && books.year)\r\n                        infoHtml += '<span title=\"' + books.year + '\">出版年：' + books.year + '</span>';\r\n\r\n                    // 阅读时间 & 进度\r\n                    let readDate = typeof books.readDate !== 'undefined' ? books.readDate : '';\r\n                    let readDateStyle = readDate ? 'initial;' : 'none';\r\n\r\n                    let readPercentage = typeof books.readPercentage !== 'undefined' ? books.readPercentage : '';\r\n                    let readPercentageStyle = readPercentage ? 'initial;' : 'none';\r\n\r\n                    // 处理模版\r\n                    cardHtml = _.__tools.batchTempReplacement(cardHtml, [\r\n                        ['cover', typeof books.cover !== 'undefined' ? books.cover : ''],\r\n                        ['name', typeof books.name !== 'undefined' ? books.name : ''],\r\n                        ['readDate', readDate],\r\n                        ['readDateStyle', readDateStyle],\r\n                        ['readPercentage', readPercentage],\r\n                        ['readPercentageStyle', readPercentageStyle],\r\n                        ['scoreHtml', scoreHtml],\r\n                        ['infoHtml', infoHtml],\r\n                    ]);\r\n                    html += cardHtml;\r\n                });\r\n                html += '</div>';\r\n            });\r\n\r\n            // 插入模版\r\n            let articleSuffixFlg = $('.articleSuffix-flg');\r\n            articleSuffixFlg.length ? articleSuffixFlg.before(html) : postBody.append(html);\r\n        }\r\n    })();\r\n\r\n    /**\r\n     * 设置文章目录\r\n     */\r\n    (() => {\r\n        (0,_components_articleDirectory_articleDirectory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_);\r\n    })();\r\n\r\n}\n\n//# sourceURL=webpack://Cnblogs-Theme-SimpleMemory/./src/page/books.js?")}}]);