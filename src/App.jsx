import Nav from './components/Nav';
import Hero from './components/Hero';
import LatestVideo from './components/LatestVideo';
import OptIn from './components/OptIn';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LatestVideo />
        <OptIn />
        <About />
      </main>
      <Footer />
    </>
  );
}
