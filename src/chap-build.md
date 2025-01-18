---
class: chapter
---

# PDFを生成する

さて、初期設定ができて、Markdownで原稿を書けるようになったら、今度は実際にPDFを作成してみましょう。プレビューでは生じなかった問題が色々出てくることがあるため、なるべく早いうちに実際にPDFを生成した方がいいです。

## 生成するコマンド

`create-book` で作ったディレクトリの場合 `npm run build` でデジタル環境向けのPDFが生成されます。

このPDFは、ソースコードがプリティプリントと呼ばれる、構文を際立たせる色分けなどをはじめとして、カラー前提のものなのと、印刷所に提出するのには不適合なPDFである点には注意しないといけません。とは言え、最近の技術同人誌シーンでは、電子版のみ販売するというケースも割とありえるため、本として印刷しなければこれでいいのかもしれません。

## 印刷するためのPDFを作成する

印刷用のPDFを生成するためにはオプションが必要です。`npm run build -- --press-ready` を実行しましょう。このコマンドを実行するときはDockerをインストールする必要があります。

```sh
% npm run build -- --press-ready

> vivliostyle-techbook-sample@0.0.0 build
> vivliostyle build --press-ready

✔ chap-setup.md セットアップ
✔ chap-markdown.md Markdown
🚀 Running press-ready
📦 Launching docker container
==> Listing fonts in '/data/var/folders/mp/2fv3s_1j6wvddl60_xv7bz700000gn/T/vivliostyle-cli-1baba2a0-cb75-11ef-bd5a-e5df5af045df.pdf'
name                 type          embedded  subset
AAAAAA+Verdana-Bold  CID TrueType  yes       yes
BAAAAA+Verdana       CID TrueType  yes       yes
CAAAAA+Verdana-Bold  CID TrueType  yes       yes
[none]               Type 3        yes       no
EAAAAA+Verdana       CID TrueType  yes       yes
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
IAAAAA+Verdana-Bold  CID TrueType  yes       yes
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
JAAAAA+Monaco        CID TrueType  yes       yes
[none]               Type 3        yes       no
KAAAAA+Verdana       CID TrueType  yes       yes
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
JAAAAA+Monaco        CID TrueType  yes       yes
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
BAAAAA+Verdana       CID TrueType  yes       yes
[none]               Type 3        yes       no
[none]               Type 3        yes       no
JAAAAA+Monaco        CID TrueType  yes       yes
JAAAAA+Monaco        CID TrueType  yes       yes
JAAAAA+Monaco        CID TrueType  yes       yes
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
JAAAAA+Monaco        CID TrueType  yes       yes
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
JAAAAA+Monaco        CID TrueType  yes       yes
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
[none]               Type 3        yes       no
JAAAAA+Monaco        CID TrueType  yes       yes
==> Some fonts need to be outlined
==> Generating PDF
Input            /data/var/folders/mp/2fv3s_1j6wvddl60_xv7bz700000gn/T/vivliostyle-cli-1baba2a0-cb75-11ef-bd5a-e5df5af045df.pdf
Output           /data/Users/erukiti/work/writing/vivliostyle-techbook-sample/output.pdf
Color Mode       CMYK
Enforce outline  yes
Boundary boxes   no
==> Ghostscript: Done without error
==> Listing fonts in '/data/Users/erukiti/work/writing/vivliostyle-techbook-sample/output.pdf'
==> No fonts found
==> Every font is properly embedded
ℹ Processing PDF
◡ Processing PDF
output.pdf has been created.
🎉 Built successfully.
```

この長ったらしいコマンドでは、pdffontsというコマンドを使ってフォントの埋め込み状況を確認しています。embeddedが全部yesになっていれば印刷所向けになっています。この事例では問題ないようです。

## PDFが印刷所対応かを確認する

確認する方法としては、Adobe Acrobat Reader を使う方法と、Xpdfというソフトに含まれる `pdffonts` というコマンドを使う方法があります。

### TBD: Acrobat Reader 使うやつ。誰か書いて

### pdffontsを使って確認する

MacでHomebrewを使っているなら`brew install xpdf`でインストールができます。インストールしたあとは一度ターミナルを抜けないと、インストールされたコマンドを認識してくれないことがあるため要注意です。ターミナルを立ち上げ直すと `pdffonts output.pdf` で確認ができるはずです。

```
% pdffonts output.pdf
name                                           type              emb sub uni prob object ID
---------------------------------------------- ----------------- --- --- --- ---- ---------
AAAAAA+Verdana-Bold                            CID TrueType      yes yes yes           4  0
BAAAAA+Verdana                                 CID TrueType      yes yes yes           5  0
CAAAAA+Verdana-Bold                            CID TrueType      yes yes yes           8  0
[none]                                         Type 3            yes no  yes           9  0
EAAAAA+Verdana                                 CID TrueType      yes yes yes          10  0
[none]                                         Type 3            yes no  yes          30  0
[none]                                         Type 3            yes no  yes          31  0
[none]                                         Type 3            yes no  yes          32  0
IAAAAA+Verdana-Bold                            CID TrueType      yes yes yes          33  0
[none]                                         Type 3            yes no  yes          34  0
[none]                                         Type 3            yes no  yes          35  0
[none]                                         Type 3            yes no  yes          36  0
[none]                                         Type 3            yes no  yes          39  0
[none]                                         Type 3            yes no  yes          21  0
[none]                                         Type 3            yes no  yes          22  0
JAAAAA+Monaco                                  CID TrueType      yes yes yes          40  0
[none]                                         Type 3            yes no  yes          23  0
[none]                                         Type 3            yes no  yes          41  0
...省略
```

このコマンドはフォントの設定を行ったときに特に重要です。せっかく組版するのだから使いたいフォントを指定したとして、そのフォントが正しく使われているかを確認する必要があります。そういうときに使うと、フォントの名前を確認できます。

nameに`[none]` と表示されていますが、これはVivliostyleがPDFを生成するときに使うChromiumの特殊なものが使われているためで、特に問題はありません。
