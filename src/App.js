import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SmoothScroll from "smooth-scroll";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
