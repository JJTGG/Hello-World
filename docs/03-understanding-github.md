
# Understanding GitHub

You now understand what Git is, how it manages project history and why developers use version control.

In this guide, we'll explore GitHub.

Git provides version control. GitHub provides an online environment where developers can host repositories, collaborate and manage their projects.

You can follow this guide using your browser. You don't need to install Git.

## Learning Objectives

By the end of this guide, you should be able to:

- Explain what GitHub is and what it provides.
- Understand how GitHub repositories are organised.
- Identify important parts of a repository.
- Understand public and private repositories.
- Recognise GitHub's main collaboration features.
- Distinguish between templates, forks and clones.
- Understand how GitHub fits into a developer's workflow.

## 1. What Is GitHub?

GitHub is an online platform for hosting Git repositories and collaborating on software projects.

It provides a place where developers can:

- Store and share source code.
- Manage project files.
- Track changes and commit history.
- Collaborate with other developers.
- Review proposed changes.
- Report and track problems.
- Automate development workflows.
- Publish supported projects and websites.

GitHub is built around Git, but it provides more than version control alone.

Think of Git as the version-control system and GitHub as the platform that brings hosting, collaboration and project-management features together.

## 2. Understanding GitHub Repositories

A repository is the central home of a project on GitHub.

It contains the project's files, directories and version history.

For example, the Hello World repository contains:

- `index.html`
- `style.css`
- `script.js`
- `README.md`
- `docs/`
- `exercises/`

Each file has a purpose, and the repository brings these components together.

A repository can belong to an individual GitHub account or an organisation.

### Repository Names and URLs

GitHub identifies a repository using its owner's username or organisation name and the repository name.

For example:

`https://github.com/JJTGG/Hello-World`

This can be understood as:

| Part | Meaning |
|---|---|
| `github.com` | GitHub's website |
| `JJTGG` | Repository owner |
| `Hello-World` | Repository name |

The combination of owner and repository name is commonly written as:

`JJTGG/Hello-World`

You will encounter this format frequently when working with GitHub.

## 3. Understanding a Repository Page

A repository page provides access to the files, history and features associated with a project.

Some important elements include:

### Repository Name

Identifies the project and its owner.

### Files and Folders

Displays the contents of the repository.

You can open files, browse directories and inspect the project's structure.

### README

The README provides an introduction to the project.

It commonly explains:

- What the project does.
- How to use it.
- Its requirements.
- How to contribute.
- Relevant documentation.

GitHub can display a repository's README directly on its main page.

### Branches

Branches allow developers to maintain separate lines of development.

You can switch between available branches when browsing a repository.

### Commit History

The commit history provides a record of changes made to the project.

You can inspect individual commits to understand what changed and when.

### Repository Settings

Settings allow authorised users to manage repository configuration, access permissions and available features.

Some repository controls are only available to users with sufficient permissions.

The exact tabs and options shown can vary depending on the repository, account permissions and enabled features.

## 4. Public and Private Repositories

GitHub supports different repository visibility settings.

For ordinary personal repositories, the main choices are public and private.

### Public Repositories

A public repository is accessible to everyone on the internet.

People can browse its files, read its documentation and inspect its commit history.

Depending on the repository's settings, they may also be able to fork it or propose contributions.

Public repositories are useful for:

- Open-source projects.
- Public learning resources.
- Developer portfolios.
- Shared code examples.
- Community contributions.

### Private Repositories

A private repository restricts access to authorised people.

It is useful for projects that should not be publicly accessible.

People must have appropriate access before they can view or work with a private repository.

### Important Security Note

Never place passwords, API keys, access tokens or other secrets in a repository.

This applies to both public and private repositories.

A file being deleted does not automatically remove sensitive information from its previous commit history.

If a credential is exposed, revoke or rotate it immediately rather than relying on deleting the file.

## 5. Editing Files Directly on GitHub

You don't always need a local development environment to make changes to a repository.

GitHub provides a browser-based file editor.

When you have the necessary permissions, you can:

1. Open a repository.
2. Navigate to a file.
3. Open its editor.
4. Make changes.
5. Preview the changes where supported.
6. Provide a commit message.
7. Commit the changes directly to the selected branch or propose them through a new branch.

This allows beginners to learn repository management without immediately installing Git.

### What Happens When You Commit Through GitHub?

GitHub records the changes as a commit in the repository.

The commit becomes part of the repository's history.

You can later inspect it through the commit history.

This is still Git version control, even though you performed the operation through your browser.

## 6. GitHub's Main Collaboration Features

GitHub provides several features that make collaborative development easier.

### Issues

Issues help developers track work and discuss problems.

An issue might describe:

- A bug.
- A requested feature.
- A documentation improvement.
- A technical question.
- A task that needs to be completed.

Issues give a project a structured way to organise and discuss its work.

### Pull Requests

Pull requests allow developers to propose changes and have them reviewed before those changes are merged.

For example:

A developer creates a branch, improves a website and pushes the changes to GitHub.

They can open a pull request asking for those changes to be reviewed and merged into the main branch.

A pull request provides a place to:

- Explain the proposed changes.
- Discuss the implementation.
- Review modified files.
- Leave feedback.
- Run automated checks.
- Merge the changes when they are ready.

Pull requests are especially useful when several developers contribute to the same project.

### Discussions

GitHub Discussions provides a space for broader conversations when a repository has this feature enabled.

Unlike issues, which are generally used to track actionable work, discussions can be used for questions, announcements and community conversations.

### GitHub Projects

Projects help teams organise and track work across repositories.

They can be used to manage tasks, priorities and progress.

### GitHub Actions

GitHub Actions allows developers to automate workflows.

For example, a project can run tests automatically when someone opens a pull request.

You don't need to understand automation yet. It is a feature you will encounter as you advance.

### GitHub Pages

GitHub Pages allows developers to publish static websites from a repository.

It is particularly useful for:

- Personal websites.
- Documentation.
- Developer portfolios.
- Simple HTML, CSS and JavaScript projects.

You'll explore publishing with GitHub Pages in a dedicated guide.

## 7. Templates, Forks and Clones

These three concepts are important because they allow developers to work with existing repositories in different ways.

They are related, but they serve different purposes.

### Template Repository

A template repository allows someone to generate a new repository using the template's files and directory structure.

For example, Hello World is a template repository.

A beginner can select **Use this template** and generate a new repository containing the starter project and learning materials.

This is useful when:

- Starting a new project from existing starter files.
- Creating multiple projects with a shared structure.
- Reusing a learning environment.
- Providing starter code for other developers.

A repository generated from a template starts with an independent commit history rather than inheriting the template's full history.

### Fork

A fork is a GitHub-hosted copy of another repository under your account or organisation.

Forking is commonly used when contributing to someone else's project.

For example:

1. You find an open-source repository.
2. You fork it into your GitHub account.
3. You make improvements in your copy.
4. You propose those changes to the original project through a pull request.

A fork maintains a relationship with the original repository, making it useful for contributing changes back upstream.

### Clone

Cloning creates a local copy of a remote Git repository on your computer.

Unlike simply downloading a ZIP archive, cloning brings the repository's Git history with it.

You can then edit files, create commits, manage branches and synchronise changes with the remote repository.

Cloning is particularly useful when working with Git locally.

### Comparison

| Feature | Template | Fork | Clone |
|---|---|---|---|
| Primary purpose | Start a new project | Contribute to an existing project | Work on a local copy |
| Creates a GitHub repository | Yes | Yes | No |
| Creates local files | No | No | Yes |
| Preserves original commit history | No | Yes | Yes |
| Maintains an upstream relationship | No automatic fork relationship | Yes | Through its configured remote |
| Common use | Starter projects | Open-source contributions | Local development |

**Remember:**

- Use a template when you want to start a new project.
- Fork when you want to work on your own copy of an existing project and potentially contribute back.
- Clone when you want a local copy of a repository.

## 8. Understanding Repository Permissions

Not everyone who can view a repository can modify it.

Repository permissions determine what actions a person can perform.

For example:

- Some people can only view and download repository contents.
- Some can contribute through branches and pull requests.
- Some have permission to manage repository settings.
- Repository owners and administrators have broader control.

This distinction is important when collaborating.

Having access to a repository does not automatically mean you can push changes directly to its default branch.

The permissions granted to you and the repository's protection rules determine what you can do.

## 9. Exploring the Hello World Repository

Now that you understand the main concepts, explore this repository.

Open the Hello World repository and try the following:

1. Inspect the repository's README.
2. Browse the `docs/` directory.
3. Open `index.html`.
4. Open `style.css`.
5. Open `script.js`.
6. Explore the available commit history.
7. Identify the repository's default branch.
8. Find where the repository's template status is indicated.

Do not change anything during this observation exercise.

The goal is to recognise the different parts of a real GitHub repository.

## 10. Check Your Understanding

Try answering these questions without looking back at the explanations.

1. What is GitHub?
2. What is a repository?
3. What does a repository URL identify?
4. What is the difference between a public and private repository?
5. Can you edit files directly through GitHub's website?
6. What are GitHub Issues used for?
7. What is a pull request?
8. What is the difference between a template and a fork?
9. Why would a developer clone a repository?
10. Does having permission to view a repository automatically give you permission to modify it?
11. What is GitHub Pages used for?
12. Why should you never upload credentials to a repository?

## Conclusion

GitHub provides an online environment for hosting Git repositories and collaborating on software projects.

Its repositories organise source code and project history, while features such as Issues, Pull Requests, Discussions and GitHub Actions support different parts of the development workflow.

You now understand the basic role GitHub plays in software development.

In the next guide, we'll look more closely at repositories, their structure and how to organise project files effectively.

---

## Further Reading

Official GitHub documentation:

- [About repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories)
- [Creating a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)
- [Editing files on GitHub](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)
- [Using Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues)
- [About Pull Requests](https://docs.github.com/en/pull-requests/get-started/about-pull-requests)

**Next:** Understanding Repositories and Project Structure.
