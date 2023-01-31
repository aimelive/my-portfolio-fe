import Blogs from "./components/layouts/Blogs";
import Contacts from "./components/layouts/Contacts";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Projects from "./components/layouts/Projects";
import Services from "./components/layouts/Services";
import Testimonials from "./components/layouts/Testimonials";
import Welcome from "./components/layouts/Welcome";

function App() {
  return (
    <div className="App font-default">
      <Header />
      <Welcome />
      <Services />
      {/* <Blogs />
      <Projects /> */}
      <Testimonials />
      {/* <Contacts /> */}
      <Footer />
    </div>
  );
}

export default App;
