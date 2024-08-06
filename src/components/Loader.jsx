export function Loader() {
  return (
    <div className="flex flex-col gap-y-10 items-center">
      <div
        className="w-20 h-20 rounded-full bg-transparent border-8 border-t-violet-500 border-gray-300 animate-spin"
      ></div>

      <p className="text-gray-600 font-semibold">Loading results...</p>
    </div>
  )
}