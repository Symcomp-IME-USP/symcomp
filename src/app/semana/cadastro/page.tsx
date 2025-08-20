export default function UsuarioPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 grid gap-6">
      <form className="border rounded-2xl p-6 shadow-sm bg-white grid gap-4">
        <h2 className="text-xl font-semibold">Cadastrar</h2>

        <label className="grid">
          Nome
          <input type="text" name="nome" className="border rounded p-2 mt-1" />
        </label>

        <label className="grid">
          Email USP
          <input type="email" name="emailUsp" className="border rounded p-2 mt-1" />
        </label>

        <label className="grid">
          NUSP
          <input type="text" name="nusp" className="border rounded p-2 mt-1" />
        </label>

        <label className="grid">
          Email Pessoal
          <input type="text" name="emailPessoal" className="border rounded p-2 mt-1" />
        </label>

        <label className="grid">
          Link para o seu portfolio
          <input type="url" name="portfolio" className="border rounded p-2 mt-1" />
        </label>

        <label className="grid">
          Link para o seu Linkedin
          <input type="url" name="linkedin" className="border rounded p-2 mt-1" />
        </label>

        <label className="grid">
          Celular
          <input type="tel" name="celular" className="border rounded p-2 mt-1" />
        </label>

        <label className="grid">
          Link para Site Pessoal
          <input type="url" name="sitePessoal" className="border rounded p-2 mt-1" />
        </label>

        <label className="grid">
          Curso
          <input type="text" name="curso" className="border rounded p-2 mt-1" />
        </label>

        <div className="grid">
          Está formado?
          <div>
            <input type="radio" name="formado" id="sim" className="m-2" />
            <label htmlFor="sim">Sim</label>
          </div>
          <div>
            <input type="radio" name="formado" id="nao" className="m-2" />
            <label htmlFor="nao">Não</label>
          </div>
        </div>

        <label className="grid">
          Período
          <input type="number" name="periodo" className="border rounded p-2 mt-1" />
        </label>

        <label className="grid">
          Ano da previsão de formatura
          <input
            type="number"
            name="previsaoFormatura"
            className="border rounded p-2 mt-1"
          />
        </label>

        <label className="grid">
          Qual a sua área de interesse?
          <input type="text" name="interesse" className="border rounded p-2 mt-1" />
        </label>
      </form>
    </div>
  )
}
