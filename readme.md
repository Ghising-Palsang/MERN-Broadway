
#### Git
    ### Developers
    - Version Control
        - commit
        - branch
        - tags
    - Code Maintenance or backup

    ### DevOps
    - Automation (Deploy/ CI / CD)

    ### Project Managers / Leads
    - Tracking (Project Management /PMT)


### Our Device and Online Repository
 - Local repo => Dev environmnet (git)
 - Online Repo => a. gitlab     b. github (we'll be using this one)      c. bitbucket

 npmjs.com   - account created done
 git download - downloaded done


 #### Structure
   - tree structure
   - Trunk (default Branch) (main or master)
   - History

Do you want to add github as a known host -- Yes

### SSH
    - Private key, Public key, known host
    - public key -- server (add) github
    - laptop - internet --server
    - connection req


### Git Commands
    git init
    git remote add origin link   ------> origin is the name for the certain link
    git remote set-url origin link   ----> replace the old url
    git remote -v    ----> list all the available remote repo on our local repository (v is for volvo)
    git add .
    git add index.js
    git commit -m 'write the changes in shorthand'
    git status

    git push -u origin main  ----> uploading
    git pull origin main --------> downloading

### Global Config
- User Setup
    - 'git config  --global user.name 'Your name'
    - 'git config --global user.email ''
- Default Branch
    - 'git config --global default.branc 'main'
- Pull Strategy
    - 'git config --global pull.rebase true' ---> Rebase -only changes in remote
    - 'git config --global pull.rebase false' ---> Merge (we use this)
    - 'git config --global pull.ff only'  -----> fast forward - prevents accidental merge

### Git commands
#### Initilialize git in local repo
    - git init
    - git remote add <name> <link>

#### Clone the project -> donot use clone in the file having git file.
    - git clone link  

#### Status
    - git status

#### Branch list
    - git branch

#### Staging / Commit
    - Add tacking
        - git add <filename> or git add .
    - Do commit
        - git commit -m 'message'

#### Push operation
    - git push <repo name> <local branch name>:<remote branch name>
    - e.g git push origin main:main

#### Pull Operation
    - git pull <repo name> <remote branch name>
    - e.g git pull origin main

    - Sometimes during pull, it might create some conflicts 
        - Manually resove the conflict
    - After resolving the conflict, commit the code

#### Branch Operation (For local repo )
    - git checkout -b <branchName> ---- Create a branch
    - git branch -D <branchName>    ----- Delete a local branch
    - git branch   -------- list of branch
    - git checkout <branchName>


#### 

Learn more about SSH key

Now resolving conflict