// Nessa página o usuário verifica seu email com o código enviado.

'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function VerificarPage() {
  const [code, setCode] = useState('')

  const isFormValid = code.length > 0

  return (
    <div className="max-w-2xl mx-auto p-6 grid gap-6">
      <form className="border rounded-2xl p-6 shadow-sm bg-white grid gap-4">
        <Image
          alt="Logo da Symcomp"
          src="/logo/symcomp.png"
          width={80}
          height={80}
          className="mx-auto"
        />

        <h2 className="text-xl font-semibold">Verificar email</h2>

        <p className="text-sm">
          Um código de verificação foi enviado para o seu email. Insira o código abaixo
          para finalizar o cadastro.
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
