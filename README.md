<h1 align="center">@ui/monorepo</h1>

> This is a reactJS UI library using monorepo structure with Lerna

## Getting started

This is a monorepo repository using [Lerna](https://lerna.js.org/), [Commitzen](http://commitizen.github.io/cz-cli/) and [Conventional Commits](https://conventionalcommits.org) to maintain and manage component versions and for documentation, we use [Storybook](https://storybook.js.org/).

List of packages containing in this repository:

| Name of package                                | Description                                  |
| ---------------------------------------------- | -------------------------------------------- |
| [`@ui/checkbox`](./packages/Checkbox) | A reactJS checkbox component |
| [`@ui/radio`](./packages/Radio) | A reactJS radio component |
| [`@ui/table`](./packages/Table) | A reactJS table component |

## Setup

Local setup to run this project locally

### Tools:

- Node [version 10.20.1](https://nodejs.org/download/release/v10.21.0/)
  - If you use [nvm](https://github.com/nvm-sh/nvm) just run the command `nvm use` in the root folder

### Configuration

- Install all the dependencies: `yarn install`
- Bootstrap packages: `yarn lerna:bootstrap`
- You can see the components of this repo in:
  - Storybook by running `yarn start:storybook`

### Installing components

TODO: publish package to npm registry
All components in this repository are installed separately, that is, each component has its own npm package, for example if you want to install the button component:

`yarn install @ui/table`

### Running test
Simply run this command to execute the test cases for components in this packages. Powered by Jest + react testing library.

`lerna run test`
