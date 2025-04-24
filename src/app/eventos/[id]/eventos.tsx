import { eventosMock } from '@/lib/data';

export default function Evento({ params }: { params: { id: string } }) {
  const evento = eventosMock.find((e) => e.id === params.id);
  if (!evento) return <p>Evento não encontrado</p>;

  return (
    <div>
      <h2>{evento.nome}</h2>
      <p>{evento.descricao}</p>
      <p>Data: {evento.data}</p>
      <p>Local: {evento.local}</p>
    </div>
  );
}
