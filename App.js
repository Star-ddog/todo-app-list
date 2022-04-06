import React from 'react';
import Header from './Header'; 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Content from './Content';





function App() {
  return (
    <Router>
     <div className="App">
      <div className='container'>
        <Header/>
      </div>
      <div className='result'>
      <Content/>
        <Routes>
        <Route path="/" element={ <Home/> } />
        </Routes>
        
      </div>
    </div>
    </Router>
  );
}

export default App;
