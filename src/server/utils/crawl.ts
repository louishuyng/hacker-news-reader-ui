export const getDataNewsHacker = ($: any): Array<{ [key in string]: any }> => {
  const result: Array<{ [key in string]: string }> = [];
  $("tr.athing:has(td.votelinks)").each(function () {
    const title = $(this)?.find("td.title > a")?.text()?.trim();
    const link = $(this).find("td.title > a").attr("href");
    result.push({ title, link });
  });

  return result;
};
