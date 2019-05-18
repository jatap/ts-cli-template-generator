# TypeScript Cli Template Generator

Template to generate new TypeScript cli projects

## Table of Contents

- [Requisites](#requisites)
- [Packages](#packages)
- [Usage](#usage)
- [IDE Support](#ide-support)
- [References](#references)
- [TODO](#todo)

## Requisites

- Node 10.13.0
- NVM 6.4.1

## Packages

- Babel
- Flow
- Jest
- Eslint
- Prettier
- Debug
- Commitizen
- Standard Version

## Usage

Clone the project

```bash
$ git clone git@github.com:jatap/ts-cli-template-generator.git
```

Create a new function in your ```~/.zshrc``` or ```~/.bashrc``` to source ```init``` file

```bash
# ~/.zshrc or ~/.bashrc

function new_ts_cli_project() {
  source <cloned_project>/init <cloned_project>
}
```

Create a new folder

```bash
$ mkdir new_amazing_ts_cli_package && cd $_
```

Execute TypeScript Cli Template Generator

```bash
$ new_ts_cli_project
```

## IDE Support

Support for debug in VSCode

- Debug file (source)
- Debug file (compiled)
- Debug test
- Debug tests
- Debug tests (attach)
- Debug tests (launch & attach)

## References

- [TypeScript Template Generator](https://github.com/jatap/ts-template-generator)

## TODO

- [ ] Move to yeoman
