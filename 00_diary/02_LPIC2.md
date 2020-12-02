
## メモ

### SysVinit
システム起動後、initプロセスが起動して以下の処理を行う

1. /etc/inittabを読む
2. /etc/rc.sysinitを実行する
3. /etc/rcを実行
4. /etc/rc0~6.dを実行

SysVinit勉強できる環境整えてから続きは勉強...

### systemd
システム起動後、systemdでは以下の順序で処理が進む

1. シンボリックリンク「default.target」が実行される<br>
※default.targetは以下のいずれかの階層にある？<br>
/etc/systemd/system（管理者がカスタマイズしたユニットの置き場所　※優先度が高い）<br>
/lib/systemd/system（パッケージインストール時に自動で配置されるユニット　※優先度が低い. パッケージ更新ごとに設定が置き換えられてしまうため、カスタマイズするべきはこちらではない）
2. 

## 勉強中のぼやき

### 2020-11-28
* systemd環境はあるけど、SysVinit環境ないから作らないと勉強できないな...
* タブレットのubuntu-in-termuxがSysVinit環境だったのでこれを勉強に使える
* と思ったら、Ubuntuには/etc/inittabないのか（代わりにUpstartを使ってるとのこと。/etc/inittabについて勉強したかった）
* 調べた感じ、UpStartなしで完全なSysVinitのみの環境用意するならCentOS5がよさそう
* GCPでCentOS5のマシン立ち上げるか...と思ったが、GCPのComputeEngineで選べるCentOSのVMはバージョン6以降しかなかった
* Dockerで勉強するか（Docker特有の制限事項が勉強の邪魔になりそうで、避けていた選択肢）
* 自宅のWindowsにDocker入れてるけど、Windowsの起動が遅いのが嫌だから、タブレットにDocker入れることにした
* termuxではDocker無理っぽかったので自宅WindowsのDockerを使うか、ほかのなにかで環境つくろう
* Docker(podman)で/sbin/initで動かせるcentos5（or "docker run --init"が使えるcentos5）を用意しようとしたけど道のりが長そうで面倒くさくなりました、ほかのなにかで環境をつくることにする
* 結局LPIC304の勉強がてらkvmでcentos5.5の環境を用意することにしました

### 2020-12-02
* kvmでcentos5.5の環境作るのに難航（OSのブートがうまくいかない）
* なのでxenでの環境構築を試みようとしたが、一旦別の資格の勉強を急遽しないといけなくなったため中断
