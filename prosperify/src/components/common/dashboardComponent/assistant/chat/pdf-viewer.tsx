"use client"

import { type SetStateAction, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/InputChat"
import { ZoomIn, ZoomOut, Search, Download, RotateCw, BookOpen } from "lucide-react"

export function PdfViewer() {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages] = useState(15)
  const [zoom, setZoom] = useState(100)
  const [searchTerm, setSearchTerm] = useState("")

  const documents = [
    { id: "1", name: "Contrat_Verdi_2021.pdf", pages: 15, active: true },
    { id: "2", name: "Rapport_Financier_Q4.pdf", pages: 23, active: false },
    { id: "3", name: "Specifications_Techniques.pdf", pages: 8, active: false },
  ]

  return (
    <div className="h-full flex flex-col bg-card">
      {/* Document Tabs */}
      <div className="border-b border-border bg-muted/30">
        <div className="flex overflow-x-auto ">
          {documents.map((doc) => (
            <button
              key={doc.id}
              className={`px-4 py-2 text-sm whitespace-nowrap border-b-2 transition-colors ${
                doc.active
                  ? "border-accent text-orange-500 bg-transparent"
                  : "border-transparent text-muted-foreground text-black hover:text-foreground hover:bg-orange-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <BookOpen className="h-3 w-3" />
                {doc.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between p-3 border-b border-border bg-muted/30">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setZoom(Math.max(50, zoom - 25))}>
            <ZoomOut className="h-3 w-3" />
          </Button>
          <span className="text-sm font-medium min-w-[60px] text-center">{zoom}%</span>
          <Button variant="outline" size="sm" onClick={() => setZoom(Math.min(200, zoom + 25))}>
            <ZoomIn className="h-3 w-3" />
          </Button>
          <div className="w-px h-4 bg-border mx-2" />
          <Button variant="outline" size="sm">
            <RotateCw className="h-3 w-3" />
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-3 w-3" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-muted-foreground" />
            <Input
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e: { target: { value: SetStateAction<string> } }) => setSearchTerm(e.target.value)}
              className="pl-8 h-8 w-40 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Page Navigation */}
      <div className="flex items-center justify-between p-3 border-b border-border bg-muted/30">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          >
            Précédent
          </Button>
          <span className="text-sm">
            Page {currentPage} sur {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          >
            Suivant
          </Button>
        </div>
      </div>

      {/* PDF Content */}
      <div className="flex-1 overflow-auto bg-muted/20 p-4">
        <div className="max-w-full mx-auto">
          {/* Simulated PDF Page */}
          <div
            className="bg-white shadow-lg mx-auto border"
            style={{
              width: `${(595 * zoom) / 100}px`,
              height: `${(842 * zoom) / 100}px`,
              transform: `scale(${zoom / 100})`,
              transformOrigin: "top center",
            }}
          >
            <div className="p-8 h-full">
              <div className="space-y-4">
                <h1 className="text-2xl font-bold text-gray-900">Contrat de Prestation - Verdi 2021</h1>
                <div className="h-px bg-gray-300" />
                <div className="space-y-3 text-gray-700">
                  <p className="text-sm leading-relaxed">
                    <span className="bg-yellow-200 px-1">
                      Le présent contrat définit les modalités de collaboration
                    </span>{" "}
                    entre les parties pour la réalisation des prestations définies en annexe. Les clauses générales
                    s'appliquent à l'ensemble des services fournis dans le cadre de cet accord.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Article 1 - Objet du contrat : La société s'engage à fournir les services de conseil et
                    d'accompagnement technique selon les spécifications détaillées dans le cahier des charges annexé au
                    présent document.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Article 2 - Durée et modalités : Le contrat prend effet à compter de sa signature et reste valable
                    pour une durée de 12 mois, renouvelable par tacite reconduction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
