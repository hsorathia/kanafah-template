# Kanafah Template

Technology Stack

- Express
- GraphQL (Apollo flavor)
- Typescript

Some additional things:

- Linting Configuration
  - Prettier support
  - Eslint
  - Editorconfig
- Yarn 2 enabled with pnp
  - Zero-installs setup

Things not in this repo:

- Connections to any database
- Schema and Resolver setup (will be added in the future)

## Running the Template / Getting Started

### Clone the repo

You have two options:

1. Press the `Use this template` button on Github.
2. Clone the repo, and push it to your new repo after changing the remote

### Install Yarn

As this repo uses Yarn 2 it is something you need. If you don't have it already run:

Global: `npm install -g yarn`
Local: `npm install yarn`

[Yarn Docs](https://classic.yarnpkg.com/en/docs/install#windows-stable)

### Downloading the packages

With zero-installs enabled you should be able to hit the ground running,
but in the case it doesn't work run `yarn`, and it should install all the
packages

### Running the application

As this repo uses Typescript, we need to first compile it into Javascript. To
minimize the need to re-run the compiler on every change, we use `tsc-watch`.

This looks for changes that you make, then it recompiles code into the `dist/`
folder. Then we can use `nodemon` to detect any changes in dist, and run the
Javascript code.

Thus, we need to run in separate terminals:

- `yarn watch`
- `yarn dev`
