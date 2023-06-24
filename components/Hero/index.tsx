import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid"
import React from "react"
import RotatingText from "../RotatingText"
import { Link } from "react-scroll"

const Hero = () => {
  return (
    <div id="hero" className="flex justify-between items-center min-h-screen bg-gradient-to-b from-pale-gray-900 to-pale-gray-800 relative overflow-hidden">
      <div className="w-72 h-72 absolute motion-safe:animate-[ping_2s_cubic-bezier(0,_0,_0.2,_1)_infinite] duration-500 -top-48 -left-48 border border-pale-gray-400 rounded-full" />
      <div className="w-96 h-96 absolute motion-safe:animate-[ping_2s_cubic-bezier(0,_0,_0.2,_1)_infinite] [animation-delay:_1s] duration-500 -right-72 border border-pale-gray-400 rounded-full" />
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
          <img className="w-16 motion-safe:animate-[float_4s_ease-in-out_1000ms_infinite]" src="/me-text.png" />
        </div>
      </div>
      <div className="absolute flex justify-center py-12 text-green-500 w-full bottom-0">
        <Link
          to="at-a-glance"
          smooth
          spy
          duration={400}
          offset={-100}
        >
          <button>
            <ChevronDoubleDownIcon className="w-12 h-12 motion-safe:animate-[float_4s_ease-in-out_infinite]" />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
