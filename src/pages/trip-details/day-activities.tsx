import { CircleCheck, CircleDashed } from "lucide-react";
import { Day } from "../../types";

export default function DayActivities({ date, dayOfWeek, activities }: Day) {
  return (
    <div className="space-y-2.5">
      <div className="flex gap-2 items-baseline">
        <span className="text-xl text-zinc-300 font-semibold">Dia {date}</span>
        <span className="text-xs text-zinc-500">{dayOfWeek}</span>
      </div>
      {activities.length === 0 ? (
        <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>

      ) : (
        <div className="space-y-2.5">
          {activities.map((activity, index) => (
              <div key={index} className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                {activity.complete
                  ? <CircleCheck className="size-5 text-lime-300" />
                  : <CircleDashed className="size-5 text-zinc-400" />
                }
                <span className="text-zinc-100">{activity.name}</span>
                <span className="text-zinc-400 text-sm ml-auto">{activity.time}</span>
              </div>
          ))}
        </div>
      )}
    </div>
  )
}
