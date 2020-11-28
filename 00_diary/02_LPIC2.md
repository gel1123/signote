
## メモ

### SysVinit
システム起動後、initプロセスが起動して以下の処理を行う

1. /etc/inittabを読む
2. /etc/rc.sysinitを実行する
3. /etc/rcを実行
4. /etc/rc0~6.dを実行

SysVinit勉強できる環境整えてから続きは勉強...

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
