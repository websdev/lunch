# Git Practices

Note:
- This might be fun or informative, might not be informative.
   - If nothing else you'll know more about how I work and some of my rationale
     for working the way I do



# Where to Begin?

- <!-- .element: class="fragment" --> Plumbing or Porcelain?
- <!-- .element: class="fragment" --> Neither!
   - <!-- .element: class="fragment" --> For that, go to https://git-scm.com.
- <!-- .element: class="fragment" --> **Practices.**
  - Not "Best"; not even "Good," just Practices.

Note:
- There are so many things to talk about w/ git.
  - Lots of internal conflict
  - internals (plumbing) vs common/high-level stuff (porcelain)
- What I want to talk about, alternatingly, is:
   1. How I work, why I work that way, and how it helps me and specific
      scenarios where these principles help me
   2. Helpful little incantations
- Just "practices." software engineering and software version control is
  complex, none of what we do should be taken as a rule.
- Just my opinion
- I like git!
- Hopefully time at the end to chat about general problems/things that feel hard



# Opening Questions

- <!-- .element: class="fragment" --> How do you enter a "flow" state?
   - <!-- .element: class="fragment" --> Avoid interrupting yourself!
- <!-- .element: class="fragment" --> How do you use git effectively?
   - <!-- .element: class="fragment" --> Learn your shell
   - <!-- .element: class="fragment" --> Read _some_ documentation

Note:
- Does everyone know what I mean when I say flow state?
- Flow state is interrupted by hitches with git, perhaps by hitches with shell
- Increasing comfort with shell (generally zsh or bash) is critical to
  increasing effectiveness w/ git. Improve your sense of "flow!"
- manpages are a godsend. some people say they're terrible (especially the git manpages), I think they fall
  into the same category as every other manpage I've ever read.



# Incantation #1: Get most used `git`-related commands from `history`

```sh
# WARNING: works as-is in zsh,
# must be run on a single line to work in bash.

history   | # get history
grep git  | # filter history for only commands that contain "git"
awk '{CMD[$3]++;count++;}END { for (a in CMD)print CMD[a] " " CMD[a]/count*100 "% " a;}' | # read input, print stats as percentages
column -t | # make columns, output as a table
sort -nr  | # reverse-sort by number
nl        | # print line numbers (gives us "ranks"); final line limits us to top 10 results.
head -n10
```

Note:
- awk is a command-line text processor. I don't use it regularly.
- This thing will give us some output that we'll use later.



## Detour: Writing and Describing Code


## How We Write Code

- Iterative/Procedural
- "Stream of consciousness"

Note:
- I often see stream-of-consciousness commits reach master


## How We Describe Code

- Feature-level.
- Decidedly _not_ stream of consciousness

Note:
- Maybe you agree that this is how we communicate about
  code when we write stories and share ideas about those stories.
  It's not usually very procedural
- We usually describe the _what_ not the _how_ when talking out loud



## Mercurial and Git

- <!-- .element class="fragment" --> Mercurial (`hg`)
   - Distributed version control, 2005, SHA-1 hashes for revisions
- <!-- .element class="fragment" --> Git (`git`)
   - Distributed version control, 2005, SHA-1 hashes for revisions
- <!-- .element class="fragment" --> Mercurial Philosophy: "History is permanent and sacred."
- <!-- .element class="fragment" --> Git Philosophy: ^^ definitely not that

Note:
- Both introduced as alternatives to BitKeeper, an earlier distributed version control system (which was undergoing a license change)
- Mercurial has immutable history (unless you add extensions)
   - Compare to git where history is mutable out of the box
- Mercurial closer to SVN in behavior
- So we have mutable history. We can take advantage of this, but we should also
  be careful with it, because it can be dangerous.
- Benefit of taking advantage of mutable history is providing better context



## command: `git commit`

- <!-- .element class="fragment" --> `git commit -m "commit message"`
- <!-- .element class="fragment" --> `git commit --amend`

Note:
- Question for the group: does anyone use anything other than `git
  commit -m`?
- on the topic of history rewriting: `git commit --amend` is a
  lightweight and fairly safe ay to get started with history re-writing
- probably in everyone's top two most-used git commands.
- We'll talk a bit more about commits and history mutation later



## command: `git add`


<!-- .element class="imageleft" -->
`git add .`
<br />
<br />
![](/resources/git/images/brain0.jpg)


<!-- .element class="imageleft" -->
`git add --all`
<br />
<br />
![](/resources/git/images/brain1.jpg)


<!-- .element class="imageleft" -->
`git add -p`
<br />
<br />
![](/resources/git/images/brain4.jpg)

Note:
- `git add -all` will stage new, modified, and deleted files, unlike `git add .` which doesn't handle deleted
   - There's also `git add -u` which will stage modified and deleted files, but not completely new files
- `git add -p` is basically free self code review
- `git add -p`'s split mode is even better - stage and commit just the hunks that you want



## `git checkout` and time travel


<!-- .element class="imageleft" -->
`git checkout -- {filename}`
<br/>
<br />
"restore {filename} to version in index"
<br />
<br />
![](/resources/git/images/brain0.jpg)


<!-- .element class="imageleft" -->
`git checkout -b {branchname}`
<br />
<br/>
"start a new branch based on current ref"
<br />
<br />
![](/resources/git/images/brain1.jpg)


<!-- .element class="imageleft" -->
`git checkout -`
<br />
<br/>
"point `HEAD` to previous `HEAD` ref"
<br />
<br />
![](/resources/git/images/brain2.jpg)


<!-- .element class="imageleft" -->
`git checkout {ref}; [...] git checkout -b {newbranchname}`
<br/>
<br />
"point `HEAD` to {ref}." unbounded time travel and history generation!
<br />
<br />
![](/resources/git/images/brain6.jpg)

Note:
- First version: this is boring. there's some git plumbing reason why it's here, I think.
- I use `git checkout` a lot because I like to create throwaway branches a lot.
  I might branch off of my branch to try an idea, then merge into the parent
  branch if I liked it. If I hated it, I'll just throw it away.
- Survival of the fittest [branches]
- pointers - branches are pointers to refs, your HEAD is also a pointer
- try git checkout play in merchandising service if we have time. use `tail -F .git/HEAD`



## commit messages

- good commits describe state transitions within the code and communicate
  context around the change.
- good commits answer the question _why_ did the thing change?
- commit subject should be written in imperative tense: "this commit will \_\_\_\_\_\_"

Note:
- "this commit will {fill in the blank}"


## commit messages

- separate subject and body w/ blank line
- message explains what (subject) and why (body), ideally not how
- why should you care?

Note:
- Ideally, a commit describes a state that the content of a commit will transition the code to
- For inspiration, look at commits for your favorite open source projects.
- Some commits are reasonable without a "how"


## commit messages: why you should care

- <!-- .element class="fragment" --> `git blame`: way less useful if commit messages are choppy/unintentional
- <!-- .element class="fragment" --> `git revert`: if you don't have well-formed, intentional commit messages, good luck using this.
- <!-- .element class="fragment" --> `git log`: what if you've been on vacation and want to know what happened in your project over the last two weeks?

Note:
- The obvious reason is that you provide context to yourself or whoever else is reading the code
  months and years down the line, but here are some other reasons.


- `git bisect`: potentially impenetrable in the absense of meaningful commits with well-crafted messages.


Note:
- writing the first thing that comes to mind isn't bad and it supports the
  "flow" state. But I believe that you should go back and write a message that
  communicates the intent of the change very clearly.
- bisect isn't a tool that you'll need often, but you'll need it eventually



## `git reflog`

<!-- .element class="fragment" --> ![](http://localhost:3000/resources/git/images/brain10.jpg)


- `git reflog` allows you to observe all changes (e.g. commits, branches
  switching, merges, rebase minutia) from outside of context, in true
  chronological order
- entries older than 3 months (default, configurable) are removed in git's
  periodic garbage collection process (`git gc`)
- <!-- .element class="fragment" --> did you make a horrible mistake? so long
  as it's local/non public, `reflog` is a safety net
- <!-- .element class="fragment" --> if you just need to see the public history
  for a branch, don't use `git reflog`, just use some flavor of`git log`

Note:
- `git reflog` is like being a watcher outside of time and watching time
  travelers scurry across the landscape. it's like being a 3-d person in a 2-d
  flatland.
- if you've ever committed anything and you need it back and either don't have
  a path to it or need a shortcut, the reflog is where you want to go. anything
  that you've done, so long as git has record of it (i.e. the file has been
  committed or stashed, i.e. "tracked" at some point in time), can be accessed
  from the reflog.
- Only local - tracks YOUR changes over time.



# Mutating History

- <!-- .element class="fragment" --> Simple rule: don't mutate history on shared branches.
   - **Above all else, if your repo is actively being used by others, don't mutate master.**
- <!-- .element class="fragment" --> Your own branch: mutate _your own_ commits
  for _your own_ current feature at will

Note:
- I didn't want to get into history mutation and rebase vs merge in branches
  too deeply, but if there's time...
- While I still own my branch, I feel freedom to do anything to it, and I think
  so should you.
- The intent of rebase isn't to hide mistakes. I'm not thinking about mistakes
  when I make commits, I'm trying to think about communicating what I'm
  thinking and making the history easy to understand.
  - This is all in the service of clean revisions, which make some tools more
    pleasant to use (or even possible)




# Tips

- Read the man pages (e.g. `man git-commit`).
- Read well-maintained code on GitHub. Read library _commit histories_.
  - <!-- .element class="fragment" --> There's {insert your favorite library
    here}, React, the linux kernel, even `git` itself.
- <!-- .element class="fragment" --> Want super powers? Mix with https://git-scm.com/book/.

Note:
- I think reading the history can be as instructive as reading the code (but
  for different reasons)
  - Reading library code is really good for you.
- Combine the above, and your own code, with the free git book at git-scm.



# Discussion





## Postscript: Why do we merge master into feature branches so often?

- Continual merge of master into feature branches considered harmful?
- <!-- .element class="fragment" --> If you're also trying to rebase on top of master, yeah, it will conflict quite a bit.


