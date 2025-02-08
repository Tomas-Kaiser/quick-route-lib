import { describe, expect, it } from "vitest";
import { fuzzySearchApi } from "../../src/api/api";
import { getApiConfig } from "../../src/common/configs/apiConfig";
import exp from "constants";

describe("Query validator", () => {
  it("should get response", async () => {
    const res = await fuzzySearchApi(getApiConfig("133 Ipswich Rd"));

    expect(res).toBeDefined();
    expect(res.meta).toBeDefined();
    expect(res.results).toBeDefined();
    expect(res.results[0].country).toBe("Australia");
  });

  it("should throw error", async () => {
    try {
      await fuzzySearchApi("wrong endpoint config");
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.message).match(/Something went wrong/);
    }
  });
});
