# Vite React Boilerplate

![](/public/vite-react-boilerplate.png)

Everything you need to kick off your next Vite + React web app!

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Important Note](#important-note)
- [Testing](#testing)
- [Preparing for Deployment](#preparing-for-deployment)
- [DevTools](#devtools)
- [Installed Packages](#installed-packages)

## Overview

Built with type safety, scalability, and developer experience in mind. A batteries included Vite + React template.

- [pnpm](https://pnpm.io) - A strict and efficient alternative to npm with up to 3x faster performance
- [TypeScript](https://www.typescriptlang.org) - A typed superset of JavaScript designed with large scale applications in mind
- [ESLint](https://eslint.org) - Static code analysis to help find problems within a codebase
- [Prettier](https://prettier.io) - An opinionated code formatter
- [Vite](https://vitejs.dev) - Feature rich and highly optimized frontend tooling with TypeScript support out of the box
- [React](https://react.dev) - A modern front-end JavaScript library for building user interfaces based on components
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework packed with classes to build any web design imaginable
- [Husky](https://github.com/typicode/husky#readme) + [Commitlint](https://github.com/conventional-changelog/commitlint#readme) + [Lint-staged](https://github.com/okonet/lint-staged#readme) - Git hooks and commit linting to ensure use of descriptive and practical commit messages
- [ts-reset](https://github.com/total-typescript/ts-reset#readme) - Improvements for TypeScripts built-in typings for use in applications
- [Docker](https://www.docker.com) - Containerization tool for deploying your vite-react-boilerplate app

A more detailed list of the included packages can be found in the [Installed Packages](#installed-packages) section. Packages not shown above include Devtools, ui helper libraries, and eslint plugins/configs.

## Requirements

- [NodeJS 18+](https://nodejs.org/en)
- [pnpm](https://pnpm.io) (or equivalent)

If you'd like to use the included Dockerfile then [Docker](https://www.docker.com) is required as well:

## Getting Started

Getting started is a simple as cloning the repository

```
git clone git@github.com:nguyenviet02/vite-react-boilerplate.git
```

Changing into the new directory

```
cd vite-react-boilerplate
```

Removing the .git folder (and any additional files, folders or dependencies you may not need)

```
rm -rf .git
```

Installing dependencies

```
pnpm install
```

And running the prepare script (installs husky)

```
pnpm run prepare
```

Congrats! You're ready to starting working on that new project!

If you'd rather run the commands above in one go, check out the command below:

```
git clone git@github.com:RicardoValdovinos/vite-react-boilerplate.git &&\
cd vite-react-boilerplate &&\
rm -rf .git &&\
pnpm install &&\
pnpm run prepare
```

**Note**: This project comes with two git hooks added by [husky](https://typicode.github.io/husky/). A commit-msg hook to run the [Commitlint](https://commitlint.js.org/#/) on the message itself and a pre-commit hook to run [Lint-staged](https://github.com/okonet/lint-staged#readme) on the message itself. Commitlint will ensure the commit message follows the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/). Lint-staged will run the linting and formatting commands on the files you are committing.

If you wish to remove any hooks, simply delete the corresponding file in the .husky directory.

## Important Note

1. This boilerplate project does not include a demo. At most, a few utilities (types, devtools, initial home page routes) are included. There is no glue to get in your way when trying to modify the template.

2. Due to empty directories not being included in git commits, placeholder README files have been added to these empty directories. These README files contain simple descriptions about how the different directories in the accompanying folder structure may be used. As an example check out the [recommended component organizational structure](src/components/README.md) as well as the [recommended folder structure](src/features/README.md).

## Preparing for Deployment

Instructions are provided for deploying both with and without Docker. Both options still require a platform to host the application.

### Without Docker

Deploying is as easy as running

```
pnpm run build
```

and pointing your web server to the generated `index.html` file found at `dist/index.html`

### With Docker

A Dockerfile with an [NGINX](https://www.nginx.com) base image is also provided for quick and easy deployments. Simply execute the following commands:

1. `pnpm run build`
2. `docker build . -t <container_name>`
   - Example: `docker build . -t todo-app`
3. `docker run  -p <port_number>:80 <container_name>`
   - Example: `docker run -p 8080:80 todo-app`

### Continuous Integration

Due to the vast array of tools, opinions, requirements and preferences a CI template is not included in this project.

## Installed Packages

A simplified list can be found in the [Overview](#overview) section.

### Base

- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)
- [React](https://react.dev)

### Linting & Formatting

- [ESLint](https://eslint.org)
  - [typescript-eslint](https://typescript-eslint.io)
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#readme)
  - [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react#readme)
  - [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
  - [eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh)
  - [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn#readme)
- [Prettier](https://prettier.io)

### UI

- [Tailwind CSS](https://tailwindcss.com)
- [HeadlessUI](https://headlessui.com)
- [heroicons](https://heroicons.com)

### Git

- [Husky](https://github.com/typicode/husky#readme)
- [Commitlint](https://github.com/conventional-changelog/commitlint#readme)
- [Lint-staged](https://github.com/okonet/lint-staged#readme)

### Other

- [ts-reset](https://github.com/total-typescript/ts-reset#readme)
