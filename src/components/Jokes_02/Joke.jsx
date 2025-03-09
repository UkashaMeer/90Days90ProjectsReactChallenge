import {useState} from 'react';
import Button from './Button';
export default function Joke() {
  const [joke, setJoke] = useState('');
  const [jokeCategory, setJokeCategory] = useState('');
  const [fetcherr, setFetchErr] = useState('');

  const fetchApi = () => {
    fetch('https://sv443.net/jokeapi/v2/joke/Programming?type=single')
    .then((res) => res.json()).then((data) => {setJoke(data.joke); setJokeCategory(data.category)})
    .catch((err) => setFetchErr(`Error in Fetching Jokes: ${err}`))
  }

  return (
    <main className='flex items-center justify-center w-full min-h-[100vh] h-full bg-gray-300 p-4'>
      <div className='flex flex-col bg-white rounded-sm shadow-sm max-w-[400px] w-full p-4 text-center gap-2'>
        <p className='text-lg font-medium mb-4'>{joke || 'Click below for a joke! 😆'}</p>
        <span>{fetcherr}</span>
        <span>Joke Category: <strong>{jokeCategory}</strong></span>
        <Button fetchClick={fetchApi} />
      </div>
    </main>
  )
}
