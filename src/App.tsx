import React from 'react';
import './App.css';
import Router from './routes/Router';
import Navigation from './components/Navigation/Navigation';
import Navbar from './components/Navbar/Narbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <section>
      <Navbar />
      <Router/>
      <Footer />
    </section>
  );
}

export default App;

