
# Understanding How Git Works

In the previous guide, you learned what version control is and why developers use it.

Now it's time to understand how Git actually manages changes.

You don't need to install Git or use the command line to follow this guide.

## Learning Objectives

By the end of this guide, you should be able to:

- Explain what makes Git a distributed version control system.
- Understand the basic structure of a Git repository.
- Distinguish between a working tree, staging area and commit.
- Understand how Git records project history.
- Explain what branches are used for.
- Understand the relationship between local and remote repositories.

## 1. Git Is a Distributed Version Control System

Git is described as a distributed version control system.

This means developers can have their own copies of a repository, including its version history, and work independently.

For example, imagine three developers working on the same project.

- Developer A works on the homepage.
- Developer B works on the navigation system.
- Developer C works on the contact page.

Each developer can work on their own copy of the repository.

Their changes can later be shared and integrated into the project.

This allows developers to work independently without requiring every change to be made directly in one central location.

### Why Does This Matter?

With Git, developers can:

- Work without a continuous internet connection.
- Maintain their own local project history.
- Experiment with changes.
- Share work with other developers.
- Combine changes when they are ready.

A remote hosting platform such as GitHub makes sharing and collaboration easier, but Git itself does not depend on GitHub.

## 2. Understanding a Git Repository

A Git repository is a project whose files and development history are tracked by Git.

A repository contains more than the current files.

It also maintains information about recorded changes, branches and commits.

A typical project might look like this:

```text
hello-world/
│
├── index.html
├── style.css
├── script.js
│
└── .git/
    └── Git repository data
```

The `.git` directory stores the information Git needs to manage the repository.

You usually don't need to modify its contents manually.

When you use GitHub's website, Git manages the repository on the platform's infrastructure. You do not normally see or manage a `.git` directory in the browser.

## 3. The Three Important Areas of Git

One of the most important concepts in Git is understanding how changes move through a repository.

In a typical local Git workflow, there are three main areas.

### A. Working Tree

The working tree contains the files you are currently working with.

When you create, edit or delete a tracked file, its state in the working tree changes.

For example, you might edit:

```text
index.html
```

The change exists in your working tree, but it has not necessarily been prepared for a commit.

### B. Staging Area

The staging area is where you prepare changes that you intend to include in your next commit.

You can select specific changes rather than committing every modification in your working tree.

For example:

- You modify `index.html`.
- You modify `style.css`.
- You stage only `index.html`.

Your next commit can contain the staged change without including the unstaged CSS modification.

The staging area is also called the **index**.

### C. Commit History

A commit records a snapshot of the project at a particular point in time.

A commit contains information such as:

- The recorded project state.
- The commit message.
- The author and committer information.
- The commit timestamp.
- Links to its parent commit or commits.

Git uses these records to maintain the project's history.

### How These Areas Work Together

A simplified local Git workflow looks like this:

```text
       WORKING TREE
       Edit your files
             |
             v
       STAGING AREA
       Select changes
             |
             v
          COMMIT
       Record changes
             |
             v
      COMMIT HISTORY
       Track progress
```

This is a conceptual workflow. You'll learn the actual commands for moving changes between these areas in the Git CLI guide.

## 4. Understanding Commits

A commit is a recorded snapshot of changes in a repository.

Think of it as a checkpoint in a project's development history.

For example:

```text
Initial project
      |
      v
Add homepage
      |
      v
Add website styling
      |
      v
Add JavaScript interaction
      |
      v
Improve mobile layout
```

Each successful commit adds another point to the project's history.

### What Does a Commit Message Do?

Every commit has a message describing the changes it records.

Compare these examples:

**Unclear:**

```text
update
```

**More useful:**

```text
feat(website): add homepage navigation
```

A meaningful message makes it easier to understand a project's development history.

You'll learn more about Conventional Commits in a dedicated guide.

### Are Commits the Same as Backups?

Not exactly.

Commits preserve recorded versions of a repository, but they are not a complete backup strategy.

They do not automatically protect against every form of data loss, and uncommitted changes may not be included in the recorded history.

## 5. Understanding Branches

A branch allows developers to work on a separate line of development.

Imagine the main version of a website is already working.

You want to experiment with a new navigation system without immediately changing the main version.

You can create a branch for that work.

```text
                  main
                    |
                    v
              Initial project
                    |
                    v
               Main updates
                    |
             +------+------+
             |             |
             v             v
         main branch   feature branch
                           |
                           v
                     New navigation
```

The feature branch can develop independently.

When the changes are ready, they can be reviewed and merged into the main branch.

### Why Use Branches?

Branches help developers:

- Develop new features separately.
- Fix bugs without mixing unrelated changes.
- Experiment safely.
- Review work before integrating it.
- Collaborate on different tasks.

A branch is not a separate copy of the entire project in the ordinary sense. It is a named reference to a line of development within the repository.

## 6. Local and Remote Repositories

Git repositories can exist locally on your computer and remotely on a hosting platform.

### Local Repository

A local repository is stored on your computer.

You can use Git to manage files, create commits and maintain history without connecting to GitHub.

### Remote Repository

A remote repository is another copy of the Git repository, commonly hosted on GitHub.

It allows developers to share their work and collaborate.

### How They Connect

A common workflow looks like this:

```text
      LOCAL REPOSITORY
        Your computer
              |
              | Push
              v
      REMOTE REPOSITORY
          GitHub
              |
              | Fetch / Pull
              v
      LOCAL REPOSITORY
        Updated history
```

These operations help keep repositories in sync.

They are not automatic. Developers decide when and how to share or retrieve changes.

## 7. Git vs GitHub Web Editing

You can perform some repository operations directly through GitHub's website.

For example, when you edit a file on GitHub and commit the change, GitHub records a commit in the hosted repository.

You do not have to install Git to make that change through the browser.

However, GitHub's web editor does not expose every part of Git's local workflow.

In particular, it does not require you to manage a local working tree and staging area manually.

Understanding this distinction will become important when you start using Git on your computer.

## 8. Common Misunderstandings

| Misunderstanding | Reality |
|---|---|
| Git and GitHub are the same. | Git is version-control software; GitHub is an online platform. |
| A commit is just a file upload. | A commit records a snapshot in repository history. |
| Every change is automatically committed. | Changes must be recorded through a commit. |
| A branch is another repository. | A branch is a separate line of development within a repository. |
| Git requires an internet connection. | Local Git operations can work offline. |
| GitHub automatically synchronises everything. | Developers must explicitly share or retrieve changes. |
| Commits replace backups. | Commits preserve history but are not a complete backup strategy. |

## 9. Practical Observation

Return to the Hello World repository.

1. Open `index.html`.
2. Look at its commit history.
3. Open one of the recorded commits.
4. Examine the changes introduced by that commit.
5. Compare the previous and updated versions.

Don't modify anything yet.

Your goal is to see how GitHub presents recorded changes and how commits provide a history of project development.

## 10. Check Your Understanding

Answer these questions without referring to the explanations.

1. What does distributed version control mean?
2. What is a Git repository?
3. What is a working tree?
4. What is the purpose of the staging area?
5. What does a commit record?
6. Why might developers create branches?
7. What is the difference between a local and remote repository?
8. Can a developer create commits without using GitHub?
9. Does editing a file automatically create a commit?
10. Why are commits not a complete backup strategy?

## Conclusion

Git manages project history through repositories, commits and branches.

In a typical local workflow, changes move from the working tree to the staging area and are then recorded in commits.

Branches allow work to progress independently, while remote repositories make sharing and collaboration possible.

You now have the conceptual foundation needed to understand how Git operates.

In the next guide, we'll explore GitHub itself and learn how its features make working with Git repositories easier.

---

**Next:** Understanding GitHub.
