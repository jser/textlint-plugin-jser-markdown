import assert from "power-assert"
import Processor from "../src/JSerMarkdownProcessor";
import traverse from "traverse";
import {Syntax} from "markdown-to-ast"
const processor = new Processor();
const parse = processor.processor().preProcess;

const fixtureText = `
------

## Header
[link](http://example.com)

<p><a>link</a></p>

text

------
`;
describe("JSerMarkdownProcessor-test", function () {
    describe("preProcess", function () {
        it("should remove header", function () {
            let result = parse(fixtureText);
            traverse(result).forEach(function (x) {
                if (this.isLeaf) {
                    return;
                }
                assert.notEqual(x.type, Syntax.Header);
            });
        });
    });
});