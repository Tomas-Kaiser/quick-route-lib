import { describe, expect, it } from "vitest";
import { fuzzySearch } from "../../src/index";

describe("Integration test for fuzzySearch", () => {
  it("should pass validation", async () => {
    const query = "33 main st";
    const res = await fuzzySearch(query);

    expect(res.results).toBeDefined();
    expect(res.meta.date).toBeDefined();
    expect(res.results[0].country).toBe("Australia");
    expect(res.results[0].postalCode).toBe("3345");
  });

  it("should not pass validation due length", async () => {
    const query = "3";
    try {
      await fuzzySearch(query);
    } catch (error) {
      expect(error.message).match(
        /Invalid query: ".+" length must be at least \d+ characters long/
      );
    }
  });
});
