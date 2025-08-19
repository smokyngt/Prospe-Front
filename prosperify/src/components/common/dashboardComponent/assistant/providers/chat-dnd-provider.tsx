import type { ReactNode } from "react"
import { DndProvider } from "@/components/common/dashboardComponent/assistant/providers/dnd-provider"
import { PdfProvider } from "@/components/common/dashboardComponent/assistant/providers/pdf-provider"
import { CitationsProvider } from "@/components/common/dashboardComponent/assistant/providers/citations-provider"

interface ChatWithProvidersProps {
  children: ReactNode
}

export function ChatWithProviders({ children }: ChatWithProvidersProps) {
  return (
    <DndProvider>
      <PdfProvider>
        <CitationsProvider>{children}</CitationsProvider>
      </PdfProvider>
    </DndProvider>
  )
}
export default ChatWithProviders