import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, createContext } from "react"
import { Home } from './pages/Home.jsx'
import { Header } from './components/Header.jsx'
import { OptionFrame } from "./components/OptionFrame.jsx"
import { Result } from "./pages/result.jsx"
import { Data } from "./pages/data.jsx"

export const ProgressContext = createContext() 

function App() {
  const [globalProgress, setGlobalProgress] = useState([])

  return (
    <BrowserRouter>
      <Header />

      <Routes> 
        <Route path="/" element={<Home />} />

        <Route 
          path="/data/usage"
          element={
            <ProgressContext.Provider value={[globalProgress, setGlobalProgress]}>
              <Data key="collect-usage" next="specs" index={0}>
                <OptionFrame
                  options={[
                    { id: 0, image: 'communication', name: 'Comunicación', description: "You're a pretty basic user who only appreciates a good communication device.", value: 'communication' },
                    { id: 1, image: 'gaming', name: 'Juegos', description: 'You want the best experience to beat all your enemies in-game!', value: 'gaming' },
                    { id: 2, image: 'photography', name: 'Fotografía', description: "You want to capture your enviroment's beauty in your device.", value: 'photograpy' }
                  ]}
                  title="¿Cuál es la actividad principal que realizas con el móvil?"
                  category="usage"
                />
              </Data>
            </ProgressContext.Provider>
          }
        />

        <Route 
          path="/data/specs"
          element={
            <ProgressContext.Provider value={[globalProgress, setGlobalProgress]}>
              <Data key="collect-specs" next="budget" index={1}>
                <OptionFrame
                  options={[
                    { id: 0, image: 'battery', name: 'Batería', description: "You'll use your device for long periods of time so you need the battery to be powerful.", value: 'communication' },
                    { id: 1, image: 'cpu', name: 'Rendimiento', description: 'You want a device that will not complain about a lot of processes but handle them all smoothly.', value: 'performance' },
                    { id: 2, image: 'storage', name: 'Almacenamiento', description: "With a large storage size you're gonna be able to store a lot of pictures, videos and music.", value: 'photograpy' }
                  ]}
                  title="¿Qué valoras más en tu dispositivo?"
                  category="specs"
                />
              </Data>
            </ProgressContext.Provider>
          }
        />

        <Route 
          path="/data/budget"
          element={
            <ProgressContext.Provider value={[globalProgress, setGlobalProgress]}>
              <Data key="collect-budget" next="design" index={2}>
                <OptionFrame
                  options={[
                    { id: 0, image: 'low-budget', name: "Algo básico", description: "You'll use your device for long periods of time so you need the battery to be powerful.", value: 'low' },
                    { id: 1, image: 'normal-budget', name: 'Moderado', description: 'You want a device that will not complain about a lot of processes but handle them all smoothly.', value: 'moderate' },
                    { id: 2, image: 'high-budget', name: 'Elon Musk', description: "With a large storage size you're gonna be able to store a lot of pictures, videos and music.", value: 'high' }
                  ]}
                  title="¿Cómo estás de presupuesto?"
                  category="budget"
                />
              </Data>
            </ProgressContext.Provider>
          }
        />

        <Route 
          path="/data/design"
          element={
            <ProgressContext.Provider value={[globalProgress, setGlobalProgress]}>
              <Data key="collect-design" next="result" index={3}>
                <OptionFrame
                  options={[
                    { id: 0, image: 'basic-design', name: "Sencillo", description: "You'll use your device for long periods of time so you need the battery to be powerful.", value: 'simple' },
                    { id: 1, image: 'normal-design', name: 'Normal', description: 'You want a device that will not complain about a lot of processes but handle them all smoothly.', value: 'decent' },
                    { id: 2, image: 'cool-design', name: 'Llamativo', description: "With a large storage size you're gonna be able to store a lot of pictures, videos and music.", value: 'very cool' }
                  ]}
                  title="Hablemos del diseño"
                  category="design"
                />
              </Data>
            </ProgressContext.Provider>
          }
        />

        <Route
          path="/data/result"
          element={
            <Result globalProgress={globalProgress} />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
