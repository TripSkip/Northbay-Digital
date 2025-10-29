/**
 * Utility function to make API calls to the backend
 * Automatically prepends the API URL from environment variables
 */
export const apiCall = async (
  endpoint: string,
  options?: RequestInit
): Promise<Response> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''
  const url = `${apiUrl}${endpoint}`
  
  return fetch(url, options)
}

/**
 * Helper to make authenticated API calls with Bearer token
 */
export const apiCallWithAuth = async (
  endpoint: string,
  token: string,
  options?: RequestInit
): Promise<Response> => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    ...options?.headers,
  }
  
  return apiCall(endpoint, {
    ...options,
    headers,
  })
}
