export interface Activity {
  name: string;
  time: string;
  complete: boolean;
}

export interface Day {
  date: string;
  dayOfWeek: string;
  activities: Activity[];
}

export interface Guest {
  name: string;
  email: string;
  check: boolean
}