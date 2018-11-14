import { spawnSync } from "child_process";

describe("main", () => {
  let execution;

  beforeAll(async () => {
    execution = await spawnSync(
      "node_modules/.bin/babel-node",
      ["src/cli.js", "-v"],
      {
        stdio: "pipe",
        encoding: "utf-8"
      }
    );
  });

  test("prints stdout", () => {
    const result = "0.1.0";

    expect(execution.stdout.toString().trim()).toBe(result);
  });
});
