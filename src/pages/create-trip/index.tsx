import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import InviteGuestsModal from "./invite-guests-modal";
import ConfirmTripModal from "./confirm-trip-modal";
import DestinationInput from "./destination-input";
import InviteGuestsInput from "./invite-guests-input";

export function CreateTripPage() {
  const [showGuestsInput, setShowGuestsInput] = useState(false)
  const [showGuestsModal, setShowGuestsModal] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  function openGuestsInput() { setShowGuestsInput(true) }
  function closeGuestsInput() { setShowGuestsInput(false) }
  
  function openGuestsModal() { setShowGuestsModal(true) }
  function closeGuestsModal() { setShowGuestsModal(false) }
  
  function openConfirmModal() { setShowConfirmModal(true) }
  function closeConfirmModal() { setShowConfirmModal(false) }
  
  const navigate = useNavigate()
  
  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (typeof email === 'string' && email.trim() && !emailsToInvite.includes(email)) {
      setEmailsToInvite([...emailsToInvite, email]);
    }

    event.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string) {
    setEmailsToInvite(emailsToInvite.filter(email => email !== emailToRemove))
  }
  

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate('/trips/123')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-[url('./bg.png')] bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-2">
          <img src="logo.svg" alt="" />
          <p className="text-lg text-zinc-300">Convide seus amigos e planeje sua próxima viagem</p>
        </div>

        <div className="space-y-4">
          <DestinationInput
            showGuestsInput={showGuestsInput}
            openGuestsInput={openGuestsInput}
            closeGuestsInput={closeGuestsInput}
          />

          {showGuestsInput &&
            <InviteGuestsInput
              emailsToInvite={emailsToInvite}
              openConfirmModal={openConfirmModal}
              openGuestsModal={openGuestsModal}
            />}
        </div>

        <p className="text-sm text-zinc-500 max-w-md mx-auto">
          Ao planejar sua viagem pela plann.er você automaticamente concorda
          com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade</a>.
        </p>
      </div>

      {showGuestsModal &&
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          removeEmailFromInvites={removeEmailFromInvites}
          closeGuestsModal={closeGuestsModal}
        />
      }

      {showConfirmModal &&
        <ConfirmTripModal
          closeConfirmModal={closeConfirmModal}
          createTrip={createTrip}
        />
      }
    </div>
  );
}
