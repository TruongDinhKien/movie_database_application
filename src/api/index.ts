import { API_URL, ACCESS_TOKEN } from "@env"

export const API_BASE_URL = API_URL
const API_TOKEN = `Bearer ${ACCESS_TOKEN}`

const defaultHeaders = {
  'accept': 'application/json',
  'Authorization': API_TOKEN,
  'Content-Type': 'application/json',
}

const apiFetch = async (
  endpoint: string, 
  options: RequestInit = {}
) => {
  const url = `${API_BASE_URL}/${endpoint}`
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: { ...defaultHeaders, ...options.headers },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} ${response.statusText}`)
    }

    const text = await response.text();
    return text ? JSON.parse(text) : {};

  } catch (error) {
    console.error('API Request Error:', error)
    throw error
  }
}

export const apiGet = (endpoint: string) => 
  apiFetch(endpoint, { method: 'GET' })

export const apiPost = (endpoint: string, body?: any) => 
  apiFetch(endpoint, { 
    method: 'POST', 
    body: body ? JSON.stringify(body) : undefined 
})

export const getMovieDetail = async (movieID: number) => {
  const res = await apiGet(`movie/${movieID}?language=en-US`)
  return res
}