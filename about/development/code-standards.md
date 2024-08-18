---
description: >-
  Mainsail's code standards ensure consistent, readable, and maintainable code.
  Learn best practices for style, naming, and commit messages to contribute
  effectively to the project's quality.
---

# Code standards

## Code formatting <a href="#code-formatting" id="code-formatting"></a>

We use [Prettier](https://prettier.io/) as our code formatter to ensure consistent formatting across the entire codebase. Prettier is an opinionated tool that enforces a unified style. To maintain this consistency, every pull request (PR) is automatically checked by a GitHub Workflow.

Before submitting your PR, you can run `npm run format` to ensure that all your changes are properly formatted. To streamline this process, consider using Prettier integrations available in [JetBrains IDEs](code-standards.md#jetbrains-ide) or [VSCode](code-standards.md#vscode).

### Jetbrains IDE <a href="#jetbrains-ide" id="jetbrains-ide"></a>

Add this integration by:

* Adding the [prettier plugin](https://plugins.jetbrains.com/plugin/10456-prettier) through plugins.
* Going to Preferences -> Languages and Frameworks -> Prettier.
* Set ‘Run for files’ to `{**/*,*}.{js,ts,jsx,tsx,vue,scss,css,yml,md,html}`
* Tick the `On save` and `On 'Reformat code' action` boxes

So it looks like this:

![](../../.gitbook/assets/prettier-config-jetbrains.png)

### VSCode <a href="#vscode" id="vscode"></a>

Add this integration by:

* Adding the [prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* Setting the `editor.defaultFormatter` preference to `esbenp.prettier-vscode`

## **Commit Messages**

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for our commit messages. This system uses a structured format that makes it easy to understand the purpose of each commit. A typical commit message should include a type (such as `feat`, `fix`, or `docs`), a brief description, and optionally, additional details in the body. Following this convention helps in keeping a clean and manageable commit history, making it easier to track changes and generate changelogs.

## Linting <a href="#linting" id="linting"></a>

For linting we use [ESLint](https://eslint.org/). Which statically analyzes our application for common problems. Just like our code formatting, this is also checked in every PR using a custom workflow.

You can always run `npm run lint:fix` to make sure that all your changes are in compliant with our linting rules.
