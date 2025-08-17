import { Token } from '@/types/token'

import { api } from './api'

interface CreateLoginTokenRequest {
  email: string
  password: string
}

type CreateLoginTokenResponse = Token

export default async function CreateLoginToken({
  email,
  password,
}: CreateLoginTokenRequest) {
  const response = await api.post<CreateLoginTokenRequest, CreateLoginTokenResponse>(
    '/token/',
    { email, password },
  )
  return response
}
