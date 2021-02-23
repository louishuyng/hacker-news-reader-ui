import rp from "request-promise";
import * as cheerio from "cheerio";

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
    commands: Array<($: any) => Array<{ [key in string]: any }>>
  ): Promise<Array<Array<{ [key in string]: any }>>> {
    const options = {
      uri,
      transform: function (body: any) {
        return cheerio.load(body);
      },
    };
    const result: Array<Array<{ [key in string]: any }>> = [];
    const $ = await rp(options);

    commands?.map(async (cmd) => {
      try {
        result.push(cmd($));
      } catch (err) {
        // To do later
      }
    });

    return result;
  }
}

export const crawl = Crawl.getInstance();
