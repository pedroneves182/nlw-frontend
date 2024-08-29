import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'
import Button from '../../components/button'

interface DestinationInputProps {
  showGuestsInput: boolean
  closeGuestsInput: () => void
  openGuestsInput: () => void
}

export default function DestinationInput({
  closeGuestsInput, openGuestsInput, showGuestsInput
}: DestinationInputProps) {

  return (
    <div className="w-full h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-4 shadow-shape">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input disabled={showGuestsInput} type="text" placeholder="Para onde você vai?" className="outline-none bg-transparent text-lg placeholder-zinc-400 w-full" />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input disabled={showGuestsInput} type="text" size={4} placeholder="Quando?" className="outline-none bg-transparent text-lg placeholder-zinc-400" />
        <div className="w-px h-6 bg-zinc-800" />
      </div>


      {showGuestsInput ? (
        <Button onClick={closeGuestsInput} variant='secondary'>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput} >
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  )
}
