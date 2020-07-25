require("dotenv");
const db = require("../data/dbconfig");
const supertest = require("supertest");
const server = require("../api/server");

describe("should be the correct database environment", () => {
  afterAll(async () => {
    await db("users").truncate();
  });

  it("should set the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});
