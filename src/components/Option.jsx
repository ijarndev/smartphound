import { useState, useContext } from "react"
import { Check } from "./Icons"
import { ProgressContext } from "../App"
import { ShowNextContext } from '../pages/data'

export function Option({ name, description, value, category, image }) {
  const defaultStyles = 'border-4 border-black border-opacity-30 rounded-md p-4 sm:p-10 sm:min-w-60 hover:bg-gray-200'
  const selectedStyles = ' border-violet-500 border-opacity-100 bg-gray-200'

  const [optionSelected, setOptionSelected] = useState(false)
  const [globalProgress, setGlobalProgress] = useContext(ProgressContext)
  const setShowNext = useContext(ShowNextContext)

  const handleClick = () => {
    const currentCategory = globalProgress.filter((item) => item.category === category)
    const isAlreadyDone = currentCategory.length > 0 ? true : false

    if(!isAlreadyDone) {
      setGlobalProgress([
        ...globalProgress,
        { category: category, value: value }
      ])
      setOptionSelected(!optionSelected)
    }

    optionSelected ? setShowNext(false) : setShowNext(true)
  }

  return (
    <article onClick={handleClick} className="flex flex-col cursor-pointer relative w-20 md:w-80">
      {
        optionSelected && <span className="absolute top-2 right-2 z-10">
          <Check />
        </span>
      }

      <div className={optionSelected ? defaultStyles + selectedStyles : defaultStyles}>
        <div className="flex justify-center">
          <img className="w-full max-w-[50px] sm:max-w-[200px]" src={`/${image}.svg`} alt="" />        
        </div>
      </div>

      <div className="mt-2">
        <p className="font-bold text-gray-600 text-center sm:text-xl">{name}</p>
        {/* <p className="max-w-xs text-center text-gray-600">{description}</p> */}
      </div>
    </article>
  )
}