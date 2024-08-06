import { PrimaryButton, StarOnGithubButton } from "../components/Buttons"
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <section className="flex h-full justify-center items-center px-6 2xl:px-80 mt-20 flex-col pt-20">
      <h2 className="text-gray-700 text-2xl 2xl:text-6xl max-w-4xl text-center font-extrabold">
        ¡Deja que la <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-sky-500">IA</span> escoja tu <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-sky-500">smartphone perfecto</span>!
      </h2>
      <p className="max-w-4xl text-center text-sm 2xl:text-xl mt-8 text-gray-600">Smartphound escoge por ti el smartphone más adecuado sin necesidad de conocer detalles técnicos.</p>

      <div className="mt-20 flex gap-x-2">
        <Link to="/data/usage">
          <PrimaryButton>Comenzar</PrimaryButton>
        </Link>
      </div>
    </section>
  )
}