export default function EventoCard({ evento }: { evento: { id: string, nome: string, data: string } }) {
    return (
      <div>
        <h3>{evento.nome}</h3>
        <p>{evento.data}</p>
        <a href={`/eventos/${evento.id}`}>Ver detalhes</a>
      </div>
    );
  }
  