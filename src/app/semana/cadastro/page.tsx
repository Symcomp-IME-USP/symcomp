'use client'

import { useState } from 'react'

import Image from 'next/image'

export default function CadastroPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isFormValid = name.length > 0 && email.length > 0 && password.length > 0

  return (
    <div className="max-w-5xl mx-auto p-6 grid gap-6">
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded p-2 mt-1"
          />
        </label>

        <label className="grid">
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded p-2 mt-1"
          />
        </label>

        <label className="grid">
          Senha
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded p-2 mt-1"
          />
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
