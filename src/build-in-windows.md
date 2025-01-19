# Windowsでビルドするまでの紆余曲折

PS C:\Users\oyakata\Documents\GitHub\vivliostyle-book-sample> bun run build

## 最初のエラー：VFMのパッケージが入ってない。

'''sh
$ vivliostyle build -o online.pdf
× Error: An error occurred on loading a config file: C:/Users/oyakata/Documents/GitHub/vivliostyle-book-sample/vivliostyle.config.mjs
Error [ERR_MODULE_NOT_FOUND]: Cannot find package '@vivliostyle/vfm' imported from C:\Users\oyakata\Documents\GitHub\vivliostyle-book-sample\vivliostyle.config.mjs
    at new NodeError (node:internal/errors:405:5)
    at packageResolve (node:internal/modules/esm/resolve:781:9)
    at moduleResolve (node:internal/modules/esm/resolve:830:20)
    at defaultResolve (node:internal/modules/esm/resolve:1035:11)
    at DefaultModuleLoader.resolve (node:internal/modules/esm/loader:269:12)
    at DefaultModuleLoader.getModuleJob (node:internal/modules/esm/loader:153:32)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:76:33)
    at link (node:internal/modules/esm/module_job:75:36)

If you think this is a bug, please report at https://github.com/vivliostyle/vivliostyle-cli/issues
error: script "build" exited with code 1
'''

VFM(Vivliostyle Fravourd Markdown)のパッケージが入ってないというエラーなので、インストールする。

'''sh
PS C:\Users\oyakata\Documents\GitHub\vivliostyle-book-sample> bun install @vivliostyle/vfm
'''

## Node.jsが入ってないエラー(修正されるかも)

'''sh
PS C:\Users\oyakata\Documents\GitHub\vivliostyle-book-sample> bun run build
$ vivliostyle build -o online.pdf
× Error: An error occurred on loading a config file: C:/Users/oyakata/Documents/GitHub/vivliostyle-book-sample/vivliostyle.config.mjs
TypeError: (intermediate value).resolve is not a function
    at file:///C:/Users/oyakata/Documents/GitHub/vivliostyle-book-sample/node_modules/mermaid-isomorphic/dist/mermaid-isomorphic.js:2:26
    at ModuleJob.run (node:internal/modules/esm/module_job:192:25)
    at async DefaultModuleLoader.import (node:internal/modules/esm/loader:246:24)
    at async load (file:///C:/Users/oyakata/Documents/GitHub/vivliostyle-book-sample/node_modules/@vivliostyle/cli/dist/input/config.js:156:27)
    at async collectVivliostyleConfig (file:///C:/Users/oyakata/Documents/GitHub/vivliostyle-book-sample/node_modules/@vivliostyle/cli/dist/input/config.js:187:33)
    at async getFullConfig (file:///C:/Users/oyakata/Documents/GitHub/vivliostyle-book-sample/node_modules/@vivliostyle/cli/dist/build.js:12:24)
    at async build (file:///C:/Users/oyakata/Documents/GitHub/vivliostyle-book-sample/node_modules/@vivliostyle/cli/dist/build.js:60:27)

If you think this is a bug, please report at https://github.com/vivliostyle/vivliostyle-cli/issues
error: script "build" exited with code 1
'''

対策：
Node.jsをインストールしよう。
Windows:https://nodejs.org/en/download


'''sh
C:\Users\oyakata\Documents\GitHub\vivliostyle-book-sample>bun run build
$ vivliostyle build -o online.pdf
- Collecting build config[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\oyakata\\Documents\\GitHub\\vivliostyle-book-sample\\node_modules\\@vivliostyle\\cli\\dist\\commands\\build.js',
  '-o',
  'online.pdf'
]
× browserType.launch: Executable doesn't exist at C:\Users\oyakata\AppData\Local\ms-playwright\chromium_headless_shell-1148\chrome-win\headless_shell.exe
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
'''

## Playwrightをインストールする。

C:\Users\oyakata\Documents\GitHub\vivliostyle-book-sample>npx playwright install

これで終わり！

Vivliostyleでのビルドに成功したときのログ！

'''sh
C:\Users\oyakata\Documents\GitHub\vivliostyle-book-sample>bun run build
$ vivliostyle build -o online.pdf
- Collecting build config[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\oyakata\\Documents\\GitHub\\vivliostyle-book-sample\\node_modules\\@vivliostyle\\cli\\dist\\commands\\build.js',
  '-o',
  'online.pdf'
]
\ Processing PDF
online.pdf has been created.
Built successfully.
'''

## まとめ

プレーンなWindowsで、インストールが必要なもの

* Vivliostyle
* BUN
* Node.js
* VFM
* Playwright

ビルドコマンド:
>bun run build
