
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle } from "lucide-react";
import { mockUsers } from "@/data/mockData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Messages = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Messagerie</h2>
        <Button>
          <MessageCircle className="mr-2 h-4 w-4" />
          Nouveau message
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Liste des conversations */}
        <Card className="md:col-span-1">
          <CardContent className="p-4 space-y-4">
            <Input placeholder="Rechercher une conversation..." />
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Filtrer par type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les conversations</SelectItem>
                <SelectItem value="students">Étudiants</SelectItem>
                <SelectItem value="teachers">Formateurs</SelectItem>
                <SelectItem value="admin">Administration</SelectItem>
              </SelectContent>
            </Select>
            <div className="space-y-2">
              {mockUsers.slice(0, 5).map((user) => (
                <div
                  key={user.id}
                  className="p-3 rounded-lg hover:bg-accent cursor-pointer flex items-center gap-3"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {user.firstName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{user.firstName} {user.lastName}</p>
                    <p className="text-sm text-muted-foreground truncate">
                      Dernier message...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Zone de conversation */}
        <Card className="md:col-span-3">
          <CardContent className="p-4 min-h-[600px] flex flex-col">
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              Sélectionnez une conversation pour commencer
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Messages;
