import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

import Navbar from '../components/Navbar'

const ScrollProvider = dynamic(() => import("../hooks/useScroll"), {
  ssr: false,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollProvider>
      <div className="bg-pale-gray-800">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ScrollProvider>
  )
}

export default MyApp
