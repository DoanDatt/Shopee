import { ResponseApi } from './ResponeApi'
import { User } from './User'

export type AuthResponse = ResponseApi<{
  access_token: string
  expires: string
  user: User
}>
