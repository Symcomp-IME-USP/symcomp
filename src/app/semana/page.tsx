import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Semana() {
  const cronograma: Programacao[] = [
    {
      date: '2025-10-24',
      atividades: [
        {
          titulo: 'Abertura e boas-vindas',
          tipo: 'palestra',
          status: 'confirmada',
          comecaAs: '12:00',
          terminaAs: '13:00',
        },
        {
          titulo: 'Design generativo e arte algorítmica',
          tipo: 'palestra',
          status: 'confirmada',
          comecaAs: '13:30',
          terminaAs: '15:00',
        },
        {
          titulo: 'Coffee break',
          tipo: 'coffee_break',
          status: 'confirmada',
          comecaAs: '15:00',
          terminaAs: '15:30',
        },
        {
          titulo: 'Conversa com artistas locais',
          tipo: 'conversa',
          status: 'provisoria',
          comecaAs: '15:30',
          terminaAs: '17:00',
        },
      ],
    },
    {
      date: '2025-10-25',
      atividades: [
        {
          titulo: 'Palestra: Ética em Inteligência Artificial',
          tipo: 'palestra',
          status: 'confirmada',
          comecaAs: '12:00',
          terminaAs: '13:30',
        },
        {
          titulo: 'Oficina interativa de tipografia digital',
          tipo: 'conversa',
          status: 'confirmada',
          comecaAs: '14:00',
          terminaAs: '16:00',
        },
        {
          titulo: 'Coffee break',
          tipo: 'coffee_break',
          status: 'confirmada',
          comecaAs: '16:00',
          terminaAs: '16:30',
        },
        {
          titulo: 'Mesa-redonda: Design, Arte e Sociedade',
          tipo: 'conversa',
          status: 'provisoria',
          comecaAs: '16:30',
          terminaAs: '18:00',
        },
      ],
    },
    {
      date: '2025-10-26',
      atividades: [
        {
          titulo: 'Palestra: Interação humano-computador',
          tipo: 'palestra',
          status: 'confirmada',
          comecaAs: '12:00',
          terminaAs: '13:00',
        },
        {
          titulo: 'Conversa: Futuro do design de interfaces',
          tipo: 'conversa',
          status: 'confirmada',
          comecaAs: '13:30',
          terminaAs: '15:00',
        },
        {
          titulo: 'Coffee break',
          tipo: 'coffee_break',
          status: 'confirmada',
          comecaAs: '15:00',
          terminaAs: '15:30',
        },
        {
          titulo: 'Workshop: Criatividade assistida por IA',
          tipo: 'conversa',
          status: 'provisoria',
          comecaAs: '15:30',
          terminaAs: '17:30',
        },
      ],
    },
    {
      date: '2025-10-27',
      atividades: [
        {
          titulo: 'Palestra: Computação e estética',
          tipo: 'palestra',
          status: 'confirmada',
          comecaAs: '12:00',
          terminaAs: '13:30',
        },
        {
          titulo: 'Conversa aberta: Arte digital no Brasil',
          tipo: 'conversa',
          status: 'provisoria',
          comecaAs: '14:00',
          terminaAs: '15:30',
        },
        {
          titulo: 'Coffee break',
          tipo: 'coffee_break',
          status: 'confirmada',
          comecaAs: '15:30',
          terminaAs: '16:00',
        },
        {
          titulo: 'Mesa-redonda internacional',
          tipo: 'conversa',
          status: 'confirmada',
          comecaAs: '16:00',
          terminaAs: '18:00',
        },
      ],
    },
    {
      date: '2025-10-28',
      atividades: [
        {
          titulo: 'Palestra final: Caminhos do design computacional',
          tipo: 'palestra',
          status: 'confirmada',
          comecaAs: '12:00',
          terminaAs: '13:30',
        },
        {
          titulo: 'Painel de encerramento',
          tipo: 'encerramento',
          status: 'confirmada',
          comecaAs: '14:00',
          terminaAs: '15:30',
        },
        {
          titulo: 'Coffee break',
          tipo: 'coffee_break',
          status: 'confirmada',
          comecaAs: '15:30',
          terminaAs: '16:00',
        },
        {
          titulo: 'Encerramento oficial',
          tipo: 'encerramento',
          status: 'confirmada',
          comecaAs: '16:00',
          terminaAs: '18:00',
        },
      ],
    },
  ]

  return (
    <div className="bg-sc-2025-background w-full h-full">
      <Tabs defaultValue="2025-10-24">
        <TabsList>
          {cronograma.map((programacao, index) => (
            <TabsTrigger
              value={programacao.date}
              key={`cronograma-tab-trigger-${programacao.date}`}
            >
              {24 + index}
            </TabsTrigger>
          ))}
        </TabsList>
        {cronograma.map((programacao) => (
          <TabsContent
            value={programacao.date}
            key={`cronograma-tab-content-${programacao.date}`}
          >
            {programacao.atividades.map((atividade) => (
              <div key={`atividade-as-${atividade.comecaAs}`}>
                <strong>
                  {atividade.comecaAs} - {atividade.terminaAs}
                </strong>{' '}
                | {atividade.titulo}
              </div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export type Programacao = {
  date: string
  atividades: Atividade[]
}

export type Atividade = {
  titulo: string
  tipo: 'palestra' | 'encerramento' | 'conversa' | 'coffee_break'
  status: 'provisoria' | 'confirmada'
  comecaAs: string
  terminaAs: string
}
