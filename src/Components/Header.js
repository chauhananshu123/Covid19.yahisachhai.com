import React,{useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
import  reactGa from 'react-ga';
import {StateContext} from '../Context/StateContext';
import {Remove} from '../Context/actio.type';


const Header = () => {
    const [time, SetTime] = useState( new Date().toLocaleString());
    const {StateView, dispatch}  = useContext(StateContext);
   
   
   useEffect(()=>{
       reactGa.initialize("UA-164810903-1");

     //  reactGa.pageview('/');
         reactGa.pageview(window.location.pathname + window.location.search);

   },[]);
   const RemoveState = ()=>{
        dispatch({
            type : Remove,
            payload : ""
        })
   }

    return (
        <div className="row">
      
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <Link to="/" className="navbar-brand" onClick={RemoveState}>COVID-19-INDIA</Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link active" onClick={RemoveState}>Home</Link>
                        <a href="#" className="nav-item nav-link " > {time} </a>
                        <a href="#" className="nav-item nav-link " id="StateValue" > { StateView.length === 0 ? "" :
                         StateView.map((value,i)=>(
                             value.Maindata
                         ))
                         } </a>
                    </div>
                   
                </div>
            </nav>
   
        </div>
    )
}

export default Header;