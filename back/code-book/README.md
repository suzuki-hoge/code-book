# Code Book ( Spring Boot )

## 開発関係
ホストマシンの Java ( 8 以上 ) を使う

### サーバの起動
まず H2 データベースを作成する

```
$ touch h2db.mv.db
```

CLI で起動する場合

```
$ make up
```

IntelliJ で起動する場合

`CodeBookApplication#Main` を `Run` → `Debug` 実行する

こちらの方法では `Build` → `Build Project` でホットデプロイが可能

### データベースについて
H2 のファイルモードを使用する

上記コマンドによるサーバ起動後に http://localhost:8080/h2-console/ にアクセスすると、任意のクエリを発行できる

接続情報は次の通り

| key            | value            |
| :--            | :--              |
| `Driver Class` | `org.h2.Driver`  |
| `JDBC URL`     | `jdbc:h2:./h2db` |
| `User Name`    | `user`           |
| `Password`     | `pw`             |

マイグレーションはサーバ起動時に `src/resources/*.sql` によって行われる

不整合やプロセスロックなどにより挙動がおかしくなった場合は、`h2db.mv.db` の削除と Spring Boot のプロセス削除をすれば直る

## 基本スタンス
- 一切のコード品質を気にしない

## 学習記録
### ver 1
#### ✅ やったこと
- なし

#### ⛔ やらなかったこと

#### 🤔 気になったこと

#### 🔁 次回
- Backend を構築する

### ver 2
#### ✅ やったこと
- Spring Boot に関しては特記なし

#### ⛔ やらなかったこと
- CRUD のうち Update と Delete

#### 🤔 気になったこと
- ドメインモデルを適当に作り過ぎてフロントとバック双方で苦労した

#### 🔁 次回
- 次はドメインも考えつつ deno にしたい
