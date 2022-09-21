# Code Book ( Backend )
## 前提条件
- Java ( 8~ ) のローカルインストール

## サーバ起動
H2 データベースの作成

```
$ touch h2db.mv.db
```

CLI で起動

```
$ make up
```

IntelliJ で起動

`CodeBookApplication#Main` を `Run` → `Debug` 実行する

こちらの方法では `Build` → `Build Project` でホットデプロイが可能

## データベース
H2 ファイルモードを使用しています

サーバ起動後に http://localhost:8080/h2-console/ にアクセスすると、任意のクエリを発行できます

接続情報は次の通りです

| key            | value            |
| :--            | :--              |
| `Driver Class` | `org.h2.Driver`  |
| `JDBC URL`     | `jdbc:h2:./h2db` |
| `User Name`    | `user`           |
| `Password`     | `pw`             |

マイグレーションはサーバ起動時に `src/resources/*.sql` によって行われます
