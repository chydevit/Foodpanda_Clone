import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./page/HomePage";
import Content from "./page/Content";
import Detail from "./page/Detail";
import DownloadCard from "./page/DownloadCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HomePage />
      <Content />
      <Detail/>
      <DownloadCard/>
      <Footer />
    </>
  );
}

export default App;
