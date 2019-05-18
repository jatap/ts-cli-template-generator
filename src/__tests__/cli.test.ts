import { spawnSync } from "child_process";

describe("main", () => {
  let execution: any;

  beforeAll(async () => {
    execution = await spawnSync(
      "node",
      ["src/cli.ts", "-v"],
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
