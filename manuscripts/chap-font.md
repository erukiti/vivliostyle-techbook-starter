---
class: chapter
---

# フォントを設定する

デフォルトのフォントを使った場合、生成する環境に依存するという危険な問題があります。ローカルでビルドをしていると正常なのに、CIでビルドすると空白になったり豆腐が出力されてりします。

そこで、任意のフォントを指定するようにしたいのですが、VivlioStyleにおいて、フォントの指定は簡単ではありません。

## 結論

* フォントのパッケージを作成する
    * フォント用のディレクトリ `fonts` を作成する
    * フォントファイル `fonts/hoge.ttf` を配置する
    * フォントファイルを読み込むCSS `fonts/theme.css`を作成する
    * フォントをテーマとして認識させるための `package.json` を作成する
* `vivliostyle.config.js` の `theme` の末尾に `./fonts` を追加する

これらの行程が必須です[^create-font-package]。

[^create-font-package]: ちなみにこの `fonts` ディレクトリはパッケージになっているため、あなたがnpmの知識を持っていて、メンテナンスする気があって、著作権的に問題がなければ、世の中に公開するという選択肢もあります。この本は「それを面倒くさすぎる」と考える人向けの本です。

## フォントのパッケージを作成する

「俺はフォントを変更したいだけなのに、なんでパッケージなんて作らないといけないんだよ！😡」となるかもしれませんが、やることはそんなに難しくないです。

おさらいです。

* フォント用のディレクトリ `fonts` を作成する
* フォントファイル `fonts/hoge.ttf` を配置する
* フォントファイルを読み込むCSS `fonts/theme.css`を作成する
* フォントをテーマとして認識させるための `package.json` を作成する

これらをやればいけますね。

まず `fonts` ディレクトリを作成しましょう。

```sh
mkdir fonts
```

フォントファイルを `fonts` ディレクトリの下にいれましょう。フォントファイルが増えたら適切にディレクトリ分割した方がいいかもしれませんが、そうしたくなったらでいいです。たぶんいらないです。

たとえば、この本では、以下のようになっています。

```
 % ls fonts
BIZUDGothic-Bold.ttf
BIZUDGothic-Regular.ttf
BIZUDMincho-Bold.ttf
BIZUDMincho-Regular.ttf
BIZUDPGothic-Bold.ttf
BIZUDPGothic-Regular.ttf
BIZUDPMincho-Bold.ttf
BIZUDPMincho-Regular.ttf
CascadiaMono.ttf
CascadiaMonoItalic.ttf
IBMPlexSans-Bold.ttf
IBMPlexSans-BoldItalic.ttf
IBMPlexSans-ExtraLight.ttf
IBMPlexSans-ExtraLightItalic.ttf
IBMPlexSans-Italic.ttf
IBMPlexSans-Light.ttf
IBMPlexSans-LightItalic.ttf
IBMPlexSans-Medium.ttf
IBMPlexSans-MediumItalic.ttf
IBMPlexSans-Regular.ttf
IBMPlexSans-SemiBold.ttf
IBMPlexSans-SemiBoldItalic.ttf
IBMPlexSans-Text.ttf
IBMPlexSans-TextItalic.ttf
IBMPlexSans-Thin.ttf
IBMPlexSans-ThinItalic.ttf
IBMPlexSerif-Bold.ttf
IBMPlexSerif-BoldItalic.ttf
IBMPlexSerif-ExtraLight.ttf
IBMPlexSerif-ExtraLightItalic.ttf
IBMPlexSerif-Italic.ttf
IBMPlexSerif-Light.ttf
IBMPlexSerif-LightItalic.ttf
IBMPlexSerif-Medium.ttf
IBMPlexSerif-MediumItalic.ttf
IBMPlexSerif-Regular.ttf
IBMPlexSerif-SemiBold.ttf
IBMPlexSerif-SemiBoldItalic.ttf
IBMPlexSerif-Text.ttf
IBMPlexSerif-TextItalic.ttf
IBMPlexSerif-Thin.ttf
IBMPlexSerif-ThinItalic.ttf
```

* `BIZ UD Gothic`
* `BIZ UD Mincho`
* `CascadiaMono`
* `IBM Plex Sans`
* `IBM Plex Serif`

を配置しています。といっても、全部を使う必要はなくかなり被っています。

さて、これらのファイルは配置しても読み込まないと意味がありません。

VivlioStyleはCSS組版を行うシステムなのでCSSが必要です。

```css:theme.css
@font-face {
    font-family: 'gothic';
    src: url('./BIZUDGothic-Regular.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

:root {
    --vs-font-family: 'gothic', sans-serif;
}
```

たとえば、最低限を設定するならこのようになります。

* `@font-face` で細かいフォントの読み込みをする
* `:root` の `--vs-font-family` で読み込むフォントを指定する

これでCSSは大丈夫なはずなので最後に `package.json` を作成しましょう。といっても簡単です。

```json:package.json
{
    "name": "fonts",
    "main": "theme.css"
}
```

これだけです。

あとは、vivliostyle.config.jsonにこの、フォントのテーマを登録しましょう。

```js:vivliostyle.config.js
  theme: [
    "@vivliostyle/theme-techbook@^2.0.0",
    "./fonts",
  ],
```

メインとなるテーマの後に、この `fonts` のテーマを指定する必要があります。ちなみにここで重要なのは相対パス `./fonts` のように書くことです。もしこれを `fonts` とだけ書いたらどうなるか？npmパッケージのfontsを探してきて勝手にインストールしやがります。そいつはVivolioStyleのテーマパッケージではないため意図した挙動にはなりません。しかも、エラーも何も出ず、しれっとフォントが反映されないという地獄が待っています。

## BIZ UDフォントとIBM Plexフォントを組み合わせる

筆者はユニバーサルデザインフォントを愛好しています。ユニバーサルデザインフォントは過剰な装飾を排し、人の認知負荷を下げてくれるものです。元々はディスクレイシアの方のために作られたものですが、そういった病状が出ていない人にとっても認知負荷を下げると「読みやすい」という利点があります[^accessibility-for-all]。
[^accessibility-for-all]: アクセシビリティは、ハンディキャップを持つ人のためのモノとは限らないという話があります。そうじゃない人にとっても「分かりやすくなる」という利点があることも珍しくありません。アクセシビリティは決して特定の人のためのものではありません。

BIZ UD GothicおよびBIZ UD Minchoは、そういったユニバーサルデザインのフォントでかつ、自由に使えるフォントです。

このフォントの難点は、アルファベットの字間が空きすぎて、見るに堪えないというものです。そこで、アルファベットだけ別のフォントにして組み合わせるという荒技があります。

ChatGPTに相談したところ、自由に使える欧文のユニバーサルデザインフォントとして、IBM Plexを推奨されたので試してみたところ確かに読みやすかったので採用してみました。

```css
:root {
    --vs-font-family: 'IBM Plex Sans', 'gothic', sans-serif;
}
```

指定方法はこのような感じです。
`BIZ UD Gothic` にもアルファベットが含まれているため、欧文フォントのみである `IBM Plex Sans` を優先しています。

