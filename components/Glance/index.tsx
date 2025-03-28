import { HashtagIcon, LinkIcon } from "@heroicons/react/24/solid"
import React from "react"
import { Link } from "react-scroll"

const Glance: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-none lg:grid-rows-3 lg:grid-flow-col gap-4 w-full">
      <Link className="group bg-pale-gray-900 flex flex-col items-end row-span-3 rounded-2xl relative overflow-hidden cursor-pointer hover:-translate-y-2 duration-500 transition-all" to="lumina" smooth spy duration={500} offset={-100}>
        <div className="relative w-full">
          <div className="absolute w-full h-full z-10 bg-green-900 group-hover:bg-opacity-50 bg-opacity-0 duration-500" />
          <img className="h-48 lg:h-96 w-full object-cover z-0 scale-105 group-hover:saturate-0 saturate-100 group-hover:scale-100 duration-500 transition-all" src="/bootcamp.jpg" />
        </div>
        <div className="flex justify-between items-center p-4 space-x-4 z-10 bg-pale-gray-900 h-full w-full">
          <div>
            <p className="text-green-400">
              Current Experience
            </p>
            <h1 className="text-pale-gray-50 font-bold">
              GoTo Financial - MSME Division
            </h1>
            <p className="text-pale-gray-500">
              Associate Software Engineer | Aug '24 - Present
            </p>
          </div>
          <div className="pr-4">
            <img className="h-8" src="/brands/goto.png" />
          </div>
        </div>
      </Link>

      <Link to="tazker-ai-2" smooth spy duration={500} className="cursor-pointer row-span-1 bg-pale-gray-900 rounded-2xl p-4 relative flex items-end hover:-translate-y-2 duration-500 transition-all">
        <div className="space-y-4">
          <img className="h-8 rounded-lg" src="/brands/lumina.png" />
          <div>
            <p className="text-green-400">
              Previous Experience
            </p>
            <h1 className="text-pale-gray-50 font-bold">
              Tazker AI (YC W22)
            </h1>
            <p className="text-pale-gray-500">
              Automation Eng. Intern | Jan '24 - Jul '24
            </p>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 text-green-500 z-10">
          <HashtagIcon className="h-4 w-4" />
        </div>
      </Link>
      <Link to="sayakaya" smooth spy duration={500} className="cursor-pointer row-span-1 bg-pale-gray-900 rounded-2xl p-4 relative flex items-end hover:-translate-y-2 duration-500 transition-all">
        <div className="space-y-4">
          <img className="h-8 rounded-lg" src="/brands/sayakaya.png" />
          <div>
            <p className="text-green-400">
              Previous Experience
            </p>
            <h1 className="text-pale-gray-50 font-bold">
              SayaKaya
            </h1>
            <p className="text-pale-gray-500">
              SE Intern | Mar '22 - Oct '22
            </p>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 text-green-500 z-10">
          <LinkIcon className="h-4 w-4" />
        </div>
      </Link>

      <a href="https://www.linkedin.com/in/adrianardizza/" target="_blank" referrerPolicy="no-referrer" className="row-span-1 bg-pale-gray-900 rounded-2xl p-4 relative flex items-end hover:-translate-y-2 duration-500 transition-all">
        <div className="space-y-4">
          <img className="h-8" src="/brands/linkedin.png" />
          <div>
            <p className="text-green-400">
              Linkedin
            </p>
            <h1 className="text-pale-gray-50 font-bold">
              in/adrianardizza
            </h1>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 text-green-500 z-10">
          <LinkIcon className="h-4 w-4" />
        </div>
      </a>
    </div>
  )
}

export default Glance
