import { PrimaryButton, StarOnGithubButton } from "../components/Buttons"
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <section className="flex h-full justify-center items-center px-6 2xl:px-80 mt-20 flex-col pt-20">
      <h2 className="text-gray-700 text-xl 2xl:text-6xl max-w-4xl text-center font-extrabold">Let AI help you find the perfect smartphone</h2>
      <p className="max-w-4xl text-center text-sm 2xl:text-xl mt-8 text-gray-600">Smartphound will automatically search for you the smartphone that matches the better your needs based in your personal preferences and without worrying about the technical specs!</p>

      <div className="mt-20">
        <Link to="/data/usage">
          <PrimaryButton>Try it out!</PrimaryButton>
        </Link>
      </div>
    </section>
  )
}