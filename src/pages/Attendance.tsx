
import { useState } from "react";
import { Search, Calendar, Check, X, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockAttendance, mockCourses, AttendanceRecord } from "@/data/mockData";

const Attendance = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [courseFilter, setCourseFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const getStatusIcon = (status: AttendanceRecord["status"]) => {
    switch (status) {
      case "present":
        return <Check className="h-4 w-4 text-green-600" />;
      case "absent":
        return <X className="h-4 w-4 text-red-600" />;
      case "late":
        return <Clock className="h-4 w-4 text-amber-600" />;
      case "excused":
        return <AlertCircle className="h-4 w-4 text-blue-600" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: AttendanceRecord["status"]) => {
    switch (status) {
      case "present":
        return "Présent";
      case "absent":
        return "Absent";
      case "late":
        return "En retard";
      case "excused":
        return "Excusé";
      default:
        return "";
    }
  };

  const filteredAttendance = mockAttendance.filter(record => {
    const matchesSearch = 
      record.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.courseTitle.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCourse = courseFilter === "all" || record.courseId === courseFilter;
    const matchesStatus = statusFilter === "all" || record.status === statusFilter;
    
    return matchesSearch && matchesCourse && matchesStatus;
  });

  // Regrouper par date pour faciliter l'affichage
  const groupedAttendance = filteredAttendance.reduce((acc, record) => {
    if (!acc[record.date]) {
      acc[record.date] = [];
    }
    acc[record.date].push(record);
    return acc;
  }, {} as Record<string, AttendanceRecord[]>);

  const dates = Object.keys(groupedAttendance).sort((a, b) => 
    new Date(b).getTime() - new Date(a).getTime()
  );

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Rechercher un étudiant ou une formation..."
            className="pl-8"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <Select
            value={courseFilter}
            onValueChange={setCourseFilter}
          >
            <SelectTrigger className="w-full sm:w-40">
              <SelectValue placeholder="Formation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les formations</SelectItem>
              {mockCourses.map(course => (
                <SelectItem key={course.id} value={course.id}>{course.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={statusFilter}
            onValueChange={setStatusFilter}
          >
            <SelectTrigger className="w-full sm:w-36">
              <SelectValue placeholder="Statut" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les statuts</SelectItem>
              <SelectItem value="present">Présent</SelectItem>
              <SelectItem value="absent">Absent</SelectItem>
              <SelectItem value="late">En retard</SelectItem>
              <SelectItem value="excused">Excusé</SelectItem>
            </SelectContent>
          </Select>

          <Button className="ml-auto">
            <Calendar className="h-4 w-4 mr-2" />
            Nouvelle feuille
          </Button>
        </div>
      </div>

      {dates.length > 0 ? (
        <div className="space-y-6">
          {dates.map(date => (
            <div key={date} className="border rounded-lg overflow-hidden">
              <div className="bg-muted/50 px-4 py-3 flex items-center justify-between">
                <h3 className="font-medium flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {date}
                </h3>
                <Button variant="outline" size="sm">
                  Modifier
                </Button>
              </div>
              <div className="data-table-container rounded-none border-none">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Étudiant</th>
                      <th>Formation</th>
                      <th className="text-center">Statut</th>
                      <th className="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupedAttendance[date].map((record) => (
                      <tr key={record.id}>
                        <td className="font-medium">
                          {record.userName}
                        </td>
                        <td>
                          {record.courseTitle}
                        </td>
                        <td className="text-center">
                          <div className="inline-flex items-center gap-1 px-2 py-1">
                            {getStatusIcon(record.status)}
                            <span>{getStatusText(record.status)}</span>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Check className="h-4 w-4 text-green-600" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <X className="h-4 w-4 text-red-600" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Clock className="h-4 w-4 text-amber-600" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <AlertCircle className="h-4 w-4 text-blue-600" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <div className="text-muted-foreground mb-2">Aucun résultat trouvé</div>
          <Button variant="outline" onClick={() => {
            setSearchQuery("");
            setCourseFilter("all");
            setStatusFilter("all");
          }}>
            Réinitialiser les filtres
          </Button>
        </div>
      )}
    </div>
  );
};

export default Attendance;
