const fetch = require("node-fetch");
const { getGeoCity } = require("../src/client/apis/geoNamesApi");

jest.mock("node-fetch");

describe("getGeoCity", () => {
  it("should handle errors gracefully", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
    });

    const result = await getGeoCity("Invalid City");

    expect(result).toBeUndefined();
  });
});
