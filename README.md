# textlint-plugin-jser-markdown

JSer.infoの記事フォーマットを[textlint](https://github.com/azu/textlint "textlint")で処理しやすいように変換するProcessor Plugin.

## Installation

    npm install textlint-plugin-jser-markdown

## Usage

```js
{
    "plugins": [
        "jser-markdown"
    ]
}
```

## Note

JSer.infoの記事フォーマットを[textlint](https://github.com/azu/textlint "textlint")で処理しやすいように変換するProcessor Plugin.

```
----
## 6to5 · Turn ES6+ code into readable vanilla ES5
[6to5.org/](https://6to5.org/ "6to5 · Turn ES6+ code into readable vanilla ES5")

<p class="jser-tags jser-tag-icon"><span class="jser-tag">ECMAScript</span> <span class="jser-tag">JavaScript</span> <span class="jser-tag">Tools</span></p>

包含的にES6のコードをES5に変換する6to5の公式サイトリニューアル。
JSXやFlowとか多くの部分に対応、polyfill出来るところは外部のpolyfillを読み込み対応、可読性が高いコードを吐くようになっている。

----
````

という内容を、以下のような形に変換します。

```
----
[6to5.org/](https://6to5.org/ "6to5 · Turn ES6+ code into readable vanilla ES5")

<p class="jser-tags jser-tag-icon"><span class="jser-tag">ECMAScript</span> <span class="jser-tag">JavaScript</span> <span class="jser-tag">Tools</span></p>

包含的にES6のコードをES5に変換する6to5の公式サイトリニューアル。
JSXやFlowとか多くの部分に対応、polyfill出来るところは外部のpolyfillを読み込み対応、可読性が高いコードを吐くようになっている。

----
````

- Headerがそのままだと多くのルールで誤爆する(ここはサイトタイトルなので自分で書く場所ではない)
- HTMLは邪魔(大抵のルールは無視するはず)


## Tests

    npm test

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT