import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Image from "./components/Image";

const App = () => {
  return (
    <article className="card">
      <Image />
      <Header />
      <About />
      <Footer />
    </article>
  );
};

export default App;
