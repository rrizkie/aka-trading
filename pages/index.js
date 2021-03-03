import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero.js";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto dark:bg-gray-900">
      <Nav title="AKA Trading Indo"></Nav>

      <Hero />

      <Footer />
    </div>
  );
}
