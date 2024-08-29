import { CircleCheck, CircleDashed, Link2, Plus, UserCog } from "lucide-react";
import guestsList from '../../assets/guests.json';
import { Guest } from "../../types";
import Button from "../../components/button";

export default function Sidebar() {
  return (
    <section className="w-80 space-y-6">
      <div className="space-y-6">
        <h2 className="font-semibold text-xl">Links Importantes</h2>
        <div className="space-y-5">

          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5 flex-1">
              <span className="block font-medium text-zinc-100">Reserva do AirBnb</span>
              <a href='www.airbnb.com' className="block text-xs font-medium text-zinc-400 truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/689656216606922430</a>
            </div>
            <Link2 className="size-5 text-zinc-400" />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1 flex-1">
              <span className="block font-medium text-zinc-100">Reserva do AirBnb</span>
              <a href='www.airbnb.com' className="block text-xs font-medium text-zinc-400 truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/689656216606922430</a>
            </div>
            <Link2 className="size-5 text-zinc-400" />
          </div>

        </div>

        <Button className="w-full" variant="secondary">
          <Plus className="size-5" />
          Cadastrar novo link
        </Button>
      </div>
      <div className="w-full h-px bg-zinc-800" />

      <h2 className="font-semibold text-xl">Convidados</h2>

      {guestsList.map((guest: Guest) => (
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1 flex-1">
            <span className="block font-medium text-zinc-100">{guest.name}</span>
            <span className="block text-sm font-medium text-zinc-400 truncate">{guest.email}</span>
          </div>
          {guest.check ? <CircleCheck className="size-5 text-lime-300" /> : <CircleDashed className="size-5 text-zinc-400" />}
        </div>
      ))}

      <Button className="w-full" variant='secondary'>
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>



    </section>
  )
}
