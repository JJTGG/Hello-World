
# Introduction to Software Development and Version Control

Welcome to Hello World.

Before learning Git or GitHub, it helps to understand what software development is and why developers need tools to manage their work.

You don't need programming experience to follow this guide.

## Learning Objectives

By the end of this guide, you should be able to:

- Explain what software development means.
- Understand why developers work with files and source code.
- Explain what version control is.
- Understand why version control matters.
- Distinguish between Git and GitHub.
- Recognise some fundamental Git concepts.

## 1. What Is Software Development?

Software development is the process of designing, building, testing and maintaining software.

Software can take many forms:

- Websites
- Mobile applications
- Desktop applications
- Games
- Operating systems
- Developer tools
- APIs and backend services

For example, a website is not simply a collection of pages. It may contain HTML, CSS, JavaScript, images and other resources that work together to provide an experience.

Developers create and maintain these components using programming languages and development tools.

### The Development Process

Software development commonly involves several activities:

1. **Planning:** Understand the problem and decide what needs to be built.
2. **Development:** Write and organise the code.
3. **Testing:** Check that the software works as expected.
4. **Review:** Examine the implementation and identify improvements.
5. **Maintenance:** Fix problems and introduce improvements over time.

These activities may happen repeatedly throughout a project's lifetime.

## 2. Understanding Source Code

Source code consists of instructions written in a programming language or another language understood by development tools.

In a typical website:

| File | Responsibility |
|---|---|
| `index.html` | Defines the webpage structure. |
| `style.css` | Controls the webpage's appearance. |
| `script.js` | Adds interactive functionality. |

These files are separate, but they work together to produce a website.

As a project grows, the number of files and the amount of code can increase significantly.

This creates an important question:

**How do developers keep track of everything that changes?**

That is where version control comes in.

## 3. What Is Version Control?

Version control is a system for recording and managing changes to files over time.

Instead of relying entirely on manually saved copies, developers can use version control to maintain a history of their work.

Consider this example.

You create a website and save it as:

- `website-v1`
- `website-v2`
- `website-v3-final`
- `website-v3-final-updated`

You now have several copies, and it may become difficult to determine which one contains the latest changes.

Version control provides a more organised approach.

It records changes in a structured history, allowing developers to understand how a project has evolved.

### Why Is Version Control Important?

Version control helps developers:

- Track changes over time.
- Understand who made particular changes.
- Restore earlier versions when necessary.
- Experiment without immediately affecting the main version.
- Collaborate with other developers.
- Review proposed changes before integrating them.

It is particularly important when several people work on the same project.

## 4. Introducing Git

Git is a distributed version control system.

It allows developers to track changes, maintain project history and work on separate lines of development.

Git can be used locally on your computer without requiring GitHub or an internet connection for ordinary local version-control operations.

### What Can Git Do?

Git provides several important capabilities:

- Track changes to files.
- Record changes using commits.
- Create and manage branches.
- Compare different versions.
- Merge changes from different branches.
- Connect local repositories to remote repositories.

You will learn these capabilities throughout the Git learning modules.

## 5. Introducing GitHub

GitHub is an online platform built around Git.

It allows developers to host repositories, collaborate, review changes and manage software projects.

GitHub also provides additional services, including:

- Pull requests.
- Issues.
- Project discussions.
- Code reviews.
- GitHub Actions.
- GitHub Pages.

A GitHub account allows you to create and manage repositories through your browser.

You can also connect Git locally installed on your computer to repositories hosted on GitHub.

## 6. Git vs GitHub

Git and GitHub are related, but they are not the same thing.

| Git | GitHub |
|---|---|
| A version control system. | An online development platform. |
| Tracks changes and maintains history. | Hosts and manages Git repositories. |
| Can work locally without GitHub. | Uses Git as its primary version-control foundation. |
| Provides commits and branches. | Provides collaboration and project-management features around repositories. |
| Installed locally when using its command-line tools. | Accessed primarily through its website and supported applications. |

**Remember:**

Git is the tool that tracks changes.

GitHub is a platform that helps you host, manage and collaborate on projects using Git.

You can use Git without GitHub. You cannot treat GitHub as a replacement for understanding Git.

## 7. Understanding the Basic Workflow

Before exploring individual Git commands, understand the general process.

A developer might:

1. Create or open a project.
2. Make changes to its files.
3. Review those changes.
4. Record the changes in a commit.
5. Continue developing the project.
6. Share changes with a remote repository when needed.

A commit is a recorded snapshot of changes in a repository.

Each commit has information such as its author, message, timestamp and relationship to previous commits.

Commits create a history that developers can inspect.

Later, you will learn how this works through GitHub's web interface and Git's command-line tools.

## 8. Important Concepts You Will Encounter

| Concept | Basic explanation |
|---|---|
| Repository | A project and its version-control history. |
| Commit | A recorded set of changes. |
| Branch | A separate line of development. |
| Merge | Combining changes from different branches. |
| Remote | A reference to another Git repository. |
| Push | Sending local commits to a remote repository. |
| Pull | Fetching and integrating changes from a remote repository. |
| Pull Request | A proposal to review and merge changes on GitHub. |

These concepts will become clearer as you progress through the following guides.

## 9. Your First Practical Observation

Open the Hello World repository.

Look at these three files:

- `index.html`
- `style.css`
- `script.js`

Consider the following questions:

1. Which file defines the website's structure?
2. Which file controls its appearance?
3. Which file handles its interactive functionality?
4. What might happen if you change one of these files?
5. Why would it be useful to keep a history of those changes?

You don't need to modify anything yet.

The goal is to recognise that a software project consists of separate components that evolve over time.

## 10. Check Your Understanding

Try answering these questions without looking back at the explanations.

1. What is software development?
2. What problem does version control solve?
3. What is Git?
4. What is GitHub?
5. Can Git be used without GitHub?
6. What is a commit?
7. Why might a developer create a branch?

## Conclusion

Software development involves more than writing code. Developers must also organise their work, track changes, test implementations and collaborate with others.

Version control helps make this process manageable.

Git provides version control, while GitHub provides an online environment for hosting and collaborating on Git repositories.

In the next guide, we will explore Git fundamentals in greater detail.

---

**Next:** Understanding Git and Version Control.
