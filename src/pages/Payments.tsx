
import { useState } from "react";
import { Search, FileText, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockPayments, mockCourses, Payment } from "@/data/mockData";

const Payments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [courseFilter, setCourseFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const getMethodIcon = (method: Payment["method"]) => {
    switch (method) {
      case "card":
        return "💳";
      case "bank":
        return "🏦";
      case "cash":
        return "💶";
      default:
        return "💰";
    }
  };

  const getStatusColor = (status: Payment["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-amber-100 text-amber-700";
      case "failed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const filteredPayments = mockPayments.filter(payment => {
    const matchesSearch = 
      payment.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.courseTitle.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCourse = courseFilter === "all" || payment.courseId === courseFilter;
    const matchesStatus = statusFilter === "all" || payment.status === statusFilter;
    
    return matchesSearch && matchesCourse && matchesStatus;
  });

  const totalAmount = filteredPayments.reduce((sum, payment) => 
    payment.status === "completed" ? sum + payment.amount : sum, 0
  );

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Rechercher un paiement..."
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
              <SelectItem value="completed">Complété</SelectItem>
              <SelectItem value="pending">En attente</SelectItem>
              <SelectItem value="failed">Échec</SelectItem>
            </SelectContent>
          </Select>

          <Button className="ml-auto">
            <FileText className="h-4 w-4 mr-2" />
            Exporter
          </Button>
        </div>
      </div>

      <div className="flex justify-end mb-2">
        <div className="text-sm font-medium">
          Total: <span className="text-primary">{totalAmount} €</span>
        </div>
      </div>

      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Étudiant</th>
              <th>Formation</th>
              <th>Date</th>
              <th>Montant</th>
              <th>Méthode</th>
              <th>Statut</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map((payment) => (
              <tr key={payment.id}>
                <td className="font-mono text-xs">
                  {payment.id}
                </td>
                <td className="font-medium">
                  {payment.userName}
                </td>
                <td>
                  {payment.courseTitle}
                </td>
                <td>
                  {payment.date}
                </td>
                <td className="font-medium">
                  {payment.amount} €
                </td>
                <td>
                  <div className="flex items-center gap-1">
                    <span>{getMethodIcon(payment.method)}</span>
                    <span>
                      {payment.method === "card" ? "Carte" : 
                       payment.method === "bank" ? "Virement" : "Espèces"}
                    </span>
                  </div>
                </td>
                <td>
                  <span className={`text-xs px-2 py-1 rounded ${getStatusColor(payment.status)}`}>
                    {payment.status === "completed" ? "Complété" : 
                     payment.status === "pending" ? "En attente" : "Échec"}
                  </span>
                </td>
                <td className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="cursor-pointer">
                        Voir détails
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        Télécharger facture
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        Marquer comme payé
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        Envoyer rappel
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
