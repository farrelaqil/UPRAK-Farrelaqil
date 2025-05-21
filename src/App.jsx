import React from 'react';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Content from './Component/Content';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
