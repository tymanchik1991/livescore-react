export async function request<T>(url: string, options?: RequestInit): Promise<T | undefined> {
  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error(`Could not fetch the data for: ${url}`)
    }
    return response.json()
  } catch (e) {
    console.error(e)
  }
}
