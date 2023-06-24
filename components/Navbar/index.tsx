import React from "react"
import { useScroll } from "../../hooks/useScroll"
import { Link } from "react-scroll"

const Navbar: React.FC = () => {
  const scroll = useScroll()

  return <div className={`fixed w-full z-20 top-0 transition-all duration-300 ${scroll > 0 && "bg-pale-gray-900"}`}>
    <div className="mx-auto max-w-5xl w-full py-4 flex items-center justify-between">
      <Link
        to="hero"
        spy={true}
        smooth={true}
        duration={250}
      >
        <img className="w-8 h-8 cursor-pointer" src="/logo.png" />
      </Link>
      <div className="flex gap-6 text-pale-gray-100">
        <Link
          to="at-a-glance"
          spy
          smooth
          duration={400}
          offset={-100}

          activeClass="text-green-400"
          className="cursor-pointer hover:text-green-400 transition-all"
        >
          at a glance
        </Link>
        <Link
          activeClass="text-green-400"
          className="cursor-pointer hover:text-green-400 transition-all"
          to="experiences"
          spy={true}
          smooth={true}
          duration={250}
          offset={-100}
        >
          experiences
        </Link>
      </div>
    </div>
  </div>
}

export default Navbar
