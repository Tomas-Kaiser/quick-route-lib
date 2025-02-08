import { describe, expect, it } from "vitest";
import { validateQuery } from "../../src/common/validations/query.validator";

describe("Query validator", () => {
  it("should pass validation", () => {
    const query = "33 main st";
    expect(validateQuery(query)).toBe("33%20main%20st");
  });

  it("should throw a length error validation", () => {
    const query = "3";
    expect(() => validateQuery(query)).toThrow(
      /Invalid query: ".+" length must be at least \d+ characters long/
    );
  });

  it("should throw a too long error validation", () => {
    const query = "a".repeat(201);
    expect(() => validateQuery(query)).toThrow(
      /Invalid query: ".+" length must be less than or equal to \d+ characters long/
    );
  });

  it("should throw an invalid char error validation", () => {
    const query = "<script>alert('xss');</script>";
    expect(() => validateQuery(query)).toThrow(/required pattern/);
  });
});
