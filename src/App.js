import React from 'react';
import './App.css';
import Main from './components/Main';
import Container from "./components/Container";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Container>   
        <Header />  
        <Main />
      </Container> 
    </div>
  );
}

export default App;
