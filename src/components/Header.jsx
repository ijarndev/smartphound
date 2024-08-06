import { StarOnGithubButton } from './Buttons.jsx'

export function Header() {
  return (
    <header className="flex w-full justify-between px-6 2xl:px-96 py-10">
      <div>
        <a href="/">
          <h1 className='text-2xl font-semibold text-gray-600'>Smartphound</h1>
        </a>
      </div>

      <div>
        <StarOnGithubButton />
      </div>
    </header>
  )
}