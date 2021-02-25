import { Server } from "http";
import request from "supertest";

import { createServer } from "../../../src/server/services/server";

let server: Server;

beforeAll(async () => {
  server = await createServer(8051);
});

afterAll(async (done) => {
  await server.close(done);
});

describe("GET /image", () => {
  it("should return 200 & while link is valid", async (done) => {
    const link =
      "https://blog.mozilla.org/security/2021/02/23/total-cookie-protection/";

    request(server)
      .get(`/api/image?link=${link}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.image).not.toBeUndefined();
        done();
      });
  });

  it("should return undefined & while link is not valid", async (done) => {
    const link = "https://example.com";

    request(server)
      .get(`/api/image?link=${link}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.image).toBeUndefined();
        done();
      });
  });
});
