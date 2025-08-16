"use client"
import { Button } from "./ui/buttonChat"
import { Input } from "./ui/InputChat"
import { Plus, Search, MessageSquare, Filter, Clock, FileText } from "lucide-react"

export function ChatSidebar() {
  const recentChats = [
    { id: "1", title: "Contrat Verdi 2021", lastMessage: "Recherche sur les clauses...", time: "10:30" },
    { id: "2", title: "Analyse financière Q4", lastMessage: "Données de performance...", time: "09:15" },
    { id: "3", title: "Rapport technique", lastMessage: "Spécifications techniques...", time: "Hier" },
    { id: "4", title: "Documentation API", lastMessage: "Endpoints disponibles...", time: "Hier" },
  ]

  return (
    <div className="h-full bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <Button className="w-full justify-start gap-2 bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-accent">
          <Plus className="h-4 w-4" />
          Nouvelle conversation
        </Button>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-sidebar-foreground/60" />
          <Input
            placeholder="Rechercher dans les conversations..."
            className="pl-10 bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-foreground/60"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 text-xs bg-transparent">
            <Filter className="h-3 w-3 mr-1" />
            Filtres
          </Button>
          <Button  variant="outline" size="sm" className="flex-1 text-xs bg-transparent">
            <Clock className="h-3 w-3 mr-1" />
            Récent
          </Button>
        </div>
      </div>

      {/* Recent Conversations */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-sm font-medium text-sidebar-foreground/80 mb-3">Conversations récentes</h3>
          <div className="space-y-2">
            {recentChats.map((chat) => (
              <div
                key={chat.id}
                className="p-3 rounded-lg hover:bg-sidebar-accent cursor-pointer transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded bg-sidebar-primary/10 bg-orange-200">
                    <MessageSquare className="h-3 w-3 text-sidebar-primary " />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-sidebar-foreground truncate">{chat.title}</h4>
                    <p className="text-xs text-sidebar-foreground/60 truncate mt-1">{chat.lastMessage}</p>
                    <span className="text-xs text-sidebar-foreground/40 mt-1 block">{chat.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-2 text-xs text-sidebar-foreground/60">
          <FileText className="h-3 w-3" />
          <span>4 documents indexés</span>
        </div>
      </div>
    </div>
  )
}
