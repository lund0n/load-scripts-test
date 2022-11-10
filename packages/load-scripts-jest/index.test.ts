import { loadDummy, loadFromEmbeddedScript } from "load-scripts";

declare global {
  interface Window {
    foo?: string;
  }
}

describe("loadDummy", () => {
  beforeEach(() => {
    window.foo = undefined;
  });

  it("loads the script and works", async () => {
    const result = await loadDummy();

    expect(result).toBeTruthy();
  });

  it("loads the embedded script and works", async () => {
    const result = await loadFromEmbeddedScript();

    expect(result).toBeTruthy();
  });
});
