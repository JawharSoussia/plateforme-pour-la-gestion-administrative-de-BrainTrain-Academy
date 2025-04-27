
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useLocation } from "react-router-dom";

const getPageTitle = (pathname: string) => {
  switch(pathname) {
    case '/':
      return 'Tableau de bord';
    case '/users':
      return 'Gestion des utilisateurs';
    case '/courses':
      return 'Formations';
    case '/attendance':
      return 'Suivi des présences';
    case '/payments':
      return 'Paiements';
    case '/messages':
      return 'Messagerie';
    case '/settings':
      return 'Paramètres';
    case '/reports':
      return 'Rapports administratifs';
    default:
      if (pathname.startsWith('/users/')) return 'Détail utilisateur';
      if (pathname.startsWith('/courses/')) return 'Détail formation';
      return 'BrainTrain Admin';
  }
};

export default function Layout() {
  const location = useLocation();
  const title = getPageTitle(location.pathname);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header title={title} />
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
