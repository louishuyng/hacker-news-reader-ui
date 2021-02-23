export const getTitleNewsHacker = (fnc: any): Array<string> => {
  const result: Array<string> = [];
  fnc("tr.athing:has(td.votelinks)").each(function () {
    const title = fnc(this)?.find("td.title > a")?.text()?.trim();
    result.push(title);
  });

  return result;
};
