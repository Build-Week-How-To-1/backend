const supertest = require("supertest");
const server = require("../api/server");
const db = require("../data/dbconfig");

describe("howTos unit tests", () => {
    afterAll(async () => {
      await db("howTos").truncate();
    });
    beforeEach(async () => {
      await db.seed.run();
    });
  
    it("add new howTo", async () => {
        const res = await supertest(server)
        .post("/api/users/register")
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
        .post("/api/users/register")
        .send({ title: "Grilled Cheese" });
      // @ts-ignore
      expect(res.statusCode).toBe(409);
      // @ts-ignore
      expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
    });

    it("", async () => {
            //   const res = await supertest(server)
    });

    it("", async () => {
                //   const res = await supertest(server)
    })
}