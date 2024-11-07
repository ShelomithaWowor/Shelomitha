import Header from "./component/Header"
import Hero from "./component/Hero"
import Clients from "./component/Clients"
import Features from "./component/Features"
import Pricing from "./component/Pricing"
import Footer from "./component/Footer"

const App = () => {
  return (
    <div className="body-wrap">
      <Header />
  <main className="site-content">
    <Hero />
    <Clients />
    <Features />
    <Pricing />
  </main>
  <Footer />
</div>

  );
}

export default App;
