import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { NavigationProvider } from './contexts/NavigationContext';

function App() {
  return (
    <NavigationProvider>
      <div className="min-h-screen bg-black">
        <Header />
        <Hero />
        <About />
        <Services />
        <Testimonials />
      </div>
    </NavigationProvider>
  );
}

export default App;