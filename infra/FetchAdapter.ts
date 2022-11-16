export class FetchAdapter {
  async get(url: string) {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = response.json()

    return data
  }
}