# Linuxのユーザ・グループ管理用の設定ファイルについて

## ユーザ関連

### /etc/passwd
ユーザのIDやホームディレクトリ、ログインシェルなどが書かれているのが/etc/passwdです。コロンを区切り文字として、1行ごとにユーザの情報が記されています。

```bash
# test01ユーザについて、/etc/passwd内の記述を確認
cat /etc/passwd | grep test01

# /etc/passwdの内容は以下
# test01:x:1001:1001:test01@hogemail.com:/home/test01:/bin/bash
```

|列番号|意味|上記「test01」ユーザの値|
|----|----|----|
|1|ユーザ名|test01|
|2|パスワード。設定済みなら"x"が表示|x|
|3|ユーザID|1001|
|4|グループID|1001|
|5|コメント|test01@hogemail.com|
|6|ホームディレクトリ|/home/test01|
|7|ログインシェル|/bin/bash|


### /etc/shadow


## グループ関連

### /etc/group


