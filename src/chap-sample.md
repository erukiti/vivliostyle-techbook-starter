---
class: chapter
---

# サンプルと書式

TBD: chap-markdownと統合するか、よりチャレンジングな章にしちゃう

TBD: 脚注を大量に入れる

みじかい脚注<span class="footnote">みじかい1</span><span class="footnote">みじかい2</span>。

ほげ<span class="footnote">「ほげ（hoge）」は、プログラミングやIT系の文脈でよく使われるダミー文字列、いわゆる「サンプル用の適当な名前」を指す言葉です。英語圏で「foo」「bar」などと書かれるのと同様に、日本語のコミュニティでは「ほげ」「ふが」などがサンプルコードや説明文中でしばしば登場します。特定の意味はなく、ただの placeholder（置き換え用）として使われます。</span>。

foo<span class="footnote">「foo」はプログラミングやITの文脈でよく登場するダミー文字列（サンプル用の適当な名前）です。たとえば、サンプルコード内で変数名が必要なときに意味のある名前を付ける代わりに「foo」や「bar」などを使う、という風に用いられます。特定の意味はなく、ただの placeholder（置き換え用）として使われる言葉です。</span>

Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.


![筆者のアイコン画像](images/erukiti-icon.png){id=erukiti-icon2}

筆者のアイコンは<a href="#erukiti-icon2" data-ref="fig"></a>です。

```md
筆者のアイコンは<a href="#erukiti-icon" data-ref="fig"></a>です。
```

図の番号はchapterごとに途切れる！！！！




```ts:sample-source
// 日本語コメントalphabet
export type Hoge = {
    hoge: string
}

/** JSDoc
 * ほげー捕鯨ふがー
 */
export const func = (): Hoge => {
    return {
        hoge: "hoge!!!!"
    }
}
```

* <a href="#sample-source" data-ref="fig"></a>

* アルファベット(alphabet)混じり。`Alphabet`
* アルファベット（alphabet）混じり。`Alphabet`
* abcdefghijklmnopqrstuvwxyz
* ABCDEFGHIJKLMNOPQRSTUVWXYZ
* _abcdefghijklmnopqrstuvwxyz_
* _ABCDEFGHIJKLMNOPQRSTUVWXYZ_
* **abcdefghijklmnopqrstuvwxyz**
* **ABCDEFGHIJKLMNOPQRSTUVWXYZ**

フォントはBIZ UD Mincho + IBM Plex Serifにしてみた。


