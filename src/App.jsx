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
              <Data key="collect-usage" next="specs">
                <OptionFrame
                  options={[
                    { id: 0, image: 'communication', name: 'Communication', description: "You're a pretty basic user who only appreciates a good communication device.", value: 'communication' },
                    { id: 1, image: 'gaming', name: 'Gaming', description: 'You want the best experience to beat all your enemies in-game!', value: 'gaming' },
                    { id: 2, image: 'photography', name: 'Photography', description: "You want to capture your enviroment's beauty in your device.", value: 'photograpy' }
                  ]}
                  title="What's the main activity you do with your smartphone?"
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
              <Data key="collect-specs" next="budget">
                <OptionFrame
                  options={[
                    { id: 0, image: 'battery', name: 'Battery', description: "You'll use your device for long periods of time so you need the battery to be powerful.", value: 'communication' },
                    { id: 1, image: 'cpu', name: 'Performance', description: 'You want a device that will not complain about a lot of processes but handle them all smoothly.', value: 'performance' },
                    { id: 2, image: 'storage', name: 'Storage', description: "With a large storage size you're gonna be able to store a lot of pictures, videos and music.", value: 'photograpy' }
                  ]}
                  title="What do you value the most in your mobile device?"
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
              <Data key="collect-budget" next="result">
                <OptionFrame
                  options={[
                    { id: 0, image: 'low-budget', name: "I'm poor", description: "You'll use your device for long periods of time so you need the battery to be powerful.", value: 'low' },
                    { id: 1, image: 'normal-budget', name: 'Moderate', description: 'You want a device that will not complain about a lot of processes but handle them all smoothly.', value: 'moderate' },
                    { id: 2, image: 'high-budget', name: 'Elon Musk', description: "With a large storage size you're gonna be able to store a lot of pictures, videos and music.", value: 'high' }
                  ]}
                  title="How's your budget?"
                  category="budget"
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
