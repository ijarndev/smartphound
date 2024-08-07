import { useState } from "react"
import { Option } from "./Option"

export function OptionFrame({ options, title, category }) {
  return (
    <div className="flex flex-col w-full px-6">
      <h2 className="text-center text-4xl text-gray-700">{title}</h2>

      <div className="flex justify-between px-10 sm:justify-center gap-x-10 gap-y-14 sm:gap-20 mt-20 flex-row flex-wrap md:min-h-80">
        {
          options.map(option => {
            return <Option  
              key={option.id}
              name={option.name}
              description={option.description}
              value={option.value}
              category={category}
              image={option.image}
            />
          })
        }
      </div>
    </div>
  )
}