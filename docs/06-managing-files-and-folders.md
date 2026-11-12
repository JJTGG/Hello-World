
# Managing Files and Folders on GitHub

A GitHub repository is made up of files and directories that work together to form a project.

Knowing how to navigate a repository is useful, but developers also need to know how to create, upload, edit, rename, move and delete files.

In this guide, you'll learn how to perform these tasks directly through GitHub's website.

You don't need to install Git or use the command line to follow the initial exercises.

## Learning Objectives

By the end of this guide, you should be able to:

- Navigate files and directories in a GitHub repository.
- Create new files.
- Create directories by adding files to them.
- Upload existing files.
- Edit files directly on GitHub.
- Rename and move files.
- Delete files and directories.
- Understand how file changes are committed.
- Recognise common file-management mistakes.

## 1. Understanding File Management on GitHub

GitHub provides tools for managing repository contents through its web interface.

Depending on your repository permissions, you can:

- Create files.
- Upload files.
- Edit existing files.
- Rename files.
- Move files.
- Delete files and directories.

These operations allow you to maintain a project without necessarily working from a local development environment.

The changes you make can be recorded as Git commits.

This means that even when you work through your browser, Git version control is still involved.

## 2. Navigating Repository Files

Before making changes, you need to know how to find the files you want to manage.

1. Open a repository on GitHub.
2. Navigate to its main page.
3. Find the list of files and directories.
4. Select a directory to explore its contents.
5. Select a file to view its contents.

For example:

```text
hello-world/
├── index.html
├── style.css
├── script.js
├── docs/
│   ├── README.md
│   └── glossary.md
└── exercises/
    └── README.md
```

Selecting `docs/` opens the documentation directory.

Selecting `glossary.md` opens that file.

GitHub also displays the current file location through repository navigation breadcrumbs.

These help you understand where a file belongs in the project.

## 3. Creating a New File

You can create a new file directly through GitHub.

### Steps

1. Open the repository.
2. Navigate to the directory where the new file should be created.
3. Select **Add file**.
4. Choose **Create new file**.
5. Enter the filename, including its extension.
6. Enter the file contents.
7. Preview the content where supported.
8. Select **Commit changes**.
9. Provide a meaningful commit message.
10. Choose where to commit the changes and confirm.

For example, you might create:

`contact.html`

And add:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
</head>
<body>
    <h1>Contact Us</h1>
    <p>Welcome to the contact page.</p>
</body>
</html>
```

After committing, the file becomes part of the repository.

### Creating a File Inside a New Directory

You don't have to create a directory separately before adding a file to it.

You can include the directory name in the filename field.

For example:

`pages/contact.html`

GitHub interprets the `/` separator as a directory path.

The resulting structure becomes:

```text
hello-world/
├── index.html
└── pages/
    └── contact.html
```

The new directory exists because it contains a file.

Remember that Git tracks files and their paths, not empty directories independently.

## 4. Creating and Uploading Existing Files

Sometimes you already have a file on your device that you want to add to GitHub.

Instead of creating its contents manually in the browser, you can upload it.

### Steps

1. Open the repository.
2. Navigate to the destination directory.
3. Select **Add file**.
4. Choose **Upload files**.
5. Select files from your device or drag and drop them into the upload area.
6. Review the selected files.
7. Enter a commit message.
8. Select the destination branch or create a new branch.
9. Commit or propose the changes.

You can upload multiple files together.

For example, you might upload:

```text
about.html
contact.html
services.html
```

These files can then become part of the repository through a commit.

### Important

Uploading files does not automatically mean they are connected correctly to the rest of your project.

For example, an uploaded stylesheet still needs to be referenced by the appropriate HTML file.

Always check file paths and dependencies after uploading.

## 5. Editing an Existing File

GitHub allows you to edit many text-based files directly through its web interface.

### Steps

1. Open the repository.
2. Find the file you want to change.
3. Open the file.
4. Select the edit option, usually represented by a pencil icon.
5. Modify its contents.
6. Review the changes.
7. Select **Commit changes**.
8. Enter a meaningful commit message.
9. Choose the appropriate branch and confirm.

### Example

Suppose your `index.html` currently contains:

```html
<h1>Hello, World!</h1>
```

You want to change it to:

```html
<h1>Welcome to My Website</h1>
```

Edit the file, make the change and commit it.

The new version becomes the latest recorded version of that file.

The previous version remains available through the repository's commit history.

### Why Commit Messages Matter

A commit message should explain what changed.

For example:

```text
feat(website): update homepage heading
```

This is more useful than:

```text
updated file
```

The message should describe the actual change.

## 6. Renaming a File

Sometimes a filename no longer describes its purpose.

You can rename many files directly on GitHub.

For example:

```text
page1.html
```

Might be renamed to:

```text
about.html
```

### Steps

1. Open the file you want to rename.
2. Select the edit option.
3. Find the filename field.
4. Replace the existing filename with the new name.
5. Review the change.
6. Commit the update.

### Why Meaningful Filenames Matter

Compare:

```text
file1.html
file2.html
file3.html
```

With:

```text
home.html
about.html
contact.html
```

The second structure makes it much easier to understand the purpose of each file.

### Remember to Update References

Renaming a file does not guarantee that other files referencing it will be updated.

For example, if HTML contains:

```html
<a href="page1.html">About</a>
```

And you rename `page1.html` to `about.html`, you must also update the link:

```html
<a href="about.html">About</a>
```

Otherwise, the link may stop working.

## 7. Moving a File to Another Directory

Renaming and moving are related operations.

The main difference is that moving a file changes its location.

For example:

```text
hello-world/
├── index.html
└── style.css
```

You decide to organise the stylesheet inside a `css/` directory.

The resulting structure becomes:

```text
hello-world/
├── index.html
└── css/
    └── style.css
```

GitHub's file editor supports moving many files by changing their path in the filename field.

### Steps

1. Navigate to the file.
2. Open the file editor.
3. Change the filename field to the desired path.
4. Review the new location.
5. Commit the change.

For example:

`style.css`

Becomes:

`css/style.css`

### Update References

After moving a file, check every reference to its previous path.

In this example, the HTML file previously contained:

```html
<link rel="stylesheet" href="style.css">
```

It must now contain:

```html
<link rel="stylesheet" href="css/style.css">
```

Failing to update file references can cause resources to stop loading.

Some file types and more complex moves may require a local Git workflow instead of GitHub's basic web editor.

## 8. Deleting Files and Directories

Sometimes a file or directory is no longer needed.

GitHub allows authorised users to delete files and directories through its interface.

### Deleting a File

1. Open the file you want to delete.
2. Find the file's options menu.
3. Select the delete option.
4. Review the deletion.
5. Enter a commit message.
6. Commit the change or propose it through a branch.

An appropriate commit message might be:

```text
chore(website): remove unused landing page
```

### Deleting a Directory

A directory may contain several files.

If you want to remove the entire directory, its contents must be removed.

GitHub provides directory deletion options where supported.

Remember that deleting a directory's last file also means the directory no longer appears in the Git repository.

### Important: Deleting Is Not Erasing History

Deleting a file creates a new recorded change.

The previous version may still exist in the repository's commit history.

For example, deleting a file containing an exposed API key does not make that key safe.

If a password, token or other credential is exposed:

1. Revoke or rotate the credential immediately.
2. Investigate where it was exposed.
3. Follow the appropriate sensitive-data removal process if necessary.

Never rely on deleting a file to protect an already exposed secret.

## 9. Understanding Commits During File Management

Most file-management operations performed through GitHub involve creating a commit.

A commit records the change in the repository's history.

For example:

| Operation | Example commit message |
|---|---|
| Create a file | `feat(website): add contact page` |
| Upload files | `feat(website): add service pages` |
| Edit a file | `fix(website): correct homepage link` |
| Rename a file | `refactor(website): rename contact page` |
| Move a file | `refactor(website): organise stylesheet directory` |
| Delete a file | `chore(website): remove unused page` |

These are examples. Choose the commit type according to the actual change.

### Direct Commit or New Branch?

When committing through GitHub, you may be given a choice between:

- Committing directly to the current branch.
- Creating a new branch and proposing the changes through a pull request.

For simple personal exercises, a direct commit to your own repository's default branch may be appropriate.

For collaborative projects, creating a branch and opening a pull request is generally a better workflow.

A repository may also protect its default branch and prevent direct commits.

Your available options depend on repository permissions and configuration.

## 10. Common File-Management Mistakes

| Mistake | Why It Causes Problems |
|---|---|
| Using unclear filenames | Makes files difficult to identify. |
| Creating unnecessary folders | Makes navigation more complicated. |
| Moving files without updating references | Can break links and resource loading. |
| Deleting files without checking dependencies | Can break other parts of the project. |
| Uploading unnecessary files | Adds clutter to the repository. |
| Uploading private credentials | Can expose sensitive information. |
| Using vague commit messages | Makes project history difficult to understand. |
| Editing a protected branch | The repository may reject direct changes. |

Review your work before committing.

## 11. Practical Exercise: Manage Your Website Files

Use your own copy of the Hello World template for this exercise.

### Task 1 — Create a File

Create a new file named:

`about.html`

Add a basic HTML page containing:

- A page title.
- A main heading.
- A short paragraph about yourself or the project.

### Task 2 — Create a Directory

Create a file inside:

`pages/contact.html`

This should create a `pages/` directory containing the new file.

### Task 3 — Upload a File

Create a small text file on your device named:

`notes.txt`

Upload it to your repository.

### Task 4 — Edit a File

Edit `about.html` and add another paragraph.

### Task 5 — Rename a File

Rename:

`notes.txt`

To:

`project-notes.txt`

### Task 6 — Move a File

Move:

`project-notes.txt`

Into a new directory named:

`notes/`

### Task 7 — Delete a File

Delete `project-notes.txt` from the repository when you have finished experimenting.

### Task 8 — Inspect Your Commit History

Open the commit history and identify the changes created by your exercises.

Review the commit messages and check that each one describes the corresponding operation.

## 12. Check Your Understanding

Answer these questions:

1. How do you create a new file on GitHub?
2. How can you create a file inside a new directory?
3. What is the difference between creating a file and uploading an existing file?
4. How do you edit an existing file through GitHub?
5. What should you check after renaming a file?
6. What happens when you move a stylesheet into another directory?
7. How can you delete a file?
8. Does deleting a file automatically remove it from commit history?
9. Why should credentials never be uploaded to a repository?
10. What is the difference between committing directly and creating a branch for a pull request?

## Conclusion

GitHub provides a practical way to manage repository files through its web interface.

You can create, upload, edit, rename, move and delete files while recording your changes through commits.

Understanding these operations makes it easier to maintain projects and prepares you for more advanced Git workflows.

You have now learned the essential file-management operations available through GitHub's website.

The next guide will explore repository settings and how to configure a repository for its intended use.

---

## Further Reading

Official GitHub documentation:

- [Managing repository files](https://docs.github.com/en/repositories/working-with-files/managing-files)
- [Creating new files](https://docs.github.com/en/repositories/working-with-files/managing-files/creating-new-files)
- [Uploading files](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [Editing files](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)
- [Moving files](https://docs.github.com/en/repositories/working-with-files/managing-files/moving-a-file-to-a-new-location)
- [Deleting files](https://docs.github.com/en/repositories/working-with-files/managing-files/deleting-files-in-a-repository)

**Next:** Understanding Repository Settings.
