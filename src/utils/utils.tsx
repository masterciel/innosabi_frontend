export const makeFilter = (filter: string[]) => {
  const filterQuote = filter.map((value) => `"${value}"`);
  const params = filterQuote.join(',');
  const request = `[{"name":"any","modifiers":[{"name":"fields","params":["title","content"]},{"name":"contains","params":[${params}]}]}]`;
  return request;
};
