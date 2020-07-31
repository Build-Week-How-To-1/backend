const supertest = require("supertest");
const server = require("../api/server");
const db = require("../data/dbConfig");

describe("reviews unit tests", () => {
  afterAll(async () => {
    await db("reviews").truncate();
  });
  beforeEach(async () => {
    await db.seed.run();
  });

  it("add new review", async () => {
    const res = await supertest(server)
      .post("/api/howTos/:howTosid/reviews")
      .send({ howTosid: 1, content: "This was a delicious sandwich" });
    // @ts-ignore
    expect(res.statusCode).toBe(201);
    // @ts-ignore
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.body.id).toBeDefined();
    expect(res.body.content).toBe("This was a delicious sandwich");
  });

  it("edit review", async () => {
    //   const res = await supertest(server)
  });

  it("deletes review", async () => {
    //   const res = await supertest(server)
  });
});
