import React from "react"
import { AnimatePresence, motion } from "framer-motion"

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Computer Science Student",
]

const RotatingText: React.FC = () => {
  const [roleIndex, setRoleIndex] = React.useState(0)
  const role = roles[roleIndex]

  React.useEffect(() => {
    const changeTimer = setInterval(() => {
      setRoleIndex((roleIndex + 1) % roles.length)
    }, 3000)

    return () => clearInterval(changeTimer)
  }, [roleIndex])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={role}
        className="font-inter text-4xl text-green-400 flex space-x-2 relative"
      >
        {role.split(" ").map((item, index) => (
          <motion.p
            key={`${role}-${index}`}
            initial={{
              rotateX: 90,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              delay: (index + 1) * 0.2
            }}
            animate={{
              rotateX: 0,
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              rotateX: -90,
            }}
          >
            {item}
          </motion.p>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}

export default RotatingText
