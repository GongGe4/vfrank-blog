
# Git 使用备忘录

|功能| 命令|
|:---|:---|
查看分支 | git branch
创建分支 | git branch <name>
切换分支 | git checkout <name>
创建+切换分支 | git checkout -b <name>
删除分支 | git branch -d <name>
强行删除分支 | git branch -D <name>
删除文件 | git rm <name>
强行推送|  git push --force

## 常用

|功能| 命令|
|:---|:---|
查看本地分支与远程分支的映射关系 | git branch -vv
建立当前分支与远程分支的映射关系 | git branch -u origin/dev（git branch --set-upstream-to origin/dev）
撤销本地分支与远程分支的映射关系 | git branch --unset-upstream

## 建立分支并且建立映射
|功能| 命令|
|:---|:---|
查看所有远程分支 | git branch -r
建立的本地分支并和远程分支**建立**映射关系 | git checkout -b 本地分支名x origin/远程分支名x
建立的本地分支和远程分支**不建立**映射关系 | git fetch origin 远程分支名x:本地分支名x
删除本地分支 | git branch -D  xxx

## 文件暂存

|功能| 命令|
|:---|:---|
储藏工作 | git stash
查看现有的储藏 | git stash list
重新应用**最近**的储藏 | git stash apply
重新应用储藏，并且从堆栈中**移除** | git stash pop
应用某一条储藏 | git stash apply 储藏的名字
移除储藏 | git stash drop 储藏的名字

## commit 使用

|功能| 命令|
|:---|:---|
撤销上一次commit和add | git reset HEAD^ （想撤回2次commit，可以使用HEAD~2）
不删除工作空间改动代码，撤销commit，并且**撤销add** . | git reset --mixed HEAD^
不删除工作空间改动代码，撤销commit，**不撤销add** | git reset --soft HEAD^
删除工作空间改动代码，撤销commit，撤销add **（回滚）** | git reset --hard HEAD^
commit注释有误，只改commit注释 | git commit --amend


## rebase使用

|功能| 命令|
|:---|:---|
变基 | git rebase feature
修改冲突之后继续下一步 | git rebase --continue 
引起冲突的commits会被丢弃 | git rebase --skip 
回到提交前状态、撤销rebase | git rebase  --abort 
| git rebase  --quit

- pick：保留该commit（缩写:p）
- reword：保留该commit，但我需要修改该commit的注释（缩写:r）
- edit：保留该commit, 但我要停下来修改该提交(不仅仅修改注释)（缩写:e）
- squash：将该commit和前一个commit合并（缩写:s）
- fixup：将该commit和前一个commit合并，但我不要保留该提交的注释信息（缩写:f）
- exec：执行shell命令（缩写:x）
- drop：我要丢弃该commit（缩写:d）
