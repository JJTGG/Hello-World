
# Understanding Repositories and Project Structure

You've learned what Git and GitHub are and how they work together.

Now let's take a closer look at repositories and how developers organise the files inside them.

A well-organised repository makes a project easier to understand, maintain and collaborate on.

You don't need programming experience to follow this guide.

## Learning Objectives

By the end of this guide, you should be able to:

- Explain what a repository contains.
- Understand the root directory and nested directories.
- Read and interpret a project structure.
- Recognise common project files and their purposes.
- Understand how README files help people navigate projects.
- Understand the purpose of `.gitignore` and license files.
- Organise files using sensible naming and directory conventions.
- Identify the structure of the Hello World repository.

## 1. What Is a Repository?

A repository is a project managed by a version control system such as Git.

It contains the project's files, directories and recorded history.

A repository can hold many different types of content, including:

- Source code.
- Configuration files.
- Documentation.
- Images and other assets.
- Tests.
- Project instructions.
- License information.

For example, a simple website might contain HTML, CSS, JavaScript and image files.

A larger application might contain hundreds or thousands of files organised into several directories.

Git tracks changes to files and records their history.

The repository provides a common place to organise and manage those files.

## 2. Understanding the Root Directory

The root directory is the top-level location of a project.

When you open a repository on GitHub, the files and folders displayed at its main level belong to the repository's root.

For example:

```text
hello-world/
├── index.html
├── style.css
├── script.js
└── README.md
```

Here, `hello-world/` is the root directory.

The four files are located directly inside it.

The root directory is important because it provides the starting point for navigating a project.

### Why Does the Root Matter?

It helps developers:

- Identify important project files.
- Understand the overall structure.
- Locate documentation and configuration.
- Navigate into other directories.
- Run certain tools and commands from a consistent location.

Not every file belongs in the root directory.

As a project grows, related files are usually grouped into directories.

## 3. Understanding Files and Directories

A file stores information or content.

A directory, commonly called a folder, groups files and other directories together.

Consider this example:

```text
my-project/
│
├── index.html
├── style.css
├── script.js
│
├── images/
│   ├── logo.png
│   └── banner.jpg
│
└── docs/
    └── guide.md
```

The project contains:

- Three files in the root directory.
- An `images/` directory containing two image files.
- A `docs/` directory containing one documentation file.

This structure separates the website's main files from its images and documentation.

### Nested Directories

A directory can contain other directories.

For example:

```text
my-project/
└── src/
    └── components/
        └── navigation/
            └── menu.js
```

The `menu.js` file is nested inside three directories.

Nested directories help organise larger projects, but excessive nesting can make navigation unnecessarily difficult.

Use a structure that makes sense for the size and purpose of the project.

## 4. Reading a Project Structure

Developers often represent a directory structure using a tree.

Consider:

```text
website/
├── index.html
├── README.md
├── assets/
│   ├── logo.png
│   └── background.jpg
├── css/
│   └── style.css
└── js/
    └── script.js
```

You can interpret it as follows:

| Path | Meaning |
|---|---|
| `index.html` | Main HTML file in the root. |
| `README.md` | Project introduction. |
| `assets/` | Directory containing project resources. |
| `assets/logo.png` | Logo image inside assets. |
| `css/` | Directory containing stylesheets. |
| `css/style.css` | Main stylesheet. |
| `js/` | Directory containing JavaScript files. |
| `js/script.js` | Main JavaScript file. |

The `/` character separates directory names in a file path.

A path tells you where a file or directory is located within a project.

## 5. Understanding Common Project Files

Different files serve different purposes.

Here are some of the files you will frequently encounter.

### README.md

A README introduces a project and explains how to use it.

It commonly contains:

- Project description.
- Installation instructions.
- Usage information.
- Requirements.
- Documentation links.
- Contribution guidelines.

On GitHub, the root README is commonly displayed on the repository's main page.

It is often the first document a visitor reads when exploring a project.

### index.html

In many simple websites, `index.html` is the main webpage.

It contains the HTML structure and may reference stylesheets, scripts and other resources.

When publishing a static website, `index.html` is commonly used as the default entry page.

### style.css

A CSS file defines the presentation of a webpage.

It controls things such as:

- Colours.
- Fonts.
- Spacing.
- Layout.
- Responsiveness.
- Visual effects.

### script.js

A JavaScript file contains instructions that add functionality to a website.

It can handle interactions, respond to user actions and manipulate webpage content.

### .gitignore

A `.gitignore` file contains rules describing files and directories that Git should intentionally ignore.

For example:

```gitignore
# Dependencies
node_modules/

# Environment files
.env

# Operating system files
.DS_Store
Thumbs.db

# Build output
dist/
```

This helps prevent certain files from being included in future commits.

**Important:** Adding a file to `.gitignore` does not automatically stop Git from tracking it if it was already tracked.

### LICENSE

A license explains the terms under which other people may use, modify and distribute a project's work.

Without clear licensing, people should not assume they have permission to reuse your project's code or documentation.

Different licenses provide different permissions and conditions.

### Other Common Files

| File | Purpose |
|---|---|
| `CONTRIBUTING.md` | Explains how people can contribute. |
| `CODE_OF_CONDUCT.md` | Establishes community behaviour expectations. |
| `package.json` | Describes metadata, scripts and dependencies for many JavaScript and Node.js projects. |
| `requirements.txt` | Commonly lists Python package dependencies. |
| `pyproject.toml` | Python project configuration and metadata. |
| `Cargo.toml` | Rust project manifest. |
| `composer.json` | PHP project dependencies and metadata. |
| `CHANGELOG.md` | Records notable project changes across releases. |

Not every project needs all these files.

Their presence depends on the technologies, tools and requirements of the project.

## 6. Understanding Common Directories

Developers group related files into directories to make projects easier to navigate.

Some common directory names include:

| Directory | Common purpose |
|---|---|
| `src/` | Application source code. |
| `assets/` | Images, fonts and other resources. |
| `docs/` | Project documentation. |
| `tests/` | Automated tests. |
| `public/` | Static files served directly by some frameworks and tools. |
| `config/` | Application or tool configuration. |
| `.github/` | GitHub-specific configuration, templates and workflows. |
| `scripts/` | Utility and automation scripts. |

These are common conventions, not universal requirements.

Different programming languages, frameworks and tools may have their own expected directory structures.

For example, some projects place source code inside `src/`, while simple static websites may keep their HTML, CSS and JavaScript files directly in the root.

The right structure depends on the project.

## 7. Understanding File Paths

A file path describes the location of a file or directory.

There are two common ways to reference files within a project.

### Relative Paths

A relative path identifies a location starting from the current file's directory or another defined base directory.

For example:

```text
website/
├── index.html
└── css/
    └── style.css
```

Inside `index.html`, the stylesheet can be referenced using:

```html
<link rel="stylesheet" href="css/style.css">
```

The browser looks for `style.css` inside the `css/` directory relative to the HTML file.

Another example:

```text
website/
├── index.html
└── docs/
    └── guide.md
```

The root `index.html` is one directory above `docs/`.

A relative path from `docs/guide.md` back to the root would use:

```text
../index.html
```

The `..` notation means the parent directory.

### Absolute Paths

An absolute path identifies a location from a defined root or base.

For example, on a Unix-like system:

```text
/home/user/projects/website/index.html
```

This identifies a location from the filesystem root.

Absolute filesystem paths and URLs are different concepts, even though both can contain path segments.

### Why Paths Matter

Correct paths are important when:

- Linking CSS files.
- Loading JavaScript files.
- Displaying images.
- Linking documentation.
- Importing source-code modules.
- Referencing other project resources.

A file can exist in a repository and still fail to load if its path is incorrect.

## 8. How to Organise a Project Properly

A good project structure should make files easy to find and understand.

Here are some useful principles.

### Group Related Files

Keep files that serve related purposes together.

For example:

```text
assets/
├── images/
├── fonts/
└── icons/
```

This is clearer than placing every resource in the root.

### Use Meaningful Names

Prefer filenames that communicate their purpose.

**Less descriptive:**

```text
file1.js
newfile.css
test2.html
```

**More descriptive:**

```text
navigation.js
checkout.css
contact.html
```

### Stay Consistent

Use consistent naming conventions throughout a project.

For example:

```text
user-profile.js
account-settings.js
navigation-menu.js
```

Avoid switching randomly between unrelated naming styles.

### Avoid Unnecessary Complexity

A small website does not need dozens of directories.

For example, this is unnecessarily complicated for a project with only three files:

```text
website/
└── application/
    └── frontend/
        └── source/
            └── pages/
                └── index/
                    └── index.html
```

A simpler structure may be enough:

```text
website/
├── index.html
├── style.css
└── script.js
```

Organise around actual needs, not assumptions about how large the project might become.

## 9. Understanding Empty Directories

There is an important detail about Git.

Git tracks files, not empty directories as independent objects.

Suppose you create:

```text
my-project/
└── images/
```

The `images/` directory is empty.

Git does not record an empty directory by itself.

If you add a file:

```text
my-project/
└── images/
    └── logo.png
```

Git can track `logo.png`, and the directory appears as part of the resulting repository structure.

Some developers use placeholder files such as `.gitkeep` when they need an otherwise empty directory to appear in Git.

`.gitkeep` is a naming convention, not a special Git command or built-in Git feature.

You do not need it for every directory.

## 10. Understanding the Hello World Structure

Now let's examine the actual Hello World repository.

Its structure looks like this:

```text
Hello-World/
│
├── docs/
│   ├── 01-introduction.md
│   ├── 02-understanding-git.md
│   ├── 03-understanding-github.md
│   ├── README.md
│   └── glossary.md
│
├── exercises/
│   └── README.md
│
├── index.html
├── style.css
├── script.js
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── LICENSE
├── LICENSE-DOCUMENTATION.md
└── .gitignore
```

Let's understand why each part exists.

### The docs Directory

Contains the educational guides and reference materials.

Keeping lessons here prevents the repository root from becoming crowded with individual documentation files.

### The exercises Directory

Contains practical assignments that help learners apply what the guides explain.

### The Website Files

The three files in the root work together to create the practical website:

- `index.html` provides the page structure.
- `style.css` controls the appearance.
- `script.js` handles interactions.

They are kept in the root because this is a small static website without a build system or framework requiring a different layout.

### The Root README

Introduces Hello World to visitors and explains how to use the repository.

### The Project Guidelines

`CONTRIBUTING.md` and `CODE_OF_CONDUCT.md` explain how people should participate in the project.

### The Licenses

`LICENSE` covers the code and code examples.

`LICENSE-DOCUMENTATION.md` defines the licensing of the original educational prose.

### The .gitignore File

Contains patterns for files that should not be committed to the repository.

Each component has a specific responsibility.

## 11. Practical Exercise: Explore a Repository

Open the Hello World repository on GitHub.

Complete these tasks:

1. Identify the root directory.
2. Find the `docs/` directory.
3. Open the `exercises/` directory.
4. Locate `index.html`.
5. Identify the stylesheet linked by the HTML file.
6. Find the JavaScript file linked by the HTML file.
7. Open the root README.
8. Find the `.gitignore` file.
9. Identify the purpose of the license files.
10. Explain why the documentation and website files are organised separately.

You do not need to make any changes.

The objective is to become comfortable navigating a real repository.

## 12. Check Your Understanding

Try answering these questions:

1. What is a repository's root directory?
2. What is the difference between a file and a directory?
3. Why do developers group related files into directories?
4. What information should a README contain?
5. What does a `.gitignore` file do?
6. Does Git track empty directories independently?
7. What does the `..` notation mean in a relative path?
8. Why should filenames be descriptive?
9. What is the purpose of a `src/` directory?
10. Why is it unnecessary to create a complicated directory structure for a tiny project?

## Conclusion

A repository is more than a place to store source code.

It is the organised home of a project's files, documentation, configuration and development history.

Understanding how repositories are structured makes it easier to navigate unfamiliar projects, maintain your own work and collaborate with other developers.

The next lesson will explore README files in greater detail, including how to write useful project documentation.

---

## Further Reading

Official documentation:

- [About repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories)
- [About README files](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)
- [Best practices for repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/best-practices-for-repositories)
- [Ignoring files with Git](https://docs.github.com/en/get-started/git-basics/ignoring-files)

**Next:** Understanding README Files.
