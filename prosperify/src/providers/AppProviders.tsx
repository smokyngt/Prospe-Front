"use client" // tu peux même l’enlever si ce n’est pas du Next, mais ça ne gêne pas

import type { PropsWithChildren } from "react"
import { DndProvider } from "@/providers/dnd-provider"
import { PdfProvider } from "@/providers/pdf-provider"
import { CitationsProvider } from "@/providers/citations-provider"

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <DndProvider>
      <PdfProvider>
        <CitationsProvider>
          {children}
        </CitationsProvider>
      </PdfProvider>
    </DndProvider>
  )
}
