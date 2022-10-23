import Mathematical from "../Mathematical";

describe("Mathematical", () => {
  describe("add", () => {
    it("adds 2 + 2", () => {
      const mathematical = new Mathematical();
      expect(mathematical.add(2, 2)).toBe(4);
    });
  });
});
