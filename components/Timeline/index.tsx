import React from "react"

const Timeline: React.FC = () => {
  return (
    <div className="flex flex-col font-inter">
      <div className="flex relative space-x-4">
        <div className="flex gap-4">
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-400 rounded-full" />
            </div>
            <div className="w-0.5 h-full bg-pale-gray-700" />
          </div>
        </div>
        <div className="pb-4">
          <p className="text-green-400 font-light text-sm">
            Jakarta, March 2023 - June 2023
          </p>
          <h1 className="text-pale-gray-50 font-bold text-xl">
            Tazker AI
          </h1>
          <div className="text-pale-gray-50">
            <ul className="list-disc list-inside">
              <li>
                Develop automation for processing duplicates in over <span className="text-green-400">10,000 rows</span> of Google Sheets data, allowing for efficient data pipeline.
              </li>
              <li>
                Create scraping workflow able to scrape over <span className="text-green-400">2,000 companies</span> per hour, allowing for leads enrichment at scale.
              </li>
              <li>
                Help develop <span className="text-green-400">GPT-based</span> message generation workflow, generating engaging opening messages targeted at potential customers.
              </li>
              <li>
                Write <span className="text-green-400">technical content</span> for company blog covering a variety of topics such as Artificial Intelligence, Machine Learning, and Generative AI.
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="flex relative space-x-4">
        <div className="flex gap-4">
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-400 rounded-full" />
            </div>
            <div className="w-0.5 h-full bg-pale-gray-700" />
          </div>
        </div>
        <div>
          <p className="text-green-400 font-light text-sm">
            Jakarta, March 2023 - June 2023
          </p>
          <h1 className="text-pale-gray-50 font-bold text-xl">
            Tazker AI
          </h1>
          <div className="text-pale-gray-50">
            <ul className="list-disc list-inside">
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
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Timeline
