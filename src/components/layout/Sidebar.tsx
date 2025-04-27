import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { 
  User, 
  Users, 
  BookOpen, 
  Calendar, 
  Settings, 
  MessageSquare, 
  FileText,
  X,
  ChartBar
} from "lucide-react";

type SidebarItemProps = {
  icon: React.ElementType;
  label: string;
  href: string;
  isActive?: boolean;
  isCollapsed: boolean;
};

const SidebarItem = ({ 
  icon: Icon, 
  label, 
  href, 
  isActive = false,
  isCollapsed
}: SidebarItemProps) => {
  return (
    <Link 
      to={href} 
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200",
        isActive 
          ? "bg-sidebar-accent text-sidebar-accent-foreground" 
          : "text-sidebar-foreground/80 hover:bg-sidebar-accent/80 hover:text-sidebar-accent-foreground"
      )}
    >
      <Icon className="h-5 w-5" />
      {!isCollapsed && <span>{label}</span>}
    </Link>
  );
};

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const currentPath = window.location.pathname;

  return (
    <div 
      className={cn(
        "flex h-screen flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">B</span>
            </div>
            <h1 className="text-sidebar-foreground font-bold truncate">BrainTrain</h1>
          </div>
        )}
        
        {isCollapsed && (
          <div className="w-full flex justify-center">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">B</span>
            </div>
          </div>  
        )}
        
        <Button
          variant="ghost"
          size="icon"
          className="text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <X className="h-4 w-4" style={{ transform: isCollapsed ? 'rotate(45deg)' : 'rotate(0deg)' }} />
        </Button>
      </div>
      
      <div className="flex-1 overflow-auto py-2 px-4">
        <nav className="flex flex-col gap-1">
          <SidebarItem 
            icon={Users} 
            label="Tableau de bord" 
            href="/" 
            isActive={currentPath === "/"} 
            isCollapsed={isCollapsed}
          />
          <SidebarItem 
            icon={User} 
            label="Utilisateurs" 
            href="/users" 
            isActive={currentPath.startsWith("/users")} 
            isCollapsed={isCollapsed}
          />
          <SidebarItem 
            icon={BookOpen} 
            label="Formations" 
            href="/courses" 
            isActive={currentPath.startsWith("/courses")} 
            isCollapsed={isCollapsed}
          />
          <SidebarItem 
            icon={Calendar} 
            label="Présences" 
            href="/attendance" 
            isActive={currentPath.startsWith("/attendance")} 
            isCollapsed={isCollapsed}
          />
          <SidebarItem 
            icon={FileText} 
            label="Paiements" 
            href="/payments" 
            isActive={currentPath.startsWith("/payments")} 
            isCollapsed={isCollapsed}
          />
          <SidebarItem 
            icon={ChartBar} 
            label="Rapports" 
            href="/reports" 
            isActive={currentPath.startsWith("/reports")} 
            isCollapsed={isCollapsed}
          />
          <SidebarItem 
            icon={MessageSquare} 
            label="Messagerie" 
            href="/messages" 
            isActive={currentPath.startsWith("/messages")} 
            isCollapsed={isCollapsed}
          />
          <SidebarItem 
            icon={Settings} 
            label="Paramètres" 
            href="/settings" 
            isActive={currentPath.startsWith("/settings")} 
            isCollapsed={isCollapsed}
          />
        </nav>
      </div>
      
      <div className={cn(
        "border-t border-sidebar-border p-4",
        !isCollapsed && "flex items-center gap-3"
      )}>
        {!isCollapsed ? (
          <>
            <div className="h-8 w-8 rounded-full bg-sidebar-accent flex items-center justify-center">
              <span className="text-sidebar-accent-foreground font-medium">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-sidebar-foreground">Admin</span>
              <span className="text-xs text-sidebar-foreground/80">admin@braintrain.com</span>
            </div>
          </>
        ) : (
          <div className="w-full flex justify-center">
            <div className="h-8 w-8 rounded-full bg-sidebar-accent flex items-center justify-center">
              <span className="text-sidebar-accent-foreground font-medium">A</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
