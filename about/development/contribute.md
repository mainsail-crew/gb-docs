---
description: >-
  We welcome contributions to Mainsail! Whether fixing bugs, adding features, or
  improving documentation, your help is invaluable. Please follow these
  guidelines to ensure a smooth process.
---

# Contribute

## Familiarize Yourself with the Code Standards

Before contributing, make sure to review the Mainsail [Code Standards](code-standards.md). Adhering to these standards helps maintain code quality and consistency across the project. Key areas include:

* **Coding Style:** Follow the project's conventions for formatting and structure.
* **Commit Messages:** Write clear and concise commit messages that describe the changes you've made.
* **Documentation:** Ensure that your code is well-documented, and update any relevant sections of the project documentation.

## Fork and Clone the Repository

If you haven't already, fork the Mainsail repository on GitHub to create a personal copy of the project. Then, clone your fork to your local machine:

```bash
git clone https://github.com/YOUR-GITHUB-USERNAME/mainsail.git
cd mainsail
```

{% hint style="info" %}
If you need help to setup your Environment, please follow this [guide](environment.md).
{% endhint %}

## Create a New Branch

Always create a new branch for your work rather than making changes directly on the main branch. Use a descriptive name for your branch that reflects the work you're doing:

```bash
git checkout -b your-feature-branch
```

## Make Your Changes

Implement your changes while following the Mainsail code standards. Be sure to test your changes thoroughly in your local development environment.

## Commit Your Changes

Once your changes are ready, stage and commit them to your branch. Use meaningful commit messages:

```bash
git add .
git commit -m "Description of the changes made"
```

{% hint style="info" %}
We follow the [Conventional Commits](code-standards.md#commit-messages) specification for writing commit messages. This means your commit message should start with a type (like `feat`, `fix`, or `docs`), followed by a short, descriptive summary of the change. For example:\


`git commit -m "feat: add new user login feature"`

\
Following this format ensures that our commit history is clear and organized, which helps with tracking changes and generating release notes.
{% endhint %}

## Push Your Branch to GitHub

After committing your changes, push your branch to your GitHub fork:

```bash
git push origin your-feature-branch
```

## Create a Pull Request

Once your branch is pushed, go to the Mainsail repository on GitHub and open a Pull Request (PR) from your branch. In your PR description, include the following:

* **PR Title:** Ensure that your PR title follows the [Conventional Commits](code-standards.md#commit-messages) schema. Since we use squash and merge, the PR title will become the commit message in the Mainsail commit history.
* **Problem Description:** Clearly describe the issue or feature your PR addresses.
* **Solution Overview:** Provide an overview of the changes you made and why.
* **How to Test:** Include detailed instructions on how to test your changes.
* **Screenshots:** Upload screenshots or gifs to demonstrate the feature or fix, especially for UI changes.
* **Link to Issues:** If your PR resolves a specific issue, mention it by linking to the issue.

## Respond to Feedback

Mainsail maintainers will review your PR. Be prepared to make adjustments based on feedback. Once approved, your changes will be merged into the main project.

## Celebrate Your Contribution!

After your PR is merged, your contributions become part of Mainsail. Thank you for helping to improve the project!
