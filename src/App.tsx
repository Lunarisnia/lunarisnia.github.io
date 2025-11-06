import './App.css'
import { ThemeProvider } from './features/theme'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  )
}

export default App
