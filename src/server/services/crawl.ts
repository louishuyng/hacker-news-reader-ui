import rp from "request-promise";
import * as cheerio from "cheerio";
import { Article } from "../models/Article";
import { Point } from "../models/Point";
import { Author } from "../models/Author";
import { Comment } from "../models/Comment";
import { Time } from "../models/Time";

export const getDataNewsHacker = ($: any): Array<any> => {
  const result: Array<any> = [];
  $("tr.athing:has(td.votelinks)").each(function (index: number) {
    const title = $(this)?.find("td.title > a")?.text()?.trim();
    const link = $(this).find("td.title > a").attr("href");

    const article = new Article(title, index);
    article.updateRefLink(link);

    result.push(article);
  });

  return result;
};

export const getAuthorNewsHacker = ($: any): Array<any> => {
  const result: Array<any> = [];
  $("td.subtext").each(function (index: number) {
    const name = $(this).find("a.hnuser")?.text();

    const user = new Author(name, index);
    result.push(user);
  });

  return result;
};

export const getPointNewsHacker = ($: any): Array<any> => {
  const result: Array<any> = [];
  $("td.subtext").each(function (index: number) {
    const count = $(this)
      .find("span.score")
      ?.text()
      ?.replace(/[^0-9]/g, "");

    const point = new Point(count, index);
    result.push(point);
  });

  return result;
};

export const getCommentNewsHacker = ($: any): Array<any> => {
  const result: Array<any> = [];
  $("td.subtext").each(function (index: number) {
    const count = $(this)
      .find("a")
      ?.last()
      ?.text()
      ?.replace(/[^0-9]/g, "");

    const comment = new Comment(count, index);
    result.push(comment);
  });

  return result;
};

export const getImage = ($: any): Array<string> => {
  const result: Array<string> = [];
  $("img").each(function () {
    const src = $(this).prop("src");
    const width = $(this).prop("width");

    if (src && parseInt(width) > 100) {
      result.push(src);
    }
  });

  return result;
};

export const getTimeNewsHacker = ($: any): Array<any> => {
  const result: Array<any> = [];
  $("td.subtext").each(function (index: number) {
    const text = $(this).find("span.age > a")?.text();

    const time = new Time(text, index);
    result.push(time);
  });

  return result;
};

class Crawl {
  static instance: Crawl;

  static getInstance() {
    if (!Crawl.instance) {
      Crawl.instance = new Crawl();
    }

    return Crawl.instance;
  }

  async analyse(
    uri: string,
    commands: Array<($: any) => Array<any>>
  ): Promise<Array<Array<any>>> {
    const options = {
      uri,
      transform: function (body: any) {
        return cheerio.load(body);
      },
    };
    const result: Array<Array<any>> = [];

    try {
      const $ = await rp(options);

      commands?.map(async (cmd) => {
        try {
          result.push(cmd($));
        } catch (err) {
          // To do later
        }
      });
      return result;
    } catch (err) {
      // To do later
    } finally {
      return result;
    }
  }
}

export const crawl = Crawl.getInstance();
