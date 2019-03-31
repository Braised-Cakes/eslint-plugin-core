var path = require('path');
let arr = [];
const _ = require('lodash')
let timer = null;

function fn(obj) {
    if (obj) {
        arr.push(obj);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
        console.log(arr);
    }, 0)
}

module.exports = {
    meta: {
        docs: {}
    },
    create(
        context
    ) {
        return {
            'ImportDeclaration': function (node) {
                fn(_.get(node, 'source.value'));
            },
            'CallExpression': function (node) {
                fn(_.get(node, 'arguments.0.value'));
            }
        };
    }
};