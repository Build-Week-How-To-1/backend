const supertest = require("supertest");
const server = require("../api/server");
const db = require("../data/dbConfig");

describe("auth users reg unit tests", () => {
  afterAll(async () => {
    await db("users").truncate();
  });
  beforeEach(async () => {
    await db.seed.run();
  });

  it("POST /register success", async () => {
    const res = await supertest(server)
      .post("/api/users/register")
      .send({ email: "finn@hero.com", password: "shmowzow" });
    // @ts-ignore
    expect(res.statusCode).toBe(201);
    // @ts-ignore
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.body.id).toBeDefined();
    expect(res.body.email).toBe("finn@hero.com");
  });

  it("POST /register fails", async () => {
    const res = await supertest(server)
      .post("/api/users/register")
      .send({ email: "dalecooper@gmail.com", password: "password" });
    // @ts-ignore
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.status).toBe(409);
  });
});

describe("auth users login unit tests", () => {
  afterAll(async () => {
    await db("users").truncate();
  });
  beforeEach(async () => {
    await db("users").truncate();
    await supertest(server)
      .post("/api/users/register")
      .send({ email: "user1@email.com", password: "pass" });
  });

  it("POST /login success", async () => {
    const res = await supertest(server)
      .post("/api/users/login")
      .send({ email: "user1@email.com", password: "pass" });
    // @ts-ignore
    expect(res.statusCode).toBe(200);
    // @ts-ignore
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
  });

  it("POST /login fails", async () => {
    const res = await supertest(server)
      .post("/api/users/login")
      .send({ email: "notuser", password: "word" });
    // @ts-ignore
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.status).toBe(401);
  });
});
