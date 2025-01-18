---
class: chapter
---

# Vivliostyleについて

Vivliostyleというソフトウェアは、HTML+CSSを使ったCSS組版を行うためのエンジンを中心として、使いやすい形にするためのCLIツールや、MarkdownをHTMLに変換するためのVFMも含めたエコシステムでもあります。

## 背景

Vivliostyeは、2014年にオープンソースでウェブ標準技術を使ってCSS組版をするために生まれたプロジェクトです。

当時のCSS組版をするための技術は完全な仕様化はされておらず、ブラウザでの実装も壊滅的で、特定のCSS組版を行う限られた商用ソフトウェアのみがあり、それらのソフトウェアの仕様がデファクトスタンダードになっているという状況でした。

* ウェブ技術と印刷の間にあるギャップを埋めるために生まれた<span class="footnote">https://vivliostyle.org/ja/blog/2018/03/26/a-new-beginning/</span>
* フルスクラッチではなく、当時似たようなことを考えていたプロジェクトをベースに作れた。EPUB Adaptive Layoutという仕様<span class="footnote">https://idpf.org/epub/pgt/</span>と、そのサンプル実装<span class="footnote">https://github.com/sorotokin/adaptive-layout</span>を元にしている。

元がCSSとJavaScriptを工夫して、ブラウザに足りないものを補うという思想で生まれたプロジェクトで、エンジンと、それを閲覧するためのビューアがメインであり、これが `vivliostyle.js` です。

2018年頃にオープンソース開発者コミュニティが活発化し、実際の印刷ワークフローに乗せるためのCLIである `vivliostyle-cli` が登場し、2020年頃から `VFM` によるMarkdownの利用が始まりました。また、2020年はテーマファイルというものが生まれたタイミングでもあります。

* vivliostyle.js: 元々はエンジンとビューアがメインだった．責務はレンダリングに限定されている
* vivliostyle-cli: 我々が目にするものの多くは実はCLIが担っている
* VFM: unifiedの仕組みを使ってMarkdownをHTMLに変換している
* 2020年から、テーマファイルが開発されるようになった

このように、複数の人間が異なる立場で、エンジン・ビューアと、CLIと、VFMと、テーマを開発してきた、という背景情報を踏まえておくと、Vivliostyleの調査が捗るはずです。

たとえば目次生成について知りたければvivliostyle-cliのソースを読むことになります。というよりは、ほとんどのケースではvivliostyle-cliのソースを読めば事足りるはずです。

また、vivliostyle-cliが吐き出すHTMLの構造をよく確認する必要があります。テーマファイルはそのHTMLの構造を元に作られているため、テーマを理解するために必要です。

* vivliostyle.js はHTML+CSSありき
* vivliostyle-cliは、様々なインプットを vivliostyle.js で処理できる形にしている。利用者としての大半の関心事はここにある

## Vivliostyleで読むべきドキュメント

GitHubにあるドキュメントが一番確実です。おそらく、Vivliostyleを普通に使う点では、組版エンジンそのものに踏み込むことはまれで、知りたい事のほとんどはCLIかVFMかテーマにあるはずで、前述の通り、vivliostyle-cliが知りたいことのほとんどのはずです。

* GitHubにあるvivliostyle-cliのドキュメント<span class="footnote">https://github.com/vivliostyle/vivliostyle-cli/tree/main/docs/ja</span>で一通り
    * 起動オプションや、vivliostyle.config.jsの仕様はここを読むのが一番確実
* GitHubにあるVFMのドキュメント<span class="footnote">https://github.com/vivliostyle/vfm/blob/main/docs/ja/vfm.md</span>
    * VFMの詳細な仕様の確認
* GitHubにある公式テーマ<span class="footnote">https://github.com/vivliostyle/themes</span>
* 公式サイトのVivliostyle で本を作ろう<span class="footnote">https://vivliostyle.org/ja/make-books-with-vivliostyle/</span>
    * 実際に製本されたサンプルとセットでソースコードが読めます

