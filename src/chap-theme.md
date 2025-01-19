---
class: chapter
---

# テーマを作る

VivliostyleはCSS組版を行うためのソフトウェアです。そのため、見た目をいじりたければ、HTMLとCSSをゴリゴリにいじる必要があります。

公式の `@vivliostyle/tech-book` である程度、我々の求めるものは出来ていますが、細かいところでついついいじりたくなってしまいます。実際にこの本では大分見た目が変わっています。

そこでこの章では、実際にテーマのカスタマイズに手を出してみましょう。

## テーマカスタマイズに必要な工程

テーマというのは、ある一定のルールで作られたCSSで、npmパッケージもしくはnpmパッケージとしてリリース可能な状態のファイル群です。

* ある1つのディレクトリに、テーマに必要なファイルを収める（サブディレクトリももちろん利用可能）
* 必ず `package.json` が含まれる
* `package.json` の `main` でテーマとして使うCSSファイルを指定する

つまりHTMLの構造をJavaScriptを使って書き換えるようなことはできず、CSSで出来ることがすべてです。

## コードブロックの横幅が固定されていないのを修正する

筆者が公式テーマで引っかかったのはまずこの問題でした。

これは比較的簡単です。

```css
pre {
  width: 100%;
}
```

## コラムを用意する

筆者としてはRe:VIEWのようなコラムを書きたいです。これはCSSだけでは実現出来なかったため、コラム自体はHTMLで書く必要があります。

必要なCSSは次の通り。この場合 `column` と `column-title` というクラスにスタイルを定義しています。

```css
.column {
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.column-title {
  font-weight: bold;
  font-family: var(--vs--heading-font-family);
  margin-bottom: 0.5rem;
}

.column-title::before {
  content: "■コラム";
  margin-right: 0.5rem;
}

.column p:last-child {
  margin-bottom: 0;
}
```

```md
<div class="column">
<div class="column-title">コラムのタイトル</div>
コラムの内容
</div>
```

このようなHTMLを書くことで、コラム用のCSSが当てられた状態になります。

<!--
## 公式テーマを読み解く

2025年1月時点での公式テーマは、CSS変数という技術が使われています。初期のテーマはSCSSなどを使って作られていたようですがCSS変数の仕様化などによってわざわざSCSSを使わなくてもいいようになりました。

-->
