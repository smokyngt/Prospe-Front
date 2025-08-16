import { useState, useRef, useCallback, useEffect } from "react"
import { ChatInterface } from "@/components/common/dashboardComponent/assistant/chat/chat-interface"
import { PdfViewer } from "@/components/common/dashboardComponent/assistant/chat/pdf-viewer"
import CollapseToggleButton from "@/components/common/dashboardComponent/assistant/chat/CollapseToggleButton"

export default function Home() {
  const [isPdfCollapsed, setIsPdfCollapsed] = useState(true)

  // Largeur du panneau PDF en px (inline style pour ne pas changer tes classes)
  const [pdfWidth, setPdfWidth] = useState<number>(480)
  const [isResizing, setIsResizing] = useState(false)
  const startXRef = useRef(0)
  const startWidthRef = useRef(0)
  const lastWidthRef = useRef(pdfWidth)

  const togglePdf = () => {
    if (isPdfCollapsed) {
      setIsPdfCollapsed(false)
      setPdfWidth(lastWidthRef.current || 480)
    } else {
      lastWidthRef.current = pdfWidth
      setIsPdfCollapsed(true)
    }
  }


  const onHandleMove = useCallback((e: MouseEvent) => {
    const delta = startXRef.current - e.clientX // drag vers gauche => +
    let next = startWidthRef.current + delta
    const min = 320
    const max = Math.min(window.innerWidth - 360, 1200)
    if (next < min) next = min
    if (next > max) next = max
    lastWidthRef.current = next
    setPdfWidth(next)
  }, [])

  const onHandleUp = useCallback(() => {
    setIsResizing(false)
    window.removeEventListener("mousemove", onHandleMove)
    window.removeEventListener("mouseup", onHandleUp)
  }, [onHandleMove])

  const onHandleDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsResizing(true)
    startXRef.current = e.clientX
    startWidthRef.current = isPdfCollapsed ? lastWidthRef.current || 480 : pdfWidth
    if (isPdfCollapsed) setIsPdfCollapsed(false)
    window.addEventListener("mousemove", onHandleMove)
    window.addEventListener("mouseup", onHandleUp)
  }

  useEffect(() => {
    return () => {
      // cleanup si unmount pendant un drag
      window.removeEventListener("mousemove", onHandleMove)
      window.removeEventListener("mouseup", onHandleUp)
    }
  }, [onHandleMove, onHandleUp])

  return (
    <div className="h-screen flex bg-background">
      {/* Left Panel - Chat Interface */}
      <div className="flex-1 flex flex-col transition-all duration-300 overflow-x-hidden ">
        <ChatInterface />
      </div>

      {/* Resize Handle */}
      <div
        role="separator"
        aria-orientation="vertical"
        onMouseDown={onHandleDown}
        className={`w-1 bg-border hover:bg-accent/20 cursor-col-resize transition-colors ${
          isResizing ? "bg-accent/30" : ""
        }`}
        title="Redimensionner"
      />

      {/* Right Panel - PDF Viewer */}
      <div
        className={`transition-all duration-300 ${isResizing ? "transition-none" : ""}`}
        style={{ width: isPdfCollapsed ? 0 : pdfWidth, overflow: isPdfCollapsed ? "hidden" : undefined }}
      >
        <div className="h-full flex flex-col">
          {/* PDF Header with Collapse Button */}
          <div className="flex items-center justify-between p-4 border-b bg-card">
            <h2 className="font-semibold text-card-foreground">Documents PDF</h2>
            <CollapseToggleButton collapsed={isPdfCollapsed} onToggle={togglePdf} />
          </div>

          {!isPdfCollapsed && <PdfViewer />}
        </div>
      </div>

      {/* Floating Collapse Button when PDF is collapsed */}
      {isPdfCollapsed && (
        <CollapseToggleButton
          collapsed={true}
          onToggle={() => setIsPdfCollapsed(false)}
          variant="outline"
          className="fixed top-4 right-4 z-50 shadow-lg"
          labelOpen="Afficher PDF"
        />
      )}
    </div>
  )
}

function setIsSidebarOpen(arg0: boolean) {
  throw new Error("Function not implemented.")
}
