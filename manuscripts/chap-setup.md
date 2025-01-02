---
class: chapter
---

# セットアップ

ViviloStyleはJavaScriptで書かれたソフトウェアです。そのため、VivlioStyleを使うためにはJavaScript環境を構築する必要があります。JavaScriptを動かすための環境は、普通はNode.jsが使われますが、筆者のおすすめはBunです。

## はじめに手順

1. システムにbunをインストールする（Node.jsがあるなら不要）
2. create-bookで、本のディレクトリを作成する
3. 本のディレクトリにvivliostyleをインストールする

この3つの手順です。

## 1. システムにbunをインストールする

Bunは、Node.jsとほぼ同じことが出来て、Node.jsより遙かに性能が良いJavaScript環境です。
インストールは簡単です。ターミナルと呼ばれるソフトを起動してください。

```sh:Mac/Linux
curl -fsSL https://bun.sh/install | bash
```

```powershell:Windows
powershell -c "irm bun.sh/install.ps1 | iex"
```

ターミナル上で、自分のOSに合ったコマンドを実行してください。

インストールが完了したら `bun -v` を実行してみてください。

```sh
% bun -v
1.1.34
```

このようにBunのバージョンが表示されます。されないようなら、一度ターミナルを完全に終了させてから、ターミナルを起動させてみてください。それでも動かない場合は、頑張って！

## 2. create-bookで、本のディレクトリを作成する

VivlioStyleは、必要なファイルがそろっている状態で `vivliostyle build` もしくは `vivliostyle preview` コマンドで実行できます。ところが、この必要なファイルを用意するのは面倒なので普通は `create-book` というツールを使ってファイルを作成します。

コマンドは `bunx create-book <ディレクトリ名>` です。

```sh
% bunx create-book <ディレクトリ名>
? Description description
? Author name erukiti
? Author email erukiti+github@gmail.com
? License MIT
? choose theme @vivliostyle/theme-techbook - Techbook (技術同人誌) theme

Creating a new package in /Users/erukiti/work/toybox/hoge.

Initializing a git repository
> git init

Installing dependencies using bun
TypeError: a is not iterable (cannot read property undefined)
    at J (/private/tmp/bunx-501-create-book@latest/node_modules/create-create-app/lib/index.js:1:1867)
    at je (/private/tmp/bunx-501-create-book@latest/node_modules/create-create-app/lib/index.js:4:44)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async B2 (/private/tmp/bunx-501-create-book@latest/node_modules/create-book/lib/cli.js:12:81)
    at async zp (/private/tmp/bunx-501-create-book@latest/node_modules/create-book/lib/cli.js:12:244)
```

最後に `TypeError: a is not iterable (cannot read property undefined)` が出てますが、このエラーなら問題ありません。

`Creating a new package in /Users/erukiti/work/toybox/hoge.` まで出ていれば必要なファイルが作成できています。

```sh
% cd hoge
% ls -al
total 520
drwxr-xr-x   11 erukiti  staff     352 12 23 15:39 .
drwxr-xr-x   14 erukiti  staff     448 12 23 15:39 ..
drwxr-xr-x    9 erukiti  staff     288 12 23 15:39 .git
-rw-r--r--    1 erukiti  staff    2047 12 23 15:39 .gitignore
-rw-r--r--    1 erukiti  staff    1078 12 23 15:39 LICENSE
-rw-r--r--    1 erukiti  staff     477 12 23 15:39 README.md
-rw-r--r--    1 erukiti  staff    6175 12 23 15:39 manuscript.md
drwxr-xr-x  477 erukiti  staff   15264 12 23 15:39 node_modules
-rw-r--r--    1 erukiti  staff     306 12 23 15:39 package.json
-rw-r--r--    1 erukiti  staff    1682 12 23 15:39 vivliostyle.config.js
```

これらのファイルができているなら必要なファイルはそろっているのでvivliostyleを `bun i` でインストールしましょう。

さて、必要なファイルは

* `vivliostyle.config.js`
* `package.json`
* あとは原稿ファイル（このサンプルでは `manuscript.md`）

です。





