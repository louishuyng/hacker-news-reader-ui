import { Express } from "express";
import request from "supertest";

import { createServer } from "../../../src/server/services/server";

let server: Express;

beforeAll(async () => {
  server = await createServer();
});

describe("GET /articles", () => {
  it("should return 200 & valid response if request param list is empity", async (done) => {
    request(server)
      .get(`/api/articles`)
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toMatchObject({ message: "Hello, stranger!" });
        done();
      });
  });
});
