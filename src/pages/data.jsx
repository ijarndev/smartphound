import { Link } from 'react-router-dom'
import { PrimaryButton } from '../components/Buttons.jsx'
import { createContext, useState } from 'react'
import { useContext } from 'react'
import { ProgressContext } from '../App.jsx'


export const ShowNextContext = createContext()

export function Data({ children, next, index }) {
  const progress = useContext(ProgressContext)

  if(progress.length < index) window.location.replace('/')

  console.log(index)

  const [showNext, setShowNext] = useState(false)
  
  if(!next) window.location.replace('/')

  return (
    <section className='flex flex-col justify-center md:mt-20'>
      <div>
        <ShowNextContext.Provider value={setShowNext}>
          { children }
        </ShowNextContext.Provider>
      </div>

      <div className='mt-20 w-full flex justify-center'>
        { 
          showNext && <Link to={`/data/${next}`}>
            <PrimaryButton>Next</PrimaryButton>
          </Link>
        }
      </div>
    </section>
  )
}