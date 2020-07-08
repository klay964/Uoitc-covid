import React from 'react';
import Navbar from '../src/Components/Navbar';
import Header from "../src/Components/Header.js"
import News from "../src/Components/News.js"
import Info from "../src/Components/Info.js"
import Contact from "../src/Components/ContactUs.js"
import Footer from "../src/Components/Footer.js"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <News />
      <Info />
      <Contact />
      <Footer />
    
    </div>
  );
}

export default App;
