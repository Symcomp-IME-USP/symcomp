'use client'

import { useState } from 'react'
import { ChangeEvent, FormEvent } from 'react'
import Image from 'next/image'

const API_URL = 'http://127.0.0.1:8000/api'

// Representa os campos do formulário.
type Fields = {
  name: string
  email: string
  password: string
}

// Representa um feedback retornado pelo servidor após o formulário ser enviado.
type Feedback = {
  name: string[]
  email: string[]
  password: string[]
}

const emptyFeedback: Feedback = { name: [], email: [], password: [] }

export default function CadastroPage() {
  const [fields, setFields] = useState<Fields>({ name: '', email: '', password: '' })

  // Essa variável contém, se existirem, erros relacionados aos campos do formulário.
  const [feedback, setFeedback] = useState<Feedback>(emptyFeedback)

  // O formulário só é enviado quando nenhum campo está vazio.
  const isFormValid =
    fields.name.length > 0 && fields.email.length > 0 && fields.password.length > 0

  // Atualiza os campos do formulário.
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFields((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  // Trata o envio do formulário.
  const handleSubmit = async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault()

    const url = `${API_URL}/register/`
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fields),
    }

    // Realiza a requisição.
    try {
      const response = await fetch(url, options)
      const responseData = await response.json()

      console.log(responseData)

      if (response.ok) {
        setFeedback(emptyFeedback)
      } else {
        setFeedback(responseData)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div onSubmit={handleSubmit} className="max-w-5xl mx-auto p-6 grid gap-6">
      <form className="border rounded-2xl p-6 shadow-sm bg-white grid gap-4">
        <Image
          alt="Logo da Symcomp"
          src="/logo/symcomp.png"
          width={80}
          height={80}
          className="mx-auto"
        />

        <h2 className="text-xl font-semibold">Cadastrar</h2>

        <label className="grid">
          Nome
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            className="border rounded p-2 mt-1"
          />
          {feedback.name?.map((password, index) => (
            <span key={index} className="text-sm text-red-600 ml-3">
              {password}
            </span>
          ))}
        </label>

        <label className="grid">
          Email
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            className="border rounded p-2 mt-1"
          />
          {feedback.email?.map((password, index) => (
            <span key={index} className="text-sm text-red-600 ml-3">
              {password}
            </span>
          ))}
        </label>

        <label className="grid">
          Senha
          <input
            type="text"
            name="password"
            value={fields.password}
            onChange={handleChange}
            className="border rounded p-2 mt-1"
          />
          {feedback.password?.map((password, index) => (
            <span key={index} className="text-sm text-red-600 ml-3">
              {password}
            </span>
          ))}
        </label>

        <button
          type="submit"
          disabled={!isFormValid}
          className={`bg-rose-600 text-white rounded px-4 py-2 mt-2 ${isFormValid ? 'hover:bg-rose-700' : 'opacity-80'}`}
        >
          Registrar
        </button>
      </form>
    </div>
  )
}

// TODO: direcionar usuário para a página de validação após enviar o formulário.
// TODO: Evitar que o usuário clique e envie o formulário múltiplas vezes.
