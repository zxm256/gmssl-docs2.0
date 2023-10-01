---
home: true
heroImage: /hero.png
heroText: GmSSL
tagline: 轻量、合规、安全、跨平台的国密算法套件
actionText: 快速上手 →
actionLink: /guide/
features:

- title: 更合规
  details: GmSSL 3 可以配置为仅包含国密算法和国密协议(TLCP协议)，依赖GmSSL 的密码应用更容易满足密码产品型号检测的要求，避免由于混杂非国密算法、不安全算法等导致的安全问题和合规问题.
- title: 更安全
  details: TLS 1.3在安全性和通信延迟上相对之前的TLS协议有巨大的提升，GmSSL 3 支持TLS 1.3协议和RFC 8998的国密套件。GmSSL 3 默认支持密钥的加密保护，提升了密码算法的抗侧信道攻击能力。
- title: 跨平台
  details: GmSSL 3 更容易跨平台，构建系统不再依赖Perl，默认的CMake构建系统可以容易地和Visual Studio、Android NDK等默认编译工具配合使用，开发者也可以手工编写Makefile在特殊环境中编译、剪裁。

---
::: slot footer
MIT Licensed | Copyright © 2014-present [Guan Zhi](https://github.com/guanzhi)
:::
### 轻松上手

``` bash

# 下载代码
git clone https://github.com/guanzhi/GmSSL.git

# 编译GmSSL
mkdir build
cd build
make
cmake ..

# 测试GmSSL
make test

# 安装GmSSL
sudo make install

```