const request = require("supertest");
const app = require("../src/server/server");

describe("Express Server", () => {
  it("should respond with status 200 on GET /", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });

  it("should save trip data on POST /saveData", async () => {
    const response = await request(app)
      .post("/saveData")
      .send({ trip: "My trip to the beach" });

    expect(response.status).toBe(201);
    expect(response.text).toBe("My trip to the beach");
  });
});
