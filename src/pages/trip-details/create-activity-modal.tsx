import { Calendar, Clock, Tag, X } from 'lucide-react'
import Button from '../../components/button'

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export default function CreateActivityModal({ closeCreateActivityModal }: CreateActivityModalProps) {

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[40rem] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-4">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button onClick={closeCreateActivityModal}>
              <X className="text-zinc-400 size-5" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos os convidados podem visualizar as Atividades
          </p>
        </div>

        <form className="space-y-2">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="size-5 text-zinc-400" />
            <input type="text" name="title" placeholder="Qual a atividade?" className="outline-none bg-transparent text-lg placeholder-zinc-400 w-full" />
          </div>

          <div className='flex gap-2'>
            <div className="flex-1 h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input type="date" name="date" placeholder="Qual a data?" className="[color-scheme:dark] outline-none bg-transparent text-lg placeholder-zinc-400 w-full" />
            </div>
            <div className="h-14 px-4 max-w-36 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Clock className="size-5 text-zinc-400" />
              <input type="time" name="time" placeholder="Horário" className="[color-scheme:dark] outline-none bg-transparent text-lg placeholder-zinc-400 w-full" />
            </div>
          </div>
          <Button type="submit" className="!mt-3 w-full">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  )
}
