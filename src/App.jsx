import './App.css'
import Footer from './components/layout/Footer'

import Header from './components/layout/Header'
import SectionCards from './components/layout/SectionCards'
import SectionImages from './components/layout/SectionImages'
import SectionTestimonials from './components/layout/SectionTestimonials'


function App() {
  return (
    <main className='mainContainer'>
      <Header />

      <SectionCards />

      <SectionTestimonials />

      <SectionImages />

      <Footer />
    </main>
  )
}

export default App
