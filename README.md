# 如何贡献

## `hosts.yml`

此文件使用YAML语法，详见[官网](http://yaml.org/)或[维基百科](https://zh.wikipedia.org/wiki/YAML)。

由于格式十分简单，一般自行观察[`hosts.yml`](https://github.com/googlehosts/hosts/blob/hosts-source/hosts.yml)和[`hosts`](https://github.com/googlehosts/hosts/blob/master/hosts)即可理解，这里就不给出具体说明了。

## 其他文件

其他文件用于由`hosts.yml`生成master分支中的hosts等文件，不建议随意修改。如果需要生成特定格式的文件，可以开[Issue](https://github.com/googlehosts/hosts/issues/new)反馈。

## 在本地由`hosts.yml`生成`hosts`等文件（仅Linux环境）

1. 安装[Node.js](https://nodejs.org/en/download/current/)。
2. 在项目的文件夹下打开终端。
3. 运行`npm install`。
4. 运行`bash generate-local.sh`。
5. 文件会被自动生成在`output`文件夹下。
