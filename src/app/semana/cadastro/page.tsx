export default function CadastroPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 grid gap-6">
      <form className="border rounded-2xl p-6 shadow-sm bg-white grid gap-4">
        <h2 className="text-xl font-semibold">Cadastrar</h2>

        <label className="grid">
          Nome
          <input type="text" name="username" className="border rounded p-2 mt-1" />
        </label>

        <label className="grid">
          Email
          <input type="email" name="email" className="border rounded p-2 mt-1" />
        </label>

        <label className="grid">
          Senha
          <input type="text" name="password" className="border rounded p-2 mt-1" />
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 mt-2"
        >
          Registrar
        </button>
      </form>
    </div>
  )
}
