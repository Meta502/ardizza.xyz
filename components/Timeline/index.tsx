import React, { Children, cloneElement, isValidElement } from "react"

const Timeline: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const numberOfChildren = Children.count(children)
  return (
    <div className="flex flex-col font-inter">
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return
        return cloneElement<any>(child, { last: index === numberOfChildren - 1 })
      })}
    </div>
  )
}

export default Timeline
