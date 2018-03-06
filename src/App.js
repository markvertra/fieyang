import React, { Component } from 'react';
import Footer from './components/footer';
import Navbar from './components/navbar';
import PageContainer from './components/pagecontainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <PageContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
