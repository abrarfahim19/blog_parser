Git uses workflow. Which can be broken into three states:
1. Modified
2. Staged
3. Committed
![[Git Workflow states.png]]

Heres a quick view of the commands we use to change the workflow in git:
![[Git command to change Workflow.png]]

#### Git add and commit
The command `git add`stages the change of file.
```bash
git add fileName
```

 We can un-stage the change  too. with the following command:
```bash
git restore --staged <file>
```

#### Git Branch
We can checkout to the newly created branch with
```bash
git checkout -B newBranch
```

Make some changes and add the changed. But after that we need to push the changes to the remote repository:
```bash
git push -u origin newBranch
```

Alternatively we can use,
```bash
git push origin newBranch
```
It would also push your local `newBranch` to the remote repository `origin`. However, you'd need to specify the entire remote and branch name (`origin newBranch`) for every future push to that same branch.

#### Resolving Conflicts
Lets say a developer gets the following conflict while trying to push his code to the remote server:
```bash
    git add Feature.js
    git commit -m 'chore: added feature 2!!!'
    git pull origin main

From github.com:demo/demo-repo
 * branch            main       -> FETCH_HEAD
   9012934..d3b3cc0  main       -> origin/main
Auto-merging Feature.js
CONFLICT (content): Merge conflict in Feature.js
Automatic merge failed; fix conflicts and then commit the result.
```

How does he resolve the conflict?
Running git status will show the following output:
```bash
    git status
    On branch feature2
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   Feature.js

no changes added to commit (use "git add" and/or "git commit -a")
```

In order to merge, developer needs to see and compare the changes from other developer. It is good practice to see what branch is causing the conflict. To inspect the branch the developer runs the following:
```bash
 git log --merge

commit 79bca730b68e5045b38b96bec35ad374f44fe4e3 (HEAD -> feature2)
Author: Developer 2 
<developer2@demo.com>
Date:   Sat Jan 29 16:55:40 2022 +0000

    chore: add feature 2

commit 678b0648107b7c53e90682f2eb8103c59f3cb0c0
Author: Developer 1 
<developer1@demo.com>
Date:   Sat Jan 29 16:53:40 2022 +0000

    chore: add feature 1
```

So the updated code is the commit `chore: add feature 1`. And the commit was made by `Develper 1`.  Now what is the difference in code? Developer 2 runs the following command to see the `diff`:
```bash
git diff

diff --cc Feature.js
index 1b1136f,c3be92f..0000000
--- a/Feature.js
+++ b/Feature.js
@@@ -1,4 -1,4 +1,8 @@@
  let add = (a, b) => {
++<<<<<<< HEAD
 +  if(a + b > 10) { return 'way too much'}
++=======
+   if(a + b > 10){ return 'too much' }
++>>>>>>> d3b3cc0d9b6b084eef3e0afe111adf9fe612898e
    return a + b;
  }
```

So the conflict is in the file `Feature.js`. And in the line of the return statement. Developer 2 changes the code and commits it accordingly and push the change to the remote accordingly. 

```js
let add = (a, b) => {
  if(a + b > 10) { return 'way too much'}
  return a + b;
}
```

```bash
git add Feature.js
git commit -m "Fix merge conflict in Feature.js"
git push -u origin feature2
```

Developer 2 has now fixed a merge conflict and can create their PR to get the code merged into the main line.

#### Git HEAD
Git references the current HEAD. Just as soon as we commit new changes in the code, the HEAD changes. We can see the current HEAD in the `.git` folder.
```bash
cat .git/HEAD
ref: refs/heads/main
```

Also the hash can be seen if we cat the following path
```bash
cat .git/refs/heads/main
e27ba1b0e128e6dfbb50175e4a104b376d48b15b
```

We can see the branches in remote repositories as well in  `.git/refs/remotes`

#### Git diff
Git diff is used to see the difference in the
1. file
2. commit
3. branch.

To see the change in a file:
```bash
git diff HEAD Readme.md
diff --git a/README.md b/README. md index 07159c2..904493 100644
--- a/README. md +++ b/README. md
00 -1,2 +1,2 00
-# my-first-repo minor update!
+# my-first-repo
Practice account for learning git
```

We can compare the different commit as well with the following: 
```bash
# See the commit hash in oneline
git log --pretty=oneline
# See the changes between commit
git diff 3100ec42203f7ce050b38d7059bf8d3d03efaa90 4234a37daeb7c8e8a8f48edcd053842a2d7b87da
```

We can compare the changes between two branches as well
```bash
git diff branch1 branch2
```

#### Git Blame
Git blame shows the entire history of a file and by whom the changes were made, at which time, at which line and the commit hash.
```bash
git blame fileName
```

We can see the specific line numbers changes
```bash
git blame -L 5,15 fileName
```

We can use the hash key of the commit to and use the `git log` in conjunction to have better understanding of a change commited:
```bash
git log -p 53209662
```

