import type { NextPage } from 'next'
import Timeline from '../components/Timeline'
import Hero from '../components/Hero'
import TimelineItem from '../components/Timeline/TimelineItem'
import Glance from '../components/Glance'
import Projects from '../components/Projects'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Adrian Ardizza</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </Head>
      <div className="w-full font-inter space-y-24">
        <Hero />
        <div className="bg-pale-gray-800 w-full max-w-5xl min-h-screen mx-auto space-y-2 flex flex-col gap-16">
          <div id="at-a-glance" className="space-y-6 w-full px-6 xl:px-0">
            <h1 className="font-inter text-white text-3xl font-bold">
              At A Glance.
            </h1>
            <Glance />
          </div>
          <div id="experiences" className="space-y-6 xl:px-0 px-6">
            <h1 className="font-inter text-white text-3xl font-bold">
              Work Experience.
            </h1>
            <Timeline>
              <TimelineItem id="gojek" title="GoTo Financial - Merchant Services" subtitle="Associate Software Engineer" period="Jakarta, August 2024 - Present">
                <li>
                  Currently working as a Software Engineer in GTF Merchant Services division, working on pushing the adoption of QRIS and Digital Payments to <span className="text-green-400">millions of UMKM</span> across Indonesia.
                </li>
              </TimelineItem>
              <TimelineItem id="tazker-ai-2" title="Tazker AI (YC W22)" subtitle="Automation Engineer Intern" period="Jakarta, January 2024 - July 2024">
                <li>Implement sales lead web scraping pipeline capable of acquiring data of up to <span className="text-green-400">1000+ leads per day</span> from a notable jobs platform site.</li>
                <li>Develop automated chat bot for connecting and engaging with up to <span className="text-green-400">200 potential sales lead per day</span> across multiple communication channels.</li>
                <li>Help create automated B2B CRM pipeline for processing more than <span className="text-green-400">500 potential sales leads a per day</span> from top of funnel, leads classification, up to first contact.</li>
              </TimelineItem>
              <TimelineItem id="traveloka" title="Traveloka" subtitle="Back End Engineer Intern" period="Jakarta, August 2023 - December 2023">
                <li>Initialize Flight Demand data microservice and migrate more than 20 modules owned by Flight Demand from legacy Flight data service.</li>
                <li>Migrate 40+ services used by teams across multiple teams and domains in Traveloka to use the new Flight Demand data service in only 4 months.</li>
                <li>Develop an automated service migration script that reduced Flight Demand data service migration times by more than 50%.</li>
                <li>Migrate 3 services owned by Flight Demand to their own dedicated repositories.</li>
              </TimelineItem>
              <TimelineItem id="tazker-ai" title="Tazker AI (YC W22)" subtitle="Software Engineer Intern" period="Jakarta, March 2023 - August 2023">
                <li>
                  Develop automation scripts for processing duplicates in over <span className="text-green-400">10,000 rows</span> of Google Sheets data, allowing for efficient data pipeline.
                </li>
                <li>
                  Develop scraping workflow able to scrape over <span className="text-green-400">2,000 companies</span> per hour, allowing for leads enrichment at scale.
                </li>
                <li>
                  Help develop <span className="text-green-400">GPT-based</span> message generation workflow, generating engaging opening messages targeted at potential customers.
                </li>
                <li>
                  Write <span className="text-green-400">technical content</span> for company blog covering a variety of topics such as Artificial Intelligence, Machine Learning, and Generative AI.
                </li>
              </TimelineItem>
              <TimelineItem id="lumina" title="Lumina (YC W22)" subtitle="Software Engineer Intern" period="Jakarta, December 2022 - August 2023">
                <li>
                  Built Worker Certification feature, allowing <span className="text-green-400">10,000 daily active users</span> to upload and verify their certificates.
                </li>
                <li>
                  Optimized mobile home content API, improving response times by <span className="text-green-400">up to 80%</span> and preventing backend thrashing in high loads.
                </li>
                <li>
                  Involved in internal on-call engineer rotation, resolving active production issues within <span className="text-green-400">15-30 minutes</span>.
                </li>
                <li>
                  Became mobile app release manager for <span className="text-green-400">3+ app releases</span>, keeping track of work done by <span className="text-green-400">10+ team members</span>.
                </li>
              </TimelineItem>
              <TimelineItem id="sayakaya" subtitle="Backend Engineer Intern" title="SayaKaya" period="Jakarta, March 2022 - October 2022">
                <li>
                  Initialise and develop high-performance payment service based on Rust used by over <span className="text-green-400">20,000 users</span>.
                </li>
                <li>
                  Developed interactive dashboard enhancing internal sales process by retrieving data from multiple services. The dashboard helped sales agents manage their <span className="text-green-400">valuable customer and institution funds</span>.
                </li>
                <li>
                  Impact: Created a highly scalable payment gateway allowing for <span className="text-green-400">multiple payment methods and transaction validation</span>.
                </li>
              </TimelineItem>
            </Timeline>
          </div>
          <div id="projects" className="space-y-6 px-6 lg:px-0">
            <h1 className="font-inter text-white text-3xl font-bold">
              My Projects.
            </h1>
            <Projects />
          </div>
        </div>

        <div id="contact-me" className="space-y-6 flex space-x-4 h-full items-center justify-center bg-gradient-to-b from-pale-gray-900 to-pale-gray-900 py-16 px-6 lg:px-0">
          <div className="w-full flex flex-col lg:flex-row max-w-5xl mx-auto lg:space-x-6">
            <div className="space-y-2 mb-8 lg:mb-0">
              <h1 className="font-inter text-white text-3xl font-bold">
                Lets Get In Touch.
              </h1>
              <p className="text-pale-gray-200">
                Feel free to contact me through one of the following platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 lg:w-full">
              <a href="mailto:me@ardizza.xyz" target="_blank" referrerPolicy="no-referrer" className="w-full space-y-4 border-l-2 pl-4 border-l-green-400 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-pale-gray-50 text-lg">me@ardizza.xyz</p>
                    <h1 className="text-sm text-green-400">Email</h1>
                  </div>
                  <EnvelopeIcon className="w-8 text-pale-gray-50" />
                </div>
              </a>

              <a href="https://github.com/Meta502" target="_blank" referrerPolicy="no-referrer" className="w-full space-y-4 border-l-2 pl-4 border-l-green-400">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-pale-gray-50 text-lg">Meta502</p>
                    <h1 className="text-sm text-green-400">GitHub</h1>
                  </div>
                  <img src="/brands/github-mark-white.svg" className="w-8" />
                </div>
              </a>

              <a target="_blank" referrerPolicy="no-referrer" href="https://twitter.com/adrianardizza" className="w-full space-y-4 border-l-2 pl-4 border-l-green-400">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-pale-gray-50 text-lg">@adrianardizza</p>
                    <h1 className="text-sm text-green-400">Twitter</h1>
                  </div>
                  <img src="/brands/twitter.svg" className="w-8" />
                </div>
              </a>

              <a target="_blank" referrerPolicy="no-referrer" href="https://linkedin.com/in/adrianardizza" className="w-full space-y-4 border-l-2 pl-4 border-l-green-400">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-pale-gray-50 text-lg">adrianardizza</p>
                    <h1 className="text-sm text-green-400">Linkedin</h1>
                  </div>
                  <img src="/brands/linkedin.png" className="w-8" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
