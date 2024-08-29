import { Plus } from "lucide-react";
import activitiesData from '../../assets/activities.json';
import DayActivities from "./day-activities";
import { Day } from "../../types";
import Button from "../../components/button";

interface DetailsProps {
  openCreateActivityModal: () => void
  closeCreateActivityModal: () => void
}

export default function Details({ openCreateActivityModal }: DetailsProps) {

  return (
    <section className="flex-1 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Atividades</h2>
        <Button onClick={openCreateActivityModal}>
          <Plus className="size-5" />
          Cadastrar atividade
        </Button>
      </div>

      <div className="space-y-8">
        {activitiesData.map((day: Day, index: number) => (
          <DayActivities key={index} {...day} />
        ))}
      </div>
    </section>
  )
}
