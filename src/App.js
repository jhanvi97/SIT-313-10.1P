import React from 'react';
import './App.css';
import SubscribeForm from './SubscribeForm';
import Footer from './Footer';
import Cardlist from './Cardlist';
import Tutoriallist from './Tutoriallist';
import Component from './Component';


function App() {
  return (
    <div className="App">
      <SubscribeForm />
      <Component />
      <Cardlist />
      <Tutoriallist />
      <Footer />
    
    </div>
  );
}

export default App;
