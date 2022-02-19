1. Setting up a fresh project
   git init
   git commit -m "First commit, containing the first design elements"
   git branch -M main
   git remote add origin git@github.com:danilovic-design/vanilla-todo-contest.git
   git push -u origin main

…or push an existing repository from the command line

git remote add origin git@github.com:danilovic-design/vanilla-todo-contest.git
git branch -M main
git push -u origin main

---

2. How to collaborate:

   - Clone the git repo:
     "git clone git@github.com:danilovic-design/vanilla-todo-contest.git"

   - Check out your branches
     "git branch"

   - Never use main!

   - Make your own branch and switch to it:
     "git checkout -b <new-branch-name>"

   - Or switch to existing branch!
     "git checkout <branch-name>"

   - Now make your work!

   - Now it's time to add & commit:
     "git add ."
     "git commit -m "Commit message"

   - And now push
     "git push origin <your-branch-name>"

3. Pulling
   Before you start working, you might want to pull the recent main changes:
   "git pull origin main"
