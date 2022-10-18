// @vitest-environment happy-dom
import { describe, it, expect } from "vitest";
import { loadDummy } from "./index";

declare global {
  interface Window {
    bar: string;
  }
}

describe("loadDummy", () => {
  it("loads the script and works", async () => {
    const { client } = await loadDummy();

    expect(client).toBeTruthy();
  });
});
