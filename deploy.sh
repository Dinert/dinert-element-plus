#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git config --global user.email "1293437362@qq.com"
git config --global user.name "dinert"

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:dinert/dinert-element-plus-docs.git master:gh-pages
