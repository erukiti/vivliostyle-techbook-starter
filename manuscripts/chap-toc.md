# 目次を制する

VivlioStyleではまっとうな自動作成の目次を出すのも少し苦労するが、この章ではそれらに関するノウハウをお伝えしよう。

## 結論から

`vivliostyle.config.js` に以下の設定を追加しましょう。

```js:vivliostyle.config.js
  //目次
  toc: true, // 目次を出す
  tocTitle: "目次", // 目次の項目名
  sectionDepth: 3, // 目次に出すセクションの深さ
```

つぎに目次の生成位置を制御します。

```js:vivliostyle.config.js
  entry: [
    // 表紙
    // { rel: "cover" },

    // 前書き
    "00-preface.md",

    // 目次
    { rel: "contents" },

    // 本文
    "chap-erukiti.md",

    // 後書き
    "99-postscript.md"
  ],
```

`vivliostyle.config.js`では`entry`で、原稿のファイルを指定します。通常はファイル名を指定しますが、目次の挿入位置には `{ rel: "contents" }` を入れましょう。

## 基本

設定ファイル `vivliostyle.config.js` で目次を設定してみよう。

まず `toc: true` を追加すると目次が自動生成されるようになります。ただし、この時点で生成される目次は、目次の見出しが `Table of Contents` になっています。そこで目次の見出しを変更しましょう。 `tocTitle: "目次"` です。

次に、セクションのどの深さまでを目次に出すか？の設定があります。`sectionDepth: 3`　のように設定しましょう。

