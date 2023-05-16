import './App.css'
import MadHeader from './components/MadHeader'
import MadContent from './components/MadContent'
import foldin from './assets/images/MAD-Magazine-520-Fold-in.jpg'

function App() {
  return (
    <>
      <MadHeader />
      <MadContent imageUrl={foldin} />
    </>
  )
}

export default App
