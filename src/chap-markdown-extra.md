# markdown応用編

### 相互参照

筆者のアイコンは<a href="#erukiti-icon" data-ref="fig"></a>です。

```md
筆者のアイコンは<a href="#erukiti-icon" data-ref="fig"></a>です。
```

### ルビ

{五帝|オーバーエレメント}とか{裏|うら}どん{兵衛|べえ}という感じでルビを振ることができる。

```md
{五帝|オーバーエレメント}とか{裏|うら}どん{兵衛|べえ}という感じでルビを振ることができる。
```

### 右寄せ・中央揃え

<div class="flush-right">@erukiti</div>

<div style="text-align: center;">
こんにちは
</div>

```md
<div class="flush-right">@erukiti</div>

<div style="text-align: center;">
こんにちは
</div>
```

横書きの文章において、原則/自動的に左寄せになるため、右寄せを使うのは、署名などに限られますが、ときどき書式を忘れるので…

### 空行
明示的に改行・空行を入れたいことがあります。

htmlの<br>タグを使いましょう

<br>

こんな感じ

```md
htmlの<br>タグを使いましょう

<br>

こんな感じ

```
