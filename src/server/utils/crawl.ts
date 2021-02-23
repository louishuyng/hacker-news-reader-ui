import { Article } from "../models/Article";

export const getDataNewsHacker = ($: any): Array<any> => {
  const result: Array<any> = [];
  $("tr.athing:has(td.votelinks)").each(function () {
    const title = $(this)?.find("td.title > a")?.text()?.trim();
    const link = $(this).find("td.title > a").attr("href");

    const article = new Article(title);
    article.updateRefLink(link);

    result.push(article);
  });

  return result;
};
