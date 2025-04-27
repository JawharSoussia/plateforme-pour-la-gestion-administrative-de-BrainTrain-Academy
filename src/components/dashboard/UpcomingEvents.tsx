
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  type: "course" | "workshop" | "meeting" | "deadline";
};

const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Formation React Débutant",
    date: "Aujourd'hui",
    time: "14:00 - 17:00",
    type: "course",
  },
  {
    id: "2",
    title: "Workshop UX/UI Design",
    date: "Demain",
    time: "09:30 - 12:30",
    type: "workshop",
  },
  {
    id: "3",
    title: "Réunion équipe pédagogique",
    date: "28 avril",
    time: "11:00 - 12:00",
    type: "meeting",
  },
  {
    id: "4",
    title: "Date limite inscriptions formation Data",
    date: "30 avril",
    time: "23:59",
    type: "deadline",
  },
];

const getEventColor = (type: Event["type"]) => {
  switch (type) {
    case "course":
      return "bg-blue-100 text-blue-700";
    case "workshop":
      return "bg-purple-100 text-purple-700";
    case "meeting":
      return "bg-amber-100 text-amber-700";
    case "deadline":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const getEventTypeName = (type: Event["type"]) => {
  switch (type) {
    case "course":
      return "Formation";
    case "workshop":
      return "Atelier";
    case "meeting":
      return "Réunion";
    case "deadline":
      return "Échéance";
    default:
      return "Événement";
  }
};

export default function UpcomingEvents() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Événements à venir</CardTitle>
        <Calendar className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-center p-3 border rounded-md hover:bg-muted/30 transition-colors"
            >
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span 
                    className={`text-xs px-2 py-0.5 rounded ${getEventColor(event.type)}`}
                  >
                    {getEventTypeName(event.type)}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {event.date}, {event.time}
                  </span>
                </div>
                <h4 className="font-medium mt-1 truncate">{event.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
