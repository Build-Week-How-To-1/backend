const supertest = require("supertest");
const server = require("../api/server");
const db = require("../data/dbConfig");

describe("howtos unit tests", () => {
  afterAll(async () => {
    await db("howTos").truncate();
    await db("users").truncate();
    await db("resources").truncate();
    await db("reviews").truncate();
    await db("steps").truncate();
    await db("howTos_resources").truncate();
  });
  beforeEach(async () => {
    await db.seed.run();
  });

  it("add new howto", async () => {
    const res = await supertest(server)
      .post("/api/howtos")
      .send({ title: "Paint Fence" });
    // @ts-ignore
    expect(res.statusCode).toBe(201);
    // @ts-ignore
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.body.id).toBeDefined();
    expect(res.body.title).toBe("Paint Fence");
  });

  it("fail to add new howTo", async () => {
    const res = await supertest(server)
      .post("/api/howtos")
      .send({ title: "Grilled Cheese" });
    // @ts-ignore
    expect(res.statusCode).toBe(409);
    // @ts-ignore
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
  });

  it("edit howTo", async () => {
    const res = await supertest(server)
      .put("/api/howtos/:howtosid")
      .send({ howtos_id: 1, title: "Grilled Cheez" });
    // @ts-ignore
    expect(res.statusCode).toBe(200);
  });

  it("deletes howTo", async () => {
    const res = await supertest(server)
      .delete("/api/howtos/:howtosid")
      .send({ howtos_id: 1 });
    // @ts-ignore
    expect(res.statusCode).toBe(200);
  });
});
