import { Mail, User, X } from 'lucide-react'
import { FormEvent } from 'react'
import Button from '../../components/button'

interface ConfirmTripModalProps {
  closeConfirmModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export default function ConfirmTripModal({ closeConfirmModal, createTrip }: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[40rem] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-4">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirmar criação de viagem</h2>
            <button onClick={closeConfirmModal}>
              <X className="text-zinc-400 size-5" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">Florianópolis, Brasil</span> nas datas de <span className="font-semibold text-zinc-100">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="size-5 text-zinc-400" />
            <input type="email" name="email" placeholder="Seu nome completo" className="outline-none bg-transparent text-lg placeholder-zinc-400 w-full" />
          </div>

          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Mail className="size-5 text-zinc-400" />
            <input type="email" name="email" placeholder="Seu email pessoal" className="outline-none bg-transparent text-lg placeholder-zinc-400 w-full" />
          </div>

          <Button type="submit">
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  )
}
