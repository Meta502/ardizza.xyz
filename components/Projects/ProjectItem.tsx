import React from "react"

export interface ProjectItemProps {
  title: string
  description: string
  tags: string[]
  href?: string
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, tags, href }) => {
  return (
    <div className="group bg-pale-gray-900 flex flex-col items-end rounded-2xl relative overflow-hidden cursor-pointer hover:-translate-y-2 duration-500 transition-all">
      <a href={href} target="_blank" referrerPolicy="no-referrer" className="flex flex-col justify-between p-4 space-y-4 z-10 bg-pale-gray-900 h-full w-full">
        <div className="space-y-4">
          <h1 className="text-pale-gray-50 font-bold">
            {title}
          </h1>
          <p className="text-pale-gray-50">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2 max-w-[90%] flex-wrap">
            {tags.map(item => (
              <div className="border-2 border-green-500 rounded-full text-pale-gray-50 text-xs py-0.5 px-2">
                {item}
              </div>
            ))}
          </div>
          {href && (
            <div>
              <img className="h-6" src="/brands/github-mark-white.svg" />
            </div>
          )}
        </div>
      </a>
    </div>
  )
}

export default ProjectItem

