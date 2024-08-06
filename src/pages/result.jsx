import { useContext } from "react"
import { useState } from "react"
import { AmazonButton } from "../components/Buttons"
import { buildPrompt, executePrompt } from "../lib/prompt"
import { useEffect } from "react"
import { searchImage } from "../lib/serper"
import { PrimaryButton } from "../components/Buttons"
import { Link } from "react-router-dom"
import { Loader } from '../components/Loader'

export function Result({ globalProgress }) {
  console.log(globalProgress)

  const [data, setData] = useState()

  useEffect(() => {
    const prompt = buildPrompt(globalProgress)

    executePrompt(prompt)
      .then(async (result) => {
        const image = await searchImage(result.device_name)
        
        return {
          image: image,
          result: result
        }
      })
      .then((props) => {
        
        const resultWithImage = {
          device_image: props.image,
          ...props.result
        }
        
        console.log(resultWithImage)
        setData(resultWithImage)
      })
  }, [])
  
  console.log(data)

  if(data) {
    return (
      <section className="flex justify-center items-center px-6 2xl:px-80 flex-col gap-y-10 pb-20">
        <header>
          <h1 className="text-gray-700 font-semibold text-xl text-center 2xl:text-4xl">Your perfect smartphone is</h1>
          <span className="font-bold text-3xl text-center 2xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-sky-500">
            { data ? data.device_name : 'Loading...' }
          </span>
        </header>

        <div className="flex flex-col 2xl:flex-row gap-x-10 2xl:mt-10">
          { data ? <img className="2xl:max-w-96" src={data.device_image} alt="" /> : 'Loading...' }

          <div>
            <p className="text-gray-600 text-xl">☝🤓 Here are some extra details just in case:</p>

            <ul className="pt-5">
              <li><strong className="text-gray-600">CPU</strong>: {data.cpu}</li>
              <li><strong className="text-gray-600">Storage</strong>: {data.storage}</li>
              <li><strong className="text-gray-600">Screen</strong>: {data.screen}</li>
              <li><strong className="text-gray-600">Battery</strong>: {data.battery}</li>
              <li><strong className="text-gray-600">Camera</strong>: {data.camera}</li>
            </ul>

            <div className="mt-5 flex-grow flex gap-x-2">
              <AmazonButton href={`https://www.amazon.es/s?k=${data.device_name}`}>Search on Amazon</AmazonButton>
              <a href="/"><PrimaryButton>Try again</PrimaryButton></a>
            </div>
          </div>
        </div>

        <div className="">
          { data ? <p className="2xl:px-40 text-gray-600 text-xl text-center">{data.device_description}</p> : 'Loading...' }
        </div>
      </section>
    )
  } else {
    return (
      <div className="flex items-center justify-center min-h-[700px]">
        <Loader />
      </div>
    )
  }
}