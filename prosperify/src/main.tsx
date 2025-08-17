import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import './index.css'
import { AppProviders } from "@/providers/AppProviders"
// Strict typings for Preline plugin globals
import _ from 'lodash'
import Dropzone from 'dropzone'
declare global {
  interface Window {
    _: typeof _ | undefined
    Dropzone: typeof Dropzone | undefined
  }
}

// Attach required globals before App mounts (used by Preline HSFileUpload)
if (!window._) window._ = _ as unknown as typeof window._
if (!window.Dropzone) window.Dropzone = Dropzone

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProviders>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProviders>
  </React.StrictMode>
)
