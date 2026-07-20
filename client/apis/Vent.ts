import request from 'superagent'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function get__(): Promise<string[]> {
  const response = await request.get(`${rootURL}/__`)
  return response.body.__ as string[]
}
