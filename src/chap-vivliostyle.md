---
class: chapter
---

# VivlioStyleについて

今回、Re:VIEW tecbookスタイルを極力再現して、合同誌に使えるかどうか検証をするという~~苦行~~チャレンジをしてみて、色々と知見を得られたのでここに記します。

## VivlioStyleで読まなければならないドキュメント

GitHubにあるドキュメントが一番確実です。

* GitHub VFMのドキュメント<span class="footnote">https://github.com/vivliostyle/vfm/blob/main/docs/ja/vfm.md</span>
    * VFMの詳細な仕様の確認
* GitHub vivliostyle-cliのドキュメント<span class="footnote">https://github.com/vivliostyle/vivliostyle-cli/tree/main/docs/ja</span>で一通り
    * 起動オプションなどはこちら
* 公式サイトのVivliostyle で本を作ろう<span class="footnote">https://vivliostyle.org/ja/make-books-with-vivliostyle/</span>
    * 実際に製本されたサンプルとしてソースコードを読むといいでしょう

## VivlioStyleの構造

VivlioStyleは、元々はCSSを組版に使うための仕様を、ブラウザ上で無理矢理実現するshimのようなものから始まったようで、その仕様にそって実装されたHTML+CSSをページで区切った形でレンダリングするためのソフトウェアです。たぶん。

要するに、CSS組版エンジンのみが存在していた状態です。ここにコマンドラインからビルドやプレビューができるようになったvivliostyle-cliと、Markdown対応をするためのVFMが追加された形です。

登場人物|役割
-------|---
VivlioStyle|CSS組版のエンジン。所定のフォーマットにそったHTML+CSSをレンダリングする
vivliostyle-cli|組版エンジン以外の工程を行ってくれるもの。単なるCLIラッパーではない
VFM|Markdownを、unifiedというOSSを使って特定のHTML構造に変換する
テーマ|CSSの定義がされている。これをいじることになる

たとえば、目次(ToC)の自動生成など、大変の関心事はvivliostyle-cli側に実装されています<span class="footnote">この点を理解せずにコードリーディングを始めると「どこに何があるかさっぱりわからん！！！！！」ってなるかもしれません</span>。基本的にはvivliostyle-cliをコードリーディングしていくことになるでしょう。

