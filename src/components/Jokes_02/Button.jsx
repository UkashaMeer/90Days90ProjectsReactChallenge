export default function Button({fetchClick}) {
  return (
    <button onClick={fetchClick} className="text-md bg-black text-white py-2 px-4 cursor-pointer rounded-sm">Click To Generate More Jokes 😆</button>
  )
}
