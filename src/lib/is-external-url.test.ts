import { describe, expect, it } from "vitest";
import { isExternalUrl } from "./is-external-url";

describe("isExternalUrl", () => {
  it("returns true for http and https URLs", () => {
    expect(isExternalUrl("https://example.com")).toBe(true);
    expect(isExternalUrl("http://a.io/b")).toBe(true);
    expect(isExternalUrl("HTTPS://UPPER.COM/")).toBe(true);
  });

  it("returns false for anchors, relative paths, and empty-looking links", () => {
    expect(isExternalUrl("#")).toBe(false);
    expect(isExternalUrl("/project/foo")).toBe(false);
    expect(isExternalUrl("mailto:a@b.com")).toBe(false);
  });
});
