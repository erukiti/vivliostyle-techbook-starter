# サンプルと書式

なんか書く[^footnote]。

[^footnote]: 脚注

```ts
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

* アルファベット(alphabet)混じり。`Alphabet`
* アルファベット（alphabet）混じり。`Alphabet`
* abcdefghijklmnopqrstuvwxyz
* ABCDEFGHIJKLMNOPQRSTUVWXYZ
* _abcdefghijklmnopqrstuvwxyz_
* _ABCDEFGHIJKLMNOPQRSTUVWXYZ_
* **abcdefghijklmnopqrstuvwxyz**
* **ABCDEFGHIJKLMNOPQRSTUVWXYZ**

フォントはBIZ UD Mincho + IBM Plex Serifにしてみた。
