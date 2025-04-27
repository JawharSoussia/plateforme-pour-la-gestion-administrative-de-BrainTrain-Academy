
import { Users, BookOpen, Calendar, FileText } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";
import { mockUsers, mockCourses, mockPayments } from "@/data/mockData";

// Calculer quelques statistiques
const activeStudents = mockUsers.filter(user => 
  user.role === "student" && user.status === "active"
).length;

const activeCourses = mockCourses.filter(course => 
  course.status === "active"
).length;

const totalPayments = mockPayments.reduce((sum, payment) => 
  payment.status === "completed" ? sum + payment.amount : sum, 0
);

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="dashboard-stats-grid">
        <StatCard 
          title="Étudiants actifs" 
          value={activeStudents} 
          description="depuis le mois dernier" 
          icon={<Users className="h-4 w-4" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard 
          title="Formations en cours" 
          value={activeCourses}
          description="2 formations à venir"
          icon={<BookOpen className="h-4 w-4" />}
        />
        <StatCard 
          title="Revenus" 
          value={`${totalPayments} €`}
          description="ce mois-ci"
          icon={<FileText className="h-4 w-4" />}
          trend={{ value: 8.2, isPositive: true }}
        />
        <StatCard 
          title="Taux de présence" 
          value="92%"
          description="moyenne sur tous les cours"
          icon={<Calendar className="h-4 w-4" />}
          trend={{ value: 3.1, isPositive: false }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentActivity />
        <UpcomingEvents />
      </div>
    </div>
  );
};

export default Dashboard;
