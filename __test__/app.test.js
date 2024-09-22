import { saveTrip } from "../src/client/js/app";

describe("saveTrip function", () => {
  test("should be defined", () => {
    expect(typeof saveTrip).toBe("function");
  });
});
