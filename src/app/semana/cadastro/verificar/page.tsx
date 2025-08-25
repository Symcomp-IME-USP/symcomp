// Nessa página o usuário verifica seu email com o código enviado.

'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'

const API_URL = 'http://127.0.0.1:8000/api'

export default function VerificarPage() {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  const email = localStorage.getItem('email')
  const isFormValid = code.length > 0

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const url = `${API_URL}/validate-code/`
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, code }),
    }

    try {
      const response = await fetch(url, options)
      const responseData = await response.json()

      if (response.ok) {
        console.log('Código validado com sucesso!')
      } else {
        const error: string = responseData.error
        setError(error)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 grid gap-6">
      <form
        onSubmit={handleSubmit}
        className="border rounded-2xl p-6 shadow-sm bg-white grid gap-4"
      >
        <Image
          alt="Logo da Symcomp"
          src="/logo/symcomp.png"
          width={80}
          height={80}
          className="mx-auto"
        />

        <h2 className="text-xl font-semibold">Verificar email</h2>

        <p className="text-sm">
          Um código de verificação foi enviado para o email{' '}
          <span className="font-mono bg-rose-200 p-1">{email}</span>. Insira o código
          abaixo para finalizar o cadastro.
        </p>

        <label className="grid">
          Código
          <input
            type="text"
            name="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="border rounded p-2 mt-1"
          />
          <span className="text-sm text-red-600 ml-3">{error}</span>
        </label>

        <button
          type="submit"
          disabled={!isFormValid}
          className={`bg-rose-600 text-white rounded px-4 py-2 mt-2 ${isFormValid ? 'hover:bg-rose-700' : 'opacity-80'}`}
        >
          Verificar
        </button>
      </form>
    </div>
  )
}
