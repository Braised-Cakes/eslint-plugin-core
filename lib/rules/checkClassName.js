var path = require('path');
module.exports = {
    meta: {
        docs: {}
    },
    create(context) {
        return {
            // "ImportDeclaration": function (node) {
            //     // 参数 node 就是 AST 里面 ClassDeclaration 对象

            //     // const filePath = context.getFilename();
            //     // const filePatchArr = filePath.split('/');
            //     // const folderName = filePatchArr[filePatchArr.length - 2];
            //     console.log(context.type);
            //     // console.log('-------------')
            //     // if (filePath.indexOf('/src/view') > -1 && node.id && node.id.name !== folderName) {
            //     //     // 过滤文件
            //     context.report({
            //         node,
            //         message: `class 名称与文件夹名称不一${node.source.value}`
            //     })
            //     // 抛出报错信息
            //     // }
            // },
            // 'tag(img)': function (context) {
            //     context.report({
            //         node,
            //         message: `class 名称与文件夹名称不一${node.name}`
            //     })
            // },
            // 'no-jsx': function (context) {
            //     return {
            //         Program: function (node) {
            //             if (path.extname(context.getFilename()) === '.jsx') {
            //                 context.report(node, 'You are attempting to use JSX. This is strictly prohibited.');
            //             }
            //         },
            //     };
            // },
        }
    }
}