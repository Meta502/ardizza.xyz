import React from "react"

export interface TimelineItemProps {
  children: React.ReactNode
  period: string
  title: string
  id: string
  last?: boolean
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ children, title, period, id, last }) => {
  return (
    <div id={id} className="flex relative space-x-4">
      <div className="flex gap-4">
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-400 rounded-full" />
          </div>
          <div className={`w-0.5 h-full ${last ? "bg-gradient-to-b from-pale-gray-700 from-80%" : "bg-pale-gray-700"}`} />
        </div>
      </div>
      <div className="pb-4">
        <p className="text-green-400 font-light text-sm">
          {period}
        </p>
        <h1 className="text-pale-gray-50 font-bold text-xl">
          {title}
        </h1>
        <div className="text-pale-gray-50">
          <ul className="list-disc list-inside">
            {children}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TimelineItem
