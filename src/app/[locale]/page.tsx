import Hero from '../components/Hero'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <HowItWorks />
      <Contact />
      <Footer color="#04243D" />
    </div>
  );
}
