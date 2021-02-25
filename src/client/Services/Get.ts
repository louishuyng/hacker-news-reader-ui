export default async function Get(
  url: string,
  headers: Record<string, unknown> = {},
  signal?: AbortSignal
): Promise<any> {
  try {
    const response: Response = await fetch(url, {
      method: "GET",
      signal,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...headers,
      },
    });
    return response.json();
  } catch (e) {
    throw new Error(e);
  }
}
