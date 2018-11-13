import { spawnSync } from "child_process";

describe("main", () => {
  let execution;

  beforeAll(async () => {
    execution = await spawnSync(
      "node_modules/.bin/babel-node",
      ["src/index.js"],
      {
        stdio: "pipe",
        encoding: "utf-8"
      }
    );
  });

  test("prints stdout", () => {
    const result = "Hello World!";

    expect(execution.stdout.toString().trim()).toBe(result);
  });
});
