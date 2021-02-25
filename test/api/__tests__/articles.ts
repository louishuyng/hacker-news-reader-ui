import { Server } from "http";
import request from "supertest";

import { createServer } from "../../../src/server/services/server";

let server: Server;

beforeAll(async () => {
  server = await createServer(8050);
});

afterAll(async (done) => {
  await server.close(done);
});

describe("GET /articles", () => {
  it("should return 200 & have more than 1 article", async (done) => {
    request(server)
      .get(`/api/articles`)
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data.length).toBeGreaterThan(1);
        done();
      });
  });

  it("should return 200 & article must have right format field", async (done) => {
    request(server)
      .get(`/api/articles`)
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const data = res?.body?.data[0];
        expect(data).toHaveProperty("title");
        expect(data).toHaveProperty("author");
        expect(data).toHaveProperty("points");
        expect(data).toHaveProperty("comments");
        expect(data).toHaveProperty("time");
        done();
      });
  });

  it("should return 200 & article page 1 must be different with page 2", async (done) => {
    let titlePageOne = "test";
    let titlePageTwo = "test";

    const data1 = await request(server).get("/api/articles?page=1");
    titlePageOne = data1.body?.data[0].title;
    const data2 = await request(server).get("/api/articles?page=2");
    titlePageTwo = data2.body?.data[0].title;

    expect(titlePageOne).not.toEqual(titlePageTwo);
    done();
  });

  it("should return 200 & article type best must be different with type news", async (done) => {
    let titlePageBest = "test";
    let titlePageNews = "test";

    const data1 = await request(server).get("/api/articles?type=best");
    titlePageBest = data1.body?.data[0].title;
    const data2 = await request(server).get("/api/articles?type=news");
    titlePageNews = data2.body?.data[0].title;

    expect(titlePageBest).not.toEqual(titlePageNews);
    done();
  });

  it("should return empty data & article page is big number", async (done) => {
    request(server)
      .get(`/api/articles?page=1000`)
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res?.body?.data?.length).toEqual(0);
        done();
      });
  });

  it("should return empty data & article type is weird name", async (done) => {
    request(server)
      .get(`/api/articles?type=halo`)
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res?.body?.data?.length).toEqual(0);
        done();
      });
  });
});
