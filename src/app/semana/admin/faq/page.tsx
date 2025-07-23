// Front end para listar e cadastrar FAQ.

export default function FaqPage() {
  const faqs = [
    {
      duvida: 'Is it really safe to be in this group?',
      resposta:
        'Yeah, you can steal all the money, just like the Med girl. But you have to be white and rich to not go to prison :)',
      createdAt: '2025-07-23T14:30:00Z',
      display: true,
    },
    {
      duvida: 'Posso comer todo o bolo do coffe break?',
      resposta:
        'Pode sim, mas só se você chegar antes de mim, porque vou comê-lo inteiro e não sobrará nenhum pedacinho sequer.',
      createdAt: '2025-07-23T14:34:00Z',
      display: true,
    },
    {
      duvida: 'Haverá truco?',
      resposta:
        'Não, porque da última vez apostaram a mãe e tivemos que viajar até o inferno para busca-la, igual num episódio de Apenas Um Show.',
      createdAt: '2025-07-23T14:34:00Z',
      display: true,
    },
    {
      duvida: 'E se eu aproveitar do coffee break sem ter assistiado nenhuma palestra?',
      resposta: 'Neste caso, você irá conhecer a Dolores, HAHAHA! :).',
      createdAt: '2025-07-23T14:36:00Z',
      display: false,
    },
  ]

  return (
    <div className="max-w-5xl mx-auto p-6 grid gap-6">
      <form className="border rounded-2xl p-6 shadow-sm bg-white grid gap-4">
        <h2 className="text-xl font-semibold">Adicionar FAQ</h2>

        <label className="grid">
          Questão
          <input type="text" name="duvida" className="border rounded p-2 mt-1" />
        </label>

        <label className="grid">
          Resposta
          <input type="text" name="resposta" className="border rounded p-2 mt-1" />
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 mt-2"
        >
          Enviar
        </button>
      </form>

      <h2 className="text-2xl font-bold">Lista de FAQs</h2>
      {faqs.map(
        (faq, index) =>
          faq.display && (
            <div key={index} className="border rounded-2xl p-6 shadow-sm bg-white">
              <h2 className="text-xl font-semibold">{faq.duvida}</h2>
              <p className="text-sm text-gray-800">{faq.resposta}</p>
              <p className="text-xs text-gray-400 mt-2">
                Criado em: {new Date(faqs[0].createdAt).toLocaleDateString('pt-BR')}
              </p>
            </div>
          ),
      )}
    </div>
  )
}
