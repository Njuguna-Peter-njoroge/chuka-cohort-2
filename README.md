                              HOW TO MAKE BRANCHES AND SWITCHING FROM ONE BRANCH TO ANOTHER

This is a guideline on introduction to git and github and the creating branches process

Youll need to create a github account if you lack one:
here is a guideline:

Go to GitHub: Navigate to the Go  the https://github.com/. 

Sign Up: Click the "Sign up" button, typically located in the top-right corner of the page. 

Provide Your Email: Enter a valid email address. 

Create a Password: Choose a strong and unique password. 

Choose a Username: Select a username that is not already taken by another GitHub user. 

Verify Your Email: You will receive a verification email. Follow the instructions in the email to verify your account. 

Complete the Sign-Up Process: After verifying your email, you will be able to access your GitHub account. .

Sign Up: Click the "Sign up" button, typically located in the top-right corner of the page. 

Provide Your Email: Enter a valid email address. 

Create a Password: Choose a strong and unique password. 

Choose a Username: Select a username that is not already taken by another GitHub user. 

Verify Your Email: You will receive a verification email. Follow the instructions in the email to verify your account. 

Complete the Sign-Up Process: After verifying your email, you will be able to access your GitHub account. 



                          GIT COMMANDS
						   
gitinit....used to initialize a repository
Git add....used to add the files you are about to commit 
gitcommit-m""....used for committing the work done with a commit such as"first commit"
git status....displays the state of the working directory and the staging area
git branch.....The git branch command lets you create, list, rename, and delete branches.
Git clone..... used for downloading existing source code from a remote repository . 
git checkout....To start working in a different branch, use git checkout to switch branches.
git merge......Merges changes from one branch into the current branch.

                     HOW TO CREATE BRANCHES
In Git, a branch is like a separate workspace where you can make changes and try new ideas without affecting the main project.
Branches let you work on different parts of a project, like new features or bug fixes, without interfering with the main branch.

1)  Lets say you have a file hello-world-images.page and you dont want to wreck the main project you create a new branch using the command "git branch"  space then the name of the branch for example "home-pages".
If you want to confirm that you have created the branch you pass this command "git branch" which outlines the branches you have created.you can create as many branches as you may need.

2) after creating a several branches and lets say you want to switch from one branch to another you will pass this command "git checkoout" the the name of the specific branch lets take this one above here "hello-world-images".

3) after moving to the branch and after working on it lets say you have added some images on some lines of code you will need to check the status of your code by using "git status" which will outline the work done and it will also outline to you that some files are not commited.here an example:

											   git status
                                 On branch hello-world-images
                        Changes not staged for commit:
                     (use "git add ..." to update what will be committed)
                      (use "git restore ..." to discard changes in working directory)
                    modified:   index.html

  

                       Untracked files:
              (use "git add ..." to include in what will be committed)
        img_hello_world.jpg

           no changes added to commit (use "git add" and/or "git commit -a")

   
you will first "git add ." 'git add .' ,adds all the files in general,
then you will "git commit -m" then stage the commit you need to place,

4) now you can check the status using thecommand"git status" which will give you the current work done.here is an example:

                                   git status
                  On branch hello-world-images
                       Changes to be committed:
              (use "git restore --staged ..." to unstage)
                          new file: img_hello_world.jpg
                              modified: index.html

   5)as we are happy for our changes we can now commit the changes using ""git commit-m"" " here is an example:
   
                                                 git commit -m "Added image to Hello World"
                           [hello-world-images 0312c55] Added image to Hello World
                                                2 files changed, 1 insertion(+)
                                              create mode 100644 img_hello_world.jpg

6)we can now switch to a diffrent branch using "git checkout" then the name of the branch.here is an example:

                                 git checkout master
                               Switched to branch 'master'

7)lastly if you want to delete a branch we use this command  "git branch -d" then the name of the branch: done this way

                                                 
                                git branch -d hello-world-images


  
   thats how we go  about it while working with git.happy coding

   incase of any information reach me through my linked in account:
   https://www.linkedin.com/in/peternjorogenjuguna/
   
                                        

			 

