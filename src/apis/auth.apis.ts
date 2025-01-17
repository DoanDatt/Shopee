import { AuthResponse } from '~/types/AuthResonse'
import { http } from '~/utils/http'

export const registerAccount = (body: { email: string; password: string }) => http.post<AuthResponse>('/register', body)
export const loginAccount = (body: { email: string; password: string }) => http.post<AuthResponse>('/login', body)
