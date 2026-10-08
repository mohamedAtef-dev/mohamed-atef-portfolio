
import Header from "./components/1-header/Header"
import Hero from "./components/2-hero/Hero"
import Main from "./components/3-main/main"
import Contact from "./components/4-contact/contact"
import Footer from "./components/5-footer/footer"
import ScrollToTop from "./components/scrolltotop/scrolltotop"
import { ThemeProvider } from "./context/ThemeContext"



function App() {

  return (
    <ThemeProvider>
    <div id="up" className="container">
    <Header />
    <Hero />
    <div className="divider" />
    <Main /> 
    <div className="divider" />
    <Contact />
    <div className="divider" />
    <Footer /> 
    </div>
    <ScrollToTop />
    </ThemeProvider>
  )
}

export default App
