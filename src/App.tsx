import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Services from "./layouts/Services";
import Testimonials from "./layouts/Testimonials";
import Welcome from "./layouts/Welcome";

function App() {
  return (
    <div className="App font-default">
      <Header />
      <Welcome />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
