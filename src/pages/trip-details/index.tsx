import { useState } from "react";
import CreateActivityModal from "./create-activity-modal";
import Details from "./details";
import Header from "./header";
import Sidebar from "./sidebar";

export default function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

  const openCreateActivityModal = () => setIsCreateActivityModalOpen(true)
  const closeCreateActivityModal = () => setIsCreateActivityModalOpen(false)

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <Header />
      <main className="flex gap-16 px-6">
        <Details openCreateActivityModal={openCreateActivityModal} closeCreateActivityModal={closeCreateActivityModal} />
        <Sidebar />
      </main>
      {isCreateActivityModalOpen &&
        <CreateActivityModal closeCreateActivityModal={closeCreateActivityModal} />
      }
    </div>
  )
}