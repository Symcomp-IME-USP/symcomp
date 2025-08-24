// Nesa página o usuário verifica seu email com o código enviado..

export default function VerificarPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 grid gap-6">
      <form className="border rounded-2xl p-6 shadow-sm bg-white grid gap-4">
        <h2 className="text-xl font-semibold">Verificar email</h2>

        <p className="text-sm">
          Um código de verificação foi enviado para o seu email. Insira o código abaixo
          para finalizar o cadastro.
        </p>

        <label className="grid">
          Código
          <input type="text" name="code" className="border rounded p-2 mt-1" />
        </label>

        <button
          type="submit"
          className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700 mt-2"
        >
          Verificar
        </button>
      </form>
    </div>
  )
}
