import '@/styles/globals.css'
import Providers from '@/components/Providers'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function App({ Component, pageProps }) {
  return ( 
    <Providers >
      <Navbar/>
      <Component {...pageProps} />
    </Providers> 
  )
}
