import Image from "next/image";
import Banner from "./components/Banner";
import About from "./components/About";
import DAASTypes from "./components/DAASTypes";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <DAASTypes />
    </main>
  );
}
