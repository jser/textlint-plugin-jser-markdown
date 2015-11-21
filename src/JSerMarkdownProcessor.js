// LICENSE : MIT
"use strict";
import {parse,Syntax} from "markdown-to-ast"
import traverse from "traverse";
function filterExternalHeader(ast) {
    let isInHorizon = false;
    let isSiteTitleHeader = (node) => {
        if (!node.type) {
            return false;
        }
        /*
        ------
        XXXX <= Here
         */
        if (isInHorizon) {
            // ## Header
            if (node.type === Syntax.Header && node.depth === 2) {
                return true;
            }
        }
        isInHorizon = node.type === Syntax.HorizontalRule;
        return false;
    };
    traverse(ast).forEach(function (x) {
        if (this.notLeaf && isSiteTitleHeader(x)) {
            this.remove()
        }
    });
    return ast;
}
export default class JSerMarkdownProcessor {
    constructor(config) {
        this.config = config;
    }

    // available ".ext" list
    static availableExtensions() {
        return [
            ".md"
        ];
    }

    // define pre/post process
    // in other words, parse and generate process
    processor(ext) {
        return {
            preProcess(text, filePath) {
                var ast = parse(text);
                return filterExternalHeader(ast);
            },
            postProcess(messages, filePath) {
                return {
                    messages,
                    filePath: filePath ? filePath : "<markdown>"
                };
            }
        }
    }
}