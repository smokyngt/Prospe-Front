"use client"

import { useState } from "react"
import { ChatSidebar } from "./chat-sidebar"
import { ChatMessages } from "./chat-messages"
import { ChatInput } from "./chat-input"
import { Button } from "./ui/buttonChat"
import { Menu } from "lucide-react"

interface Message {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
  pdfReference?: {
    filename: string
    page: number
    highlight: string
  }
}

export function ChatInterface() {
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content:
        "Bonjour ! Je peux vous aider à rechercher dans vos documents PDF indexés. Posez-moi une question sur vos documents.",
      timestamp: new Date(),
    },
  ])
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date(),
    }

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: "assistant",
      content: `D'après le document "Contrat_Verdi_2021.pdf", page 3, je trouve les informations suivantes : "${content.slice(0, 50)}..." Cette information se trouve dans la section des clauses générales.`,
      timestamp: new Date(),
      pdfReference: {
        filename: "Contrat_Verdi_2021.pdf",
        page: 3,
        highlight: content.slice(0, 50),
      },
    }

    setMessages((prev) => [...prev, userMessage, assistantMessage])
  }

  return (
    <div className="h-full flex ">
      {/* Sidebar */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? "w-80" : "w-0 overflow-hidden"}`}>
        <ChatSidebar />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-card">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="h-8 w-8 p-0">
              <Menu className="h-4 w-4" />
            </Button>
            <h1 className="font-semibold text-card-foreground">Assistant IA - Documents</h1>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-hidden">
          <ChatMessages messages={messages} />
        </div>

        {/* Input */}
        <div className="border-t bg-card p-4">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  )
}
