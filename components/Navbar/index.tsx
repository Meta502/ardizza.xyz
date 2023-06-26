import React from "react"
import { useScroll } from "../../hooks/useScroll"
import { Link } from "react-scroll"

const Navbar: React.FC = () => {
  const scroll = useScroll()

  return <div className={`fixed w-full z-20 top-0 transition-all duration-300 ${scroll > 0 && "bg-pale-gray-900"}`}>
    <div className="mx-auto px-6 lg:px-0 max-w-5xl w-full py-4 flex items-center justify-between">
      <Link
        to="hero"
        spy={true}
        smooth={true}
        duration={250}
      >
        <img className="w-8 h-8 cursor-pointer" src="/logo.png" />
      </Link>
      <div className="gap-6 text-pale-gray-100 hidden lg:flex">
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
        <Link
          activeClass="text-green-400"
          className="cursor-pointer hover:text-green-400 transition-all"
          to="projects"
          spy={true}
          smooth={true}
          duration={250}
          offset={-100}
        >
          projects
        </Link>
        <Link
          activeClass="text-green-400"
          className="cursor-pointer hover:text-green-400 transition-all"
          to="contact-me"
          spy={true}
          smooth={true}
          duration={250}
          offset={-100}
        >
          contact me
        </Link>
      </div>
    </div>
  </div>
}

export default Navbar
