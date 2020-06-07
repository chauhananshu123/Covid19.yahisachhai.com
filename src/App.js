import React,{useReducer} from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import District from './Components/District';
import {StateContext} from './Context/StateContext';
import reducer from './Context/reducer';

const NOTFOUND = ()=>{
  return (

    <h1 className="err"> 404 Error !</h1>
  )
}

function App() {
  const [StateView, dispatch]  = useReducer(reducer,[])
 
  return (
    <>
    <Router>
      <StateContext.Provider value={{StateView,dispatch}}  >
    <Header/>
    
    <Switch>
      <Route exact path="/" component={Hero} />
      <Route path="/distric/:dist" component={District}/>
      <Route path="*"  component={NOTFOUND} />
    </Switch>

    <Footer/>
    </StateContext.Provider>
    </Router>
    </>
  );
}

export default App;
