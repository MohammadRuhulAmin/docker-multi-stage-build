### First time push to a newly created branch
```bash
    git push --set-upstream origin uat
```
### to marge from uat to main : 
```bash
    git pull origin main 
    git merge uat 
    git push origin main 
```

### to pull latest code from github to local machine:

```bash
    git commit -m "commit message"
    git push
    git pull origin <branch_name>
```


# return from git log:
```bash
    git log
    git log --pretty=oneline
    :q
```
### create a new branch with inheriting all the code from main:
```bash
    git checkout -b <branch_name>
```


## to get latest code from a branch
- git checkout <your-branch>
- git fetch origin main
- git rebase origin/main


## see the different log between two branch
- git log uat..ruhul
- git log ruhul..uat

### Add feature branchs
- feature/branch-name
- bugfix/branch-name
- hotfix/branch-name
- chore/branch-name 

after merging the code with main branch: 
1. delete branch from local : git branch -d bugix/login
2. delete branch from remote repo: git push origin --delete bugfix/login

### Git Rebase
lets say, some new features has been added in main branch. but you are working on an old feature/login branch,
that time you will add the new features of main branch to your current branch. That time you need rebase.
Example:
```bash
    git checkout feature/login
    git fetch origin 
    git rebase origin/main

```

### To get the latest code from the main branch of a GitHub repository into your local ruhul branch

```bash
    git fetch origin
    git checkout ruhul
    git merge origin/main

```
### Always need to fork after add as a collaborator 