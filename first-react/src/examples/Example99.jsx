

// React is composable, this is component
function MainContent() {
    return (
        <h1>React is Great</h1>
    )
}

export default function Example99() {
  return (<MainContent />)
}

/* main.jsx

import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const root = createRoot(document.getElementById("root"))

root.render(<App />)
*/