# Code Book ( Next.js )

## 開発関係
ホストマシンの npm を使う

### サーバの起動
```
$ make up
```

### StoryBook の起動
```
$ make sb
```

## 基本スタンス
- 手広くやらない
- 動くの優先
- ある程度動いたらぶっ壊してやり直す

## 学習記録
### ver 1
#### ✅ やったこと
- StoryBook で Component をひたすら実装
    - pc レイアウトのみ
- Atomic Design の導入
- styled-components の利用

#### ⛔ やらなかったこと
- `pages/` の実装
- 振る舞いの実装
- バックエンド結合

#### 🤔 気になったこと
- `Book` のような型と `<Book>` のようなコンポーネントの名前が衝突する
- ドメインクラスをなんとなく考えていても、コンポーネント構成は案外迷う

#### 🔁 次回
- レスポンシブ化
- StoryBook ではなく画面として動かす
- バックエンド結合
- バリデーション

### ver 2

#### ✅ やったこと
- `pages/` を実装し `<Link>` も調整した
- コードハイライトや Google Fonts などの外部モジュールの利用
- `<Header>` や `<Frame>` などのコンポーネントの実装
- React Query ( `useQuery` ) を利用したバックエンド呼び出し
- API Route を利用したバックエンドのプロキシ
- React Hook Form と Yup によるバリデーション ( 手抜き )

#### ⛔ やらなかったこと
- 認証 ( アクセスごとにランダムログイン )
- CRUD のうち Update と Delete
- テスト

#### 🤔 気になったこと
- `style.css` の読み込み
    - 各コンポーネントから読み込めず、`_app.tsx` からしか読み込めない
    - それだと StoryBook に反映されない
- `router.query` が非同期で埋まる
    - クエリパラメータがわかる前にバックエンド通信が走って `500` が出てしまう ( `pages/books/[id].tsx` )
- Atomic Design の徹底がめんどくさい
    - 広く使っているコンポーネントに属性を後から足すのは大変
    - 余白調整のための `<div>` くらいは `<div style={...}>` でいい気がする
- API Route の必要性
    - 利用しないと `localhost:3000 -> localhost:8080` が CORS になってしまう
    - 利用すると `api/books/[id].ts` などでちゃんと型定義 ( `Date` など ) をしても、結局 `string` しか持ち越せない
- ドメイン周りの型が妙に辛い
    - `Tag` と `types/codes.ts` を見直したい
    - `FileCode` や `SnippetCode` の動的フォームが辛い
- なんか重い気がする

#### 🔁 次回
- ドメイン見直したい
- tRPC 気になる
- テストそろそろやろうかな

