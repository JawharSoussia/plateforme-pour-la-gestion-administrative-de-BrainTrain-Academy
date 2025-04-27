
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ActivityItem = {
  id: string;
  user: string;
  action: string;
  time: string;
};

const recentActivities: ActivityItem[] = [
  {
    id: "1",
    user: "Thomas Martin",
    action: "a créé un nouveau compte",
    time: "Il y a 10 min",
  },
  {
    id: "2",
    user: "Claire Durand",
    action: "s'est inscrite à la formation JavaScript Avancé",
    time: "Il y a 25 min",
  },
  {
    id: "3",
    user: "Adrien Morel",
    action: "a annulé son inscription à l'événement Hackathon",
    time: "Il y a 1h",
  },
  {
    id: "4",
    user: "Sophie Laurent",
    action: "a effectué un paiement de 450€",
    time: "Il y a 2h",
  },
  {
    id: "5",
    user: "Marc Dupuis",
    action: "a validé une leçon de Python Débutant",
    time: "Il y a 3h",
  },
  {
    id: "6",
    user: "Emilie Simon",
    action: "a envoyé un message au formateur",
    time: "Il y a 4h",
  },
];

export default function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activités récentes</CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <ul className="space-y-1">
          {recentActivities.map((activity) => (
            <li 
              key={activity.id} 
              className="flex items-start py-2 px-4 rounded-md hover:bg-muted/50 transition-colors"
            >
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium mr-3 shrink-0">
                {activity.user.substring(0, 1)}
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-sm">{activity.user}</span>
                <span className="text-sm text-muted-foreground">{activity.action}</span>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
