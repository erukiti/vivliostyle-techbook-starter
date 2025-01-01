# テーマを作る

VivlioStyleはCSS組版を行うためのソフトウェアです。そのため誠に残念ながらCSSをゴリゴリいじることを大前提としたプロダクトです。。我々のような「楽をして本を書きたい」勢にはつらいことですがCSSをいじる必要性があります。もちろん `@vivliostyle/tech-book` である程度、我々の求めるものは出来ているんですが、細かいところに不満が続出します。

そこでこの章で、Re:VIEWのようなクォリティの、使い回せるテーマを作ってみましょう。

<!--
なお、読者のみなさんは、別にこの章を読まなくても `viviostyle-base-tech-book` テーマを導入するだけで大丈夫です。

でも、筆者も無限にこのテーマをメンテナンスできるとは限らないため、可能であれば、テーマの開発にご協力願えればと思います。
-->

## 標準テーマで出来ないことや不満点は何か？

* Re:VIEWにあるようなコラムが書けないこと
* コードブロックの横幅が固定してない
* 脚注が、章の最後にまとめて出る
* どうせならMermaid使いたい

## テーマカスタマイズに必要な工程

テーマは、所定のルールに従う必要があります。

* テーマは一つのディレクトリであること
* そのディレクトリには必ず `package.json` が含まれていること
* `package.json` の `main` でCSSを指定すること

## コードブロックの横幅が固定されていないのを修正する

```css
pre {
  width: 100%;
}
```

## コラムを用意する

コラムを書けるようにしたい。

<div class="column">
<div class="column-title">コラム: 参考情報</div>

ふが
ぴよ
</div>

必要なCSSは次の通り。この場合 `column` と `column-title` というクラスにスタイルを振っている。

```css
.column {
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f9fa;
}

.column-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}
```

そのため、コラムはHTMLで書く必要がある。MarkdownにはHTMLをそのまま埋め込めるため、このような書き方ができる。本当はもうちょっと楽な簡易記法があればいいのだけど、それをやりたい場合は、VFMプロセッサーをいじる必要がある。

```md
<div class="column">
<div class="column-title">コラム: 参考情報</div>

ふが
ぴよ
</div>
```

