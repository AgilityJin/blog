---
title: 系统实用命令
date: 2020-08-19
categories:
  - 系统运维
tags:
  - Command
  - Linux
  - Mac
  - Windows
---

## Linux & Mac

### which [command] 查看命令所处路径

示例: `which ls`

### tree 展示目录内容命令

tree [-aACdDfFgilnNpqstux][-I <范本样式>][-P <范本样式>][目录...]

示例: `tree -aCL 2 -I "node_modules|dist|.git"`

* -I 排除目录
* -a 打印隐藏文件
* -C 在文件和目录清单加上色彩，便于区分各种类型。
* -d 显示目录名称而非内容。
* -D 列出文件或目录的更改时间。
* -L level 限制目录显示层级。
* -s 列出文件或目录大小。
* -p 列出权限标示

### scp 文件传输命令

* 完整写法:`scp [-1246BCpqrv] [-c cipher] [-F ssh_config] [-i identity_file]
[-l limit] [-o ssh_option] [-P port] [-S program]
[[user@]host1:]file1 [...] [[user@]host2:]file2`or: `scp [可选参数] file_source file_target`
* -1： 强制scp命令使用协议ssh1
* -2： 强制scp命令使用协议ssh2
* -4： 强制scp命令只使用IPv4寻址
* -6： 强制scp命令只使用IPv6寻址
* -B： 使用批处理模式（传输过程中不询问传输口令或短语）
* -C： 允许压缩。（将-C标志传递给ssh，从而打开压缩功能）
* -p：保留原文件的修改时间，访问时间和访问权限。
* -q： 不显示传输进度条。
* -r： 递归复制整个目录。
* -v：详细方式显示输出。scp和ssh(1)会显示出整个过程的调试信息。这些信息用于调试连接，验证和配置问题。
* -c cipher： 以cipher将数据传输进行加密，这个选项将直接传递给ssh。
* -F ssh_config： 指定一个替代的ssh配置文件，此参数直接传递给ssh。
* -i identity_file： 从指定文件中读取传输时使用的密钥文件，此参数直接传递给ssh。
* -l limit： 限定用户所能使用的带宽，以Kbit/s为单位。
* -o ssh_option：如果习惯于使用ssh_config(5)中的参数传递方式，
* -P port：注意是大写的P, port是指定数据传输用到的端口号
* -S program： 指定加密传输时所使用的程序。此程序必须能够理解ssh(1)的选项。

### kill 命令

* kill [PID] 终止指定pid的进程

### lsof 命令

* lsof -i:端口号 查询占用该端口的进程

### yum 命令

* check          检查 RPM 数据库问题
* check-update   检查是否有可用的软件包更新
* clean          删除缓存数据
* deplist        列出软件包的依赖关系
* distribution-synchronization 已同步软件包到最新可用版本
* downgrade      降级软件包
* erase          从系统中移除一个或多个软件包
* fs             Acts on the filesystem data of the host, mainly for removing docs/lanuages for minimal hosts.
* fssnapshot     Creates filesystem snapshots, or lists/deletes current snapshots.
* groups         显示或使用、组信息
* help           显示用法提示
* history        显示或使用事务历史
* info           显示关于软件包或组的详细信息
* install        向系统中安装一个或多个软件包
* list           列出一个或一组软件包
* load-transaction 从文件名中加载一个已存事务
* makecache      创建元数据缓存
* provides       查找提供指定内容的软件包
* reinstall      覆盖安装软件包
* repo-pkgs      将一个源当作一个软件包组，这样我们就可以一次性安装/移除全部软件包。
* repolist       显示已配置的源
* search         在软件包详细信息中搜索指定字符串
* shell          运行交互式的 yum shell
* swap           Simple way to swap packages, instead of using shell
* update         更新系统中的一个或多个软件包
* update-minimal Works like upgrade, but goes to the 'newest' package match * which fixes a problem that affects your system
* updateinfo     Acts on repository update information
* upgrade        更新软件包同时考虑软件包取代关系
* version        显示机器和/或可用的源版本

### chmod 权限命令

chmod mode file
mode为权限设定字符串,其中
u 表示拥有者,g表示与拥有者同一群组内的用户,o表示其他以外的人,a表示三者都是.
+表示增加权限,-表示取消权限,=表示唯一设定权限.
r表示可读取,w表示可写入,x表示可执行
-c : 若该档案权限确实已经更改，才显示其更改动作
-f : 若该档案权限无法被更改也不要显示错误讯息
-v : 显示权限变更的详细资料
-R : 对目前目录下的所有档案与子目录进行相同的权限变更(即以递回的方式逐个变更)
--help : 显示辅助说明
--version : 显示版本

### 显示当前公网ip地址

curl ifconfig.me

### 重启path文件,避免需要重开终端生效

source $HOME/.bash_profile

### 软件安装来源允许控制

#### 显示任何来源选项

sudo spctl --master-disable

#### 不显示任何来源选项

sudo spctl --master-enable

### find 查找命令

#### find ./ -iname "*.txt"

./是指定路径,-iname是不区分大小写匹配名称,""内是文件名,支持正则搜索.

### grep 过滤命令

此命令可以组合使用,例如 find ./ | grep txt | grep -v linux
find查找所有文件,grep过滤出指定文件,grep -v 排除指定文件

### cp 拷贝命令

cp filename filename2

* -a 保留文件所有的权限属性
* -r 如果拷贝的是文件夹则需要此递归参数
* -v 查看实时进度

### rm 删除命令

rm 命令可以删除文件&文件夹

`rm -rf directoryName` -r是向下递归,不管多少目录,一并删除,-f是直接强行删除,不作任何提示

`rmdir directoryName`删除空目录,非空会有提示文件夹非空

* -f 强制删除,不做提示
* -r 递归删除

### top 展示进程命令

top 展示所有进程

### touch 创建文件命令

touch test.txt

### mkdir 新建文件夹命令

如果创建的是多个层级的目录需要增加-p参数

### ls 查看列表内文件命令

* -l 查看更多相关内容
* -a 查看隐藏文件

### mv 移动,重命名文件

mv a b

### less/more/cat 查看文件命令

### man 查看命令详情

## windows命令收录

### 跃点追踪命令

`tracert [param] address`
