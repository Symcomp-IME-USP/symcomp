import { api } from './api'

interface CreateLoginTokenRequest {
  email: string
  password: string
}

type CreateLoginTokenResponse = {
  access: string
}

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
