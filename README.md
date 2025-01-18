# とにかく楽にMarkdownで本を作りたい！

この本は、VivlioStyleを使って、技術同人誌を書くのに、本当に最低限必要なノウハウだけをまとめた本です。

怠惰は美徳です。技術者たるもの怠惰を極めましょう。本を書くにしても原稿だけに集中してそれ以外は怠惰にやっていきたいものですね。この本は、そんな怠惰なあなたのためにあります。

## 前提

* [Node.js](https://nodejs.org/en/)

## install

```sh
bun i
```

## 本を作成

本を作成するコマンドは `bun run build` と `bun run build:press-ready` です。

```sh:オンラインで使う前提のカラーPDFを作成するコマンド
bun run build
```

```sh:印刷対応の、なるべく白黒に寄せたPDFを作成するコマンド
bun run build:press-ready
```

## プレビュー

```sh
bun run preview
```

## フォント

License: SIL Open Font License, Version 1.1.

* https://github.com/microsoft/cascadia-code
* https://github.com/IBM/plex
* https://github.com/trueroad/HaranoAjiFonts
