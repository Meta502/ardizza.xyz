import type { NextPage } from 'next'
import Timeline from '../components/Timeline'
import RotatingText from '../components/RotatingText'
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid"

const Home: NextPage = () => {
  return (
    <div className="w-full font-inter">
      <div className="flex justify-between items-center min-h-screen bg-pale-gray-800 relative overflow-hidden">
        <div className="w-72 h-72 absolute motion-safe:animate-[ping_2s_cubic-bezier(0,_0,_0.2,_1)_infinite] duration-500 -top-48 -left-48 border border-pale-gray-400 rounded-full" />
        <div className="w-96 h-96 absolute motion-safe:animate-[ping_2s_cubic-bezier(0,_0,_0.2,_1)_infinite] [animation-delay:_1s] duration-500 -bottom-48 -right-48 border border-pale-gray-400 rounded-full" />
        <div className="flex justify-between items-center mx-auto max-w-5xl w-full">
          <div className="w-3/5 space-y-4">
            <p className="text-2xl text-green-400">Hi, I'm</p>
            <h1 className="font-bold text-5xl text-pale-gray-100">
              Adrian Ardizza
            </h1>
            <div className="flex text-4xl text-pale-gray-100 space-x-2">
              <p>I'm a</p>
              <RotatingText />
            </div>
            <div className="text-pale-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non interdum erat. Quisque in tincidunt erat.
            </div>
            <button className="flex items-center gap-2 border-2 text-green-400 hover:text-pale-gray-800 border-green-400 duration-250 ease-in-out transition-all hover:bg-green-400 font-medium px-4 py-2">
              <span>Check Out My Work</span>
              <ChevronDoubleDownIcon className="h-4" />
            </button>
          </div>
          <div className="relative">
            <div className="relative">
              <div className="w-full h-full absolute bg-green-400 bg-opacity-[0.1] z-10 rounded-full" />
              <img src="/image.png" className="w-80 rounded-full saturate-0 brightness-100" />
            </div>
            <img className="w-16 translate-x-4 -translate-y-4" src="/me-text.png" />
          </div>
        </div>
      </div>
      <div className="bg-pale-gray-800 w-full max-w-5xl mx-auto min-h-screen space-y-2 flex flex-col gap-16">
        <div className="space-y-4">
          <h1 className="font-inter text-white text-2xl font-bold">
            Work Experience
          </h1>
          <Timeline />
        </div>
      </div>
    </div>
  )
}

export default Home
