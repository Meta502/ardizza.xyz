import React from "react"
import ProjectItem from "./ProjectItem"

const Projects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
      <ProjectItem
        title="Memetcoin"
        description="Full blockchain implementation showing proof-of-work mechanism. Built using Express and NodeJS UDP library."
        tags={["NodeJS", "Express", "React"]}
        href="https://github.com/Meta502/memetcoin"
      />
      <ProjectItem
        title="Suiwallet"
        description="E-Wallet payment simulator with asynchronous processing and real-time notifications."
        tags={["Redis", "RabbitMQ", "WebSocket"]}
        href="https://github.com/Meta502/suiwallet-be"
      />
      <ProjectItem
        title="Kroniify"
        description="Automated cron-as-a-service for sending HTTP webhooks asynchronously."
        tags={["Django", "Redis", "RabbitMQ"]}
        href="https://github.com/Meta502/kroniify"
      />
      <ProjectItem
        title="Terminal Video Player"
        description="Terminal video player built on Go with the ability to play mp4 videos with audio."
        tags={["Go"]}
        href="https://github.com/Meta502/go-termvid"
      />
      <ProjectItem
        title="PBP Course Website"
        description="Platform Based Development course website built using Docusaurus with custom React code components."
        tags={["React", "Docusaurus"]}
        href="https://github.com/pbp-fasilkom-ui/ganjil-2023"
      />
      <ProjectItem
        title="COMPFEST 13 Playground"
        description="COMPFEST 13's interactive digital event experience built on a custom fork of Mozilla Hubs."
        tags={["React", "A-Frame", "three.js",]}
      />
    </div>
  )
}

export default Projects
