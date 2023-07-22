<!--
 * @Author: morning 2587462340@qq.com
 * @Date: 2023-07-20 22:28:43
 * @LastEditors: Morning
 * @LastEditTime: 2023-07-22 15:26:40
 * @FilePath: \Questionnaire\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# Questionnaire
问卷调查
本地dev分支与远程关联

### 克隆步骤
    git clone
    cd "项目文件" :进入项目文件
    git fetch :获取远程分支
    git checkout "目标分支"


### comitlint规范
```js
      build: 改变构建系统或外部依赖项（例如，gulp、npm、webpack）的提交。
      chore: 其他不修改源代码或测试文件的提交。
      ci: 更改持续集成配置文件和脚本的提交。
      docs: 与文档相关的提交，例如修改注释、README.md 等。
      feat: 添加新功能的提交。
      fix: 修复 bug 的提交。
      perf: 提高性能的提交。
      refactor: 代码重构的提交，既不修复 bug 也不添加新功能。
      revert: 撤销之前的提交的提交。
      style: 代码样式（不影响逻辑）的提交，例如空格、缩进、格式化等。
      test: 添加或修改测试的提交。
      
      git commit -m "feat: 添加用户登录功能"
```

### 注释插件的使用
      文件注释：ctrl+win+i
      函数注释：ctrl+win+t

### issues
      git push：报错
      `fatal: unable to access 'https://github.com/Fightingllc/Questionnaire.git/': Failed to connect to github.com port 443 after 21179 ms: Couldn't connect to server`
      解决方案：
            在桌面右键打开git Bash 分别执行两条命令
                  git config --global --get http.proxy
                  git config --global --get https.proxy
            正常情况下执行以上命令不会返回任何信息，如果有返回信息，说明之前配置过，执行下面命令删除在执行上面的命令即可：
                  git config --global --unset http.proxy
                  git config --global --unset https.proxy