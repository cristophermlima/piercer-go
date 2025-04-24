import { eventosMock } from '@/lib/data';
import EventoCard from '@/components/EventoCard';

export default function Eventos() {
  return (
    <div>
      <h2>Eventos de Piercing</h2>
      <div>
        {eventosMock.map((evento) => (
          <EventoCard key={evento.id} evento={evento} />
        ))}
      </div>
    </div>
  );
}
