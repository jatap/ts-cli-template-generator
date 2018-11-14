#!/usr/bin/env node

const program: Object = require("commander");

program
  .version("0.1.0", "-v, --version")
  .name("XXX")
  .description("XXX");

program.on("--help", () => {
  console.log("");
  console.log("Examples:");
  console.log("  $ XXX --help");
  console.log("  $ XXX -h");
});

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
