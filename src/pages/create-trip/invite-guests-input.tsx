import { ArrowRight, UserRoundPlus } from 'lucide-react'
import Button from '../../components/button'

interface InviteGuestsInputProps {
  openGuestsModal: () => void
  openConfirmModal: () => void
  emailsToInvite: string[]
}

export default function InviteGuestsInput({
  emailsToInvite, openConfirmModal, openGuestsModal
}: InviteGuestsInputProps) {
  return (
    <div className="w-full h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-4">
      <button type="button" onClick={openGuestsModal} className="flex items-center gap-2 flex-1 text-start">
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0
          ? <span className="text-zinc-100 text-lg flex-1">{emailsToInvite.length} pessoa(s) convidada(s)</span>
          : <span className="text-zinc-400 text-lg flex-1">Quem estará na viagem?</span>
        }
      </button>

      <div className="w-px h-6 bg-zinc-800" />

      <Button onClick={openConfirmModal} >
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  )
}
